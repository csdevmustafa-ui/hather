/***********************
 * assets/qr.js
 * Robust QR renderer with fallback (always shows an image)
 * Primary: local QRCode library (qrcode.min.js)
 * Fallback: remote QR image service
 ***********************/

function qrFallbackUrl_(text, size = 360) {
  const t = String(text || "").trim();
  const s = Math.max(120, Number(size) || 360);
  // خدمة QR عامة (تشتغل كصورة مباشرة)
  return "https://api.qrserver.com/v1/create-qr-code/?size=" + s + "x" + s + "&data=" + encodeURIComponent(t);
}

async function makeQrDataUrl(text, size = 360) {
  const t = String(text || "").trim();
  if (!t) throw new Error("qr text فارغ");

  // إذا مكتبة QRCode مو موجودة → ارجع رابط صورة جاهز
  if (typeof QRCode === "undefined" || !QRCode || typeof QRCode.toDataURL !== "function") {
    return qrFallbackUrl_(t, size);
  }

  // توليد محلي
  return await QRCode.toDataURL(t, {
    width: size,
    margin: 1,
    errorCorrectionLevel: "M"
  });
}

async function renderQrToImg(imgEl, text, size = 360) {
  const t = String(text || "").trim();
  if (!t) throw new Error("qr text فارغ");

  const urlOrData = await makeQrDataUrl(t, size);

  // لو dataURL أو رابط خدمة: الاثنين ينحطون في src
  imgEl.src = urlOrData;

  // لو خدمة خارجية، أحيانًا المتصفح يحتاج وقت — نرجع نفس القيمة
  return urlOrData;
}
