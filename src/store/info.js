import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/init';

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');

        const infoRef = ref(database, `/users/${uid}/info`);
        onValue(infoRef, (snapshot) => {
          const info = snapshot.val();
          commit('setInfo', info);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    info: (s) => s.info,
  },
};
