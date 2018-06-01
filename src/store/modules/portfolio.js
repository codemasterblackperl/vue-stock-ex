const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  buyStock(state, order) {
    const record = state.stocks.find(x => x.id == order.stockId);
    if (record) {
      record.quantity += order.quantity;
    } else {
      state.stocks.push({
        id: order.stockId,
        quantity: order.quantity
      });
    }
    state.funds -= order.quantity * order.price;
  },
  sellStock(state, order) {
    const record = state.stocks.find(x => x.id == order.stockId);
    if (record.quantity > order.quantity) {
      record.quantity -= order.quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += order.quantity * order.price;
  }
};

const actions = {
  sellStock({
    commit
  }, order) {
    commit("sellStock", order);
  }
};

const getters = {
  stocks(state, getters, rootState, rootGetters) {
    return state.stocks.map(stock => {
      const record = rootGetters["StocksStore/stocks"].find(x => x.id ==
        stock.id);
      return {
        id: stock.id,
        name: record.name,
        quantity: stock.quantity,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};