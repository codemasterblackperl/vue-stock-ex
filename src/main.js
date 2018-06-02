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

//vue resource
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-stock-ex.firebaseio.com/";

//styles
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

//store
import store from "./store/store";


//filters
Vue.filter("currency", (value) => {
  return '$' + value.toLocaleString();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});