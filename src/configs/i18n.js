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
    'maxTemp': '最高温',
    'minTemp': '最低温',
    'humidity': '湿度',
    'tempUnit': '温度单位',
    'metric': '公制，摄氏度 (°C)',
    'imperial': '英制，华氏度 (°F)',
    'getWeatherError': (httpCode, apiCode) => {
      return `获取天气失败，HTTP 状态码: ${httpCode}, API 状态码: ${apiCode}。`
    },
    'location': '位置',
    'geo': '使用定位'
  },
  'en-US': {
    'settings': 'Settings',
    'apiKey': 'API Key',
    'apiKeyDescr': 'If you can\'t use it, go <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> to get a new one.',
    'language': 'Language',
    'dateFormat': 'MMM Do dddd',
    'save': 'Save',
    'close': 'Close',
    'maxTemp': 'Maximum temperature',
    'minTemp': 'Minimum temperature',
    'humidity': 'Humidity',
    'tempUnit': 'Temperature unit',
    'metric': 'Metric (°C)',
    'imperial': 'Imperial (°F)',
    'getWeatherError': (httpCode, apiCode) => {
      return `Get weather failed，HTTP code: ${httpCode}, API code: ${apiCode}.`
    },
    'location': 'Location',
    'geo': 'Geo Location'
  }
}

const getters = {}
Object.defineProperty(getters, 'map', {
  get() {
    return i18n[store.state.settings.language]
  }
})

export default i18n

export { getters }
