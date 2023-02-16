import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0dTW8k82gPLxO15D1Fz1kwzsnIJ1XEGE",
  authDomain: "linkedin-clone-e3a7b.firebaseapp.com",
  projectId: "linkedin-clone-e3a7b",
  storageBucket: "linkedin-clone-e3a7b.appspot.com",
  messagingSenderId: "868754641955",
  appId: "1:868754641955:web:ccd43fcc647b587a058d96",
  measurementId: "G-8V7KGPLLBM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
