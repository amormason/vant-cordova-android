import Vue from 'vue';
import Vant from 'vant';
import axios from './http/axios';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.prototype.$axios = axios;

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
