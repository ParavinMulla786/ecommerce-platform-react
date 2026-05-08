import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row min-vh-100">

        {/* Left Side Image */}
        <div className="col-md-6 d-none d-md-flex p-0 position-relative">

          <img
            src="data:image/jpeg;base64,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"
            alt="Create Account"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
            }}
          />

          {/* Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
            style={{
              background: "rgba(0,0,0,0.45)",
            }}
          >
            <h1 className="fw-bold display-4">
              ShopEase
            </h1>

            <p className="fs-5 text-center px-4">
              Create your account and start shopping today
            </p>
          </div>

        </div>

        {/* Right Side Register Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-5 rounded-4"
            style={{
              width: "100%",
              maxWidth: "430px",
            }}
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