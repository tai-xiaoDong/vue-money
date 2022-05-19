import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from './components/Nav.vue'

Vue.config.productionTip = false//关闭提示

Vue.component('Nav', Nav)//注意component的书写方式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
