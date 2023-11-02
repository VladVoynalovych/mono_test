// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-m35OOtwNZO12ScDxPyAaO1LyuTtXbMY",
  authDomain: "mono-test-c75ab.firebaseapp.com",
  projectId: "mono-test-c75ab",
  storageBucket: "mono-test-c75ab.appspot.com",
  messagingSenderId: "1095123794144",
  appId: "1:1095123794144:web:2a3ef2405ade319b09b885",
  measurementId: "G-SBZ682ZKCN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = getFirestore();
export default db;
