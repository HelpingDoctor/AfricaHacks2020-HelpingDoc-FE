import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact-us">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li class="nav-item">
            <Link
              type="button"
              className="nav-link btn btn-primary text-white"
              to="/signup"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
