<template>
  <div
    class="weathers"
    v-loading="isLoading"
    data-mu-loading-color="#fff"
    data-mu-loading-overlay-color="transparent"
  >
    <today-weather v-show="todayWeather.weather" :data="todayWeather" />
    <div v-show="futureWeathers.length" class="future-weathers">
      <future-weather
        v-for="(futureWeather, index) in futureWeathers"
        :key="index"
        :data="futureWeather"
      />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import TodayWeather from './TodayWeather.vue';
import FutureWeather from './FutureWeather.vue';
import i18n from '@/configs/i18n';

export default {
  name: 'Weathers',
  components: {
    TodayWeather,
    FutureWeather,
  },
  data() {
    return {
      timerId: null,
      todayWeather: {
        maxTemp: '',
        minTemp: '',
        weather: '',
        currentTemp: '',
        weatherDescr: '',
      },
      futureWeathers: [],
      isLoading: false,
    };
  },
  methods: {
    getLocation() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
          reject();
        }
      })
        .catch(() => {
          this.$toast.error(i18n.getLocationFailed);
          const settings = JSON.parse(JSON.stringify(this.$store.state.settings));
          settings.useGeoLoc = false;
          this.$store.commit('saveSettings', settings);
        });
    },
    getWeathers(loc) {
      this.isLoading = true;

      const params = {
        appid: this.$store.state.settings.apiKey,
        lang: this.$store.state.settings.language.split('-')[0],
        units: this.$store.state.settings.tempUnit,
        _: Date.now(),
      };

      // 位置存在则使用位置获取天气
      if (loc) {
        params.lat = loc.coords.latitude;
        params.lon = loc.coords.longitude;
      } else {
        params.q = this.$store.state.settings.location;
      }

      return axios({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        params,
      })
        .then((res) => {
          this.isLoading = false;

          if (res.status !== 200 || res.data.cod !== '200') {
            this.$toast.error(
              i18n.getWeatherError(
                res.status,
                res.data.cod,
                res.data.message,
              ),
            );
            return;
          }

          const recent = res.data.list[0];

          this.todayWeather = {
            maxTemp: Math.round(recent.main.temp_max),
            minTemp: Math.round(recent.main.temp_min),
            weather: recent.weather[0].icon,
            currentTemp: Math.round(recent.main.temp),
            humidity: recent.main.humidity,
            weatherDescr: recent.weather[0].description,
            windDeg: recent.wind.deg,
            windSpeed: recent.wind.speed,
          };

          const futures = res.data.list.filter(
            v => moment(v.dt * 1000).date() !== moment().date()
              && v.dt * 1000 > Date.now(),
          );
          const futureDays = {};
          futures.forEach((v) => {
            const date = moment(v.dt * 1000).date();
            if (futureDays[date]) {
              futureDays[date].push(v);
            } else {
              futureDays[date] = [];
            }
          });

          this.futureWeathers = Object.values(futureDays)
            .map((v, i) => ({
              date: moment()
                .add(1 + i, 'days')
                .format('dddd'),
              maxTemp: Math.round(
                Math.max(...v.map(value => value.main.temp_max)),
              ),
              minTemp: Math.round(
                Math.min(...v.map(value => value.main.temp_min)),
              ),
              weather: (() => {
                const table = {};
                v.forEach((value) => {
                  const { icon } = value.weather[0];
                  table[icon] = table[icon] ? table[icon] + 1 : 1;
                });
                const max = Math.max(...Object.values(table));
                return Object.keys(table).find(key => table[key] === max);
              })(),
            }))
            .slice(0, 4);
        })
        .catch((err) => {
          this.$toast.error(
            i18n.getWeatherError(
              err.request.status,
              err.response && err.response.data && err.response.data.cod,
              err.response && err.response.data && err.response.data.message,
            ),
          );
        });
    },
    initWeathers() {
      // 根据设置使用不同方式获取天气
      if (this.$store.state.settings.useGeoLoc) {
        this.getLocation()
          .then(loc => this.getWeathers(loc));
      } else {
        this.getWeathers();
      }
    },

  },
  computed: {
    i18n: () => i18n,
  },
  mounted() {
    this.initWeathers();

    const timeMap = {
      noRefresh: Infinity,
      fiveMinute: 300000,
      fifteenMinute: 900000,
      halfHour: 1800000,
      oneHour: 3600000,
      threeHour: 10800000,
      oneDay: 86400000,
    };

    this.timerId = setInterval(() => {
      this.initWeathers();
    }, timeMap[this.$store.state.settings.weatherRefreshRate]);
  },
  destroyed() {
    clearInterval(this.timerId);
  },
};
</script>
<style lang="less" scoped>
.weathers {
  display: flex;
  flex-direction: column;
  position: relative;

  .today-weather {
    flex: 6;
  }

  .future-weathers {
    flex: 4;
    display: flex;
    justify-content: space-between;
  }

  /deep/ .mu-loading-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
