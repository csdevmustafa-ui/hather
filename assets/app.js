// assets/app.js
window.HATHER_API_URL = "https://script.google.com/macros/s/AKfycbyYrlS2KNKfACmTuOHhhOvSaYK-QM5M7CFqfDFZ8dgzl8Lrr-i9pSv2yxSCQL5Zrjak/exec";

window.apiCall = async function(payload){
  const url = window.HATHER_API_URL;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload || {})
  });
  return await res.json();
};
