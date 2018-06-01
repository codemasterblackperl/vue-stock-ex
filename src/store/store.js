import Vue from "vue";
import Vuex from "vuex";
import StocksStore from "./modules/stocks";
import PortfolioStore from "./modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    StocksStore,
    PortfolioStore
  }
});