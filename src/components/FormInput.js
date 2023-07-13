import React from 'react';
import {db} from "../firebase";
import {useState} from "react";
import{addDoc,collection} from "firebase/firestore";
const FormInput = () => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const userCollectionRef = collection(db,"SouravMechanical")

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (name && branch && email && phone && validatePhoneNumber(phone) && validateEmail(email)) {
      // Perform any necessary actions with the form data
      // ...
      addDoc(userCollectionRef,{
        name: name,
        branch: branch,
        email: email,
        phone: phone
      })
      // Clear the form fields after submission
      setName('');
      setBranch('');
      setEmail('');
      setPhone('');
      setPhoneError('');
      setEmailError('');

    } else {
      if (!name || !branch || !email || !phone) {
        alert('Please fill in all required fields before submitting the form.');
      }
    }
  };

  const validatePhoneNumber = (phone) => {
    // Ensure the phone number is a 10-digit number
    const phoneRegex = /^\d{10}$/;
    const isValid = phoneRegex.test(phone);
    if (!isValid) {
      setPhoneError('Please enter a valid phone number.');
    } else {
      setPhoneError('');
    }
    return isValid;
  };

  const validateEmail = (email) => {
    // Ensure the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    return isValid;
  };

  return (
    <div className="form-container">
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="branch">
            Branch<span className="required">*</span>
          </label>
          <input
            type="text"
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number<span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {phoneError && <p className="error">{phoneError}</p>}
        </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
