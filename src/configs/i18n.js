import store from '@/store'

const i18n = {
  'zh-CN': {
    'settings': '设置',
    'apiKey': 'API Key',
    'apiKeyDescr': '如果这个 API Key 无法使用，可以在 <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> 注册帐号创建一个新的。',
    'language': '语言',
    'dateFormat': 'M 月 D 日 dddd',
    'save': '保存',
    'close': '关闭',
    'dayTemp': '日间气温',
    'nightTemp': '夜间气温',
    'humidity': '湿度'
  },
  'en-US': {
    'settings': 'Settings',
    'apiKey': 'API Key',
    'apiKeyDescr': 'If you can\'t use it, go <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> to get a new one.',
    'language': 'Language',
    'dateFormat': 'MMM Do dddd',
    'save': 'Save',
    'close': 'Close',
    'dayTemp': 'Daytime temperature',
    'nightTemp': 'Night temperature',
    'humidity': 'Humidity'
  }
}

function getMap() {
  return i18n[store.state.settings.language]
}

export default i18n

export { getMap }
