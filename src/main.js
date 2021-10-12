import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from './filters/date.filter'
import MessagePlugin from './utils/message.plugin'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false
Vue.filter('filterDate', DateFilter)
Vue.use(Vuelidate)
Vue.use(MessagePlugin)

const firebaseConfig = {
  apiKey: 'AIzaSyDcRgvCZp6JaluyAnxjc4axvT267hmQssQ',
  authDomain: 'vuejs-crm-5d8d1.firebaseapp.com',
  projectId: 'vuejs-crm-5d8d1',
  storageBucket: 'vuejs-crm-5d8d1.appspot.com',
  messagingSenderId: '614013795172',
  appId: '1:614013795172:web:35413bb44d084bf4921871'
}

initializeApp(firebaseConfig)
const auth = getAuth()

let app

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
