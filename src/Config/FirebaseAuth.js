// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDcQ-aEIVwG8ROR-yZQw16dOJ3SYXxXVsA",
  authDomain: "react-2020-final.firebaseapp.com",
  databaseURL: "https://react-2020-final.firebaseio.com",
  projectId: "react-2020-final",
  storageBucket: "react-2020-final.appspot.com",
  messagingSenderId: "354647332318",
  appId: "1:354647332318:web:e7ece839cf0e95f165b94f",
  measurementId: "G-F8RFNSRYEH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
