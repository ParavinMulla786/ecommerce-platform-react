import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import sideImage from "../assets/image.png";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Success Toast Message
    toast.success("You are successfully registered");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-4"
      style={{
        background: "#f4f7fb",
      }}
    >
      <div
        className="row bg-white shadow-sm rounded-4 overflow-hidden border"
        style={{
          width: "100%",
          maxWidth: "950px",
        }}
      >
        {/* Side Image */}
        <div className="col-md-5 p-0">
          <img
            src={sideImage}
            alt="Register"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              minHeight: "250px",
            }}
          />
        </div>

        {/* Register Form */}
        <div className="col-md-7 d-flex align-items-center">
          <form
            onSubmit={handleSubmit}
            className="w-100 p-4 p-md-5"
          >
            <h2 className="text-center fw-bold mb-2">
              Create Account
            </h2>

            <p className="text-center text-muted mb-4">
              Join us and enjoy online shopping
            </p>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control py-2"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control py-2"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control py-2"
                placeholder="Create password"
                onChange={handleChange}
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-center mt-4 mb-0">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-decoration-none fw-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;