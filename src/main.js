// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/store'
import axios from './http'

Vue.use(MintUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: {App},
  template: '<App/>'
});
