import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from './filters/date.filter'
import MessagePlugin from './utils/message.plugin'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase-config'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false
Vue.filter('filterDate', DateFilter)
Vue.use(Vuelidate)
Vue.use(MessagePlugin)

let app
onAuthStateChanged(auth, (user) => {
  console.log('main', 'user = ', user, 'app = ', app)
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
