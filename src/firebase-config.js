import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6_Swy4LW_YkjxB7964NYRneopRncmAjU",
  authDomain: "j2video.netlify.app",
  projectId: "schedulesfinder",
  storageBucket: "schedulesfinder.appspot.com",
  messagingSenderId: "1047710671835",
  appId: "1:1047710671835:web:0fa413753343d77522fdfe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const gProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
