import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBjh2xd8QGUDtsX0CyFFGlHdMPDWTptY7g",
    authDomain: "pets-home-9bf9d.firebaseapp.com",
    databaseURL: "https://pets-home-9bf9d.firebaseio.com",
    projectId: "pets-home-9bf9d",
    storageBucket: "pets-home-9bf9d.appspot.com",
    messagingSenderId: "458422562717",
    appId: "1:458422562717:web:fafd4f87196bd91832c974",
    measurementId: "G-9HSKS75LJ3",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  


  export default firebase;