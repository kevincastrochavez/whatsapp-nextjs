import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVinwFM9K2dMfAG4XF-k3Kr658IWGcYBo',
  authDomain: 'whatsapp2-3819a.firebaseapp.com',
  projectId: 'whatsapp2-3819a',
  storageBucket: 'whatsapp2-3819a.appspot.com',
  messagingSenderId: '371778043356',
  appId: '1:371778043356:web:61dd50b570595521e7e319',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
