// assets/app.js (FINAL)
const API_URL = "https://script.google.com/macros/s/AKfycbyYrlS2KNKfACmTuOHhhOvSaYK-QM5M7CFqfDFZ8dgzl8Lrr-i9pSv2yxSCQL5Zrjak/exec";

async function apiCall(payload){
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  });
  return await res.json();
}

// Minimal i18n helpers (if your report page calls them)
function showStatus(el, type, msg){
  if(!el) return;
  el.className = "status show " + (type || "");
  el.textContent = msg || "";
}

// Simple dictionary to avoid errors if your pages call t()
const __dict = {
  ar: {
    badId: "❌ رقم جامعي غير صحيح",
    loading: "⏳ جاري التحميل...",
    failed: "فشل الطلب"
  },
  en: {
    badId: "❌ Invalid ID",
    loading: "⏳ Loading...",
    failed: "Request failed"
  }
};
let __lang = "ar";
function t(k){ return (__dict[__lang] && __dict[__lang][k]) ? __dict[__lang][k] : k; }
function applyLang(){ /* optional */ }
function toggleLang(){ __lang = (__lang === "ar" ? "en" : "ar"); }
