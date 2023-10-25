const getSession = function(key) {
  return sessionStorage.getItem(key);
}

const setSession = function(key, value) {
  return sessionStorage.setItem(key, value)
}

const getSessionLang = function() {
  return getSession('lang') ? getSession('lang') : 'zh';
}