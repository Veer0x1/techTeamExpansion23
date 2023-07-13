import React from 'react'
import Information from './Information'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
// import {getAnalytics} from "firebase/analytics";

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDKXEJtmHGQbrVkn0upD5YCVoweE0y8x4E",
    authDomain: "informationform-fcc7b.firebaseapp.com",
    databaseURL: "https://informationform-fcc7b-default-rtdb.firebaseio.com",
    projectId: "informationform-fcc7b",
    storageBucket: "informationform-fcc7b.appspot.com",
    messagingSenderId: "128214586890",
    appId: "1:128214586890:web:567212646a179b7f59f1f3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <div>
      <Information db={db}/>
    </div>
  )
}
