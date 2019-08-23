<template>
  <mu-paper class="settings-view">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="$router.back()">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{ i18n.settings }}
    </mu-appbar>
    <mu-list textline="two-line">
      <!-- API Key -->
      <mu-list-item button @click="openDialog('apiKey')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.apiKey }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ $store.state.settings.apiKey }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Language -->
      <mu-list-item button @click="openDialog('language')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.language }}</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ options.language[$store.state.settings.language].name }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Temperature Unit -->
      <mu-list-item button @click="openDialog('tempUnit')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.tempUnit }}</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ options.tempUnit[$store.state.settings.tempUnit].name }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Use Geolocation -->
      <mu-list-item button @click="settings.useGeoLoc = !settings.useGeoLoc; saveSetting()">
        <mu-list-item-title>{{ i18n.useGeoLoc }}</mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="settings.useGeoLoc" readonly></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
      <!-- Location -->
      <mu-list-item button @click="openDialog('location')" v-if="!settings.useGeoLoc">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.location }}</mu-list-item-title>
          <mu-list-item-sub-title>{{ $store.state.settings.location }}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Weather Refresh Rate -->
      <mu-list-item button @click="openDialog('weatherRefreshRate')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.weatherRefreshRate }}</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ options.weatherRefreshRate[$store.state.settings.weatherRefreshRate].name }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Burn-in Homogenize -->
      <mu-list-item
        button
        @click="settings.burnInHomogenize = !settings.burnInHomogenize; saveSetting()"
      >
        <mu-list-item-content>
          <mu-list-item-title>
            {{ i18n.burnInHomogenize }}({{ i18n.notRecommend }})
          </mu-list-item-title>
          <mu-list-item-sub-title class="wrap-line">
            {{ i18n.burnInTip }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-switch v-model="settings.burnInHomogenize" readonly></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
      <!-- Burn-in Start Time -->
      <mu-list-item button @click="openDialog('burnInTime')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.burnInTime }}</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ settings.burnInTime }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <!-- Burn-in Start Time -->
      <mu-list-item button @click="openDialog('burnInDuration')">
        <mu-list-item-content>
          <mu-list-item-title>{{ i18n.burnInDuration }}</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ options.burnInDuration[$store.state.settings.burnInDuration].name }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <!-- dialogs -->
    <!-- API Key -->
    <mu-dialog :title="i18n.apiKey" :open.sync="dialogs.apiKey.open">
      <mu-text-field full-width v-model="settings.apiKey" placeholder="OpenWeatherMap API Key" />
      <p v-html="i18n.apiKeyDescr"></p>
      <mu-button slot="actions"
        flat
        @click="closeDialog('apiKey'); getSettings()"
      >
        {{ i18n.close }}
      </mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('apiKey')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- Language -->
    <mu-dialog :title="i18n.language" :open.sync="dialogs.language.open">
      <mu-list>
        <mu-list-item :key="language.value" v-for="language in options.language">
          <mu-list-item-content>
            <mu-radio :label="language.name" :value="language.value" v-model="settings.language" />
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button
        slot="actions"
        flat
        @click="closeDialog('language'); getSettings()"
      >{{ i18n.close }}</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('language')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- Temperature Unit -->
    <mu-dialog :title="i18n.tempUnit" :open.sync="dialogs.tempUnit.open">
      <mu-list>
        <mu-list-item :key="tempUnit.value" v-for="tempUnit in options.tempUnit">
          <mu-list-item-content>
            <mu-radio :label="tempUnit.name" :value="tempUnit.value" v-model="settings.tempUnit" />
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button
        slot="actions"
        flat
        @click="closeDialog('tempUnit'); getSettings()"
      >{{ i18n.close }}</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('tempUnit')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- Location -->
    <mu-dialog :title="i18n.location" :open.sync="dialogs.location.open">
      <mu-auto-complete
        :data="locationAutoCompletes"
        :label="i18n.inputCity"
        v-model="settings.location"
        @input.native="locationInputed"
        open-on-focus
      ></mu-auto-complete>
      <mu-button
        slot="actions"
        flat
        @click="closeDialog('location'); getSettings()"
      >{{ i18n.close }}</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('location')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- Weather Refresh Rate -->
    <mu-dialog
      :title="i18n.weatherRefreshRate"
      :open.sync="dialogs.weatherRefreshRate.open"
      scrollable
    >
      <mu-list>
        <mu-list-item
          :key="weatherRefreshRate.value"
          v-for="weatherRefreshRate in options.weatherRefreshRate"
        >
          <mu-list-item-content>
            <mu-radio
              :label="weatherRefreshRate.name"
              :value="weatherRefreshRate.value"
              v-model="settings.weatherRefreshRate"
            ></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button
        slot="actions"
        flat
        @click="closeDialog('weatherRefreshRate'); getSettings()"
      >{{ i18n.close }}</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('weatherRefreshRate')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- Burn-in Time -->
    <mu-dialog
      :title="i18n.burnInTime"
      :open.sync="dialogs.burnInTime.open"
    >
      <mu-text-field
        full-width
        v-model="settings.burnInTime"
        :placeholder="i18n.burnInTime"
        type="time"
      />
      <mu-button
        slot="actions"
        flat
        @click="closeDialog('burnInTime'); getSettings()"
      >{{ i18n.close }}</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('burnInTime')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- Burn-in Duration -->
    <mu-dialog
      :title="i18n.burnInDuration"
      :open.sync="dialogs.burnInDuration.open"
      scrollable
    >
      <mu-list>
        <mu-list-item
          :key="burnInDuration.value"
          v-for="burnInDuration in options.burnInDuration"
        >
          <mu-list-item-content>
            <mu-radio
              :label="burnInDuration.name"
              :value="burnInDuration.value"
              v-model="settings.burnInDuration"
            ></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button
        slot="actions"
        flat
        @click="closeDialog('burnInDuration'); getSettings()"
      >{{ i18n.close }}</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="saveSetting(); closeDialog('burnInDuration')"
      >{{ i18n.save }}</mu-button>
    </mu-dialog>
    <!-- /dialogs -->
  </mu-paper>
