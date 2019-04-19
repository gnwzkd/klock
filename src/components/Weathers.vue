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

export default {
  name: 'Weathers',
  components: {
    TodayWeather,
    FutureWeather
  },
  data() {
    return {
      todayWeather: {
        dayTemp: '',
        nightTemp: '',
        weather: '',
        currentTemp: '',
        weatherDescr: ''
      },
      futureWeathers: []
    }
  },
  methods: {
    getTodayWeather() {
      const promise = axios({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          q: 'Wuhan,cn',
          appid: this.$store.state.settings.apiKey,
          lang: this.$store.state.settings.language.split('-')[0],
          units: this.$store.state.settings.tempUnit
        }
      })
      promise.then(res => {
        if (res.status !== 200 || res.data.cod !== 200) {
          return
        }
        this.todayWeather = {
          dayTemp: Math.round(res.data.main.temp_max),
          nightTemp: Math.round(res.data.main.temp_min),
          weather: res.data.weather[0].icon,
          currentTemp: Math.round(res.data.main.temp),
          humidity: res.data.main.humidity,
          weatherDescr: res.data.weather[0].description
        }
      })
      return promise
    },
    getFutureWeathers() {
      const promise = axios({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        params: {
          q: 'Wuhan,cn',
          appid: this.$store.state.settings.apiKey,
          lang: this.$store.state.settings.language.split('-')[0],
          units: this.$store.state.settings.tempUnit,
          cnt: 4
        }
      })
      promise.then(res => {
        if (res.status !== 200 || res.data.cod !== '200') {
          return
        }
        this.futureWeathers = res.data.list.map((v, i) => {
          return {
            date: moment().add(1 + i, 'days').format('dddd'),
            dayTemp: Math.round(v.main.temp_max),
            nightTemp: Math.round(v.main.temp_min),
            weather: v.weather[0].icon
          }
        })
      })
      return promise
    }
  },
  mounted() {
    this.getTodayWeather()
    this.getFutureWeathers()
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

