import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKf88fUD1eBI2u5zzUwHIjMFvJN9G9ooM",
  authDomain: "form-ade86.firebaseapp.com",
  projectId: "form-ade86",
  storageBucket: "form-ade86.appspot.com",
  messagingSenderId: "380640679113",
  appId: "1:380640679113:web:a1ad9b688d01c2d9e5e918",
  measurementId: "https://form-ade86-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
