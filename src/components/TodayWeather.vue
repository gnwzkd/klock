<template>
  <div class="today-weather">
    <div class="max-min-temp">
      {{ i18nMap.maxTemp }}: {{ data.maxTemp }}° ↑ · {{ i18nMap.minTemp }}: {{ data.minTemp }}° ↓
    </div>
    <div class="current-weather">
      <img :src="`./static/images/weather_${data.weather || 'na'}.png`" alt="weather icon" class="weather">
      <span class="temprature">{{ data.currentTemp }}</span>
      <span class="unit">°{{ ({ 'metric': 'C', 'imperial': 'F' })[$store.state.settings.tempUnit] }}</span>
    </div>
    <div class="others">
      <div class="weather-desc">
        {{ data.weatherDescr }}
      </div>
      <div class="body-others">
        {{ i18nMap.humidity }}: {{ data.humidity }}%, 
        {{ i18nMap.windDeg([data.windDeg]) }}, 
        {{ i18nMap.windSpeed([data.windSpeed]) }}
      </div>
    </div>
  </div>
</template>
<script>
import { getters } from '@/configs/i18n'

export default {
  name: 'TodayWeather',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    i18nMap() {
      return getters.map
    }
  }
}
</script>
<style lang="less" scoped>
.today-weather {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .max-min-temp {
    font-size: 0.5rem;
    text-align: right;
  }
  .current-weather {
    display: flex;
    justify-content: center;
    align-items: center;
    .weather {
      height: 3rem;
    }
    .temprature {
      font-size: 2.6rem;
      line-height: 3rem;
    }
    .unit {
      font-size: 1.6rem;
      line-height: 2.4rem;
      align-self: baseline;
    }
  }
  .others {
    font-size: 0.5rem;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
