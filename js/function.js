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

const translateWeb = function(classname, zh_hant, en, input) {
  let lang = getLocalLang();
  if (input) {
    switch(lang) {
      case 'zh-hant':
        $(classname).each(function() {
          if ($(this)[0].placeholder) {
            $(this)[0].placeholder = zh_hant;
          } else {
            $(this).html(zh_hant);
          }
        });
        break;
      case 'en':
        $(classname).each(function() {
          if ($(this)[0].placeholder) {
            $(this)[0].placeholder = en;
          } else {
            $(this).html(en);
          }
        });
        break;
      default:
        $(classname).each(function() {
          if ($(this)[0].placeholder) {
            $(this)[0].placeholder = zh_hant;
          } else {
            $(this).html(zh_hant);
          }
        });
    }
  } else {
    switch(lang) {
      case 'zh-hant':
        return $(classname).html(zh_hant)
        break;
      case 'en':
        return $(classname).html(en)
        break;
      default:
        return $(classname).html(zh)
    }
  }
}