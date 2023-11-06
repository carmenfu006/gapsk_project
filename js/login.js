// $('#staticBackdropSuccess').modal('show');
// $('#staticBackdropError').modal('show');

$('#sms-verify-code').hide();
$('#confirm-btn').hide();

addRecaptchaToHead();
// Add recaptcha to head
function addRecaptchaToHead() {
  let lang = getLocalLang('lang');
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?hl=${lang}`;

  document.head.appendChild(script);
}

// Eventlistener for login button
$('#login-btn').on('click', function() {
  window.location.href = window.location.origin + '/competition/application.html'
})