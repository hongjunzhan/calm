// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/font.js'
import api from './api/index.js'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import MuseUI from 'muse-ui'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
