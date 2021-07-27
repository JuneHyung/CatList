import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from 'vue2-google-maps';
import IntroJS from 'intro.js';

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDheVWzltgbXHbdBRhTUTogeCapTgeuXRo',
        libararies: 'places',
    },
});

Vue.use(IntroJS);
import 'intro.js/introjs.css';
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
