import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from './filters/date.filter'
import Vuelidate from 'vuelidate'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false
Vue.filter('filterDate', DateFilter)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
