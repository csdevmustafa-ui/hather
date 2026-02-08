const API_URL = "https://script.google.com/macros/s/AKfycbxta1p2m8Kh7M0mpjNqaSEVZq3uHVd-Bg9fzmxMvrrGgD7Spc4piPFverwvzfjOYkS7/exec"; // ضع رابط Web App /exec هنا

const $ = (id)=>document.getElementById(id);

function showStatus(el, type, msg){
  if(!el) return;
  el.style.display = "block";
  el.className = "status show " + (type||"");
  el.textContent = msg || "";
}

function hideStatus(el){
  if(!el) return;
  el.style.display = "none";
  el.className = "status";
  el.textContent = "";
}

async function apiCall(payload){
  try{
    const res = await fetch(API_URL, { method:"POST", body: JSON.stringify(payload||{}) });
    const txt = await res.text();
    try{
      return JSON.parse(txt);
    }catch(e){
      return { ok:false, error:"API returned non-JSON (wrong deploy URL / access)", raw: txt.slice(0,250) };
    }
  }catch(e){
    return { ok:false, error:"Failed to reach API (wrong URL / deploy not public / network)" };
  }
}

function parseQRorCode(txt){
  const t = (txt||"").trim();
  if(!t) return { code:"", lectureId:"" };
  try{
    const obj = JSON.parse(t);
    if(obj && obj.code){
      return { code: String(obj.code||"").trim(), lectureId: String(obj.lectureId||"").trim() };
    }
  }catch(e){}
  return { code:t, lectureId:"" };
}

function fmtTime(val){
  if(!val) return "";
  const s = String(val);

  // Apps Script Date غالبًا يجي ISO أو نص
  if(/^\d{4}-\d{2}-\d{2}T/.test(s)){
    const d = new Date(s);
    if(!isNaN(d.getTime())){
      return d.toLocaleString("ar-SA", { timeZone:"Asia/Riyadh" });
    }
  }

  // لو كان Date object (في بعض المتصفحات)
  if(Object.prototype.toString.call(val) === "[object Date]"){
    return val.toLocaleString("ar-SA", { timeZone:"Asia/Riyadh" });
  }

  return s;
}
