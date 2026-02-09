/* =========================
   Hather Shared App (config + i18n + helpers)
   Put API_URL here only.
========================= */

(function () {
  const CONFIG = {
    API_URL: "PUT_YOUR_APPS_SCRIPT_WEBAPP_URL_HERE", // <-- حط رابط الـ /exec هنا
    DEFAULT_LANG: "ar",
    APP_NAME: "Hather",
  };

  const dict = {
    ar: {
      home_title: "Hather – نظام الحضور الذكي",
      home_sub: "منصة حضور حديثة – رسمية – صارمة",
      doctor: "واجهة الدكتور",
      student: "واجهة الطالب",
      reports: "التقارير",
      open: "فتح",
      lang: "اللغة",
      ar: "عربي",
      en: "English",
      back_home: "الرئيسية",
      logout: "خروج",
      refresh: "تحديث",
      done: "تم ✅",
      error_api: "فشل الاتصال بالـ API",
      qr_zoom: "تكبير QR",
      scan: "فتح الكاميرا",
      stop_scan: "إيقاف الكاميرا",
      enter_pin: "أدخل PIN",
      wrong_pin: "PIN غير صحيح",
      no_qr: "لا يوجد QR للتكبير",
      generate: "توليد رمز حضور (Code + QR)",
      show_students: "عرض الطلاب",
      delete_lecture: "حذف المحاضرة",
      clear_selection: "إلغاء التحديد",
      select_first: "اختر LectureID أولاً",
      deleted_block: "هذه المحاضرة محذوفة ولا يمكن استخدامها.",
      student_id: "رقم الطالب",
      lecture_id: "LectureID (اختياري)",
      code: "الكود",
      checkin: "تسجيل حضور",
      student_report: "تقرير الطالب",
      course_report: "تقرير مقرر",
    },
    en: {
      home_title: "Hather – Smart Attendance",
      home_sub: "Modern • Formal • Strict",
      doctor: "Doctor Panel",
      student: "Student Panel",
      reports: "Reports",
      open: "Open",
      lang: "Language",
      ar: "Arabic",
      en: "English",
      back_home: "Home",
      logout: "Logout",
      refresh: "Refresh",
      done: "Done ✅",
      error_api: "API connection failed",
      qr_zoom: "Zoom QR",
      scan: "Open Camera",
      stop_scan: "Stop Camera",
      enter_pin: "Enter PIN",
      wrong_pin: "Wrong PIN",
      no_qr: "No QR to zoom",
      generate: "Generate Attendance Code (Code + QR)",
      show_students: "Show Students",
      delete_lecture: "Delete Lecture",
      clear_selection: "Clear Selection",
      select_first: "Select LectureID first",
      deleted_block: "This lecture is deleted and cannot be used.",
      student_id: "Student ID",
      lecture_id: "LectureID (optional)",
      code: "Code",
      checkin: "Check-in",
      student_report: "Student Report",
      course_report: "Course Report",
    }
  };

  function getLang() {
    return localStorage.getItem("HATHER_LANG") || CONFIG.DEFAULT_LANG;
  }
  function setLang(lang) {
    localStorage.setItem("HATHER_LANG", lang === "en" ? "en" : "ar");
  }
  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang][key]) ? dict[lang][key] : (dict.ar[key] || key);
  }

  async function apiPost(payload) {
    const res = await fetch(CONFIG.API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    return await res.json();
  }

  async function apiHealth() {
    const res = await fetch(CONFIG.API_URL + "?action=health");
    return await res.json();
  }

  function qs(id) { return document.getElementById(id); }

  function applyI18n() {
    const lang = getLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      el.textContent = t(k);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const k = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", t(k));
    });
  }

  window.HATHER = {
    CONFIG,
    dict,
    t,
    getLang,
    setLang,
    apiPost,
    apiHealth,
    qs,
    applyI18n,
  };
})();
