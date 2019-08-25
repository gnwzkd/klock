<template>
  <div v-if="show" class="burn-in" />
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
import moment from 'moment';

export default {
  name: 'BurnIn',
  data() {
    return {
      timerId: null,
      show: false,
    };
  },
  methods: {
    setBurnIn() {
      if (!this.$store.state.settings.burnInHomogenize) return false;

      const { settings } = this.$store.state;
      const now = moment();

      if (!settings.burnInTime) return false;

      const todayStartTime = moment(`${now.format('YYYY-MM-DD')} ${settings.burnInTime}`);
      const durationMinute = ({
        oneMinute: 1,
        fiveMinute: 5,
        fifteenMinute: 15,
        halfHour: 30,
        oneHour: 60,
      })[settings.burnInDuration];
      const todayEndTime = todayStartTime.clone().add(durationMinute, 'minutes');

      if (todayStartTime.isAfter()) {
        const startLeftTime = todayStartTime.diff(moment());
        this.timerId = setTimeout(this.setBurnIn, startLeftTime);
        return false;
      }

      if (todayStartTime.isBefore() && todayEndTime.isAfter()) {
        const endLeftTime = todayEndTime.diff(moment());
        this.timerId = setTimeout(this.setBurnIn, endLeftTime);
        this.show = true;
        return false;
      }

      if (todayEndTime.isBefore()) {
        const tomorrowStartTime = todayStartTime.clone().add(1, 'days');
        const nextLeftTime = tomorrowStartTime.diff(moment());
        this.timerId = setTimeout(this.setBurnIn, nextLeftTime);
        this.show = false;
      }

      return false;
    },
    cancelBurnIn() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    },
  },
  mounted() {
    this.setBurnIn();
  },
  destroyed() {
    this.cancelBurnIn();
  },
};
</script>

<style lang="less" scoped>
.burn-in {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: test .2s step-start infinite;
  z-index: 1;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAIAAAAW4yFwAAAAEEl\
  EQVQI12P4//8/AwMDAwAR9gL+Fmdk3AAAAABJRU5ErkJggg==");

  @keyframes test {
    0% {
      background-position-y: 0;
    }
    50% {
      background-position-y: 1px;
    }
    100% {
      background-position-y: 2px;
    }
  }

}
</style>
