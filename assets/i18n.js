// assets/i18n.js
(function () {
  const KEY = "HATHER_LANG";

  const dict = {
    ar: {
      // Global
      back: "رجوع",
      loading: "جاري التحميل...",
      failed: "فشل الطلب",
      badId: "الرقم الجامعي غير صحيح",

      // Home / index
      homeTitle: "نظام الحضور الإلكتروني",
      homeSub: "إدارة المحاضرات، تسجيل الحضور، وإنشاء التقارير",
      facultyBtn: "لوحة عضو هيئة التدريس",
      studentBtn: "بوابة الطالب",
      reportBtn: "تقارير الطالب",
      noteTitle: "ملاحظة",
      note1: "لوحة عضو هيئة التدريس محمية برمز الدخول.",
      note2: "بوابة الطالب مخصصة لتسجيل الحضور بالكود أو QR.",
      note3: "تقارير الطالب تعرض الحضور باستخدام الرقم الجامعي.",

      // Student
      studentTitle: "قسم الطالب",
      studentSub: "تسجيل الحضور بالكود أو QR",
      checkin: "تسجيل الحضور",
      startCam: "فتح الكاميرا",
      stopCam: "إيقاف",

      // Reports
      reportTitle: "تقرير الحضور",
      reportSub: "أدخل رقمك الجامعي لعرض سجل حضورك",
      showReport: "عرض التقرير",

      // Doctor
      doctorTitle: "لوحة التحكم — عضو هيئة التدريس",
      refresh: "تحديث",
      logout: "تسجيل الخروج",
      generate: "توليد (Code + QR)",
      showStudents: "عرض الطلاب",
      deleteLecture: "حذف المحاضرة",
      cancel: "إلغاء التحديد",
    },

    en: {
      // Global
      back: "Back",
      loading: "Loading...",
      failed: "Request failed",
      badId: "Invalid Student ID",

      // Home / index
      homeTitle: "Electronic Attendance System",
      homeSub: "Manage lectures, record attendance, and generate reports",
      facultyBtn: "Faculty Dashboard",
      studentBtn: "Student Portal",
      reportBtn: "Student Reports",
      noteTitle: "Note",
      note1: "Faculty dashboard is protected by a login PIN.",
      note2: "Student portal is for check-in using code or QR.",
      note3: "Student reports show attendance using Student ID.",

      // Student
      studentTitle: "Student",
      studentSub: "Check-in by code or QR",
      checkin: "Check-in",
      startCam: "Start Camera",
      stopCam: "Stop",

      // Reports
      reportTitle: "Attendance Report",
      reportSub: "Enter your student ID to view your attendance",
      showReport: "Show Report",

      // Doctor
      doctorTitle: "Faculty Dashboard",
      refresh: "Refresh",
      logout: "Logout",
      generate: "Generate (Code + QR)",
      showStudents: "Show Students",
      deleteLecture: "Delete Lecture",
      cancel: "Cancel Selection",
    }
  };

  function getLang() {
    return localStorage.getItem(KEY) || "ar";
  }

  function setLang(lang) {
    localStorage.setItem(KEY, lang);
  }

  function t(k) {
    const lang = getLang();
    return (dict[lang] && dict[lang][k]) || (dict.ar[k]) || k;
  }

  // translate element + attributes if present
  function translateEl(el) {
    const k = el.getAttribute("data-i18n");
    if (k) el.textContent = t(k);

    const pk = el.getAttribute("data-i18n-placeholder");
    if (pk) el.setAttribute("placeholder", t(pk));

    const tk = el.getAttribute("data-i18n-title");
    if (tk) el.setAttribute("title", t(tk));

    const ak = el.getAttribute("data-i18n-aria");
    if (ak) el.setAttribute("aria-label", t(ak));
  }

  function applyLang() {
    const lang = getLang();

    // Optional: set direction for English
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "en") ? "ltr" : "rtl";

    // translate all tagged nodes
    document.querySelectorAll("[data-i18n],[data-i18n-placeholder],[data-i18n-title],[data-i18n-aria]")
      .forEach(translateEl);

    // Update language button text if it has data-i18n too
    // (no extra work needed)
  }

  function toggleLang() {
    const next = (getLang() === "ar") ? "en" : "ar";
    setLang(next);
    applyLang();
  }

  // expose globally
  window.applyLang = applyLang;
  window.toggleLang = toggleLang;
  window.t = t;
})();
