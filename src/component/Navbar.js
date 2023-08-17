import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link
              to="/signin"
              className="btn"
              style={{ backgroundColor: "#CF4FB1" }}
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="btn mx-2"
              style={{ backgroundColor: "#30DBD3" }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
