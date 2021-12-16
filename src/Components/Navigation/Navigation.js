import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
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
            <i class="fas fa-arrow-down"></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link
                class="nav-link nav-link-1 shadow  active "
                aria-current="page"
                to="/home"
              >
                Home <i class="fas fa-laptop-house ms-2"></i>
              </Link>
              <Link class="nav-link active shadow" to="/explore">
                Explore <i class="fas fa-store-alt ms-2"></i>
              </Link>
              <Link class="nav-link active shadow " to="/home">
                My Order <i class="fas fa-shopping-cart ms-2"></i>
              </Link>
              <Link class="nav-link active shadow  " to="/home">
                Dashboard<i class="fas fa-door-open ms-2"></i>
              </Link>
              <Link class="nav-link active shadow nav-link-2 " to="/home">
                Sgin up<i class="fas fa-sign-in-alt ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
