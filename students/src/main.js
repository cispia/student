import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import "../public/animate.css"
import Axios from "axios"
import Vueaxios from "vue-axios"
Vue.use(Vueaxios,Axios);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')