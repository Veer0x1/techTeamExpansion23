import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import { app } from "./firebase";
const App = () => {
    const [values, setValues] = useState({
        username: "",
        branch: "",
        email: "",
        phone_number: "",
    });
    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        {
            id:2,
            name:"Branch",
            type:"text",
            placeholder:"Branch",
            label:"Branch"
        },
        {
            id:3,
            name:"Email",
            type:"text",
            placeholder:"Email",
            label:"Email"
        },
        {
            id:4,
            name:"phone_number",
            type:"text",
            placeholder:"Phone Number",
            label:"Phone Number"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    console.log(values);
    return(
        <div className="app">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};
export default App;