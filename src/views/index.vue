<template>
  <div class="index" @click="actions.show = !actions.show">
    <div class="main-ui">
      <TimeDate />
      <Weathers ref="weathers" />
    </div>
    <div class="actions" :class="{ 'show': actions.show }">
      <mu-button icon @click="switchFullScreen">
        <mu-icon :value="isFullScreen() ? 'fullscreen_exit' : 'fullscreen'"></mu-icon>
      </mu-button>
      <mu-button icon @click="refreshWeather">
        <mu-icon value="refresh"></mu-icon>
      </mu-button>
      <mu-button icon @click="toSetting">
        <mu-icon value="settings"></mu-icon>
      </mu-button>
    </div>
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
  data() {
    return {
      actions: {
        show: false
      }
    }
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
      if (this.isFullScreen()) {
        exitFullScreen()
      } else {
        requestFullScreen()
      }
    },
    refreshWeather() {
      this.$refs.weathers.getWeathers()
    },
    isFullScreen() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement
    }
  },
  computed: {},
  mounted() {
    moment.locale(this.$store.state.settings.language)
  }
}
</script>
<style lang="less">
html {
  body {
    .index {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      color: #fff;

      .main-ui {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        user-select: none;
        z-index: 1;

        .time-date {
          flex: 3;
        }

        .weathers {
          flex: 7;
        }
      }

      .actions {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .7);
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: .3s;
        transform: scale(2);

        &.show {
          visibility: visible;
          opacity: 1;
          transform: scale(1);
        }

        .mu-icon-button {
          width: 2rem;
          height: 2rem;
          .mu-icon {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (min-height: 240px) {
    font-size: 24px;
  }
  @media (min-height: 320px) {
    font-size: 32px;
  }
  @media (min-height: 360px) {
    font-size: 36px;
  }
  @media (min-height: 480px) {
    font-size: 48px;
  }
  @media (min-height: 640px) {
    font-size: 64px;
  }
  @media (min-height: 720px) {
    font-size: 72px;
  }
  @media (min-height: 800px) {
    font-size: 80px;
  }
  @media (min-height: 840px) {
    font-size: 84px;
  }
  @media (min-height: 960px) {
    font-size: 96px;
  }
  @media (min-height: 1024px) {
    font-size: 102px;
  }
  @media (min-height: 1080px) {
    font-size: 108px;
  }
  @media (min-height: 1200px) {
    font-size: 120px;
  }
  @media (min-height: 1280px) {
    font-size: 128px;
  }
  @media (min-height: 1400px) {
    font-size: 140px;
  }
  @media (min-height: 1440px) {
    font-size: 144px;
  }
  @media (min-height: 1600px) {
    font-size: 160px;
  }
  @media (min-height: 1680px) {
    font-size: 168px;
  }
}
</style>
