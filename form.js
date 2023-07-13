
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
 var firestore=firebase.firestore();
 const db=firestore.collection("MrunmayeeMechanical");
 let form = document.getElementById("participantform");



 form.addEventListener("submit",function(e){
   e.preventDefault();
   if(validateForm()){
     submitForm();
   }
 });



 function validateForm(){
   const validate=true;
   clearerror();
 const name=document.forms["form"]["name"];
 if(name.value===""){
   error("name","<em>*Name is required<em>");
   validate = false;
 }
 const branch=document.forms["form"]["branch"];
 if(branch.value===""){
    error("branch","<em>*Branch is required<em>");
    validate = false;
 }
 const email=document.forms["form"]["email"];
 if(email.value===""){
  error("email","<em>*Email is required<em>");
    validate = false;  
 }
 if(!validemail(email.value)){
    error("email","<em>*Invalid email id<em>");
    validate = false;
 }
 const cemail=document.forms["form"]["cemail"];
 if(cemail.value===""){
    error("cemail","<em>*Please confirm your email<em>");
    validate = false; 
 }
 if(cemail.value!==email.value){
    error("cemail","<em>*Email ids don't match");
    validate = false;
 }
 const phone=document.forms["form"]["phone"];
 if(phone.value===""){
    error("phone","<em>*PhoneNumber is required<em>");
    validate = false;
 }
 const cphone=document.forms["form"]["cphone"];

 if(!validphone(phone.value)){
    error("phone","<em>*Invalid PhoneNumber<em>");
    validate = false;
 }
 if(cphone.value!==phone.value){
    error("cphone","<em>*PhoneNumbers don't match");
    validate = false;
 }
 return validate;
 }




 function clearerror(){
   errors=document.getElementsByClassName("error");
   for(let item of errors){
       item.innerHTML="";
   }
}



function error(id,error){
   var ele=document.getElementById(id);
   ele.getElementsByClassName("error")[0].innerHTML=error;
  }
  


  function validemail(email) {
      const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return Email.test(email);
    }




  function validphone(phone) {
      const Phone = /^\d{10}$/; 
      return Phone.test(phone);
    }




  function submitForm(){
   let name=document.getElementById("iname").value;
   let branch=document.getElementById("ibranch").value;
   let email=document.getElementById("icemail").value;
   let phone=document.getElementById("icphoneNumber").value;

   db.doc().set({
       name:name,
       branch:branch,
       email:email,
       phone:phone
   }).then(()=>{
       console.log("data saved");
   }).catch((error)=>{
      console.log(error);
   })
   alert("form submitted successfully!");
   document.getElementById("participantform").reset();
  }






