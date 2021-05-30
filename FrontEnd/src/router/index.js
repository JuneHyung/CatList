import Vue from "vue";
import VueRouter from "vue-router";

import Opening from '../views/Opening.vue';
import Main from '../views/Main.vue';

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Opening',
      component: Opening,
    },
    {
      path: '/main',
      name: 'Main', 
      component: Main,
    }
  ]
});