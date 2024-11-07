import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/cart";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("User registered:", formData);

    login(formData);

    navigate(from, { replace: true });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login", { state: { from } })}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
