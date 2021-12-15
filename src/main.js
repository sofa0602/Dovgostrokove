import Vue from 'vue'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', loader)
Vue.component('Paginate', Paginate)

const firebaseConfig = {
  apiKey: 'AIzaSyBz-icgY8JDSjVPtyBY5tgmqFXxvGtDYYs',
  authDomain: 'vue-examen.firebaseapp.com',
  databaseURL:
    'https://vue-examen-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vue-examen',
  storageBucket: 'vue-examen.appspot.com',
  messagingSenderId: '134341884373',
  appId: '1:134341884373:web:e533f2c4a3a87e5f78255c',
  measurementId: 'G-EENDM7TWHD',
}

firebase.initializeApp(firebaseConfig)

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
