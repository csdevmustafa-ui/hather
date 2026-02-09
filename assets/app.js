/***********************
 * Hather Frontend Core
 * - API URL centralized here
 * - Language persisted from index.html (localStorage)
 * - QR uses qrserver (reliable) instead of Google Chart
 ***********************/

// ✅ ضع رابط الديبلوي (exec) هنا فقط:
const API_URL = "https://script.google.com/macros/s/AKfycbz1iejpZ_5yFYBIbSluTHemZNpHuZH6MX1bO3iad71d8JdINv6JvNGRc_cKGFgH8dN-/exec";

// ✅ PIN الدكتور (لازم يطابق Script Properties)
const DOCTOR_PIN = "1111";

// -------- Language --------
const LANG_KEY = "hather_lang";
const DEFAULT_LANG = "ar";

const I18N = {
  ar: {
    appName: "Hather - حاضر",
    homeTitle: "Hather Attendance",
    homeDesc: "نظام حضور باستخدام QR",
    goDoctor: "دخول الدكتور",
    goStudent: "قسم الطالب",
    goStudentReport: "تقرير الطالب",
    goReports: "تقارير المقرر (للدكتور)",

    lang: "اللغة",
    chooseLang: "اختر اللغة",
    arabic: "العربية",
    english: "English",

    // Doctor
    doctorPanel: "لوحة عضو هيئة التدريس",
    pinHint: "يرجى إدخال كلمة المرور للمتابعة",
    pinPh: "أدخل PIN",
    login: "دخول",
    pinWrong: "كلمة المرور غير صحيحة",
    logout: "تسجيل الخروج",
    refresh: "تحديث",
    searchPh: "مثال: CS111 أو 1 أو L177...",
    noLectures: "لا توجد محاضرات",
    loading: "جاري التحميل...",
    done: "تم ✅",
    failApi: "فشل الاتصال بالـ API",
    selectFirst: "اختر LectureID أولاً",
    confirmDelete: "تأكيد: هل تريد حذف هذه المحاضرة؟ لن تظهر في القائمة بعدها.",
    deleted: "تم حذف المحاضرة ✅",
    codeLabel: "Code: ",
    zoom: "تكبير QR",
    close: "إغلاق",

    lectures: "المحاضرات",
    lectureCodeQr: "الكود و QR للمحاضرة",
    selectedLecture: "LectureID المحدد",
    genCode: "توليد رمز حضور (Code + QR)",
    showStudents: "عرض الطلاب",
    deleteLecture: "حذف المحاضرة",
    clearSelection: "إلغاء التحديد",
    studentsOfLecture: "طلاب المحاضرة",

    createLecture: "إنشاء محاضرة",
    course: "المقرر",
    section: "الشعبة",
    start: "وقت البداية",
    end: "وقت النهاية",
    create: "إنشاء",

    weekly: "إنشاء جدول أسبوعي",
    fromDate: "من تاريخ",
    toDate: "إلى تاريخ",
    startTime: "وقت البداية",
    endTime: "وقت النهاية",
    days: "الأيام",
    createSchedule: "إنشاء الجدول",

    // Student
    studentTitle: "قسم الطالب",
    studentId: "رقم الطالب",
    lectureIdOptional: "LectureID (اختياري)",
    code: "الكود",
    checkin: "تسجيل حضور",
    success: "تم تسجيل الحضور ✅",
    invalid: "بيانات غير صحيحة",
    qrPasteHint: "الصق نص QR (اختياري) لتعبئة LectureID والكود تلقائيًا",
    pasteQr: "لصق QR JSON",

    // Student Report
    studentReportTitle: "تقرير الطالب",
    showReport: "عرض التقرير",
    present: "حضور",
    late: "تأخير",
    absent: "غياب",
    lastRecords: "آخر السجلات",

    // Course Reports
    reportsTitle: "تقارير المقرر (للدكتور)",
    courseCode: "كود المقرر",
    loadCourseReport: "عرض تقرير المقرر",
    lecturesCount: "عدد المحاضرات",
  },

  en: {
    appName: "Hather",
    homeTitle: "Hather Attendance",
    homeDesc: "QR-based attendance system",
    goDoctor: "Doctor Panel",
    goStudent: "Student Section",
    goStudentReport: "Student Report",
    goReports: "Course Reports (Doctor)",

    lang: "Language",
    chooseLang: "Choose language",
    arabic: "Arabic",
    english: "English",

    doctorPanel: "Doctor Panel",
    pinHint: "Enter PIN to continue",
    pinPh: "Enter PIN",
    login: "Login",
    pinWrong: "Wrong PIN",
    logout: "Logout",
    refresh: "Refresh",
    searchPh: "e.g. CS111 or 1 or L177...",
    noLectures: "No lectures",
    loading: "Loading...",
    done: "Done ✅",
    failApi: "API connection failed",
    selectFirst: "Select LectureID first",
    confirmDelete: "Confirm delete? It will disappear from the list.",
    deleted: "Lecture deleted ✅",
    codeLabel: "Code: ",
    zoom: "Zoom QR",
    close: "Close",

    lectures: "Lectures",
    lectureCodeQr: "Lecture Code & QR",
    selectedLecture: "Selected LectureID",
    genCode: "Generate Attendance Code (Code + QR)",
    showStudents: "Show Students",
    deleteLecture: "Delete Lecture",
    clearSelection: "Clear Selection",
    studentsOfLecture: "Students of Lecture",

    createLecture: "Create Lecture",
    course: "Course",
    section: "Section",
    start: "Start Time",
    end: "End Time",
    create: "Create",

    weekly: "Create Weekly Schedule",
    fromDate: "From Date",
    toDate: "To Date",
    startTime: "Start Time",
    endTime: "End Time",
    days: "Days",
    createSchedule: "Create Schedule",

    studentTitle: "Student Section",
    studentId: "Student ID",
    lectureIdOptional: "LectureID (optional)",
    code: "Code",
    checkin: "Check-in",
    success: "Checked in ✅",
    invalid: "Invalid input",
    qrPasteHint: "Paste QR text (optional) to auto-fill LectureID and Code",
    pasteQr: "Paste QR JSON",

    studentReportTitle: "Student Report",
    showReport: "Show Report",
    present: "Present",
    late: "Late",
    absent: "Absent",
    lastRecords: "Last Records",

    reportsTitle: "Course Reports (Doctor)",
    courseCode: "Course Code",
    loadCourseReport: "Load Course Report",
    lecturesCount: "Lectures Count",
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

// ✅ زر اللغة موجود فقط في index.html لكن الدالة موجودة هنا
function setLangAndReload(lang){
  setLang(lang);
  location.reload();
}

// -------- Helpers --------
const $ = (id) => document.getElementById(id);

async function apiCall(payload){
  const res = await fetch(API_URL, { method:"POST", body: JSON.stringify(payload) });
  return await res.json();
}

// ✅ QR reliable URL
function buildQrUrl(dataText){
  // dataText could be qrText JSON: {"lectureId":"...","code":"..."}
  // Use reliable qrserver (HTTPS)
  return "https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=" + encodeURIComponent(dataText || "");
}

function safeSetImg(imgEl, url){
  if(!imgEl) return;
  imgEl.src = "";
  setTimeout(()=>{ imgEl.src = url + (url.includes("?") ? "&" : "?") + "_ts=" + Date.now(); }, 20);
}

function applyDocumentLang(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
}
