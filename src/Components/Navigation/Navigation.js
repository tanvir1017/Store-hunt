import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand ms-auto " to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-arrow-down"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link nav-link-1 shadow  active "
                aria-current="page"
                to="/home"
              >
                Home <i className="fas fa-laptop-house ms-2"></i>
              </Link>
              {user.email && (
                <Link className="nav-link active shadow" to="/explore">
                  Explore <i className="fas fa-store-alt ms-2"></i>
                </Link>
              )}
              {/* {user.email && (
                <Link className="nav-link active shadow " to="/myOrders">
                  My Order <i className="fas fa-shopping-cart ms-2"></i>
                </Link>
              )} */}
              {user.email && (
                <Link className="nav-link active shadow  " to="/dashboard">
                  Dashboard<i className="fas fa-door-open ms-2"></i>
                </Link>
              )}
              {user.email ? (
                <Link
                  className="nav-link active shadow "
                  to="/"
                  onClick={logout}
                >
                  Logout<i className="fas fa-sign-in-alt ms-2"></i>
                </Link>
              ) : (
                <Link className="nav-link active shadow" to="/registation">
                  Sgin up<i className="fas fa-sign-in-alt ms-2"></i>
                </Link>
              )}
              {user.displayName && (
                <Link className=" nav-link active shadow nav-link-2" to="/">
                  {user.displayName}
                </Link>
              )}
              {user.photoURL && (
                <img
                  className="img-fluid user-img"
                  style={{ width: "6%", borderRadius: "100%" }}
                  src={user.photoURL}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
