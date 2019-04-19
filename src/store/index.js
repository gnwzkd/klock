import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    settings: {
      apiKey: '602c6979cdc5738a6e9358add145ba16',
      language: 'zh-CN'
    }
  },
  mutations: {
    // 从 localStorage 获取设置
    loadSettings(state) {
      const settings = localStorage.getItem('klock_settings') && JSON.parse(localStorage.getItem('klock_settings'))
      if (settings) {
        state.settings = settings
      }
    },
    // 从组件接收设置并保存到 localStorage
    saveSettings(state, payload) {
      const settings = JSON.parse(JSON.stringify(payload))
      state.settings = settings
      localStorage.setItem('klock_settings', JSON.stringify(settings))
    }
  }
})

export default store
