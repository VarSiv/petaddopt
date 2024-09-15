// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "pet-adopt-2759f.firebaseapp.com",
  projectId: "pet-adopt-2759f",
  storageBucket: "pet-adopt-2759f.appspot.com",
  messagingSenderId: "977774410950",
  appId: "1:977774410950:web:c0261657dc3a1ae9e4abc7",
  measurementId: "G-5SV6HWQD37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);