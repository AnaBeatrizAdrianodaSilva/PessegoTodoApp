// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD7bdws-BvalZqivJ3LEuwP9caZ5kYOlc",
  authDomain: "pessegotodoapp.firebaseapp.com",
  projectId: "pessegotodoapp",
  storageBucket: "pessegotodoapp.appspot.com",
  messagingSenderId: "499107050352",
  appId: "1:499107050352:web:816aea381bacb57f19d5b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);