// assets/i18n.js
(function () {
  const KEY = "HATHER_LANG";

  const dict = {
    ar: {
      // Global
      back: "رجوع",
      home: "الرئيسية",
      loading: "جاري التحميل...",
      failed: "فشل الطلب",
      badId: "الرقم الجامعي غير صحيح",
      apiFail: "❌ فشل الاتصال بالـ API",
      okDone: "تم ✅",
      close: "إغلاق",
      confirm: "تأكيد",
      yes: "نعم",
      no: "لا",

      // Language button label (what user clicks)
      langBtn: "English",

      // Home / index
      pageTitleHome: "نظام الحضور الإلكتروني",
      homeTitle: "نظام الحضور الإلكتروني",
      homeSub: "إدارة المحاضرات، تسجيل الحضور، وإنشاء التقارير",

      homeDoctor: "لوحة عضو هيئة التدريس",
      homeStudent: "بوابة الطالب",
      homeReports: "تقارير الطالب",

      noteTitle: "ملاحظة",
      note1: "• لوحة عضو هيئة التدريس محمية برمز الدخول.",
      note2: "• بوابة الطالب مخصصة لتسجيل الحضور بالكود أو QR.",
      note3: "• تقارير الطالب تعرض الحضور باستخدام الرقم الجامعي.",

      // Student
      pageTitleStudent: "قسم الطالب - Hather",
      studentTitle: "قسم الطالب",
      studentSub: "تسجيل الحضور بالكود أو QR",

      studentByCodeTitle: "التسجيل بالكود",
      studentByQrTitle: "التسجيل عبر QR",

      studentIdLabel: "StudentID (9 أرقام)",
      codeLabel: "Code",

      studentIdPh: "مثال: 202311644",
      codePh: "مثال: 123456",

      checkin: "تسجيل الحضور",
      startCam: "فتح الكاميرا",
      stopCam: "إيقاف",

      studentHintJson: "إذا كان الكود من QR قد يكون نص JSON — سيتم التعامل معه تلقائيًا.",
      qrHintPerm: "قد تحتاج للسماح للمتصفح باستخدام الكاميرا.",
      needCode: "يرجى إدخال الكود",
      alreadyChecked: "تم تسجيل حضورك مسبقاً لهذه المحاضرة",
      qrReadOk: "تمت قراءة QR ✅",
      camRunning: "الكاميرا تعمل — وجّهها على QR",
      camFail: "فشل تشغيل الكاميرا — تحقق من السماح",

      // Student Report (simple page student-report.html)
      pageTitleStudentReport: "تقرير الطالب - Hather",
      reportTitle: "تقرير الحضور",
      reportSub: "أدخل رقمك الجامعي لعرض سجل حضورك",
      uniIdLabel: "الرقم الجامعي",
      uniIdPh: "مثال: 441012345",
      showReport: "عرض التقرير",
      enterUniId: "أدخل الرقم الجامعي",
      reportLoading: "جاري تحميل التقرير...",
      reportLoaded: "تم تحميل التقرير بنجاح",
      reportFailFetch: "فشل جلب البيانات",

      present: "حضور",
      late: "تأخير",
      absent: "غياب",
      time: "الوقت",
      status: "الحالة",

      // Reports.html (your styled reports page)
      pageTitleReports: "تقارير الطالب - Hather",
      reportsTitle: "تقارير الطالب",
      reportsSub: "عرض الحضور والغياب والتأخير",
      uniIdLabel2: "الرقم الجامعي (9 أرقام)",
      noRecords: "لا توجد سجلات",
      reportOkMini: "تم تحميل التقرير ✅",

      // Doctor
      pageTitleDoctor: "لوحة عضو هيئة التدريس - Hather",
      doctorTitle: "لوحة التحكم — عضو هيئة التدريس",
      doctorSub: "إدارة المحاضرات — توليد رمز الحضور — متابعة الطلاب",

      lockTitle: "لوحة عضو هيئة التدريس",
      lockSub: "الرجاء إدخال الرقم السري للمتابعة",
      pinShow: "عرض",
      pinHide: "إخفاء",
      pinPh: "أدخل الرقم السري",
      login: "دخول",
      verifying: "جاري التحقق...",
      enterPin: "أدخل الرقم السري",
      facultyOnly: "هذه الصفحة مخصصة لعضو هيئة التدريس.",

      refresh: "تحديث",
      logout: "تسجيل الخروج",

      lectures: "المحاضرات",
      searchLabel: "بحث (LectureID / المقرر / الشعبة)",
      searchPh: "ابحث هنا...",
      thCourse: "المقرر",
      thSection: "الشعبة",
      thStart: "البداية",
      thEnd: "النهاية",

      qrTitle: "رمز الحضور و QR",
      selectedLecture: "LectureID المحدد",
      selectedLecturePh: "اختر من الجدول أو الصقه هنا",
      generate: "توليد (Code + QR)",
      showStudents: "عرض الطلاب",
      deleteLecture: "حذف المحاضرة",
      cancel: "إلغاء التحديد",
      qrHint: "يتم إنشاء رمز QR داخل المتصفح.",
      zoom: "تكبير",

      lectureStudents: "طلاب المحاضرة",
      chooseThenShow: "اختر محاضرة ثم اضغط \"عرض الطلاب\".",
      pressShow: "اضغط \"عرض الطلاب\" لعرض الحضور.",
      loadingRow: "جاري التحميل...",
      noLectures: "لا توجد محاضرات",
      pickFirst: "اختر LectureID أولاً",
      deleteConfirm: "تأكيد: هل تريد حذف هذه المحاضرة؟",
      deletedOk: "تم حذف المحاضرة",
      createdOk: "تم إنشاء المحاضرة",
      fillAll: "أكمل جميع الحقول",
      create: "إنشاء",
      createLectureTitle: "إنشاء محاضرة",

      weeklyTitle: "إنشاء جدول أسبوعي",
      createSchedule: "إنشاء الجدول",
      scheduleOk: "تم إنشاء الجدول",
      completeAndDays: "أكمل الحقول وحدد الأيام",
      daysTitle: "الأيام:",

      sun: "الأحد",
      mon: "الاثنين",
      tue: "الثلاثاء",
      wed: "الأربعاء",
      thu: "الخميس",

      studentsThId: "StudentID",
      studentsThName: "الاسم",
      studentsThStatus: "الحالة",
      studentsThEdit: "تعديل",
      edit: "تعديل",
      noAttend: "لا يوجد سجلات حضور لهذه المحاضرة",
      updateStatusPrompt: "اكتب الحالة الجديدة:\nحضور\nتأخير\nغياب",
      statusUpdated: "تم تحديث الحالة",
    },

    en: {
      // Global
      back: "Back",
      home: "Home",
      loading: "Loading...",
      failed: "Request failed",
      badId: "Invalid Student ID",
      apiFail: "❌ API connection failed",
      okDone: "Done ✅",
      close: "Close",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",

      langBtn: "العربية",

      // Home / index
      pageTitleHome: "Electronic Attendance System",
      homeTitle: "Electronic Attendance System",
      homeSub: "Manage lectures, record attendance, and generate reports",

      homeDoctor: "Faculty Dashboard",
      homeStudent: "Student Portal",
      homeReports: "Student Reports",

      noteTitle: "Note",
      note1: "• Faculty dashboard is protected by a login PIN.",
      note2: "• Student portal is for check-in using code or QR.",
      note3: "• Student reports show attendance using Student ID.",

      // Student
      pageTitleStudent: "Student - Hather",
      studentTitle: "Student",
      studentSub: "Check-in by code or QR",

      studentByCodeTitle: "Check-in by Code",
      studentByQrTitle: "Check-in via QR",

      studentIdLabel: "StudentID (9 digits)",
      codeLabel: "Code",

      studentIdPh: "Example: 202311644",
      codePh: "Example: 123456",

      checkin: "Check-in",
      startCam: "Start Camera",
      stopCam: "Stop",

      studentHintJson: "If the QR contains JSON text, it will be handled automatically.",
      qrHintPerm: "You may need to allow camera access.",
      needCode: "Please enter the code",
      alreadyChecked: "You already checked-in for this lecture",
      qrReadOk: "QR read ✅",
      camRunning: "Camera is running — point it at the QR",
      camFail: "Failed to start camera — check permissions",

      // Student Report (simple)
      pageTitleStudentReport: "Student Report - Hather",
      reportTitle: "Attendance Report",
      reportSub: "Enter your student ID to view your attendance",
      uniIdLabel: "Student ID",
      uniIdPh: "Example: 441012345",
      showReport: "Show Report",
      enterUniId: "Enter your student ID",
      reportLoading: "Loading report...",
      reportLoaded: "Report loaded successfully",
      reportFailFetch: "Failed to fetch data",

      present: "Present",
      late: "Late",
      absent: "Absent",
      time: "Time",
      status: "Status",

      // Reports.html
      pageTitleReports: "Student Reports - Hather",
      reportsTitle: "Student Reports",
      reportsSub: "View present / absent / late",
      uniIdLabel2: "Student ID (9 digits)",
      noRecords: "No records",
      reportOkMini: "Report loaded ✅",

      // Doctor
      pageTitleDoctor: "Faculty Dashboard - Hather",
      doctorTitle: "Faculty Dashboard",
      doctorSub: "Manage lectures — generate attendance code — track students",

      lockTitle: "Faculty Dashboard",
      lockSub: "Please enter the PIN to continue",
      pinShow: "Show",
      pinHide: "Hide",
      pinPh: "Enter PIN",
      login: "Login",
      verifying: "Verifying...",
      enterPin: "Enter PIN",
      facultyOnly: "This page is for faculty.",

      refresh: "Refresh",
      logout: "Logout",

      lectures: "Lectures",
      searchLabel: "Search (LectureID / Course / Section)",
      searchPh: "Search here...",
      thCourse: "Course",
      thSection: "Section",
      thStart: "Start",
      thEnd: "End",

      qrTitle: "Attendance Code & QR",
      selectedLecture: "Selected LectureID",
      selectedLecturePh: "Pick from table or paste here",
      generate: "Generate (Code + QR)",
      showStudents: "Show Students",
      deleteLecture: "Delete Lecture",
      cancel: "Cancel Selection",
      qrHint: "QR is generated in the browser.",
      zoom: "Zoom",

      lectureStudents: "Lecture Students",
      chooseThenShow: "Select a lecture then click \"Show Students\".",
      pressShow: "Click \"Show Students\" to view attendance.",
      loadingRow: "Loading...",
      noLectures: "No lectures",
      pickFirst: "Pick LectureID first",
      deleteConfirm: "Confirm: delete this lecture?",
      deletedOk: "Lecture deleted",
      createdOk: "Lecture created",
      fillAll: "Fill all fields",
      create: "Create",
      createLectureTitle: "Create Lecture",

      weeklyTitle: "Create Weekly Schedule",
      createSchedule: "Create Schedule",
      scheduleOk: "Schedule created",
      completeAndDays: "Fill fields and select days",
      daysTitle: "Days:",

      sun: "Sun",
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",

      studentsThId: "StudentID",
      studentsThName: "Name",
      studentsThStatus: "Status",
      studentsThEdit: "Edit",
      edit: "Edit",
      noAttend: "No attendance records for this lecture",
      updateStatusPrompt: "Enter new status:\nPresent\nLate\nAbsent",
      statusUpdated: "Status updated",
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

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "en") ? "ltr" : "rtl";

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));

    document
      .querySelectorAll("[data-i18n],[data-i18n-placeholder],[data-i18n-title],[data-i18n-aria]")
      .forEach(translateEl);

    const langBtn = document.getElementById("langBtn");
    if (langBtn) langBtn.textContent = t("langBtn");
  }

  function toggleLang() {
    const next = (getLang() === "ar") ? "en" : "ar";
    setLang(next);
    applyLang();
  }

  window.applyLang = applyLang;
  window.toggleLang = toggleLang;
  window.t = t;
})();
