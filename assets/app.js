// assets/app.js
// Hather – Shared Frontend Logic (API + i18n)
// --------------------------------------------------

window.HATHER = (function () {

  /* ==================================================
     🔗 API URL
     ضع رابط Google Apps Script (الـ exec) هنا فقط
     مثال:
     https://script.google.com/macros/s/AKfycbxxxxxxx/exec
     ================================================== */
  const API_URL = "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec";
  const API_URL = "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec";


  /* ==================================================
     🌐 Language handling
     ================================================== */
  const LANG_KEY = "hather_lang";

  const dict = {
    ar: {
      app_name: "Hather",
      doctor: "عضو هيئة التدريس",
      student: "الطالب",
      back_home: "الرئيسية",
      logout: "تسجيل الخروج",
      refresh: "تحديث",
      login: "دخول",
      pin: "كلمة المرور (PIN)",
      pin_placeholder: "أدخل PIN",
      wrong_pin: "كلمة المرور غير صحيحة",
      api_error: "تعذر الاتصال بالخدمة",
      lectures: "المحاضرات",
      search: "بحث",
      loading: "جاري التحميل...",
      no_data: "لا توجد بيانات",
      selected_lecture: "المحاضرة المحددة",
      generate_code: "توليد رمز الحضور",
      show_students: "عرض الطلاب",
      delete_lecture: "حذف المحاضرة",
      clear_selection: "إلغاء التحديد",
      students: "طلاب المحاضرة",
      select_first: "اختر LectureID أولاً",
      student_id: "الرقم الجامعي",
      status: "الحالة",
      update: "تعديل",
      create_lecture: "إنشاء محاضرة",
      course: "المقرر",
      section: "الشعبة",
      start: "البداية",
      end: "النهاية",
      create: "إنشاء",
      update_status: "تحديث الحالة",
      qr_zoom: "تكبير QR",
      camera: "فتح الكاميرا",
      submit: "إرسال"
    },
    en: {
      app_name: "Hather",
      doctor: "Doctor",
      student: "Student",
      back_home: "Home",
      logout: "Logout",
      refresh: "Refresh",
      login: "Login",
      pin: "PIN",
      pin_placeholder: "Enter PIN",
      wrong_pin: "Wrong PIN",
      api_error: "API connection failed",
      lectures: "Lectures",
      search: "Search",
      loading: "Loading...",
      no_data: "No data",
      selected_lecture: "Selected Lecture",
      generate_code: "Generate Attendance Code",
      show_students: "Show Students",
      delete_lecture: "Delete Lecture",
      clear_selection: "Clear Selection",
      students: "Lecture Students",
      select_first: "Select LectureID first",
      student_id: "Student ID",
      status: "Status",
      update: "Update",
      create_lecture: "Create Lecture",
      course: "Course",
      section: "Section",
      start: "Start",
      end: "End",
      create: "Create",
      update_status: "Update Status",
      qr_zoom: "Zoom QR",
      camera: "Open Camera",
      submit: "Submit"
    }
  };


  /* ==================================================
     🧠 Helpers
     ================================================== */
  function qs(id) {
    return document.getElementById(id);
  }

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang][key]) ? dict[lang][key] : key;
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


  /* ==================================================
     📡 API Calls
     ================================================== */
  async function apiPost(payload) {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    return await res.json();
  }

  async function apiHealth() {
    const res = await fetch(API_URL + "?action=health");
    return await res.json();
  }


  /* ==================================================
     🔓 Public API
     ================================================== */
  return {
    API_URL,
    qs,
    t,
    getLang,
    setLang,
    applyI18n,
    apiPost,
    apiHealth
  };

})();
