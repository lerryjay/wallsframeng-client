import firebase from "firebase/app";
import "firebase/auth";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDGvYnU52erb_CtKstp2BjDhxnTh7F15OQ",
  authDomain: "ecomerce-wallframesng.firebaseapp.com",
  projectId: "ecomerce-wallframesng",
  storageBucket: "ecomerce-wallframesng.appspot.com",
  messagingSenderId: "678474297635",
  appId: "1:678474297635:web:77748cc914f4ddef325c96"
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();