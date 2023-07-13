import React from 'react'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore/lite";  
// import {db} from '../../firebase/config';

export default function Information(props) {
  const [profile, setProfile] = useState({
    name : "",
    branch : "",
    email : "",
    phone : "",
  })
  //error setting
  const [formError, setFormError] = useState({});
  // let name;
  const getUserData = (event)=>{
    profile[event.target.id] = event.target.value;
    setProfile({...profile , profile});
    
  }


  const validateForm = () => {
    let err = {}

    if (profile.name === '') {
      err.name = 'Name is required!'
    }
    if (profile.email === '') {
      err.email = 'Email is required!'
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regex.test(profile.email)) {
        err.email = 'Email not valid!'
      }
    }
    if(profile.branch==='')
    {
      err.branch='Branch is required!'
    }
    if(profile.phone==='')
    {
      err.phone='phone no is required!'
    }
    else
    {
      if(profile.phone.length<10)
      {
        err.phone='please fill valid  phone no'
      }
    }


    

    setFormError({ ...err })

    return Object.keys(err).length < 1;
  }



  
  const saveChanges = async(e)=>{
    e.preventDefault();
    let isValid = validateForm()
      if(isValid){
      await addDoc(collection( props.db,"RadhikaCivil"),{
      
        name : profile.name,
        branch : profile.branch,
        email : profile.email,
        phone : profile.phone,
  
      })
        alert('Submitted successfully!')
        
      } 
  }
  

  return (
   
<form>  
   
<div className="container" > <h2> Student Registeration Form</h2> 
</div> 
 <div className="container mt-3"> 
<div className="mb-3" >
<h3>Name </h3> 

<input type="text" className="name" autoComplete='off' id='name' value={profile.name} onChange={getUserData} name="name" placeholder= "Enter your Name" size="30vw" required/>
<div><span className='non-valid'>{formError.name}</span></div>
</div>

<div className="mb-3" >
<h3>Branch </h3> 
<input type="text" className="name" autoComplete='off' id='branch' value={profile.branch} onChange={getUserData} name="branch" placeholder= "Enter your Branch" size="30vw" required />
<div><span className='non-valid'>{formError.branch}</span></div>
</div> 
 
<div className="mb-3" >
<h3>Phone No.</h3>  
<input type="text" className="name" autoComplete='off' pattern="\d{3}[\-]\d{3}[\-]\d{4}" id='phone' value={profile.phone} onChange={getUserData} name="phone" placeholder="phone no." size="30vw" required/>   
<div><span className='non-valid'>{formError.phone}</span></div>
</div>

<div className="mb-3" >
<h3>Email Address</h3> 
 <input type="text" className="name" autoComplete='off' id='email' value={profile.email} onChange={getUserData}  placeholder="Enter Email" name="email" size="30vw" required/>  
 <div><span className='non-valid'>{formError.email}</span></div>
</div>
 
 
  
   <div>
   <button  onClick={saveChanges} type="button" className="btn btn-light">Submit</button>
  </div> 
  </div> 
</form>

  )
}