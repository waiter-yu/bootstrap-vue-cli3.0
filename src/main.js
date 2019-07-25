import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from 'jquery'
import 'bootstrap'
import './assets/font/iconfont.css'
import './assets/css/common.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount("#app");
