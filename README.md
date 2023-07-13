# Task: Create a Form and Store Data in Firestore

## Description

The task involves creating a form with specific fields and submitting the form. On submission, the data should be stored in a [Firestore database](https://firebase.google.com/docs/firestore). Yor are also required to create a collection with your first name and branch, following a specific naming convention (mentioned below). I can add some good resources for firebase and form but I want to test your Googling skills. But wherever you fill confused, feel free to ask in WhatsApp group.

## Task Requirements

1. Create a form with the following fields:
   - **Name**: A field for participants to enter their full name.
   - **Branch**: A field for participants to enter their branch of study.
   - **Email**: A field for participants to enter their email address.
   - **PhoneNumber**: A field for participants to enter their phone number.

2. All fields mentioned above are required, meaning participants must provide information for each field before submitting the form.

3. Implement form validation to ensure that participants provide valid data. For example, validate that the email address follows the proper format, and ensure the phone number is in a valid format as well.

4. Design and implement a user interface (UI) for the form. Participants are free to choose any framework they prefer for building the UI.

5. Configure Firebase Firestore to store the form data. You will provide the participants with the Firebase configuration file that they will need to integrate into their solution.

6. Participants should create a collection in Firestore with the following naming convention:
   - Collection Name: FirstNameBranch
   - For example, if a participant's name is "Balveer Singh Rao" and their branch is "Electrical Engineering" the collection name would be "BalveerElectrical".

7. Once participants complete the task,host the form on services like (netlify or vercel) and raise a pull request on this repository with the link of your hosted site in description.

## Deadline

The deadline for completing this task is the end of the day (EOD) on July 13th.

## Additional Notes

- Participants are free to use any framework of their choice for building the form and UI. They can select from popular options such as React, Angular, Vue.js, or any other framework they are comfortable with.

- We encourage you to write clean and well-documented code. This will make reviewing your submissions easier and allow for better evaluation of your skills.
- Its optional but if you use [react hook form](https://www.react-hook-form.com), it would make form handling and validation lot simpler.

## Firestore config file
```
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
```
or if you want to use CDN here is the script
```
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```

## FAQ
Q: How would you know wheather you have succesfully connected to database or not?<br>
A: When we add document to firestore, in response we get a document id, so if you're getting this id that means you have succesfully        connected to database.
