// import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, #153677, #4e085f)",
        }}
      >
        <Navbar />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Form buttonTask="Sign In" />}
            ></Route>

            <Route
              path="/signIn"
              element={<Form buttonTask="Sign In" />}
            ></Route>

            <Route
              path="/login"
              element={<Form buttonTask="Login" />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
