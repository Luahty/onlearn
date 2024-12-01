// LoginForm.js
import React, { useState } from "react";

const LoginForm = ({ onForgotPasswordClick, onChangeImage }) => {
  // States for Login form
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div>
      <div className="logo-login"> 
        <img
          src={require(`../image/logo.png`)}
          alt="Your Logo"
          width="290"
          height="70"
        />
        <a href="/product"><button type="">Go To Product List</button></a>
      </div>
      <h2>Login</h2>
      <p>Login to access your travelwise account</p>
      <form>
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
    onChange={(e) => setEmailValue(e.target.value)}
  />
  <label htmlFor="email">Email</label>
</div>
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
    onChange={(e) => setPasswordValue(e.target.value)}
  />
  <label htmlFor="password">Password</label>
</div>

        <div className="remember-me">
          <input id="remember" type="checkbox" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a
          className="forgot-password"
          href=""
          onClick={onForgotPasswordClick} 
          onFocus={() => onChangeImage("forgot")}
        >
          Forgot Password?
        </a>
        <button className="login-btn" type="button">
          Login
        </button>
      </form>
      <div className="signup">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
      <div class="login-container-L-S">
        <div class="divider">Login with</div>
      </div>
      <div className="social-login">
        <button class="btn-lgw">
          <a href="#" class="button btn-fb">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
        </button>

        <button class="btn-lgw">
          <a href="#" class="button btn-gg">
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

        <button class="btn-lgw">
          <a href="#" class="button btn-ap">
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
