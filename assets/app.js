/****************************
 * Hather Frontend App (assets/app.js)
 * - API URL here (ONE place)
 * - Student + Doctor helpers
 * - Health ping
 * - UI helpers
 * - Language support for backend messages
 ****************************/

// ✅ ضع رابط الـ Apps Script Web App هنا فقط
const API_URL = "https://script.google.com/macros/s/AKfycbzOvQNQSDRwiNqr04MEOcp0Hmkywc651SZYqpo3a-T2cx47EmLIp02TLUgf19oC8u04/exec";

// Storage keys
const LS_DOCTOR_KEY = "hather_doctor_key";

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
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (_) {
      return { ok: false, error: "Bad JSON: " + text };
    }
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// Student calls (no doctorKey required) - with language
async function studentCall(payload) {
  const lang = localStorage.getItem('HATHER_LANG') || 'ar';
  return await apiCall({ ...payload, lang: lang });
}

// Doctor calls (adds doctorKey) - with language
async function doctorCall(payload) {
  const pin = getDoctorKey();
  const lang = localStorage.getItem('HATHER_LANG') || 'ar';
  return await apiCall({ ...payload, doctorKey: pin, lang: lang });
}

// Health ping
async function apiHealth() {
  try {
    const r = await fetch(API_URL + "?action=health");
    const text = await r.text();
    try {
      return JSON.parse(text);
    } catch (_) {
      return { ok: false, error: text };
    }
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// ===================== UI Helpers =====================
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

// ===================== Expose globals =====================
window.API_URL = API_URL;

window.setDoctorKey = setDoctorKey;
window.getDoctorKey = getDoctorKey;
window.clearDoctorKey = clearDoctorKey;

window.apiCall = apiCall;
window.studentCall = studentCall;
window.doctorCall = doctorCall;
window.apiHealth = apiHealth;

window.showStatus = showStatus;
window.hideStatus = hideStatus;
