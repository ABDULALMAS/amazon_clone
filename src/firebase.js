import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAY18sGXSv5cb49h2Nj_N0xVHQplY02UP0",
  authDomain: "challenge-6030f.firebaseapp.com",
  projectId: "challenge-6030f",
  storageBucket: "challenge-6030f.appspot.com",
  messagingSenderId: "562396219711",
  appId: "1:562396219711:web:2f7867059626be6c962b8a",
  measurementId: "G-EDZTLE3GLH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db,auth};