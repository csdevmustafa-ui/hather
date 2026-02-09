/***********************
 * Hather Frontend Config + Helpers
 ***********************/

// ✅ ضع رابط الديبلوي الجديد هنا فقط
const API_URL = "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec";

// ✅ PIN الدكتور (نفس Script Properties)
const DOCTOR_PIN = "1111";

// Language (saved)
const LANG_KEY = "hather_lang";
const DEFAULT_LANG = "ar";

const I18N = {
  ar: {
    langBtn: "AR/EN",
    home: "الصفحة الرئيسية",
    logout: "تسجيل الخروج",
    refresh: "تحديث البيانات",
    lectures: "المحاضرات",
    searchLabel: "بحث (LectureID / المقرر / الشعبة)",
    searchPh: "مثال: CS111 أو 1 أو L177...",
    loading: "جاري التحميل...",
    noLectures: "لا توجد محاضرات",
    codeQr: "الكود و QR للمحاضرة",
    selectedLecture: "LectureID المحدد",
    selectFirst: "اختر LectureID أولاً",
    genCode: "توليد رمز حضور (Code + QR)",
    students: "عرض الطلاب",
    deleteLecture: "حذف المحاضرة",
    clearSel: "إلغاء التحديد",
    qrHint: "صلاحية قصيرة لتقليل مشاركة الرمز.",
    zoom: "تكبير QR",
    close: "إغلاق",
    createLecture: "إنشاء محاضرة",
    create: "إنشاء",
    weekly: "إنشاء جدول أسبوعي",
    days: "الأيام:",
    done: "تم ✅",
    failApi: "فشل الاتصال بالـ API",
    deleted: "تم حذف المحاضرة ✅",
    confirmDelete: "تأكيد: هل تريد حذف هذه المحاضرة؟ لن تظهر في القائمة بعدها.",
    pinWrong: "كلمة المرور غير صحيحة",
    pinTitle: "لوحة عضو هيئة التدريس",
    pinSub: "يرجى إدخال كلمة المرور للمتابعة",
    pinPh: "أدخل PIN",
    login: "دخول",
    doctorOnly: "هذه الصفحة مخصصة للدكتور فقط.",
    codeLabel: "Code: "
  },
  en: {
    langBtn: "AR/EN",
    home: "Home",
    logout: "Logout",
    refresh: "Refresh",
    lectures: "Lectures",
    searchLabel: "Search (LectureID / Course / Section)",
    searchPh: "e.g. CS111 or 1 or L177...",
    loading: "Loading...",
    noLectures: "No lectures",
    codeQr: "Lecture Code & QR",
    selectedLecture: "Selected LectureID",
    selectFirst: "Select a LectureID first",
    genCode: "Generate Attendance Code (Code + QR)",
    students: "Show Students",
    deleteLecture: "Delete Lecture",
    clearSel: "Clear Selection",
    qrHint: "Short TTL to reduce code sharing.",
    zoom: "Zoom QR",
    close: "Close",
    createLecture: "Create Lecture",
    create: "Create",
    weekly: "Create Weekly Schedule",
    days: "Days:",
    done: "Done ✅",
    failApi: "API connection failed",
    deleted: "Lecture deleted ✅",
    confirmDelete: "Confirm: delete this lecture? It will disappear from the list.",
    pinWrong: "Wrong PIN",
    pinTitle: "Doctor Panel",
    pinSub: "Enter PIN to continue",
    pinPh: "Enter PIN",
    login: "Login",
    doctorOnly: "Doctor-only page.",
    codeLabel: "Code: "
  }
};

function getLang(){
  return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}
function setLang(l){
  localStorage.setItem(LANG_KEY, l);
}
function t(key){
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N[DEFAULT_LANG][key] || key);
}
function toggleLang(){
  const newLang = getLang() === "ar" ? "en" : "ar";
  setLang(newLang);
  location.reload();
}

// basic helpers
const $ = (id) => document.getElementById(id);

async function apiCall(payload){
  const res = await fetch(API_URL, { method:"POST", body: JSON.stringify(payload) });
  return await res.json();
}

function safeSetImg(imgEl, url){
  // ✅ يمنع مشكلة الكاش/عدم ظهور QR
  imgEl.src = "";
  setTimeout(()=>{ imgEl.src = url + "&_ts=" + Date.now(); }, 10);
}
