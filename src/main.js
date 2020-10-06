import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$ws = new WebSocket("wss://backlwe.herokuapp.com");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
