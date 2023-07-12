import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
  authDomain: "techteamexpansion23.firebaseapp.com",
  projectId: "techteamexpansion23",
  storageBucket: "techteamexpansion23.appspot.com",
  messagingSenderId: "542718392377",
  appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
  measurementId: "G-39B1R2EWV2"
};

const From = () => {
  const [Name, setName] = useState("");
  const [Branch, setBranch] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const Submit = () => {

    console.log("Submit button clicked");
    if (Name === "" || Branch === "" || Email === "" || PhoneNumber === "") {
      alert("Please fill all the fields");
      return;
    }
    // validation for email using regex
    let EmailPattern = /\S+@\S+\.\S+/;
    if (!EmailPattern.test(Email)) {
      alert("Please enter a valid email address");
      return;
    }
    // validation for phone number
    let PhoneNumberPattern = /^\d{10}$/;
    if (!PhoneNumberPattern.test(PhoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    // remove all the spaces from the name and branch
    setName(Name.replace(/\s/g, ""));
    setBranch(Branch.replace(/\s/g, ""));
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "AryanElectrical", "users");
    const payload = {
      Name,
      Branch,
      Email,
      PhoneNumber,
    };
    setDoc(docRef, payload)
      .then(() => {
        toast.success("Your response has been recorded");
        setName("");
        setBranch("");
        setEmail("");
        setPhoneNumber("");
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error("Error writing document: ", error);
      });
  }

  return (
    <>
      <div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="">
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="full_name"
                          value={Name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="Branch">Branch</label>
                        <input type="text" name="Branch" id="Branch" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Branch"
                          value={Branch}
                          onChange={(e) => {
                            setBranch(e.target.value);
                          }}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com"
                          value={Email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="PhoneNumber">phone Number </label>
                        <input type="number" name="PhoneNumber" id="PhoneNumber" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="PhoneNumber"
                          value={PhoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={
                              () => { Submit() }}
                          >Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default From;
