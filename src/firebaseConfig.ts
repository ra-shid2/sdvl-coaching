// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrgnjpJm4OvIdwFwdRyyNJiKSQ0dFB3g0",
  authDomain: "sdvl-coaching.firebaseapp.com",
  projectId: "sdvl-coaching",
  storageBucket: "sdvl-coaching.appspot.com",
  messagingSenderId: "779807337591",
  appId: "1:779807337591:web:3938bd908de9006fac2a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore =  getFirestore(app);
export default firestore;