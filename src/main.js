import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
require("./assets/main.scss")


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
