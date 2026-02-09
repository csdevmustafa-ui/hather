/* =========================
   Hather Shared App
   - API URL (place it here only)
   - Global language (stored in localStorage)
   - Helpers (i18n + api)
========================= */

(function () {
  const CONFIG = {
    API_URL: "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec", // <-- ضع رابط Apps Script /exec هنا فقط
    DEFAULT_LANG: "ar",
    STORAGE_LANG_KEY: "HATHER_LANG",
  };

  const dict = {
    ar: {
      app_name: "Hather",
      home_title: "نظام إدارة الحضور",
      home_sub: "جامعة الحدود الشمالية",
      choose_lang: "اختر اللغة",
      doctor: "عضو هيئة التدريس",
      student: "الطالب",
      reports: "التقارير",
      open: "دخول",
      back_home: "الرئيسية",
      logout: "تسجيل الخروج",
      refresh: "تحديث",
      pin: "كلمة المرور (PIN)",
      pin_placeholder: "أدخل PIN",
      login: "دخول",
      wrong_pin: "كلمة المرور غير صحيحة",
      api_error: "تعذر الاتصال بالخدمة",
      search: "بحث",
      lectures: "المحاضرات",
      selected_lecture: "المحاضرة المحددة",
      generate_code: "توليد رمز حضور",
      show_students: "عرض الطلاب",
      delete_lecture: "حذف المحاضرة",
      clear_selection: "إلغاء التحديد",
      select_first: "اختر LectureID أولاً",
      deleted_block: "هذه المحاضرة محذوفة ولا يمكن استخدامها.",
      code: "الرمز",
      qr_zoom: "تكبير QR",
      create_lecture: "إنشاء محاضرة",
      course: "المقرر",
      section: "الشعبة",
      start: "البداية",
      end: "النهاية",
      create: "إنشاء",
      students: "طلاب المحاضرة",
      status: "الحالة",
      update: "تعديل",
      update_status: "تحديث الحالة",
      student_id: "الرقم الجامعي",
      lecture_id_optional: "LectureID (اختياري)",
      checkin: "تسجيل حضور",
      camera: "الكاميرا",
      open_camera: "فتح الكاميرا",
      stop_camera: "إيقاف الكاميرا",
      student_report: "تقرير الطالب",
      course_report: "تقرير المقرر",
      view: "عرض",
      present: "حضور",
      late: "تأخير",
      absent: "غياب",
      no_data: "لا توجد بيانات",
      loading: "جاري التحميل...",
    },
    en: {
      app_name: "Hather",
      home_title: "Attendance Management System",
      home_sub: "Northern Borders University",
      choose_lang: "Select Language",
      doctor: "Faculty Member",
      student: "Student",
      reports: "Reports",
      open: "Enter",
      back_home: "Home",
      logout: "Logout",
      refresh: "Refresh",
      pin: "Password (PIN)",
      pin_placeholder: "Enter PIN",
      login: "Login",
      wrong_pin: "Incorrect password",
      api_error: "Service unreachable",
      search: "Search",
      lectures: "Lectures",
      selected_lecture: "Selected Lecture",
      generate_code: "Generate Attendance Code",
      show_students: "Show Students",
      delete_lecture: "Delete Lecture",
      clear_selection: "Clear Selection",
      select_first: "Select LectureID first",
      deleted_block: "This lecture is deleted and cannot be used.",
      code: "Code",
      qr_zoom: "Zoom QR",
      create_lecture: "Create Lecture",
      course: "Course",
      section: "Section",
      start: "Start",
      end: "End",
      create: "Create",
      students: "Lecture Students",
      status: "Status",
      update: "Update",
      update_status: "Update Status",
      student_id: "Student ID",
      lecture_id_optional: "LectureID (optional)",
      checkin: "Check-in",
      camera: "Camera",
      open_camera: "Open Camera",
      stop_camera: "Stop Camera",
      student_report: "Student Report",
      course_report: "Course Report",
      view: "View",
      present: "Present",
      late: "Late",
      absent: "Absent",
      no_data: "No data",
      loading: "Loading...",
    }
  };

  function getLang() {
    return localStorage.getItem(CONFIG.STORAGE_LANG_KEY) || CONFIG.DEFAULT_LANG;
  }
  function setLang(lang) {
    localStorage.setItem(CONFIG.STORAGE_LANG_KEY, (lang === "en") ? "en" : "ar");
  }
  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang][key]) ? dict[lang][key] : (dict.ar[key] || key);
  }

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

  window.HATHER = { CONFIG, dict, t, getLang, setLang, applyI18n, apiPost, apiHealth, qs };
})();
