import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  apiKey: "AIzaSyD0zkGT7Et6JNMWhGRXcZ73qE8fO5xsljw",
  authDomain: "week3-32916.firebaseapp.com",
  projectId: "week3-32916",
  storageBucket: "week3-32916.appspot.com",
  messagingSenderId: "275982043256",
  appId: "1:275982043256:web:24f21707f6833a46f3c58d",
  measurementId: "G-821XYHYEWE"

});

var db = firebaseApp.firestore();

export { db };
