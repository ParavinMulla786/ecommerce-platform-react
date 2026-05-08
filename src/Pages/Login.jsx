import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists
    if (!storedUser) {
      toast.error("Please register first");
      return;
    }

    // Check Email
    if (storedUser.email !== loginData.email) {
      toast.error("Email is incorrect");
      return;
    }

    // Check Password
    if (storedUser.password !== loginData.password) {
      toast.error("Password is incorrect");
      return;
    }

    // Success Login
    toast.success("Login Successful");

    // Redirect
    navigate("/");
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">

        {/* Left Side Ecommerce Banner */}
        <div className="col-md-6 d-none d-md-flex position-relative p-0">

          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt="Ecommerce"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />

          {/* Overlay Content */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
            style={{
              background: "rgba(0,0,0,0.5)",
            }}
          >
            <h1 className="fw-bold display-3">ShopEasy</h1>

            <p className="fs-5 text-center px-4">
              Discover amazing products at the best prices.
            </p>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">

          <form
            onSubmit={handleSubmit}
            className="shadow-lg p-5 rounded bg-white"
            style={{
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <h2 className="text-center mb-4 fw-bold">
              Welcome Back
            </h2>

            <p className="text-center text-muted mb-4">
              Login to continue shopping
            </p>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-end mb-3">
              <Link
                to="/forgot-password"
                className="text-decoration-none"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-decoration-none fw-semibold"
              >
                Register
              </Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;