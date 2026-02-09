/* assets/i18n.js
   Global i18n for all pages.
   Language is chosen ONLY from the home page, then persists using localStorage.
*/

const I18N = {
  ar: {
    // Home
    homeTitle: "نظام الحضور الإلكتروني",
    homeSub: "إدارة المحاضرات وتسجيل حضور الطلاب وإصدار التقارير",
    homeDoctor: "لوحة عضو هيئة التدريس",
    homeStudent: "بوابة الطالب",
    homeReports: "تقارير الطالب",
    langBtn: "English",

    // Common
    back: "رجوع",
    home: "الرئيسية",
    logout: "تسجيل الخروج",
    refresh: "تحديث",
    loading: "جاري التحميل...",
    failed: "فشل التنفيذ",
  },

  en: {
    // Home
    homeTitle: "Electronic Attendance System",
    homeSub: "Manage lectures, record attendance, and generate reports",
    homeDoctor: "Faculty Dashboard",
    homeStudent: "Student Portal",
    homeReports: "Student Reports",
    langBtn: "العربية",

    // Common
    back: "Back",
    home: "Home",
    logout: "Logout",
    refresh: "Refresh",
    loading: "Loading...",
    failed: "Failed",
  }
};

function getLang() {
  const saved = (localStorage.getItem("hather_lang") || "").trim().toLowerCase();
  return (saved === "en" || saved === "ar") ? saved : "ar";
}

function setLang(lang) {
  const v = (lang === "en") ? "en" : "ar";
  localStorage.setItem("hather_lang", v);
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : key;
}

function toggleLang() {
  const next = getLang() === "ar" ? "en" : "ar";
  setLang(next);
  applyLang();
}

function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  // Optional: title
  const titleKey = document.body.getAttribute("data-i18n-title");
  if (titleKey) document.title = t(titleKey);

  // Home language button text
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = t("langBtn");
}

// Auto-apply on every page load
document.addEventListener("DOMContentLoaded", applyLang);
