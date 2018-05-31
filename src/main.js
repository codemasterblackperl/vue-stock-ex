import Vue from 'vue';
import App from './App.vue';

//router
import VueRouter from "vue-router";
import {
  routes
} from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

//bootstrap
import Bootstrap from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(Bootstrap);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});