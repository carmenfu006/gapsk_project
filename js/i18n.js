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
  getLocalLang() == 'zh' ? setLocal('lang', 'en') : setLocal('lang', 'zh')
  location.reload();
})

switchLangWording()

function switchLangWording() {
  let lang = getLocalLang();
  switch(lang) {
    case 'zh':
      $('#lang-wording').html('CHI')
      break;
    case 'en':
      $('#lang-wording').html('ENG')
      break;
    default:
      $('#lang-wording').html('CHI')
  }
}
  