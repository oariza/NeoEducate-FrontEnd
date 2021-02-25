import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgSKTn1t9mXG4C3MXEYgG_DYdnb9tulYI",
  authDomain: "neo-educate-c52d7.firebaseapp.com",
  databaseURL: "https://neo-educate-c52d7-default-rtdb.firebaseio.com",
  projectId: "neo-educate-c52d7",
  storageBucket: "neo-educate-c52d7.appspot.com",
  messagingSenderId: "309108925334",
  appId: "1:309108925334:web:7d4bfc22776df0f7db33b7"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()
const db = fire.firestore()

export {auth}
export {db}