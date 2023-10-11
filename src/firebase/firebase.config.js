// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmMnThPppIx8fwUCYWWsbFLNuaICj94Y4",
  authDomain: "restaurant-2c528.firebaseapp.com",
  projectId: "restaurant-2c528",
  storageBucket: "restaurant-2c528.appspot.com",
  messagingSenderId: "237793251227",
  appId: "1:237793251227:web:2e63a05969a25831be1b3e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
