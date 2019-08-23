// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';
import Toast from 'muse-ui-toast';
import Loading from 'muse-ui-loading';
import App from './App.vue';
import router from './router';
import store from './store';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.use(Toast);
Vue.use(Loading);

store.commit('loadSettings');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
