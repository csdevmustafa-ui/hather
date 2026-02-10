/***********************
 * Hather Frontend API Helper (assets/app.js)
 * - Central place for API_URL
 * - Better error messages (shows HTTP status/body)
 * - Safe JSON parsing
 ***********************/

// ✅ ضع رابط Google Apps Script Web App هنا (الـ /exec)
const API_URL = "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec";

// تقدر تستخدمها في كل الصفحات
async function apiCall(payload) {
  if (!API_URL || API_URL.includes("PUT_YOUR_WEBAPP_EXEC_URL_HERE")) {
    throw new Error("API_URL غير مضبوط في assets/app.js");
  }

  let resp;
  try {
    resp = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload || {})
    });
  } catch (networkErr) {
    // هذا يعني ما فيه اتصال أصلاً / DNS / CORS / حجب
    throw new Error("فشل الاتصال بالشبكة (Network/CORS): " + (networkErr?.message || networkErr));
  }

  const text = await resp.text(); // نقرأ كنص أولاً للتشخيص

  // لو الرد مو 200-299 نطلع سبب واضح
  if (!resp.ok) {
    // أحياناً Apps Script يرجع HTML خطأ
    const preview = text.slice(0, 300);
    throw new Error(`HTTP ${resp.status} - ${resp.statusText}\n${preview}`);
  }

  // نحاول نحوله JSON
  try {
    return JSON.parse(text);
  } catch (parseErr) {
    const preview = text.slice(0, 300);
    throw new Error("الرد ليس JSON صالح. جزء من الرد:\n" + preview);
  }
}

// Ping للـ API (اختياري)
async function apiHealth() {
  if (!API_URL || API_URL.includes("PUT_YOUR_WEBAPP_EXEC_URL_HERE")) {
    throw new Error("API_URL غير مضبوط في assets/app.js");
  }
  let resp;
  try {
    resp = await fetch(API_URL + "?action=health", { method: "GET", mode: "cors" });
  } catch (e) {
    throw new Error("فشل الاتصال بالشبكة (Health): " + (e?.message || e));
  }
  const text = await resp.text();
  if (!resp.ok) throw new Error(`Health HTTP ${resp.status}: ${text.slice(0, 200)}`);
  try { return JSON.parse(text); } catch { return { ok:false, raw:text }; }
}
