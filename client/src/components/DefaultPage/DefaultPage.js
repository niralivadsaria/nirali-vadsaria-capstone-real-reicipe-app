import React, { Component } from "react";
import HomePage from "../HomePage/HomePage";
import logo from "../../assets/Images/homepage logo.jpg";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <img src={logo} alt="/" className="homepage-banner" />
            <div className="col-12 align-middle text-center">
              <h1 className="fw-light ">404</h1>
              <h4 className="text-center">Page not found.</h4>
              <Link
                to="/"
                className="btn btn-secondary btn-lg mt-3 text-center"
              >
                Back to HomePage
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
