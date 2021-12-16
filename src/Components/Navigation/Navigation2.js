import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav class="navbar bg-dark navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand ms-auto " to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link active " aria-current="page" to="/home">
                Home
              </Link>
              <Link class="nav-link active " to="/home">
                All Products
              </Link>
              <Link class="nav-link active " to="/home">
                Pricing
              </Link>
              <Link class="nav-link active " to="/home">
                Disabled
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
