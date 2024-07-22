// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-fcfca.firebaseapp.com",
  projectId: "mern-blog-app-fcfca",
  storageBucket: "mern-blog-app-fcfca.appspot.com",
  messagingSenderId: "469465572969",
  appId: "1:469465572969:web:e21021dfdcd6e6414de4f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);