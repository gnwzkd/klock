<template>
  <div class="index" @click="toSetting">
    <TimeDate />
    <Weathers />
  </div>
</template>
<script>
import moment from 'moment'
import TimeDate from '@/components/TimeDate'
import Weathers from '@/components/Weathers'

export default {
  name: 'index',
  components: {
    TimeDate,
    Weathers
  },
  methods: {
    toSetting() {
      this.$router.push({ path: '/settings' })
    },
    switchFullScreen() {
      const requestFullScreen = _ => {
        if (this.$el.requestFullscreen) {
          this.$el.requestFullscreen()
        } else if (this.$el.webkitRequestFullScreen) {
          this.$el.webkitRequestFullScreen()
        } else {
          this.$el.mozRequestFullScreen()
        }
      }
      const exitFullScreen = _ => {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else {
          document.mozCancelFullScreen()
        }
      }
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
        exitFullScreen()
      } else {
        requestFullScreen()
      }
    }
  },
  mounted() {
    moment.locale(this.$store.state.settings.language)
  }
}
</script>
<style lang="less">
html {
  width: 100%;
  height: 100%;

  body {
    width: 100%;
    height: 100%;

    .index {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      color: #fff;
      display: flex;
      flex-direction: row;
      user-select: none;
      .time-date {
        flex: 3;
      }
      .weathers {
        flex: 7;
      }
    }
  }

  @media (min-width: 240px) {
    font-size: 24px;
  }
  @media (min-width: 320px) {
    font-size: 32px;
  }
  @media (min-width: 360px) {
    font-size: 36px;
  }
  @media (min-width: 480px) {
    font-size: 48px;
  }
  @media (min-width: 640px) {
    font-size: 64px;
  }
  @media (min-width: 720px) {
    font-size: 72px;
  }
  @media (min-width: 800px) {
    font-size: 80px;
  }
  @media (min-width: 840px) {
    font-size: 84px;
  }
  @media (min-width: 960px) {
    font-size: 96px;
  }
  @media (min-width: 1024px) {
    font-size: 102px;
  }
  @media (min-width: 1080px) {
    font-size: 108px;
  }
  @media (min-width: 1200px) {
    font-size: 120px;
  }
  @media (min-width: 1280px) {
    font-size: 128px;
  }
  @media (min-width: 1400px) {
    font-size: 140px;
  }
  @media (min-width: 1440px) {
    font-size: 144px;
  }
  @media (min-width: 1600px) {
    font-size: 160px;
  }
  @media (min-width: 1680px) {
    font-size: 168px;
  }
}
</style>
