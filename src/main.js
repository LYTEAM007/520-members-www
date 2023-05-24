
import Vue from 'vue'
import { getUrlParams } from 'common/js/util.js'
import router from './router'
import App from './App.vue'
import './assets/css/index.css'
import VueAwesomeSwiper from "vue-awesome-swiper"
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueLoginTool from 'vue-login-tool'
if (process.env.VUE_APP_TITLE !== 'PROD') {
  Vue.use(vueLoginTool)
}
Vue.use(ElementUI);
Vue.prototype.bus = new Vue()
Vue.prototype.ERR_OK = 200
new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    // 获取用户名
    const username = getUrlParams().username
    if (username) {
      store.commit('SET_USERNAME', username)
      sessionStorage.setItem('username',username)
    }
  },
}).$mount('#app')
