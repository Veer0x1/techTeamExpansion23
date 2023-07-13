// import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import { useState } from "react";

function App() {

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(135deg, #153677, #4e085f)",
    }}>
      <div
        className="container"
      >
        <Form />
      </div>
    </div>
  );
}

export default App;
