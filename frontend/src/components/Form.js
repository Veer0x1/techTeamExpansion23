import React from "react";
import { useState } from "react";

const From = () => {
  const [Name, setName] = useState("");
  const [Branch, setBranch] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const Submit = () => {
    if (Name === "" || Branch === "" || Email === "" || PhoneNumber === "") {
      console.log({ Name, Branch, Email, PhoneNumber });
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

    console.log({ Name, Branch, Email, PhoneNumber });


  }

  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="">
                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="full_name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="Branch">Branch</label>
                      <input type="text" name="Branch" id="Branch" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Branch"
                        onChange={(e) => {
                          setBranch(e.target.value);
                        }}
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input type="email" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="PhoneNumber">phone Number </label>
                      <input type="number" name="PhoneNumber" id="PhoneNumber" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="PhoneNumber"
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>
                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
        </div>
      </div>
    </>
  );
};

export default From;
