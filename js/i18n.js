translateWeb(
  '.i18n-1',
  '報名總覽',
  'Registration Overview'
)
translateWeb(
  '.i18n-2',
  'GAPSK幼稚園普通話水平考試(第67屆)',
  'GAPSK Kindergarten Mandarin Proficiency Test (67th Session)'
)
translateWeb(
  '.i18n-3',
  '考試日期',
  'Exam date'
)
translateWeb(
  '.i18n-4',
  '考試地點',
  'Exam location'
)
translateWeb(
  '.i18n-5',
  '報名人數 :',
  'Number of applicants:'
)
translateWeb(
  '.i18n-6',
  '已滿',
  'Full'
)
translateWeb(
  '.i18n-7',
  '剩餘少量名額',
  'Few places left'
)
translateWeb(
  '.i18n-8',
  '報名',
  'Register'
)
translateWeb(
  '.i18n-9',
  '登入/註冊',
  'Login/Register'
)
translateWeb(
  '.i18n-10',
  '監護人聯絡電話',
  'Guardian contact number'
)
translateWeb(
  '.i18n-11',
  '請輸入電話號碼',
  'Enter contact number',
  true
)
translateWeb(
  '.i18n-12',
  '考生身份證頭4位數字',
  "The first 4 digits of the candidate's ID card"
)
translateWeb(
  '.i18n-13',
  '請輸入考生身份證頭4位數字',
  "First 4 digits of the candidate's ID card",
  true
)
translateWeb(
  '.i18n-14',
  '忘記密碼',
  'Forgot password'
)
translateWeb(
  '.i18n-15',
  '短信驗證碼',
  'SMS verification code'
)
translateWeb(
  '.i18n-16',
  '請輸入驗證碼',
  'Code',
  true
)
translateWeb(
  '.i18n-17',
  '獲取短信驗證碼',
  'Get SMS verification code'
)
translateWeb(
  '.i18n-18',
  '您可以通過以下方式找回密碼',
  'You can retrieve your password in the following ways'
)
translateWeb(
  '.i18n-19',
  '提交',
  'Submit'
)
translateWeb(
  '.i18n-20',
  '找不到此賬戶',
  'This account cannot be found'
)
translateWeb(
  '.i18n-21',
  '請檢查輸入資料是否正確。如無法找回可聯繫客服電郵: info@gapsk.org 或Whatsapp: 6152 6833',
  'Please check whether the entered information is correct. If you cannot retrieve it, please contact customer service via email: info@gapsk.org or Whatsapp: 6152 6833'
)
translateWeb(
  '.i18n-22',
  '請重試',
  'Please try again'
)
translateWeb(
  '.i18n-23',
  '提交成功',
  'Submitted successfully'
)
translateWeb(
  '.i18n-24',
  '我們已經重設你的密碼，請查閱你的手機短信！',
  'We have reset your password, please check your mobile phone message!'
)
translateWeb(
  '.i18n-25',
  '返回登入',
  'Return to login'
)
translateWeb(
  '.i18n-26',
  '按“登入/註冊”即代表你已閱讀及明白有關註冊的',
  'By clicking "Login/Register" you are deemed to have read and understood the relevant registration instructions '
)
translateWeb(
  '.i18n-27',
  '《GAPSK申請條款及細則》',
  '(GAPSK Application Terms and Conditions)'
)
translateWeb(
  '.i18n-28',
  '、',
  ','
)
translateWeb(
  '.i18n-29',
  '《私隱政策聲明》',
  '(Privacy Policy Statement)'
)
translateWeb(
  '.i18n-30',
  '及',
  'and'
)
translateWeb(
  '.i18n-31',
  '《收集個人資料聲明》',
  'Personal Information Collection Statement'
)
translateWeb(
  '.i18n-32',
  '，并同意接受其約束',
  ', and agree to be bound by it'
)
translateWeb(
  '.i18n-33',
  '確認',
  'Confirm'
)


translateWeb(
  '.i18n-temp-1',
  '8月2023',
  'August 2023'
)
translateWeb(
  '.i18n-temp-2',
  '2023年8月20日 星期四',
  'Thursday, August 20, 2023'
)
translateWeb(
  '.i18n-temp-3',
  '2023年8月27日 星期日',
  'Sunday, August 27, 2023'
)

$('#lang-setting').on('click', function() {
  getLocalLang() == 'zh-hant' ? setLocal('lang', 'en') : setLocal('lang', 'zh-hant')
  location.reload();
})

switchLangWording()

function switchLangWording() {
  let lang = getLocalLang();
  switch(lang) {
    case 'zh-hant':
      $('#lang-wording').html('CHI')
      break;
    case 'en':
      $('#lang-wording').html('ENG')
      break;
    default:
      $('#lang-wording').html('CHI')
  }
}
  