import React, { useState, useEffect } from "react";
import "./Css/signup.css";

const IndexSignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  // States for image handling
  const [imageSrc, setImageSrc] = useState(require("../assets/img/enter.png"));
  const [altText, setAltText] = useState("Default image for signup");

  // Function to change image based on input focus
  const changeImage = (field) => {
    if (field === "firstName") {
      setImageSrc("https://placehold.co/400x600?text=First+Name");
      setAltText("Image for first name");
    } else if (field === "lastName") {
      setImageSrc("https://placehold.co/400x600?text=Last+Name");
      setAltText("Image for last name");
    } else if (field === "email") {
      setImageSrc("https://placehold.co/400x600?text=Email");
      setAltText("Image for email");
    } else if (field === "phone") {
      setImageSrc("https://placehold.co/400x600?text=Phone+Number");
      setAltText("Image for phone number");
    } else if (field === "password") {
      setImageSrc("https://placehold.co/400x600?text=Password");
      setAltText("Image for password");
    } else if (field === "confirmPassword") {
      setImageSrc("https://placehold.co/400x600?text=Confirm+Password");
      setAltText("Image for confirm password");
    }
  };

  // State and logic for countdown timer
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSendCode = () => {
    setCountdown(60); // Start countdown at 60 seconds
    // Add code for sending the verification code here
  };

// State for form values and error messages
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    // Validate email live as user types
    if (id === "email") {
      validateEmail(value);
    }
    if (id === "phone") {
      validatePhone(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Accepts 10 to 15 digits
    if (phone && !phoneRegex.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter a valid (10-15 digits).",
      }));
    } else {
      setErrors((prevErrors) => {
        const { phone, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  
  // Validate a field when it loses focus
  const validateField = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: `${field} is required.`,
      }));
    } else {
      setErrors((prevErrors) => {
        const { [field]: removedError, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  // Other states...
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
    setCheckboxError(false); // Clear error when checked
  };

  // Validate all fields on submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const newErrors = {};

    // Check checkbox state
    if (!checkboxChecked) {
      setCheckboxError(true);
      return; // Stop submission if checkbox is not checked
    }
    
    // Check for empty fields
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required.`;
      }
    }

    if (Object.keys(newErrors).length === 0 && checkboxChecked) {
      console.log("Form submitted successfully:", formData);
      // Add your form submission logic here
    }

    // Check if passwords match
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    // If there are no errors, proceed with form submission logic
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      // Add your form submission logic here
    }
    // Re-validate email on submit
  };


  return (
    <div className="container-L-S">
      <div className="left-section">
        <img src={imageSrc} alt={altText} height="600" width="500" />
      </div>
      <div className="form-section">
        <div className="logo">
          <img
            src={require(`./image/logo.png`)}
            alt="Your Logo"
            width="290"
            height="70"
          /> 
        </div>
        <h2>Sign up</h2>
        <p>Let's get you all set up so you can access your personal account.</p>
        <form>
        <div className="form-group half-width ip-left">
            <input
              id="firstName"
              placeholder=" "
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              onFocus={() => changeImage("firstName")}
              onBlur={() => validateField("firstName")}
            />
            <label htmlFor="firstName">First Name</label>
            {errors.firstName && (
              <small className="error-message">{errors.firstName}</small>
            )}
          </div>
          <div className="form-group half-width">
            <input
              id="lastName"
              placeholder=" "
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              onFocus={() => changeImage("lastName")}
              onBlur={() => validateField("lastName")}
            />
            <label htmlFor="lastName">Last Name</label>
            {errors.lastName && (
              <small className="error-message">{errors.lastName}</small>
            )}
          </div>
          <div className="form-group half-width ip-left">
            <input
              id="email"
              placeholder=" "
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => changeImage("email")}
              onBlur={() => validateField("email")}
            />
            <label htmlFor="email">Email</label>
            {errors.email && (
              <small className="error-message">{errors.email}</small>
            )}
          </div>
          <div className="form-group half-width">
            <input
              id="phone"
              placeholder=" "
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => changeImage("phone")}
              onBlur={() => validateField("phone")}
            />
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && (
              <small className="error-message">{errors.phone}</small>
            )}
          </div>
          <div className="form-group password-toggle">
            <input
              id="password"
              placeholder=" "
              type={passwordVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              onFocus={() => changeImage("password")}
              onBlur={() => validateField("password")}
            />
            <label htmlFor="password">Password</label>
            <i
              className={`fas ${
                passwordVisible ? "fa-eye-slash" : "fa-eye"
              } toggle-icon`}
              onClick={() => togglePasswordVisibility("password")}
            ></i>
            {errors.password && (
              <small className="error-message">{errors.password}</small>
            )}
          </div>
          <div className="form-group password-toggle">
            <input
              id="confirmPassword"
              placeholder=" "
              type={confirmPasswordVisible ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onFocus={() => changeImage("confirmPassword")}
              onBlur={() => validateField("confirmPassword")}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <i
              className={`fas ${
                confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"
              } toggle-icon`}
              onClick={() => togglePasswordVisibility("confirmPassword")}
            ></i>
            {errors.confirmPassword && (
              <small className="error-message">{errors.confirmPassword}</small>
            )}
          </div>

          <div className="form-group password-toggle ">
            <input
              className="verify-code"
              id="confirm-password"
              placeholder=" "
              type="text"
              onFocus={() => changeImage("confirmPassword")}
            />
            <label htmlFor="confirm-password">Verify Code</label>
            <button
              className="submit-btn verify-code-btn"
              type="button"
              onClick={handleSendCode}
              disabled={countdown > 0}
            >
              {countdown > 0 ? `Resend in ${countdown}s` : "Send code"}
            </button>
          </div>

          <div className="form-group terms">
          <input
          className={`terms-input`}
          type="checkbox"
          checked={checkboxChecked}
          onChange={handleCheckboxChange}
        />
            <label htmlFor="terms" className={`${checkboxError ? "error-checkbox" : ""}`} disabled={checkboxError}>
              I agree to all the{" "}
              <a className="terms-a" href="#">
                Terms and Privacy Policies
              </a>
            </label>
            {checkboxError && (
          <small className="error-message">
            You must agree to the terms and policies.
          </small>
        )}
          </div>
          <div className="form-group">
            <button className="submit-btn" type="submit" onClick={handleSubmit} disabled={checkboxError}>
              Create account
            </button>
          </div>
          <div className="form-group login-link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
          <div className="signup-container-L-S">
            <div className="divider">Login with</div>
          </div>
          <div className="social-signup">
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
                <i className="fab fa-google"></i> Google
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
        </form>
      </div>
    </div>
  );
};

export default IndexSignUp;
