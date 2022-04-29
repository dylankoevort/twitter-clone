import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8l3Rt_RShXzCytLKAzvCd4CbTnwzUPVI",
    authDomain: "twitter-clone-33c44.firebaseapp.com",
    projectId: "twitter-clone-33c44",
    storageBucket: "twitter-clone-33c44.appspot.com",
    messagingSenderId: "529566287939",
    appId: "1:529566287939:web:cbaf0fb03c17224cd6acf6",
    measurementId: "G-6VCRGX4DNT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;