import Vue from 'vue';
import VueRouter from 'vue-router';
import L from 'leaflet';

import App from './App.vue';
import * as Vue2Leaflet from 'vue2-leaflet';
// import LeafletMap from './components/LeafletMap';
// Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(L);
Vue.use(Vue2Leaflet);
const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'app',
      component: App
  } ,]
});

Vue.router - router;
App.router = Vue.router;
new Vue({
  router,
  L,
  render: h => h(App),
}).$mount('#app')
