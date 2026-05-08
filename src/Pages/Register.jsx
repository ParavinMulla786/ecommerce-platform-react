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
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-light"
      >
        <h2 className="text-center mb-4">Register</h2>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </div>

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

        {/* Register Button */}
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-3">
          Already registered?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;