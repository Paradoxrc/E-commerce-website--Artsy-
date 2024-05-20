import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);

  // Inline style for the fancy font
  const fancyFontStyle = {
    fontFamily: "Your Fancy Font, cursive", 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand custom-brand" to="/" style={fancyFontStyle}>
          ARTSY.LK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink to="/login" className="btn btn-outline-warning nav-link" activeClassName="active-tab">
              <i className="fa fa-sign-in me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-warning nav-link" activeClassName="active-tab">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-warning nav-link" activeClassName="active-tab">
              <i className="fa fa-shopping-cart me-1"></i> Cart (
              {state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
