/***********************
 * assets/app.js
 * - Central API_URL
 * - NO custom headers (avoids CORS preflight)
 * - Stores Doctor PIN in sessionStorage
 ***********************/

// ✅ ضع رابط الـ Apps Script Web App هنا (لازم ينتهي بـ /exec)
const API_URL = "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec";

// Session keys
const SS_DOCTOR_KEY = "HATHER_DOCTOR_PIN";

// ---------- API ----------
async function apiCall(payload) {
  if (!API_URL || API_URL.includes("PASTE_YOUR_WEB_APP_EXEC_URL_HERE")) {
    throw new Error("API_URL غير مضبوط في assets/app.js");
  }

  let res, text = "";
  try {
    res = await fetch(API_URL, {
      method: "POST",
      // لا تضف headers
      body: JSON.stringify(payload || {})
    });
  } catch (e) {
    throw new Error("فشل الاتصال بالـ API (شبكة/CORS): " + (e?.message || e));
  }

  try {
    text = await res.text();
  } catch (e) {
    throw new Error(`تعذر قراءة الرد (HTTP ${res?.status || "?"})`);
  }

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}\n${text.slice(0, 250)}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("الرد ليس JSON صالح:\n" + text.slice(0, 250));
  }
}

async function apiHealth() {
  if (!API_URL || API_URL.includes("PASTE_YOUR_WEB_APP_EXEC_URL_HERE")) {
    throw new Error("API_URL غير مضبوط في assets/app.js");
  }

  let res, text = "";
  try {
    res = await fetch(API_URL + "?action=health");
    text = await res.text();
  } catch (e) {
    throw new Error("فشل الاتصال (Health): " + (e?.message || e));
  }

  if (!res.ok) throw new Error(`Health HTTP ${res.status}\n${text.slice(0, 250)}`);
  try { return JSON.parse(text); } catch { return { ok:false, raw:text }; }
}

// ---------- Doctor PIN helpers ----------
function setDoctorKey(pin) {
  sessionStorage.setItem(SS_DOCTOR_KEY, String(pin || "").trim());
}
function getDoctorKey() {
  return String(sessionStorage.getItem(SS_DOCTOR_KEY) || "").trim();
}
function clearDoctorKey() {
  sessionStorage.removeItem(SS_DOCTOR_KEY);
}

/**
 * Wrap doctor requests by injecting doctorKey automatically.
 */
async function doctorCall(payload) {
  const pin = getDoctorKey();
  if (!pin) throw new Error("لم يتم تسجيل دخول الدكتور (PIN مفقود).");
  return await apiCall({ ...(payload || {}), doctorKey: pin });
}
