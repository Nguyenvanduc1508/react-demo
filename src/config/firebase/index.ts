
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-Y-9BAPydElyAFg7ZHLqYczf_hGaB1ig",
  authDomain: "imoney-3d44c.firebaseapp.com",
  projectId: "imoney-3d44c",
  storageBucket: "imoney-3d44c.appspot.com",
  messagingSenderId: "1002998856178",
  appId: "1:1002998856178:web:8ebf65868a57538533936b",
  measurementId: "G-WMNQWF2VT6"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)