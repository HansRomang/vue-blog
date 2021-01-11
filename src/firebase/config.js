import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8kuoUNvez-cn7vPxWn6iDgdHrs_tP2bc",
  authDomain: "vue-firebase-site-90e59.firebaseapp.com",
  projectId: "vue-firebase-site-90e59",
  storageBucket: "vue-firebase-site-90e59.appspot.com",
  messagingSenderId: "1000670413850",
  appId: "1:1000670413850:web:d4201880095967d8bafda3"
};

//initilizing firebase..
firebase.initializeApp(firebaseConfig);

//initializing firestore services..
const projectFirestore = firebase.firestore();

//Setting up the Firebase ability to use timestamps (envoke to use a timestamp!)
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, timeStamp }
