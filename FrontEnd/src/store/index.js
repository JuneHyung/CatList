import Vue from "vue";
import Vuex from "vuex";
import actions from './actions.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    catsLength: 0,
    cats: [],
    catsDetail: {},
    visits:[],
  },
  getters: {
    getCatsDetail(state) {
      return state.catsDetail;
    }
  },
  mutations: {
    setCats(state, cats) {
      this.state.catsLength = cats.length;
      cats.forEach(el => {
        state.cats.push(el);
      })
    },
    setIsLoading(state, flag) {
      state.isLoading = flag;
    },
    setCatsDetail(state, catsDetail) {
      state.catsDetail = catsDetail;
    },
    setVisits(state, visits) {
      visits.forEach(el => {
        state.visits.push(el);
      })
    },
    deleteCatsDetail(state) {
      state.catsDetail = {};
    },
  },
  actions,
  
});
