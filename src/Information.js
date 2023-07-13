import React from 'react'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore/lite";  
// import {db} from '../../firebase/config';


export default function Information(props) {

  const [nameHide, setNameHide] = useState('hidden');
  const [branchHide, setBranchHide] = useState('hidden');
  const [emailHide, setEmailHide] = useState('hidden');
  const [phoneHide, setPhoneHide] = useState('hidden');
  const [phoneSizeHide, setPhoneSizeHide] = useState('hidden');
  const [emailCharHide, setEmailCharHide] = useState('hidden');
  const [alertmsg, setAlertmsg] = useState('hidden')

  const [profile, setProfile] = useState({
    name : "",
    branch : "",
    email : "",
    phone : "",
  })
  // let name;
  const getUserData = (event)=>{
    profile[event.target.id] = event.target.value;
    setProfile({...profile , profile});

  }
  let character = "@";
  
  const saveChanges = async(e)=>{
    e.preventDefault();
    // let numbers = /^[0-9]+$/;
    if(profile.name && profile.branch && profile.email && profile.phone && profile.phone.length===10 &&
      profile.email.includes(character) && profile.email.includes(".")){
      await addDoc(collection( props.db,"PratikCivil"),{
      
        name : profile.name,
        branch : profile.branch,
        email : profile.email,
        phone : profile.phone,
  
      }).then(function(){
        setNameHide('hidden');
        setBranchHide('hidden');
        setEmailHide('hidden');
        setPhoneHide('hidden');
        setPhoneSizeHide('hidden');
        setEmailCharHide('hidden');
        setProfile({
        
          name : "",
          branch : "",
          email : "",
          phone : "",
        })
        
        setAlertmsg('none');
        setTimeout(() => {
          setAlertmsg('hidden');
        }, 2500);
      }).catch(function(err){
        alert("Data can't be stored")
      })
    }
    else
    {
      profile.name.length===0?setNameHide('none'):setNameHide('hidden');
      profile.branch.length===0?setBranchHide('none'):setBranchHide('hidden');
      profile.email.length===0?setEmailHide('none'):setEmailHide('hidden');
      profile.phone.length===0?setPhoneHide('none'):setPhoneHide('hidden');
      profile.email.includes(character)===true?setEmailCharHide('hidden'):setEmailCharHide('none');
      profile.email.includes(".")===true?setEmailCharHide('hidden'):setEmailCharHide('none');
      if(profile.phone.length!==10 && profile.phone.length!==0)
      {
        setPhoneSizeHide('none');
      }
      if(profile.phone.length===10)
      {
        setPhoneSizeHide('hidden')
      }
      if(profile.phone.length===0)
      {
        setPhoneSizeHide('hidden');
      }
      if(profile.email.length===0)
      {
        setEmailCharHide('hidden');
      }
      
    }
  }
  

  return (
    <form> 
      <div style={{height : '60px'}}>
      <div className={`alert alert-success visually-${alertmsg} d-flex justify-content-center`} role="alert">
  Your form is Successfully Submitted
</div>
</div> 
  <div className="container">  
  
  <center>  <h1>REGISTRATION FORM</h1> </center>  
  
  <label><b> Name <strong style={{color : 'red'}}>*</strong></b> </label>   
<input type="text" autoComplete='off' id='name' value={profile.name} onChange={getUserData} name="name" placeholder= "Enter your Name" size="15" required /> 
<div style={{height : '20px'}}>
<span  className={`visually-${nameHide}`} style={{color : 'red', position: 'relative'}}>*This field is required<br/></span>
</div>
<label> <b>Branch <strong style={{color : 'red'}}>*</strong></b> </label>   
<input type="text" autoComplete='off' id='branch' value={profile.branch} onChange={getUserData} name="branch" placeholder= "Enter your Branch" size="15" required /> 
<div style={{height : '20px'}}>
<span  className={`visually-${branchHide}`} style={{color : 'red', position: 'relative'}}>*This field is required<br/></span>
</div>
<label >   
<b>Phone <strong style={{color : 'red'}}>*</strong></b>
</label>   
<input type='text'  autoComplete='off' id='phone' value={profile.phone} onChange={getUserData} name="phone" placeholder="Enter your Phone no." size="10" required/>   
<div style={{height : '20px'}}>
<span  className={`visually-${phoneHide}`} style={{color : 'red', position: 'relative'}}>*This field is required<br/></span>
<span  className={`visually-${phoneSizeHide}`} style={{color : 'red', position: 'relative'}}>*Write a valid Phone Number<br/></span>
</div>
 <label for="email"><b>Email <strong style={{color : 'red'}}>*</strong></b></label>  
 <input type="text" autoComplete='off' id='email' value={profile.email} onChange={getUserData}  placeholder="Enter your Email" name="email" required/>
 <div style={{height : '20px'}}>
 <span  className={`visually-${emailHide}`} style={{color : 'red', position: 'relative'}}>*This field is required<br/></span>
 <span  className={`visually-${emailCharHide}`} style={{color : 'red', position: 'relative'}}>*Write a valid Email id<br/></span>
 </div>
    
    <button  onClick={saveChanges} type="submit" className="registerbtn">Register</button>    
    </div>
</form>
  )
}
