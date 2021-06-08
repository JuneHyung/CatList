import Vue from "vue";
import VueRouter from "vue-router";

import Opening from '../views/Opening.vue';
import Main from '../views/Main.vue';
import Visit from '../views/Visit.vue';

/** 같은 페이지에서 같은 페이지로 $router.push 한 오률를 처리함 (ex : 홈페이지에서 홈 로고를 클릭한 경우) */
const originalPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(()=>{
  return window.location.reload()
  })
};

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
    },
    {
      path: '/visit',
      name: 'Visit', 
      component: Visit,
    }
  ]
});