 import firebase from "firebase/app";
import{ initializeApp } from 'firebase/app';
import{ getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBS1neNURUwWU8I3yjtYNkIHIYevfJ1Zh8",
    authDomain: "iit-bhu-52d13.firebaseapp.com",
    databaseURL: "https://iit-bhu-52d13-default-rtdb.firebaseio.com",
    projectId: "iit-bhu-52d13",
    storageBucket: "iit-bhu-52d13.appspot.com",
    messagingSenderId: "635655240313",
    appId: "1:635655240313:web:a0e0d297abb0ea7d6572a8",
    measurementId: "G-P44Q6C328N"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)