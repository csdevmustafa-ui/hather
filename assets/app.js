// ======= API URL (رابطك) =======
const API_URL = "https://script.google.com/macros/s/AKfycbyjIB2ICWitmLIvaHb7eIUhiGPZhKWES6vnsNZUrpQR45pNQh-ZMzMLMy3mid3kFx0/exec";

// ======= لغة بسيطة لكل الصفحات =======
const i18n = {
  ar: {
    homeTitle: "Hather",
    homeSub: "نظام إدارة الحضور الأكاديمي",
    toStudent: "قسم الطالب",
    toStudentSub: "تسجيل حضور المحاضرة",
    toReport: "تقارير الطالب",
    toReportSub: "نسبة الحضور والتأخير",
    toDoctor: "لوحة عضو هيئة التدريس",
    toDoctorSub: "إدارة المحاضرات والرموز",
    studentTitle: "قسم الطالب",
    studentSub: "ادخل بياناتك لتسجيل الحضور",
    studentId: "الرقم الجامعي (9 أرقام)",
    lectureId: "LectureID",
    code: "كود المحاضرة (اختياري)",
    submit: "تسجيل الحضور",
    ok: "تم تسجيل الحضور بنجاح",
    badId: "الرقم الجامعي يجب أن يكون 9 أرقام",
    needLectureOrCode: "أدخل LectureID أو كود المحاضرة",
    failed: "تعذر تنفيذ العملية",
    loading: "جارٍ المعالجة...",
    reportTitle: "تقارير الطالب",
    reportSub: "عرض الحضور والغياب والتأخير",
    doctorTitle: "لوحة عضو هيئة التدريس",
    doctorSub: "إنشاء محاضرة / توليد QR / إدارة الحالات",
    secret: "الرمز السري",
    secretHint: "للدخول فقط",
    enter: "دخول",
    wrongSecret: "رمز سري غير صحيح",
    createLecture: "إنشاء محاضرة",
    createSchedule: "إنشاء جدول أسبوعي",
    refresh: "تحديث",
    generateCode: "توليد رمز حضور جديد",
    showStudents: "عرض الطلاب",
    zoomQR: "تكبير QR",
    close: "إغلاق",
    unknown: "Unknown action"
  },
  en: {
    homeTitle: "Hather",
    homeSub: "Academic Attendance Management",
    toStudent: "Student",
    toStudentSub: "Check-in for a lecture",
    toReport: "Student Reports",
    toReportSub: "Attendance & lateness",
    toDoctor: "Instructor Panel",
    toDoctorSub: "Manage lectures & codes",
    studentTitle: "Student",
    studentSub: "Enter details to check-in",
    studentId: "University ID (9 digits)",
    lectureId: "LectureID",
    code: "Lecture Code (optional)",
    submit: "Check-in",
    ok: "Attendance recorded successfully",
    badId: "University ID must be 9 digits",
    needLectureOrCode: "Enter LectureID or lecture code",
    failed: "Operation failed",
    loading: "Processing...",
    reportTitle: "Student Reports",
    reportSub: "View attendance, absence, and lateness",
    doctorTitle: "Instructor Panel",
    doctorSub: "Create lecture / QR / manage statuses",
    secret: "Secret PIN",
    secretHint: "Instructor only",
    enter: "Enter",
    wrongSecret: "Wrong PIN",
    createLecture: "Create Lecture",
    createSchedule: "Create Weekly Schedule",
    refresh: "Refresh",
    generateCode: "Generate New Code",
    showStudents: "Show Students",
    zoomQR: "Zoom QR",
    close: "Close",
    unknown: "Unknown action"
  }
};

function getLang(){
  return localStorage.getItem("hather_lang") || "ar";
}
function setLang(l){
  localStorage.setItem("hather_lang", l);
}
function t(key){
  const lang = getLang();
  return (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : key;
}
function applyLang(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
}

function toggleLang(){
  const lang = getLang();
  setLang(lang === "ar" ? "en" : "ar");
  applyLang();
}

// ======= Helper: Fetch JSON =======
async function apiCall(payload){
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type":"text/plain;charset=utf-8"},
    body: JSON.stringify(payload)
  });
  const txt = await res.text();
  let data;
  try{ data = JSON.parse(txt); }
  catch { data = {ok:false, error: txt || "Bad JSON"}; }
  return data;
}

function showStatus(el, type, text){
  el.innerHTML = `
    <span class="badge ${type}">
      ${text}
    </span>
  `;
}

function setLoading(btn, sp, isLoading){
  if(!btn || !sp) return;
  btn.disabled = isLoading;
  sp.style.display = isLoading ? "inline-block" : "none";
}

// ======= QR modal =======
function openQrModal(imgSrc){
  const modal = document.getElementById("qrModal");
  const big = document.getElementById("qrBig");
  big.src = imgSrc;
  modal.style.display = "flex";
}
function closeQrModal(){
  const modal = document.getElementById("qrModal");
  modal.style.display = "none";
}
