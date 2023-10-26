const getSession = function(key) {
  return sessionStorage.getItem(key);
}

const setSession = function(key, value) {
  return sessionStorage.setItem(key, value)
}

const getLocal = function(key) {
  return localStorage.getItem(key);
}

const setLocal = function(key, value) {
  return localStorage.setItem(key, value)
}

const getLocalLang = function() {
  return getLocal('lang') ? getLocal('lang') : 'zh';
}

const translateWeb = function(classname, zh, en) {
  let lang = getLocalLang();
  switch(lang) {
    case 'zh':
      return $(classname).html(zh)
      break;
    case 'en':
      return $(classname).html(en)
      break;
    default:
      return $(classname).html(zh)
  }
}