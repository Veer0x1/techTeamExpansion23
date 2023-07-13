import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;












// import firebase from 'firebase/compat/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyC-XYlpdOqYLuGRbXfcUEt360x9WimeCuc",
//   authDomain: "ecellform-efb62.firebaseapp.com",
//   projectId: "ecellform-efb62",
//   storageBucket: "ecellform-efb62.appspot.com",
//   messagingSenderId: "340023243259",
//   appId: "1:340023243259:web:b1fcab6764ee9b823d9b5e",
//   measurementId: "G-DE8YTL8FZN"
// };

// firebase.initializeApp(firebaseConfig);

// export default firebase;


// import firebase from '../firebase/firebaseConfig';