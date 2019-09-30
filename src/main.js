import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.component('Loading', Loading); // set loader as global component

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
