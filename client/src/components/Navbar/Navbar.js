import React from "react";
import logo from "../../assets/Images/navbar logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="some text"
        />
      </a>

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
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="nav-item nav-link" to="/recipes/1">
            {" "}
            Recipes{" "}
          </Link>
        </div>
      </div>
    </nav>

    //   <div className="navbar__list">
    //     <ul className="navbar__ul">
    //       <li className="navbar__item">
    //         <Link className="navbar__link" to="/">
    //           {" "}
    //           HOME{" "}
    //         </Link>
    //       </li>
    //     </ul>

    //     <li className="navbar__item">
    //       <Link className="navbar__link" to="/recipes/1">
    //         {" "}
    //         RECIPES{" "}
    //       </Link>
    //     </li>
    //   </div>
  );
}
