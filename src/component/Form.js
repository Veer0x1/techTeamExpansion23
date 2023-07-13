import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
  authDomain: "techteamexpansion23.firebaseapp.com",
  projectId: "techteamexpansion23",
  storageBucket: "techteamexpansion23.appspot.com",
  messagingSenderId: "542718392377",
  appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
  measurementId: "G-39B1R2EWV2",
};

export default function Form() {

  let docWidth = window.innerWidth;

  let imageStyle =
    docWidth < 600
      ? { width: "30vw", height: "30vw" }
      : {
          width: "10vw",
          height: "10vw",
        };

  let style =
    docWidth < 600
      ? {
          width: "95vw",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "5%",
          borderRadius: "15px",
          backgroundColor: "#ffffff",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }
      : {
          width: "30vw",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "2%",
          borderRadius: "15px",
          backgroundColor: "#ffffff",
          boxShadow: "rgba(0, 0, 0, 0.24) 2px 3px 8px",
        };

  const [Name, setName] = useState("");
  const [Branch, setBranch] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const PostData = () => {
    if(Name && Branch && Email && PhoneNumber){
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const docRef = doc(db, "ArihantMining", "users");
      const payload = {
        Name,
        Branch,
        Email,
        PhoneNumber,
      };
      setDoc(docRef, payload)
        .then(() => {
          toast.success("Data stored successfully !!!")
          setName("");
          setBranch("");
          setEmail("");
          setPhoneNumber("");
        })
        .catch((error) => {
          toast.error("An Error occured pls try again !!!");
          console.error("Error writing document: ", error);
        });
    }

    else{
      toast.error("Please fill the data correctly !!!");
    }

      
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          background: "linear-gradient(135deg, #153677, #ff5945)",
        }}
      >
        <div
          className="d-flex align-items-center py-4 bg-body-tertiary my-form"
          style={style}
        >
          <main className="form-signin w-100 m-auto">
            <form>
              <img
                className="ms-auto me-auto"
                src="https://yt3.googleusercontent.com/JBMSJ-Nx98Kc7g_SK2m197t9CVXpKVPwmK4I46iSpURF73JAd21Sk3w9g7Jx9EWkvr4W3uA1Iw=s900-c-k-c0x00ffffff-no-rj"
                alt=""
                width="72"
                height="57"
                style={imageStyle}
              />
              <h1
                className="h3 mb-4 fw-normal"
                style={{
                  color: "#002765",
                  fontStyle: "bold",
                  fontSize: "2rem",
                }}
              >
                Enter Your Details -
              </h1>

              <div className="form-floating my-2">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Name"
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="Name">Name</label>
              </div>

              <select
                className="form-select my-2"
                name="Branch"
                id="Branch"
                required
                value={Branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              >
                <option value="none">Branch</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Electronics">
                  Electronics and Communication Engineering
                </option>
                <option value="MnC">Mathematics &amp; Computing</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="Chemical">Chemical Engineering</option>
                <option value="Metallurgy">Metallurgy</option>
                <option value="Mining">Mining Engineering</option>
                <option value="Ceramic">Ceramic Engineering</option>
                <option value="Pharma">Pharma</option>
                <option value="Other">Other branch</option>
              </select>

              <div className="form-floating my-2">
                <input
                  type="email"
                  required
                  className="form-control"
                  id="Email"
                  name="Email"
                  placeholder="name@example.com"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="Email">Email address</label>
              </div>

              <div className="form-floating my-2">
                <input
                  type="number"
                  required
                  className="form-control"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  placeholder="Phone number"
                  value={PhoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <label htmlFor="PhoneNumber">Contact number</label>
              </div>

              <button
                className="btn btn-primary w-100 py-2 my-4"
                style={{ backgroundColor: "#ff5945", border: "0px" }}
                onClick={
                  () => { PostData() }}
              >
                Sign in
              </button>
            </form>
          </main>
          <script
            src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossOrigin="anonymous"
          ></script>
        </div>
      </div>

      <ToastContainer
        // position="bottom-right"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