</template>
<script>
import axios from 'axios';
import i18n from '@/configs/i18n';

let autoCompleteTimer = null;
const getOption = value => ({
  get name() { return i18n[value]; },
  value,
});

export default {
  name: 'Settings',
  data() {
    return {
      settings: {},
      options: {
        language: {
          'zh-CN': {
            name: '中文 (简体)',
            value: 'zh-CN',
          },
          'en-US': {
            name: 'English (United States)',
            value: 'en-US',
          },
        },
        tempUnit: {
          metric: getOption('metric'),
          imperial: getOption('imperial'),
        },
        weatherRefreshRate: {
          noRefresh: getOption('noRefresh'),
          fiveMinute: getOption('fiveMinute'),
          fifteenMinute: getOption('fifteenMinute'),
          halfHour: getOption('halfHour'),
          oneHour: getOption('oneHour'),
          threeHour: getOption('threeHour'),
          oneDay: getOption('oneDay'),
        },
        burnInDuration: {
          oneMinute: getOption('oneMinute'),
          fiveMinute: getOption('fiveMinute'),
          fifteenMinute: getOption('fifteenMinute'),
          halfHour: getOption('halfHour'),
          oneHour: getOption('oneHour'),
        },
      },
      dialogs: {
        apiKey: {
          open: false,
        },
        language: {
          open: false,
        },
        tempUnit: {
          open: false,
        },
        location: {
          open: false,
        },
        weatherRefreshRate: {
          open: false,
        },
        burnInTime: {
          open: false,
        },
        burnInDuration: {
          open: false,
        },
      },
      locationAutoCompletes: [],
    };
  },
  methods: {
    // 从 store 复制数据
    getSettings() {
      this.settings = JSON.parse(JSON.stringify(this.$store.state.settings));
    },
    // 打开对话框
    openDialog(key) {
      this.dialogs[key].open = true;
    },
    // 关闭对话框并从 store 恢复数据
    closeDialog(key) {
      if (this.dialogs[key]) {
        this.dialogs[key].open = false;
      }
    },
    // 将设置保存至 store 并关闭对话框
    saveSetting() {
      this.$store.commit('saveSettings', this.settings);
    },
    // 输入时获取完整城市名称
    locationInputed(e) {
      if (autoCompleteTimer) clearTimeout(autoCompleteTimer);
      autoCompleteTimer = setTimeout(() => {
        if (!this.settings.location) {
          return;
        }

        axios({
          method: 'POST',
          url: 'https://ass-we-can.herokuapp.com/autoCompleteCity',
          params: {
            q: this.settings.location,
          },
        })
          .then((res) => {
            if (!res.data || !res.data.length) {
              return;
            }
            this.locationAutoCompletes = res.data.map(v => `${v.name}, ${v.country}`);

            // 手动失焦再激活以刷新选项
            e.target.blur();
            this.$nextTick(() => {
              e.target.focus();
            });
          });
      }, 500);
    },
  },
  computed: {
    i18n: () => i18n,
  },
  mounted() {
    this.getSettings();
  },
};
</script>

<style lang="less" scoped>
.settings-view {
  .wrap-line {
    white-space: unset;
  }
}
</style>
