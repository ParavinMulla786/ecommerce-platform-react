import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { BsCart4 } from "react-icons/bs";
import {
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

import { ThemeContext } from "../theme/ThemeProvider";

const Navbar = () => {

  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (

    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        theme === "light"
          ? "bg-light navbar-light"
          : "bg-dark navbar-dark"
      }`}
    >

      <div className="container-fluid">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          ShopFlow
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Left Side */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>

            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`btn border-0 fs-3 ${
                theme === "light"
                  ? "text-dark"
                  : "text-light"
              }`}
            >

              {theme === "light"
                ? <FaToggleOff />
                : <FaToggleOn />
              }

            </button>

            {/* Login */}
            <Link
              to="/login"
              className="btn btn-outline-success"
            >
              Login
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className={`fs-4 ${
                theme === "light"
                  ? "text-dark"
                  : "text-light"
              }`}
            >

              <BsCart4 />

            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;