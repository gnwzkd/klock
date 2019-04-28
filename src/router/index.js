import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import settings from '@/views/settings'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/settings',
      name: 'settings',
      component: settings
    }
  ]
})
