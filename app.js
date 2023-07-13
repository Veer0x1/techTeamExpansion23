const firebaseConfig = {
    apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
    authDomain: "techteamexpansion23.firebaseapp.com",
    projectId: "techteamexpansion23",
    storageBucket: "techteamexpansion23.appspot.com",
    messagingSenderId: "542718392377",
    appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
    measurementId: "G-39B1R2EWV2"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()

  const db=firestore.collection("AshvitaMechanical");
  let submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    //Get Form Values
    let Name = document.getElementById("name").value;
    let branch = document.getElementById("branch").value; 
    let email = document.getElementById("email").value;
    let phno = document.getElementById("phno").value;

    //Save Form Data To Firebase
    db.doc()
      .set({
        Name: Name,
        Branch: branch,
        Email: email,
        Contact: phno,
      })
      .then(() => {
        console.log("data saved")
       })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");

  });
