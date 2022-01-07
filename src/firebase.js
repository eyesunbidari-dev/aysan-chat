import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyARY7Tw3yHVD9OwP0XsgIrUxEx3Tp-LVvY",
    authDomain: "aysangram.firebaseapp.com",
    projectId: "aysangram",
    storageBucket: "aysangram.appspot.com",
    messagingSenderId: "390563840096",
    appId: "1:390563840096:web:a3f961b7479a83b371c305"
  }).auth();