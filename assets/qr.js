/***********************
 * assets/qr.js
 * Always-render QR (local if possible, otherwise remote image fallback)
 ***********************/

function qrFallbackUrl_(text, size = 360) {
  const t = String(text || "").trim();
  const s = Math.max(160, Number(size) || 360);
  return "https://api.qrserver.com/v1/create-qr-code/?size=" + s + "x" + s + "&data=" + encodeURIComponent(t);
}

function getQrLib_() {
  // qrcode@1.5.3 غالبًا يعطي window.QRCode (toDataURL)
  // لكن لو ما طلع، نرجع null ونستخدم fallback
  const q = (typeof window !== "undefined") ? window.QRCode : null;
  if (!q) return null;
  if (typeof q.toDataURL !== "function") return null;
  return q;
}

async function makeQrSrc_(text, size = 360) {
  const t = String(text || "").trim();
  if (!t) throw new Error("QR text is empty");

  const lib = getQrLib_();
  if (!lib) return qrFallbackUrl_(t, size);

  try {
    return await lib.toDataURL(t, { width: size, margin: 1, errorCorrectionLevel: "M" });
  } catch (e) {
    return qrFallbackUrl_(t, size);
  }
}

async function renderQrToImg(imgEl, text, size = 360) {
  const t = String(text || "").trim();
  if (!t) throw new Error("QR text is empty");

  // أول محاولة
  let src = await makeQrSrc_(t, size);

  // لو كانت صورة خارجية وفشلت، خلينا نعالجها بـ onerror
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = qrFallbackUrl_(t, size);
  };

  imgEl.src = src;
  return src;
}
