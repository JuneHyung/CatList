import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catsDetail: {},
    visits:[],
  },
  getters: {
    getCatsDetail(state) {
      return state.catsDetail;
    }
  },
  mutations: {
    setCatsDetail(state, catsDetail) {
      state.catsDetail = catsDetail;
    },
    updateCustomerInfo(state, catsDetail) {
      state.catsDetail = catsDetail
    },
    deleteCatsDetail(state) {
      state.catsDetail = {};
    },
    setVisits(state, visits) {
      state.visits = visits;
    }
  },
  actions: {},
  modules: {},
});
