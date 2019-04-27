<template>
  <div class="weathers">
    <TodayWeather v-show="todayWeather.weather" :data="todayWeather" />
    <div v-show="futureWeathers.length" class="future-weathers">
      <FutureWeather v-for="(futureWeather, index) in futureWeathers" :key="index" :data="futureWeather" />
    </div>
  </div>
</template>
<script>
import TodayWeather from './TodayWeather'
import FutureWeather from './FutureWeather'
import axios from 'axios'
import moment from  'moment'
import { getters } from '@/configs/i18n'

export default {
  name: 'Weathers',
  components: {
    TodayWeather,
    FutureWeather
  },
  data() {
    return {
      todayWeather: {
        maxTemp: '',
        minTemp: '',
        weather: '',
        currentTemp: '',
        weatherDescr: ''
      },
      futureWeathers: []
    }
  },
  methods: {
    getWeathers() {
      const promise = axios({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        params: {
          q: 'Wuhan,cn',
          appid: this.$store.state.settings.apiKey,
          lang: this.$store.state.settings.language.split('-')[0],
          units: this.$store.state.settings.tempUnit
        }
      })
      promise.then(res => {
        if (res.status !== 200 || res.data.cod !== '200') {
          this.$toast.error(getters.map.getWeatherError(res.status, res.data.cod))
          return
        }
        
        const recent = res.data.list.filter(v => v.dt < Date.now()).pop()

        this.todayWeather = {
          maxTemp: Math.round(recent.main.temp_max),
          minTemp: Math.round(recent.main.temp_min),
          weather: recent.weather[0].icon,
          currentTemp: Math.round(recent.main.temp),
          humidity: recent.main.humidity,
          weatherDescr: recent.weather[0].description
        }

        const futures = res.data.list.filter(v => (moment(v.dt * 1000).date() !== moment().date() && (v.dt * 1000) > Date.now()))
        const futureDays = {}
        futures.forEach(v => {
          const date = moment(v.dt * 1000).date()
          if (futureDays[date]) {
            futureDays[date].push(v)
          } else {
            futureDays[date] = []
          }
           
        })

        const futureDaysArr = []
        for (let k in futureDays) {
          futureDaysArr.push(futureDays[k])
        }
        this.futureWeathers = futureDaysArr.map((v, i) => {
          return {
            date: moment().add(1 + i, 'days').format('dddd'),
            maxTemp: Math.round(Math.max.apply(Math, v.map(v => v.main.temp_max))),
            minTemp: Math.round(Math.min.apply(Math, v.map(v => v.main.temp_min))),
            weather: (_ => {
              const table = {}
              v.forEach(v => {
                const icon = v.weather[0].icon
                table[icon] = table[icon] ? table[icon] + 1 : 1
              })
              const counts = []
              for (let k in table) {
                counts.push(table[k])
              }
              const max = Math.max.apply(Math, counts)
              for (let k in table) {
                if (table[k] === max) {
                  return k
                }
              }
            })()
          }
        }).slice(0, 4)
      })
      return promise
    }
  },
  mounted() {
    this.getWeathers()
  }
}
</script>
<style lang="less" scoped>
.weathers {
  display: flex;
  flex-direction: column;
  .today-weather {
    flex: 6;
  }
  .future-weathers {
    flex: 4;
    display: flex;
    justify-content: space-between;
  }

}
</style>

