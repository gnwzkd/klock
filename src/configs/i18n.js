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
    'getWeatherError': (httpCode, apiCode, apiMessage) => {
      return `获取天气失败，HTTP 状态码: ${httpCode}${apiCode ? ', API 状态码: ' + apiCode : ''}${apiMessage ? ', 错误消息: ' + apiMessage : ''}。`
    },
    'location': '位置',
    'useGeoLoc': '使用定位',
    'inputCity': '请输入城市名称，例如: Beijing',
    'getLocationFailed': '定位失败，设置已关闭，使用城市获取天气。',
    'weatherRefreshRate': '天气刷新新频率',
    'noRefresh': '从不刷新',
    'fiveMinute': '5 分钟',
    'fifteenMinute': '15 分钟',
    'halfHour': '半小时',
    'oneHour': '1 小时',
    'threeHour': '3 小时',
    'oneDay': '一天',
    'windDeg': (deg) => {
      const degs = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]
      const words = ['北', '东北偏北', '东北', '东北偏东', '东', '东南偏东', '东南', '东南偏南', '南', '西南偏南', '西南', '西南偏西', '西', '西北偏西', '西北', '西北偏北']

      const diffs = degs.map(v => Math.abs(deg - v))
      const minIndex = diffs.indexOf(Math.min.apply(Math, diffs))
      return `${words[minIndex]}风`
    },
    'windSpeed': (speed) => {
      const levels = [
        [0, 0.2],
        [0.3, 1.5],
        [1.6, 3.3],
        [3.4, 5.4],
        [5.5, 7.9],
        [8.0, 10.7],
        [10.8, 13.8],
        [13.9, 17.1],
        [17.2, 20.7],
        [20.8, 24.4],
        [24.5, 28.4],
        [28.5, 32.6],
        [32.7, 36.9]
      ]
      let level = 0

      levels.forEach((v, i) => {
        if (speed >= v[0] && speed <= v[1]) {
          level = i
        }
      })

      return `${level} 级`
    }
  },
  'en-US': {
    'settings': 'Settings',
    'apiKey': 'API Key',
    'apiKeyDescr': 'If you can\'t use it, go <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> to get a new one.',
    'language': 'Language',
    'dateFormat': 'MMM Do dddd',
    'save': 'Save',
    'close': 'Close',
    'maxTemp': 'Max temperature',
    'minTemp': 'Min temperature',
    'humidity': 'Humidity',
    'tempUnit': 'Temperature unit',
    'metric': 'Metric (°C)',
    'imperial': 'Imperial (°F)',
    'getWeatherError': (httpCode, apiCode, apiMessage) => {
      return `Get weather failed，HTTP code: ${httpCode}${apiCode ? ', API code: ' + apiCode : ''}${apiMessage ? ', error message: ' + apiMessage : ''}.`
    },
    'location': 'Location',
    'useGeoLoc': 'Using Geolocation',
    'inputCity': 'Input city name, e.g. London',
    'getLocationFailed': 'Get current location failed, use city name to get weathers.',
    'weatherRefreshRate': 'Weather Refresh Rate',
    'noRefresh': 'Never refresh',
    'fiveMinute': '5 Minute',
    'fifteenMinute': '15 Minute',
    'halfHour': '30 Minute',
    'oneHour': '1 Hour',
    'threeHour': '3 Hour',
    'oneDay': '1 Day',
    'windDeg': (deg) => {
      const degs = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]
      const words = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']

      const diffs = degs.map(v => Math.abs(deg - v))
      const minIndex = diffs.indexOf(Math.min.apply(Math, diffs))
      return `wind: ${words[minIndex]}`
    },
    'windSpeed': (speed) => {
      return `${speed} m/s`
    }
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
