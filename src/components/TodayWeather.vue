<template>
  <div class="today-weather">
    <div class="max-min-temp">
      {{ i18n.maxTemp }}: {{ data.maxTemp }}° ↑ · {{ i18n.minTemp }}: {{ data.minTemp }}° ↓
    </div>
    <div class="current-weather">
      <img :src="`./images/weather_${data.weather || 'na'}.png`" alt="weather icon" class="weather">
      <span class="temprature">{{ data.currentTemp }}</span>
      <span class="unit">
        °{{ ({ 'metric': 'C', 'imperial': 'F' })[$store.state.settings.tempUnit] }}
        </span>
    </div>
    <div class="others">
      <div class="weather-desc">
        {{ data.weatherDescr }}
      </div>
      <div class="body-others">
        {{ i18n.humidity }}: {{ data.humidity }}%,
        {{ i18n.windDeg([data.windDeg]) }},
        {{ i18n.windSpeed([data.windSpeed]) }}
      </div>
    </div>
  </div>
</template>
<script>
import i18n from '@/configs/i18n';

export default {
  name: 'TodayWeather',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    i18n: () => i18n,
  },
};
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
