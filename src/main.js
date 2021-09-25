import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from './filters/date.filter'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false
Vue.filter('filterDate', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
