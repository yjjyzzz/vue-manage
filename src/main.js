import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
// import './assets/less/home.less'


import store from '../store'
import http from 'axios'
import router from '../router'
import '../api/mock.js'


Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
