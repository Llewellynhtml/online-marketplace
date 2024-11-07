import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData?.email === email) {
      if (newPassword === confirmPassword) {
        const updatedData = { ...storedData, password: newPassword };
        localStorage.setItem("userData", JSON.stringify(updatedData));
        console.log("Password reset successful");
        navigate("/login");
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
