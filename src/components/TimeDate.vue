<template>
  <div class="time-date">
    <div class="time">
      <div class="hour">
        {{ hour }}
      </div>
      <div class="minute">
        {{ minute }}
      </div>
    </div>
    <div class="date">
      {{ date }}
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { getters } from '@/configs/i18n'

let timerId = null

export default {
  name: 'timeDate',
  data() {
    return {
      hour: '',
      minute: '',
      date: ''
    };
  },
  methods: {
    init() {
      this.getTime()
      timerId = timerId
        ? timerId
        : setInterval(_ => {
            this.getTime()
          }, 1000)
    },
    deInit() {
      timerId && clearInterval(timerId)
      timerId = null
    },
    getTime() {
      var date = moment()
      this.hour = date.format('HH')
      this.minute = date.format('mm')
      this.date = date.format(getters.map.dateFormat)
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.deInit()
  }
};
</script>
<style lang="less" scoped>
.time-date {
  display: flex;
  flex-direction: column;
  text-align: center;
  .time {
    flex: 9;
    font-size: 4.5rem;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .date  {
    flex: 1;
    font-size: .6rem;
    line-height: 1;
    white-space: nowrap;
  }
}
</style>
