import React from "react";
import logo from "../../assets/Images/navbar logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="shadow-lg navbar navbar-expand-lg navbar-light p-2 mb-3">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          width="100"
          height="75"
          className="d-inline-block align-top"
          alt="some text"
        />{" "}
        <div className="float-end companyname">Spice Hub</div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-xl-start"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="nav-item nav-link" to="/recipes/">
            {" "}
            Recipes{" "}
          </Link>
        </div>
      </div>

      <div className="">
        <Link
          to="/login"
          className="btn btn-primary btn-sm text-center slogan-btn"
        >
          Login
        </Link>
        &nbsp;
        <Link
          to="/signup"
          className="btn btn-dark btn-sm text-center slogan-btn"
        >
          Register
        </Link>
      </div>
      <div className="contat-info">
        <a href="" className="phonenumber">
          <i class="fas fa-phone-alt"></i> 1-800-190990
        </a>
        <a href="" className="email">
          <i class="fas fa-envelope-open"></i> info@spicehub.ca
        </a>
      </div>
    </nav>
  );
}
