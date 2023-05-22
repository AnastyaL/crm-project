import Vue from 'vue';
import dateFilter from '@/filters/date.filter';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '@/components/Loader.vue';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line no-unused-vars
import store from './store';
import messagePlugin from './utils/message.plugin';
import 'materialize-css/dist/js/materialize';
import './assets/index.css';
import { authFirebase } from './firebase/init';
import currencyFilter from './filters/currency.filter';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('LoaderComp', Loader);

let app;
onAuthStateChanged(authFirebase, () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
