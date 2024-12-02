import React, { useState } from "react";

const LoginForm = ({ onForgotPasswordClick, onChangeImage }) => {
  // States for Login form
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Function to validate email format
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

  // Function to validate password (required)
  const validatePassword = (password) => {
    if (!password) {
      return "Password is required.";
    }
    return "";
  };

  // Handle Login button click
  const handleLoginClick = () => {
    const emailError = validateEmail(emailValue);
    const passwordError = validatePassword(passwordValue);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      console.log("Login successful with:", { email: emailValue, password: passwordValue });
      alert("Login successful!");
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValue(value);

    // Clear email error as the user types if the input becomes valid
    if (errors.email && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPasswordValue(value);

    // Clear password error as the user types
    if (errors.password && !validatePassword(value)) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <div>
      <div className="logo-login">
        <img
          src={require(`../image/logo.png`)}
          alt="Your Logo"
          width="290"
          height="70"
        />
        <a href="/product">
          <button type="">Go To Product List</button>
        </a>
      </div>
      <h2>Login</h2>
      <p>Login to access your travelwise account</p>
      <form>
        {/* Email Field */}
        <div
          className={`input-container-L-S ${
            emailFocused || emailValue ? "focused" : ""
          }`}
        >
          <input
            id="email"
            type="email"
            placeholder=""
            value={emailValue}
            onFocus={() => {
              setEmailFocused(true);
              onChangeImage("email");
            }}
            onBlur={() => setEmailFocused(false)}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email</label>
          {errors.email && <small className="error-message-l">{errors.email}</small>}
        </div>

        {/* Password Field */}
        <div
          className={`input-container-L-S ${
            passwordFocused || passwordValue ? "focused" : ""
          }`}
        >
          <input
            id="password"
            type="password"
            placeholder=""
            value={passwordValue}
            onFocus={() => {
              setPasswordFocused(true);
              onChangeImage("password");
            }}
            onBlur={() => setPasswordFocused(false)}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
          {errors.password && <small className="error-message-l">{errors.password}</small>}
        </div>

        {/* Remember Me */}
        <div className="remember-me">
          <input id="remember" type="checkbox" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot Password */}
        <a
          className="forgot-password"
          href="/forgot-password"
          onClick={onForgotPasswordClick}
          onFocus={() => onChangeImage("forgot")}
        >
          Forgot Password?
        </a>

        {/* Login Button */}
        <button className="login-btn" type="button" onClick={handleLoginClick}>
          Login
        </button>
      </form>
      <div className="signup">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
      <div className="login-container-L-S">
        <div className="divider-l">Login with</div>
      </div>
      <div className="social-login">
        <button className="btn-lgw">
          <a href="#" className="button btn-fb">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
        </button>
        <button className="btn-lgw">
          <a href="#" className="button btn-gg">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            <i className="fab fa-google "></i>
            <span className="g">G</span>
            <span className="o1">o</span>
            <span className="o2">o</span>
            <span className="g">g</span>
            <span className="l">l</span>
            <span className="e">e</span>
          </a>
        </button>
        <button className="btn-lgw">
          <a href="#" className="button btn-ap">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            <i className="fab fa-apple"></i> Apple
          </a>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
