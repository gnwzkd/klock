<template>
  <mu-paper>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="$router.back()">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{ i18nMap.settings }}
    </mu-appbar>
    <mu-list textline="two-line">
      <!-- <mu-sub-header>Folders</mu-sub-header> -->
      <mu-list-item button @click="openDialog('apiKey')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.apiKey }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ $store.state.settings.apiKey }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="openDialog('language')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.language }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ options.language[$store.state.settings.language].name }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="openDialog('tempUnit')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.tempUnit }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ options.tempUnit[$store.state.settings.tempUnit].name }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="openDialog('location')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18nMap.location }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ options.location[$store.state.settings.location].name }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <!-- dialogs -->
    <!-- API Key -->
    <mu-dialog :title="i18nMap.apiKey" :open.sync="dialogs.apiKey.open">
      <mu-text-field full-width v-model="settings.apiKey" placeholder="OpenWeatherMap API Key" />
      <p v-html="i18nMap.apiKeyDescr"></p>
      <mu-button slot="actions" flat @click="closeDialog('apiKey')">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting('apiKey')">{{ i18nMap.save }}</mu-button>
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
      <mu-button slot="actions" flat @click="closeDialog('language')">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting('language')">{{ i18nMap.save }}</mu-button>
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
      <mu-button slot="actions" flat @click="closeDialog('tempUnit')">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting('tempUnit')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- Location -->
    <mu-dialog :title="i18nMap.location" :open.sync="dialogs.location.open">
      <mu-list>
        <mu-list-item :key="location.value" v-for="location in options.location">
          <mu-list-item-content>
            <mu-radio  :label="location.name" :value="location.value" v-model="settings.location"></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button slot="actions" flat @click="closeDialog('location')">{{ i18nMap.close }}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="saveSetting('location')">{{ i18nMap.save }}</mu-button>
    </mu-dialog>
    <!-- /dialogs -->
  </mu-paper>
</template>
<script>
import { getters } from '@/configs/i18n'

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
        location: {
          'geo': {
            get name() { return getters.map.geo },
            value: 'geo'
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
        }
      }
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
      this.dialogs[key].open = false
      this.getSettings()
    },
    // 将设置保存至 store 并关闭对话框
    saveSetting(key) {
      this.$store.commit('saveSettings', this.settings)
      this.dialogs[key].open = false
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
