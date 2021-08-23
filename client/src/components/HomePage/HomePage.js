import React, { Component } from "react";
import logo from "../../assets/Images/homepage logo.jpg";
import { Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage({ title }) {
  return (
    <header className="masthead">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <img
            src={logo}
            alt="/"
            className="homepage-banner"
            alt="homebanner"
          />
          <div className="col-12 site-slogan">
            <h1 className="fw-light slogan-title">{title}</h1>
            <Link
              to="/recipes"
              className="btn btn-danger btn-lg text-center slogan-btn"
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
