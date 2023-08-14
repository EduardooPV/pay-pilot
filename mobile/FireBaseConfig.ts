import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkBZf23T3wVp7TvCJZSCTKhlQXLbRNxGg",
  authDomain: "pay-pilot.firebaseapp.com",
  projectId: "pay-pilot",
  storageBucket: "pay-pilot.appspot.com",
  messagingSenderId: "487140739070",
  appId: "1:487140739070:web:0e035865de54273eda22af",
  measurementId: "G-SLCJ1BL17W",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH: Auth = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
