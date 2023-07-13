import React, { useState, useEffect } from "react";
import db from "../firebase/firebaseConfig";
import { collection, getDocs, addDoc } from 'firebase/firestore'
import ecell_img from "../images/ecell.png"
import "./form.css"


const MainForm = () => {
  // const [user, setUser] = useState([])

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  // Reference to the "SumitMechanical" collection in Firestore database
  const sumit_mechanical_collection = collection(db, "SumitMechanical")

  // Adding new user to Firestore database
  const createUser = async () => {
    var newUserData = {
      name: name,
      branch: branch,
      email: email,
      phone: phone
    }

    console.log("New data :", newUserData)
    const data = await addDoc(sumit_mechanical_collection, newUserData)

    // Programmatically click the modal button
    const modalButton = document.getElementById("modal-button").click();


    // Reset form after successful submission
    setName("");
    setBranch("");
    setEmail("");
    setPhone("");
  }

  // For fetching all the users in "SumitMechanical" collection from Firestore db on initial reload of page
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(sumit_mechanical_collection)
  //     console.log("Data :", data)

  //     setUser(data.docs.map((doc) => ({ ...doc.data() })))
  //   }

  //   getUsers()
  // }, [])


  const validateForm = () => {
    const validationErrors = {};

    if (!name) validationErrors.name = "Name is required.";
    if (!branch) validationErrors.branch = "Branch is required.";
    if (!email) validationErrors.email = "Email is required.";
    if (!phone) validationErrors.phone = "Phone number is required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      createUser();
    }
  }


  return (
    <div className="container mt-5">
      <h1 className="mb-5">Contact Form</h1>

      {/* {user.map((usr) => {
        return (
          <div>
            {""}
            <h1>Name: {usr.name}</h1>
            <h1>Branch: {usr.branch}</h1>
          </div>
        );
      })} */}


      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""} w-50`}
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {errors.name && <div className="text-danger small mt-2">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className={`form-control ${errors.branch ? "is-invalid" : ""} w-50`}
              id="branch"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>

          {errors.branch && (
            <div className="text-danger small mt-2">{errors.branch}</div>
          )}
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""} w-50`}
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {errors.email && (
            <div className="text-danger small mt-2">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="number"
              className={`form-control ${errors.phone ? "is-invalid" : ""} w-50`}
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {errors.phone && (
            <div className="text-danger small mt-2">{errors.phone}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>


      {/* ---------------------------------------------------------Modal--------------------------------------------------------- */}
      <button id="modal-button" type="submit" className="btn hide" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header d-flex justify-content-center">
                <img src={ecell_img} alt="Ecell"  style={{height: "3rem"}}></img>
            </div>
            <div class="modal-body mt-3">
              <h5 className="text-dark">User created successfully</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;