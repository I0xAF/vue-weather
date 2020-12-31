import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify'
import Loader from '@/components/Loader'
import router from './router'

Vue.config.productionTip = false

Vue.component('Loader', Loader)

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
