import {
  signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { authFirebase, database } from '../firebase/init';

export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    async login({ dispatch, commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(authFirebase, email, password);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await createUserWithEmailAndPassword(authFirebase, email, password);
        const uid = await dispatch('getUid');
        await set(ref(database, `/users/${uid}/info`), {
          bill: 10000,
          name,
        });
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    getUid() {
      const user = authFirebase.currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await signOut(authFirebase);
      commit('clearInfo');
    },

  },
};
