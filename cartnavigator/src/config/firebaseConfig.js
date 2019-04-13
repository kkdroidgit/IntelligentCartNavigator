import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD_ioSg17gO2QDmHnAd98htWXvcuVHe5r4",
    authDomain: "intelligentcartnavigator.firebaseapp.com",
    databaseURL: "https://intelligentcartnavigator.firebaseio.com",
    projectId: "intelligentcartnavigator",
    storageBucket: "intelligentcartnavigator.appspot.com",
    messagingSenderId: "746708435316"
  };
firebase.initializeApp(config);
firebase.firestore.settings({ timestampsInSnapshots : true});

export default firebase;

