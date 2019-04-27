<template>
  <div class="future-weather">
    <span class="date">{{ data.date }}</span>
    <img :src="`/static/images/weather_${data.weather || 'na'}.png`" alt="weather icon" class="weather-icon">
    <span class="temp-diff">{{ data.minTemp }}° ~ {{ data.maxTemp }}°</span>
  </div>
</template>
<script>
export default {
  name: 'FutureWeather',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.future-weather {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .4rem;
  .weather-icon {
    width: 80%;
    height: auto;
  }
}
</style>
