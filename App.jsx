import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { isSetAccessorDeclaration } from "typescript";


function App() {
    const[formData,setdata]=useState({
        name:"",
        branch:"",
        email:"",
        phonenumber:""


    })
    const [formErrors, setFormErrors] = useState({
        name: '',
        branch: '',
        email: '',
        phoneNumber: ''
      });
      const [loginmessage,setloginmessage]=useState("")
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      const validateForm = () => {
        let isValid = true;
       const errors = {};
     
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          isValid = false;
          errors.email = 'Invalid email address';
        }
      
        
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
          isValid = false;
          errors.phoneNumber = 'Invalid phone number';
        }

        if(formData.name===""){
            isValid=false;
            errors.name="Enter your name";
        }
        if(formData.branch===""){
            isValid=false;
            errors.branch="Enter the branch";
        }


      
        setFormErrors(errors);
        return isValid;
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
      
        if (isValid) {
            const { name, branch, email, phoneNumber } = formData;
            const collectionName = `${name.replace(/\s+/g, '')}${branch.replace(/\s+/g, '')}`;
            firebase.firestore()
            .collection(collectionName)
            .add({
              name: name,
              branch: branch,
              email: email,
              phoneNumber: phoneNumber
            })


            .then((docRef) => {
                setloginmessage("Data logged in with the id " + docRef.id);
                console.log('Document written with ID: ', docRef.id);
                
            
                
                setdata({
                  name: '',
                  branch: '',
                  email: '',
                  phoneNumber: ''
                });
                setTimeout(() => {
                    setloginmessage('');
                  }, 2000);
                 
                  
              })
              .catch((error) => {
                console.error('Error adding document: ', error);
              });
              
             

          
            }
      };
      

    return (
        <div>
        <Header></Header> <form  >
           
            {loginmessage && <p className="loggedin">{loginmessage}</p>}
            <center> {formErrors.name && <span className="error">{formErrors.name}</span>}</center><br/>
            <center> {formErrors.branch && <span className="error">{formErrors.branch}</span>}</center><br/>
            <center>  {formErrors.email && <span className="error">{formErrors.email}</span>}</center><br/>
               
               <center> {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber} </span>} </center>
                <input onChange={handleInputChange}name="name" placeholder="Name" value={formData.name}/>

                <input onChange={handleInputChange}name="branch" placeholder="Branch" value={formData.branch} />

                <input onChange={handleInputChange}name="email" placeholder="abs@xxy.com" value={formData.email} />
                <input onChange={handleInputChange} name="phoneNumber" placeholder="10 digit phone number" value={formData.phoneNumber} />
                
                <button onClick={handleSubmit}>Submit</button>
            </form><Footer></Footer>
        </div>
    )
}
export default App;