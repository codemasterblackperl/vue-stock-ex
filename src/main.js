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

//styles
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

//store
import store from "./store/store";


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});