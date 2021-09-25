import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from './filters/date.filter'
import MessagePlugin from './utils/message.plugin'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false
Vue.filter('filterDate', DateFilter)
Vue.use(Vuelidate)
Vue.use(MessagePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
