const firebaseConfig = {
  apiKey: "AIzaSyD-1YUBnqzCmeSveTC_qEqZRYlWYeQUS5E",
  authDomain: "regform-46ab8.firebaseapp.com",
  databaseURL: "https://regform-46ab8-default-rtdb.firebaseio.com",
  projectId: "regform-46ab8",
  storageBucket: "regform-46ab8.appspot.com",
  messagingSenderId: "125959196911",
  appId: "1:125959196911:web:75162fabdf45f988a94b1a"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("regForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);
function validateInputs(name, email, branch, phone) {

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

  var check = validateInputs(name, emailid, branch, phone);
  if (check) {
      saveMessages(name, emailid, branch, phone);
      alert("Registration Successful");
  }

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, branch, phone) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
      name: name,
      emailid: emailid,
      branch: branch,
      phone: phone,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

