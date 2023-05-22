import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseInitData = {
  apiKey: 'AIzaSyDEPt2kTcYXJCXmmYGbFq4tZLAFaoIyBHE',
  authDomain: 'vue-crm-ex.firebaseapp.com',
  projectId: 'vue-crm-ex',
  storageBucket: 'vue-crm-ex.appspot.com',
  messagingSenderId: '278150033701',
  appId: '1:278150033701:web:73d07bfb7909f08a692acc',
  measurementId: 'G-XV8M27L7SE',
};

const firebaseApp = initializeApp(firebaseInitData);

export const authFirebase = getAuth(firebaseApp);

export const database = getDatabase(firebaseApp);
