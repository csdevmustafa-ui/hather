/***********************
 * assets/qr.js
 * Client-side QR generator (no external QR API)
 * Requires: https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js
 ***********************/

async function makeQrDataUrl(text, size = 360) {
  if (typeof QRCode === "undefined") {
    throw new Error("مكتبة QRCode غير محمّلة. تأكد أنك أضفت رابط qrcode.min.js");
  }

  const t = String(text || "").trim();
  if (!t) throw new Error("qr text فارغ");

  // QRCode.toDataURL from qrcode library
  return await QRCode.toDataURL(t, {
    width: size,
    margin: 1,
    errorCorrectionLevel: "M"
  });
}

/**
 * Render QR into <img> and return dataURL
 */
async function renderQrToImg(imgEl, text, size = 360) {
  const dataUrl = await makeQrDataUrl(text, size);
  imgEl.src = dataUrl;
  return dataUrl;
}
