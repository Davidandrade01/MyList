

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2ggzVWMMBs2GgyMZz25ELXrd0rGc8DI",
  authDomain: "my-list-6d148.firebaseapp.com",
  projectId: "my-list-6d148",
  storageBucket: "my-list-6d148.appspot.com",
  messagingSenderId: "135125823150",
  appId: "1:135125823150:web:f67752371edefedaca873f",
  measurementId: "G-5KGDMXC46F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const db=getFirestore(app)

export {db,auth};