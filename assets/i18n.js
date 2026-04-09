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
      langBtn: "English",
      hideBtn: "إخفاء",
      showBtn: "عرض",
      enterPin: "أدخل الرقم السري",
      verifying: "جاري التحقق...",
      loginFail: "فشل الدخول",
      pressShow: "اضغط عرض الطلاب لعرض الحضور",
      noLectures: "لا توجد محاضرات",
      fillAll: "أكمل جميع الحقول",
      creating: "جاري الإنشاء...",
      createdOk: "تم إنشاء المحاضرة",
      generating: "جاري توليد الرمز...",
      codeGenerated: "تم توليد الكود و QR",
      deleting: "جاري الحذف...",
      deletedOk: "تم حذف المحاضرة",
      deleteConfirm: "تأكيد: هل تريد حذف هذه المحاضرة؟",
      pickFirst: "اختر LectureID أولاً",
      noAttendance: "لا يوجد سجلات حضور لهذه المحاضرة",
      updating: "جاري تحديث الحالة...",
      statusUpdated: "تم تحديث الحالة",
      creatingSchedule: "جاري إنشاء الجدول...",
      scheduleOk: "تم إنشاء الجدول",
      lecturesCreated: "محاضرة",
      completeAndDays: "أكمل الحقول وحدد الأيام",

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

      // Doctor Lock Screen
      lockTitle: "لوحة عضو هيئة التدريس",
      lockSub: "الرجاء إدخال الرقم السري للمتابعة",
      pinPlaceholder: "أدخل الرقم السري",
      loginBtn: "دخول",
      lockNote: "هذه الصفحة مخصصة لعضو هيئة التدريس.",

      // Doctor Dashboard
      dashboardTitle: "لوحة التحكم — عضو هيئة التدريس",
      dashboardSub: "إدارة المحاضرات — توليد رمز الحضور — متابعة الطلاب",
      homeBtn: "الرئيسية",
      logoutBtn: "تسجيل الخروج",
      refreshBtn: "تحديث",

      // Lectures Section
      lecturesTitle: "المحاضرات",
      searchLabel: "بحث (LectureID / المقرر / الشعبة)",
      searchPlaceholder: "ابحث هنا...",
      thCourse: "المقرر",
      thSection: "الشعبة",
      thStart: "البداية",
      thEnd: "النهاية",
      thState: "الحالة",

      // QR Section
      qrTitle: "رمز الحضور و QR",
      selectedLectureLabel: "LectureID المحدد",
      selectedLecturePlaceholder: "اختر من الجدول أو الصقه هنا",
      generateBtn: "توليد (Code + QR)",
      showStudentsBtn: "عرض الطلاب",
      deleteLectureBtn: "حذف المحاضرة",
      clearBtn: "إلغاء التحديد",
      qrHint: "يتم إنشاء رمز QR داخل المتصفح.",
      zoomBtn: "تكبير",
      closeBtn: "إغلاق",

      // Students Section
      studentsTitle: "طلاب المحاضرة",
      thStudentId: "StudentID",
      thName: "الاسم",
      thStatus: "الحالة",
      thEdit: "تعديل",
      noLectureSelected: "اختر محاضرة ثم اضغط عرض الطلاب",
      edit: "تعديل",

      // Create Lecture Section
      createLectureTitle: "إنشاء محاضرة",
      courseLabel: "المقرر",
      sectionLabel: "الشعبة",
      startLabel: "وقت البداية",
      endLabel: "وقت النهاية",
      coursePlaceholder: "مثال: CS111",
      sectionPlaceholder: "مثال: 1",
      createBtn: "إنشاء",

      // Weekly Schedule Section
      weeklyTitle: "إنشاء جدول أسبوعي",
      fromDateLabel: "من تاريخ",
      toDateLabel: "إلى تاريخ",
      startTimeLabel: "وقت البداية",
      endTimeLabel: "وقت النهاية",
      daysLabel: "الأيام:",
      sun: "الأحد",
      mon: "الاثنين",
      tue: "الثلاثاء",
      wed: "الأربعاء",
      thu: "الخميس",
      createScheduleBtn: "إنشاء الجدول",

      // Footer
      footer: "Hather Attendance System © 2026",

      // Student Page
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

      // Student Report Page
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

      // Reports Page
      pageTitleReports: "تقارير الطالب - Hather",
      reportsTitle: "تقارير الطالب",
      reportsSub: "عرض الحضور والغياب والتأخير",
      uniIdLabel2: "الرقم الجامعي (9 أرقام)",
      noRecords: "لا توجد سجلات",
      reportOkMini: "تم تحميل التقرير ✅"
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
      hideBtn: "Hide",
      showBtn: "Show",
      enterPin: "Enter PIN",
      verifying: "Verifying...",
      loginFail: "Login failed",
      pressShow: "Click Show Students to view attendance",
      noLectures: "No lectures",
      fillAll: "Fill all fields",
      creating: "Creating...",
      createdOk: "Lecture created",
      generating: "Generating code...",
      codeGenerated: "Code and QR generated",
      deleting: "Deleting...",
      deletedOk: "Lecture deleted",
      deleteConfirm: "Confirm: delete this lecture?",
      pickFirst: "Pick LectureID first",
      noAttendance: "No attendance records for this lecture",
      updating: "Updating status...",
      statusUpdated: "Status updated",
      creatingSchedule: "Creating schedule...",
      scheduleOk: "Schedule created",
      lecturesCreated: "lectures",
      completeAndDays: "Fill fields and select days",

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

      // Doctor Lock Screen
      lockTitle: "Faculty Dashboard",
      lockSub: "Please enter PIN to continue",
      pinPlaceholder: "Enter PIN",
      loginBtn: "Login",
      lockNote: "This page is for faculty only.",

      // Doctor Dashboard
      dashboardTitle: "Faculty Dashboard",
      dashboardSub: "Manage lectures — Generate QR — Track students",
      homeBtn: "Home",
      logoutBtn: "Logout",
      refreshBtn: "Refresh",

      // Lectures Section
      lecturesTitle: "Lectures",
      searchLabel: "Search (LectureID / Course / Section)",
      searchPlaceholder: "Search here...",
      thCourse: "Course",
      thSection: "Section",
      thStart: "Start",
      thEnd: "End",
      thState: "State",

      // QR Section
      qrTitle: "Attendance Code & QR",
      selectedLectureLabel: "Selected LectureID",
      selectedLecturePlaceholder: "Pick from table or paste here",
      generateBtn: "Generate (Code + QR)",
      showStudentsBtn: "Show Students",
      deleteLectureBtn: "Delete Lecture",
      clearBtn: "Cancel",
      qrHint: "QR is generated in browser.",
      zoomBtn: "Zoom",
      closeBtn: "Close",

      // Students Section
      studentsTitle: "Lecture Students",
      thStudentId: "StudentID",
      thName: "Name",
      thStatus: "Status",
      thEdit: "Edit",
      noLectureSelected: "Select a lecture then click Show Students",
      edit: "Edit",

      // Create Lecture Section
      createLectureTitle: "Create Lecture",
      courseLabel: "Course",
      sectionLabel: "Section",
      startLabel: "Start Time",
      endLabel: "End Time",
      coursePlaceholder: "Example: CS111",
      sectionPlaceholder: "Example: 1",
      createBtn: "Create",

      // Weekly Schedule Section
      weeklyTitle: "Create Weekly Schedule",
      fromDateLabel: "From Date",
      toDateLabel: "To Date",
      startTimeLabel: "Start Time",
      endTimeLabel: "End Time",
      daysLabel: "Days:",
      sun: "Sun",
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      createScheduleBtn: "Create Schedule",

      // Footer
      footer: "Hather Attendance System © 2026",

      // Student Page
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

      // Student Report Page
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

      // Reports Page
      pageTitleReports: "Student Reports - Hather",
      reportsTitle: "Student Reports",
      reportsSub: "View present / absent / late",
      uniIdLabel2: "Student ID (9 digits)",
      noRecords: "No records",
      reportOkMini: "Report loaded ✅"
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
