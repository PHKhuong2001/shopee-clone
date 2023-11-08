// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEiWF_xEsBSH37uvytNNKDDz6-OFlRYU",
  authDomain: "shopee-clone-33da8.firebaseapp.com",
  projectId: "shopee-clone-33da8",
  storageBucket: "shopee-clone-33da8.appspot.com",
  messagingSenderId: "1065312098969",
  appId: "1:1065312098969:web:4efb3b13ce0b40d4cd7608",
  measurementId: "G-S552LWRY1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const fbAuthProvider = new FacebookAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();

export {fbAuthProvider,googleAuthProvider,authentication}
