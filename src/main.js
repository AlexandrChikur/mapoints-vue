import Vue from 'vue'
import App from './App.vue'

import Constants from './plugins/Constants'

Vue.config.productionTip = false

Vue.use(Constants)
new Vue({
  render: h => h(App),
}).$mount('#app')
