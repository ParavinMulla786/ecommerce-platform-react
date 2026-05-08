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

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("Please register first");
      return;
    }

    if (storedUser.email !== loginData.email) {
      toast.error("Email is incorrect");
      return;
    }

    if (storedUser.password !== loginData.password) {
      toast.error("Password is incorrect");
      return;
    }

    toast.success("Login Successful");
    navigate("/");
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-4"
      style={{
        background: "#f4f7fb",
      }}
    >
      <div
        className="row bg-white shadow rounded-4 overflow-hidden"
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Left Side Image */}
        <div className="col-md-5 d-none d-md-block p-0">
          <img
            src="data:image/png;base64,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"
          
            alt="login"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              minHeight: "500px",
            }}
          />
        </div>

        {/* Right Side Form */}
        <div className="col-md-7 d-flex align-items-center">
          <form
            onSubmit={handleSubmit}
            className="w-100 p-4 p-lg-5"
          >
            <h2 className="fw-bold mb-2">
              Welcome Back
            </h2>

            <p className="text-muted mb-4">
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
                className="form-control py-2"
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
                className="form-control py-2"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-end mb-3">
              <Link
                to="/forgot-password"
                className="text-decoration-none small"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center mt-4 mb-0">
              Don’t have an account?{" "}
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