import Vue from 'vue'
import App from './App.vue'
//import AppStartForm from './components/AppStartForm.vue'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  store,
  //components: { App, AppStartForm },
  render: h => h(App)
}).$mount('#app')
