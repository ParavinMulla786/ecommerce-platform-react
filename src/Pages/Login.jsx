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
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-light"
      >
        <h2 className="text-center mb-4">Login</h2>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>

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
          <label className="form-label">Password</label>

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-3">
          Not registered?{" "}
          <Link to="/register" className="text-decoration-none">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;