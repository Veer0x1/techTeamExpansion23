import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
  authDomain: "techteamexpansion23.firebaseapp.com",
  projectId: "techteamexpansion23",
  storageBucket: "techteamexpansion23.appspot.com",
  messagingSenderId: "542718392377",
  appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
  measurementId: "G-39B1R2EWV2",
};

const app = initializeApp(firebaseConfig);

var database = getDatabase(app);

const getEleValue = (id) => {
  return document.getElementById(id).value;
};

// Access Firestore
const db = getFirestore(app);
const dbRef = collection(db, "ShivangMechanical"); // Creating the collection

const el = document.getElementById("Detailform");
if (el) {
  el.addEventListener("submit", submitForm); // Form submission handling
}
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return emailPattern.test(email);
}

function submitForm(e) {
  e.preventDefault();
  // Getting form field values
  var name = getEleValue("name");
  var email = getEleValue("email");
  var branch = getEleValue("branch");
  var phone = getEleValue("phone");

  // Validate email format
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Creating data object with form field values
  const data = {
    name: getEleValue("name"),
    email: getEleValue("email"),
    branch: getEleValue("branch"),
    phone: getEleValue("phone"),
  };
  // Adding data to Firestore collection
  addDoc(dbRef, data)
    .then((docRef) => {
      document.querySelector(".alert").style.display = "block"; // successful submission alert
      el.reset(); // Display success message and reset the form
    })
    .catch((error) => {
      alert("Something went wrong... :(");
    });
}
