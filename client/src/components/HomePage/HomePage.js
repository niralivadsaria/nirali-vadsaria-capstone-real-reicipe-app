import React, { Component } from "react";
import logo from "../../assets/Images/homepage logo.jpg";
import { Link } from "react-router-dom";

export default function HomePage({ title }) {
  return (
    <header className="masthead">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <img src={logo} alt="/" className="homepage-banner" />
          <div className="col-12 align-middle text-center">
            <h1 className="fw-light text-center">{title}</h1>
            <Link
              to="/recipes"
              className="btn btn-secondary btn-lg mt-3 text-center"
            >
              Search Recipes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

HomePage.defaultProps = {
  title: "default title",
};
