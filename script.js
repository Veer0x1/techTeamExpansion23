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
const db = firebase.firestore();

const collectionName = 'SANSKRUTI_CSE';
document.getElementById("registrationForm").addEventListener("submit", submitForm);
function validateInputs(name, email, branch, phone) {
    // Validate name
    var nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        alert("Wrong Name Input | Registration Failed");
        return false;
    }
    var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(email)) {
        alert("Wrong Email Input | Registration Failed");
        return false;
    }
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Wrong Phone Input | Registration Failed");
        return false;
    }
    return true;
}
function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var branch = getElementVal("branch");
    var phone = getElementVal("phone");
    const formData = {
        name: name,
        email: emailid,
        branch: branch,
        phone: phone
    };

    var check = validateInputs(name, emailid, branch, phone);
    if (check) {


        db.collection(collectionName).add(formData);
        alert("Registration Successful");
    }

    document.getElementById("registrationForm").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
