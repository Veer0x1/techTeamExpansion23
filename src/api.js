// Get form elements
const express = require("express");
const ap = express();
const path = require('path');
const serverless=require('serverless-http');
const formPath = path.join(__dirname, "../dist/index.html");
const router = express.Router();
const bodyParser = require("body-parser");
ap.use(bodyParser.urlencoded({ extended: true }));

// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
    authDomain: "techteamexpansion23.firebaseapp.com",
    projectId: "techteamexpansion23",
    storageBucket: "techteamexpansion23.appspot.com",
    messagingSenderId: "542718392377",
    appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
    measurementId: "G-39B1R2EWV2"
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyBsVanbUf_Hpm5ddTYjtDIz0cP9UJsy7m8",
//   authDomain: "param-form.firebaseapp.com",
//   projectId: "param-form",
//   storageBucket: "param-form.appspot.com",
//   messagingSenderId: "3807808558",
//   appId: "1:3807808558:web:4ef425ce1d22d7291e23bf",
//   measurementId: "G-TFRJPTF46G"
//   };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Assuming you have already initialized the Firebase app (app) as shown in the previous code snippet

// Get a reference to the Firestore database
const db = getFirestore(app);

// Email validation function
function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone number validation function
function validatePhone(phone) {
  // Regular expression for phone number validation (10 digits only)
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
router.get("/",function(req,res){
    res.sendFile(formPath);
   });
router.post("/", async function (req, res) {
  // Get the values of name, branch, email, and phone inputs from the request body
  const name = req.body.name;
  const branch = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;

  if (!name || !branch || !email || !phone) {
    res.status(400).send("<script>alert('All fields are required, navigating you back to the form (click OK).');window.history.back();</script>");
    return;
  }
  // Validate email
  if (!validateEmail(email)) {
    res.status(400).send("<script>alert('Please enter a valid email address, navigating you back to the form (click OK).');window.history.back();</script>");
    return;
}

// Validate phone number
if (!validatePhone(phone)) {
    res.status(400).send("<script>alert('Please enter a valid 10-digit phone number, navigating you back to the form (click OK).');window.history.back();</script>");
    return;
}


  // If both email and phone are valid, continue with form submission
  // You can add your code here to submit the form data to Firebase Firestore
  // For example, you can use the "addDoc" function from Firebase SDK

  // Specify the name of the new collection
  const collectionName = "ParamCivil";
  const { collection, addDoc } = require("firebase/firestore");

  try {
    const docRef = await addDoc(collection(db, collectionName), {
      Fullname: name,
      Branch: branch,
      Email: email,
      Phone: phone,
    });
    console.log("Document written with ID: ", docRef.id);
    res.send("<script>alert('Document added with ID: " + docRef.id + "');window.history.back();</script>");
  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(500).send("<script>alert('Error adding document');window.history.back();</script>");
  }
});
ap.use(`/.netlify/functions/api`, router);
module.exports = ap;
module.exports.handler = serverless(ap);