import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZdtGBQqX7147hlbTZJ198p-AOOC0b2DM",
    authDomain: "intellgent-cart.firebaseapp.com",
    databaseURL: "https://intellgent-cart.firebaseio.com",
    projectId: "intellgent-cart",
    storageBucket: "intellgent-cart.appspot.com",
    messagingSenderId: "400899499284"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 