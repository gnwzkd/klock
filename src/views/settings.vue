<template>
  <mu-paper>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="$router.back()">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{ i18nMap.settings }}
    </mu-appbar>
    <mu-list textline="two-line">
      <!-- API Key -->
      <mu-list-item button @click="openDialog('apiKey')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.apiKey }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ $store.state.settings.apiKey }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Language -->
      <mu-list-item button @click="openDialog('language')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.language }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ options.language[$store.state.settings.language].name }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Temperature Unit -->
      <mu-list-item button @click="openDialog('tempUnit')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.tempUnit }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ options.tempUnit[$store.state.settings.tempUnit].name }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Use Geolocation -->
      <mu-list-item button @click="settings.useGeoLoc = !settings.useGeoLoc; saveSetting()">
        <mu-list-item-title>{{ i18nMap.useGeoLoc }}</mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="settings.useGeoLoc" readonly></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
      <!-- Location -->
      <mu-list-item button @click="openDialog('location')" v-if="!settings.useGeoLoc">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.location }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ $store.state.settings.location }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Weather Refresh Rate -->
      <mu-list-item button @click="openDialog('weatherRefreshRate')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.weatherRefreshRate }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ options.weatherRefreshRate[$store.state.settings.weatherRefreshRate].name }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <!-- dialogs -->
    <!-- API Key -->
    <mu-dialog :title="i18nMap.apiKey" :open.sync="dialogs.apiKey.open">
      <mu-text-field full-width v-model="settings.apiKey" placeholder="OpenWeatherMap API Key" />
      <p v-html="i18nMap.apiKeyDescr"></p>
      <mu-button slot="actions" flat @click="closeDialog('apiKey'); getSettings()">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting(); closeDialog('apiKey')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- Language -->
    <mu-dialog :title="i18nMap.language" :open.sync="dialogs.language.open">
      <mu-list>
        <mu-list-item :key="language.value" v-for="language in options.language">
          <mu-list-item-content>
            <mu-radio  :label="language.name" :value="language.value" v-model="settings.language"></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button slot="actions" flat @click="closeDialog('language'); getSettings()">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting(); closeDialog('language')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- Temperature Unit -->
    <mu-dialog :title="i18nMap.tempUnit" :open.sync="dialogs.tempUnit.open">
      <mu-list>
        <mu-list-item :key="tempUnit.value" v-for="tempUnit in options.tempUnit">
          <mu-list-item-content>
            <mu-radio  :label="tempUnit.name" :value="tempUnit.value" v-model="settings.tempUnit"></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button slot="actions" flat @click="closeDialog('tempUnit'); getSettings()">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting(); closeDialog('tempUnit')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- Location -->
    <mu-dialog :title="i18nMap.location" :open.sync="dialogs.location.open">
      <mu-auto-complete :data="locationAutoCompletes" :label="i18nMap.inputCity" v-model="settings.location" @input.native="locationInputed" open-on-focus></mu-auto-complete>
      <mu-button slot="actions" flat @click="closeDialog('location'); getSettings()">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting(); closeDialog('location')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- Weather Refresh Rate -->
    <mu-dialog :title="i18nMap.weatherRefreshRate" :open.sync="dialogs.weatherRefreshRate.open" scrollable>
      <mu-list>
        <mu-list-item :key="weatherRefreshRate.value" v-for="weatherRefreshRate in options.weatherRefreshRate">
          <mu-list-item-content>
            <mu-radio  :label="weatherRefreshRate.name" :value="weatherRefreshRate.value" v-model="settings.weatherRefreshRate"></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button slot="actions" flat @click="closeDialog('weatherRefreshRate'); getSettings()">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting(); closeDialog('weatherRefreshRate')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- /dialogs -->
  </mu-paper>
</template>
<script>
import { getters } from '@/configs/i18n'
import axios from 'axios'

const autoCompleteList = []
let autoCompleteTimer = null

export default {
  name: 'settings',
  data() {
    return {
      settings: {},
      options: {
        language: {
          'zh-CN': {
            name: '中文 (简体)',
            value: 'zh-CN'
          },
          'en-US': {
            name: 'English (United States)',
            value: 'en-US'
          }
        },
        tempUnit: {
          'metric': {
            get name() { return getters.map.metric },
            value: 'metric'
          },
          'imperial': {
            get name() { return getters.map.imperial },
            value: 'imperial'
          }
        },
        weatherRefreshRate: {
          'noRefresh': {
            get name() { return getters.map.noRefresh },
            value: 'noRefresh'
          },
          'fiveMinute': {
            get name() { return getters.map.fiveMinute },
            value: 'fiveMinute'
          },
          'fifteenMinute': {
            get name() { return getters.map.fifteenMinute },
            value: 'fifteenMinute'
          },
          'halfHour': {
            get name() { return getters.map.halfHour },
            value: 'halfHour'
          },
          'oneHour': {
            get name() { return getters.map.oneHour },
            value: 'oneHour'
          },
          'threeHour': {
            get name() { return getters.map.threeHour },
            value: 'threeHour'
          },
          'oneDay': {
            get name() { return getters.map.oneDay },
            value: 'oneDay'
          }
        }
      },
      dialogs: {
        apiKey: {
          open: false
        },
        language: {
          open: false
        },
        tempUnit: {
          open: false
        },
        location: {
          open: false
        },
        weatherRefreshRate: {
          open: false
        }
      },
      locationAutoCompletes: []
    }
  },
  methods: {
    // 从 store 复制数据
    getSettings() {
      this.settings = JSON.parse(JSON.stringify(this.$store.state.settings))
    },
    // 打开对话框
    openDialog(key) {
      this.dialogs[key].open = true
    },
    // 关闭对话框并从 store 恢复数据
    closeDialog(key) {
      if (this.dialogs[key]) {
        this.dialogs[key].open = false
      }
    },
    // 将设置保存至 store 并关闭对话框
    saveSetting() {
      this.$store.commit('saveSettings', this.settings)
    },
    // 输入时获取完整城市名称
    locationInputed(e) {
      autoCompleteTimer && clearTimeout(autoCompleteTimer)
      autoCompleteTimer = setTimeout(_ => {
        if (!this.settings.location) {
          return
        }
        // 生成回调函数名
        const callback = `callback_${Date.now()}_${(Math.random() + '').split('.')[1]}`
        const script = document.createElement('script')
        window[callback] = res => {
          this.locationAutoCompletes = res

          // 手动失焦再激活刷新选项
          e.target.blur()
          this.$nextTick(_ => {
            e.target.focus()
          })
          // 完成时移除 script 节点
          document.body.removeChild(script)
          // 删除回调变量
          delete window[callback]
        }
        // JSONP 城市搜索
        script.src = `http://gd.geobytes.com/AutoCompleteCity?q=${this.settings.location}&callback=${callback}&_=${Date.now()}`
        document.body.appendChild(script)
      }, 500)
    }
  },
  computed: {
    i18nMap() {
      return getters.map
    }
  },
  mounted() {
    this.getSettings()
  }
}
</script>
