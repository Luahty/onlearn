import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const ForgotPasswordForm = ({ onBackToLoginClick, onChangeImage }) => {
  // States for Forgot Password form
  const [forgotEmailFocused, setForgotEmailFocused] = useState(false);
  const [forgotEmailValue, setForgotEmailValue] = useState("");
  const [errors, setErrors] = useState({ email: "" });
  const navigate = useNavigate(); // React Router's navigate function

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  // Handle submit button click
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const emailError = validateEmail(forgotEmailValue);

    if (emailError) {
      setErrors({ email: emailError });
    } else {
      setErrors({ email: "" });
      console.log("Recovery email sent for:", forgotEmailValue);

      // Navigate to Change Password page
      navigate("/change-password"); // Change this to your desired route
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setForgotEmailValue(value);

    // Clear email error as the user types if the input becomes valid
    if (errors.email && !validateEmail(value)) {
      setErrors({ email: "" });
    }
  };

  return (
    <div className="fotgotpass">
      <div
        className="back-to-login"
        onClick={onBackToLoginClick}
        onFocus={() => onChangeImage("enter")}
      >
        <i className="fas fa-arrow-left"></i> Back to login
      </div>
      <h2>Forgot your password?</h2>
      <p>Enter your email below to recover your password</p>
      <form onSubmit={handleSubmit}>
        <div
          className={`input-container-L-S ${
            forgotEmailFocused || forgotEmailValue ? "focused" : ""
          }`}
        >
          <label htmlFor="forgot-email">Email</label>
          <input
            id="forgot-email"
            type="email"
            value={forgotEmailValue}
            onFocus={() => setForgotEmailFocused(true)}
            onBlur={() => setForgotEmailFocused(false)}
            onChange={handleEmailChange}
          />
          {errors.email && <small className="error-message-l">{errors.email}</small>}
        </div>
        <div>
          <button className="login-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
