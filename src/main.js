// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import { database } from '@/services/firebase'

Vue.use(Vuefire)
Vue.use(VueResource)
Vue.use(router)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '5px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: database.ref('cat').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: {
    App
  }
})
