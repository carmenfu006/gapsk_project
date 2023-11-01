// $('#staticBackdropSuccess').modal('show');
// $('#staticBackdropError').modal('show');
addRecaptchaToHead()

$('#sms-verify-code').hide();
$('#confirm-btn').hide();

function addRecaptchaToHead() {
  let lang = getLocalLang('lang');
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?hl=${lang}`;

  document.head.appendChild(script);
}