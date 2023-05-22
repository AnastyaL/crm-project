import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  getters: {
    error: (s) => s.error,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency() {
      // const key = process.env.VUE_APP_FIXER;
      // const myHeaders = new Headers();
      // myHeaders.append('apikey', key);

      // const requestOptions = {
      //   method: 'GET',
      //   redirect: 'follow',
      //   headers: myHeaders,
      // };

      // const res = await fetch('https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,GBP', requestOptions);
      // console.log(await res.json());

      // const result = resultTemp;

      const resultTemp = {
        success: true,
        timestamp: 1673514243,
        base: 'USD',
        date: '2023-01-12',
        rates: {
          EUR: 0.93053,
          GBP: 0.82344,
        },
      };
      return resultTemp;
    },
  },
  modules: {
    auth,
    info,
  },
});
