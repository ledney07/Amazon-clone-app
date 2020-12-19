// For Firebase JS SDK v7.20.0
import firebase from "firebase";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "clone-app-f70e3.firebaseapp.com",
  projectId: "clone-app-f70e3",
  storageBucket: "clone-app-f70e3.appspot.com",
  messagingSenderId: ">>>>>>>>>>>>>>>>>>",
  appId: "**********************",
  measurementId: "G-**************",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
