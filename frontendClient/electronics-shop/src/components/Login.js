
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext"; 
import './Auth.css';

const Login = () => {
  const { login } = useAuth();  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData?.email === formData.email && storedData?.password === formData.password) {
      login(storedData); 
      const from = location.state?.from?.pathname || '/cart'; 
      navigate(from, { replace: true }); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <span onClick={() => navigate('/register')}>Register here</span>
        </p>
        <p>
          Forgot password? <span onClick={() => navigate('/forgot-password')}>Click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
