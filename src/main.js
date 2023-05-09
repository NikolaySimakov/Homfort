import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(VueScrollTo)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
