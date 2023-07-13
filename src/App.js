
import './App.css';

import React,{useState} from 'react';

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import Contact from './components/Contact';
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
    authDomain: "techteamexpansion23.firebaseapp.com",
    projectId: "techteamexpansion23",
    storageBucket: "techteamexpansion23.appspot.com",
    messagingSenderId: "542718392377",
    appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
    measurementId: "G-39B1R2EWV2"
  };
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);
  
return (
  <>
   
  <div className="app">
  <Contact db={db}></Contact>
  </div>
  
  </>
);
}

export default App;
