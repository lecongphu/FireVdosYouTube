import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6_Swy4LW_YkjxB7964NYRneopRncmAjU",
    authDomain: "schedulesfinder.firebaseapp.com",
    databaseURL: "https://schedulesfinder.firebaseio.com",
    projectId: "schedulesfinder",
    storageBucket: "schedulesfinder.appspot.com",
    messagingSenderId: "1047710671835",
    appId: "1:1047710671835:web:bfdcf6311942b2bf22fdfe",
    measurementId: "G-0WQDNVTRKD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const gProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
