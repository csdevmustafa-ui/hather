/****************************
 * Hather Frontend App (assets/app.js)
 * - API URL here (ONE place)
 * - Global functions (fix buttons not working)
 * - Student + Doctor helpers
 * - Language preference (localStorage)
 ****************************/

// ✅ ضع رابط الـ Apps Script Web App هنا فقط
const API_URL = "https://script.google.com/macros/s/AKfycbzOvQNQSDRwiNqr04MEOcp0Hmkywc651SZYqpo3a-T2cx47EmLIp02TLUgf19oC8u04/exec";

// Storage keys
const LS_LANG = "hather_lang";
const LS_DOCTOR_KEY = "hather_doctor_key";

// ===================== Language =====================
function getLang() {
  return localStorage.getItem(LS_LANG) || "ar";
}
function setLang(lang) {
  localStorage.setItem(LS_LANG, (lang === "en" ? "en" : "ar"));
}
function toggleLang() {
  const next = getLang() === "ar" ? "en" : "ar";
  setLang(next);
  applyLang();
}

// Simple dictionary (تقدر توسّعها لاحقًا)
const I18N = {
  ar: {
    studentTitle: "قسم الطالب",
    studentSub: "تسجيل الحضور بالكود أو QR",
    reportsTitle: "تقارير الطالب",
    reportsSub: "عرض الحضور والغياب والتأخير",
    back: "رجوع",
    checkin: "تسجيل الحضور",
    startCam: "فتح الكاميرا",
    stopCam: "إيقاف",
    showReport: "عرض التقرير",
    loading: "جاري التحميل...",
    failed: "تعذر تنفيذ الطلب",
    badId: "الرقم الجامعي يجب أن يكون 9 أرقام"
  },
  en: {
    studentTitle: "Student",
    studentSub: "Check-in by code or QR",
    reportsTitle: "Student Reports",
    reportsSub: "View attendance summary",
    back: "Back",
    checkin: "Check-in",
    startCam: "Start Camera",
    stopCam: "Stop",
    showReport: "Load Report",
    loading: "Loading...",
    failed: "Request failed",
    badId: "Student ID must be 9 digits"
  }
};

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : key;
}

function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // translate elements that have data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

// ===================== Doctor Key =====================
function setDoctorKey(pin) {
  localStorage.setItem(LS_DOCTOR_KEY, String(pin || "").trim());
}
function getDoctorKey() {
  return localStorage.getItem(LS_DOCTOR_KEY) || "";
}
function clearDoctorKey() {
  localStorage.removeItem(LS_DOCTOR_KEY);
}

// ===================== API =====================
async function apiCall(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "text/plain;charset=utf-8" } // مهم مع Apps Script
  });

  // أحياناً Apps Script يرجّع نص
  const text = await res.text();
  try { return JSON.parse(text); } catch (_) { return { ok: false, error: "Bad JSON: " + text }; }
}

// Student calls (no doctorKey required)
async function studentCall(payload) {
  return await apiCall(payload);
}

// Doctor calls (adds doctorKey)
async function doctorCall(payload) {
  const pin = getDoctorKey();
  return await apiCall({ ...payload, doctorKey: pin });
}

// Health ping
async function apiHealth() {
  const r = await fetch(API_URL + "?action=health");
  const text = await r.text();
  try { return JSON.parse(text); } catch (_) { return { ok: false, error: text }; }
}

// ===================== UI Helpers (optional) =====================
function showStatus(el, type, msg) {
  if (!el) return;
  el.className = "status show " + (type || "");
  el.textContent = msg || "";
}
function hideStatus(el) {
  if (!el) return;
  el.className = "status";
  el.textContent = "";
}

// ===================== Expose globals (FIX buttons not working) =====================
window.API_URL = API_URL;

window.getLang = getLang;
window.setLang = setLang;
window.toggleLang = toggleLang;
window.applyLang = applyLang;
window.t = t;

window.setDoctorKey = setDoctorKey;
window.getDoctorKey = getDoctorKey;
window.clearDoctorKey = clearDoctorKey;

window.apiCall = apiCall;
window.studentCall = studentCall;
window.doctorCall = doctorCall;
window.apiHealth = apiHealth;

window.showStatus = showStatus;
window.hideStatus = hideStatus;
