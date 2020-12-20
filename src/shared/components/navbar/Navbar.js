import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" id='home-nav'>
      <div className="container-fluid nav-wrap">
        <Link class="navbar-brand" to="/">
          helpingDoc
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="#about" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="#contact-us" href="#contact-us">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="#features" href="#features">
                Services
              </a>
            </li>
            <li class="nav-item">
              <Link
                type="button"
                className="nav-link btn btn-primary text-white"
                to="/nurse-dashboard/patients"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
