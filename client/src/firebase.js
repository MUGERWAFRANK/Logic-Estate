// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-96524.firebaseapp.com",
  projectId: "mern-96524",
  storageBucket: "mern-96524.appspot.com",
  messagingSenderId: "990654015391",
  appId: "1:990654015391:web:565babadea077fb24dbfaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
