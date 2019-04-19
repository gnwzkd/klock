<template>
  <div class="today-weather">
    <div class="day-night-temp">
      {{ i18nMap.dayTemp }}: {{ data.dayTemp }}° ↑ · {{ i18nMap.nightTemp }}: {{ data.nightTemp }}° ↓
    </div>
    <div class="current-weather">
      <img :src="`/static/images/weather_${data.weather || 'na'}.png`" alt="weather icon" class="weather">
      <span class="temprature">{{ data.currentTemp }}</span>
      <span class="unit">°{{ ({ 'metric': 'C', 'imperial': 'F' })[$store.state.settings.tempUnit] }}</span>
    </div>
    <div class="others">
      <div class="weather-desc">
        {{ data.weatherDescr }}
      </div>
      <div class="body-feeling-temp">
        {{ i18nMap.humidity }}: {{ data.humidity }}%
      </div>
    </div>
  </div>
</template>
<script>
import { getMap } from '@/configs/i18n'

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
      return getMap()
    }
  }
}
</script>
<style lang="less" scoped>
.today-weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .day-night-temp {
    font-size: 0.2rem;
    text-align: right;
  }
  .current-weather {
    display: flex;
    justify-content: center;
    align-items: center;
    .weather {
      height: 2rem;
    }
    .temprature {
      font-size: 1.6rem;
      line-height: 2rem;
    }
    .unit {
      font-size: .8rem;
      line-height: 1.4rem;
      align-self: baseline;
    }
  }
  .others {
    font-size: 0.2rem;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
