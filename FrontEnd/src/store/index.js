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
    visits: [],
    todo: [],
    flag: false,
    today: '',
    openingIntro: false,
    mainIntro: false,
    todoIntro: false,
    visitIntro: false
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
    setTodoList(state, todo) {
      todo.forEach(el => {
        state.todo.push(el);
      })
    },
    toggleFlag(state, flag) {
      state.flag = flag;
    },
    setToday(state, today) {
      state.today = today;
    },
    toggleState(state, name) {
      switch (name) {
        case 'Opening':
          state.openingIntro = true;
          break;
        case 'Main':
          state.mainIntro = true;
          break;
        case 'TodoList':
          state.todoIntro = true;
          break;
        case 'Visit':
          state.visitIntro = true;
          break;
      }
      
    }
  },
  actions,
  
});
