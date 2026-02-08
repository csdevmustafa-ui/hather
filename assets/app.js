/* assets/app.js
   Hather Frontend Helpers + API Connector
   IMPORTANT: Update API_URL here فقط، والباقي صفحاتك تشتغل تلقائياً
*/

const API_URL = "https://script.google.com/macros/s/AKfycbzmdwzxAGbBOygkFNibWn1xYbhL2_sq6IUKUvJ_CyknOErqnMJErdfcfyJXmrPv5VY/exec";

// ---------- i18n (خفيف وبسيط) ----------
let LANG = localStorage.getItem("hather_lang") || "ar";

const DICT = {
  ar: {
    loading: "جاري التحميل...",
    failed: "فشل الطلب",
    badId: "الرقم الجامعي غير صحيح",
  },
  en: {
    loading: "Loading...",
    failed: "Request failed",
    badId: "Invalid Student ID",
  }
};

function t(key){
  const d = DICT[LANG] || DICT.ar;
  return d[key] || (DICT.ar[key] || key);
}

function applyLang(){
  // اختياري: إذا عندك عناصر data-i18n في صفحاتك
  try{
    document.documentElement.lang = LANG;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      const v = (DICT[LANG] && DICT[LANG][k]) || (DICT.ar[k]) || null;
      if(v) el.textContent = v;
    });
  }catch(e){}
}

function toggleLang(){
  LANG = (LANG === "ar") ? "en" : "ar";
  localStorage.setItem("hather_lang", LANG);
  applyLang();
}

// ---------- UI helpers ----------
function showStatus(el, type, msg){
  if(!el) return;
  el.className = "status";
  el.style.display = "block";

  // دعم كلا النظامين: success/danger/warn أو ok/bad/warn
  if(type === "success") type = "ok";
  if(type === "danger") type = "bad";

  el.className = "status show " + (type || "");
  el.textContent = msg || "";
}

function setLoading(btn, spinnerEl, on){
  try{
    if(btn) btn.disabled = !!on;
    if(spinnerEl) spinnerEl.style.display = on ? "inline-block" : "none";
  }catch(e){}
}

// ---------- API Call ----------
async function apiCall(payload){
  // نرسل POST بدون هيدرز عشان نتجنب CORS preflight في بعض الحالات
  const body = JSON.stringify(payload || {});

  // 1) جرّب POST
  try{
    const res = await fetch(API_URL, { method: "POST", body });
    const txt = await res.text();
    try { return JSON.parse(txt); } catch(e){ return { ok:false, error:"Non-JSON response", raw:txt }; }
  }catch(e1){
    // 2) fallback GET (بعض إعدادات GAS ترفض POST حسب النشر)
    try{
      const u = API_URL + "?payload=" + encodeURIComponent(body);
      const res2 = await fetch(u, { method:"GET" });
      const txt2 = await res2.text();
      try { return JSON.parse(txt2); } catch(e){ return { ok:false, error:"Non-JSON response", raw:txt2 }; }
    }catch(e2){
      return { ok:false, error:"Network/API connection failed" };
    }
  }
}
