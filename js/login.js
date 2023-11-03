// $('#staticBackdropSuccess').modal('show');
// $('#staticBackdropError').modal('show');
addRecaptchaToHead()

$('#sms-verify-code').hide();
$('#confirm-btn').hide();

addRecaptchaToHead();

function addRecaptchaToHead() {
  let lang = getLocalLang('lang');
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?hl=${lang}`;

  document.head.appendChild(script);
}

$('#login-btn').on('click', function() {
  window.location.href = window.location.origin + '/candidate-information.html'
})