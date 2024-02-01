import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKxcwgnedi8sE4snLyy5AEz870OgGHJhk",
    authDomain: "online-resume-builder-6eb02.firebaseapp.com",
    projectId: "online-resume-builder-6eb02",
    storageBucket: "online-resume-builder-6eb02.appspot.com",
    messagingSenderId: "494033539437",
    appId: "1:494033539437:web:bbeb25b6734c6216e7ca64"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();