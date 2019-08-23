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
import moment from 'moment';
import i18n from '@/configs/i18n';

export default {
  name: 'timeDate',
  data() {
    return {
      timerId: null,
      hour: '',
      minute: '',
      date: '',
    };
  },
  methods: {
    init() {
      this.getTime();
      this.timerId = this.timerId || setInterval(() => {
        this.getTime();
      }, 1000);
    },
    deInit() {
      if (this.timerId) clearInterval(this.timerId);
      this.timerId = null;
    },
    getTime() {
      const date = moment();
      this.hour = date.format('HH');
      this.minute = date.format('mm');
      this.date = date.format(i18n.dateFormat);
    },
  },
  computed: {
    i18n: () => i18n,
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.deInit();
  },
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
