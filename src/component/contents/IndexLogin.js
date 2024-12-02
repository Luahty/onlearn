import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm/loginForm.js";
import ForgotPasswordForm from "./LoginForm/forgotpasswordForm.js";
import ChangePasswordForm from "./LoginForm/changepasswordForm.js";
import "./Css/login.css";

const IndexLogin = ({
  isForgotPassword: defaultForgotPassword = false,
  isChangePass: defaultChangePass = false,
}) => {
  const [isForgotPassword, setIsForgotPassword] = useState(defaultForgotPassword);
  const [isChangePass, setIsChangePass] = useState(defaultChangePass);
  const [imageSrc, setImageSrc] = useState(require("../assets/img/scc.png"));
  const [altText, setAltText] = useState(
    "Hand holding a smartphone with a security lock and checkmark"
  );
  const navigate = useNavigate();
  const location = useLocation();

  // Đổi hình ảnh qua các thanh input
  const changeImage = (action) => {
    if (action === "email") {
      setImageSrc(require("../assets/img/email.jpg"));
      setAltText("Image 1 description");
    } else if (action === "password") {
      setImageSrc(require("../assets/img/pass.jpg"));
      setAltText("Image 2 description");
    } else if (action === "forgot") {
      setImageSrc(require("../assets/img/scrt.png"));
      setAltText("Image 3 description");
    } else if (action === "enter") {
      setImageSrc(require("../assets/img/scc.png"));
      setAltText("Image 3 description");
    }
  };

  // Điều chỉnh trạng thái dựa trên URL
  useEffect(() => {
    if (location.pathname === "/forgot-password") {
      setIsForgotPassword(true);
      setIsChangePass(false);
    } else if (location.pathname === "/change-password") {
      setIsChangePass(true);
      setIsForgotPassword(false);
    } else if (location.pathname === "/") {
      setIsForgotPassword(false);
      setIsChangePass(false);
    }
  }, [location.pathname]);

  // Hàm chuyển hướng đến trang Forgot Password
  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
    setIsChangePass(false);
    navigate("/forgot-password"); // Chuyển hướng URL
  };

  // Hàm chuyển hướng đến trang Change Password
  const handleChangePasswordClick = () => {
    setIsChangePass(true);
    setIsForgotPassword(false);
    navigate("/change-password"); // Chuyển hướng URL
  };

  return (
    <div className="container-L-S">
      <div className="left">
        {isForgotPassword ? (
          <ForgotPasswordForm
            onBackToLoginClick={() => {
              setIsForgotPassword(false);
              navigate("/"); // Quay lại trang chính
            }}
            onClick={handleChangePasswordClick} // Chuyển đến trang Change Password
            onChangeImage={changeImage}
          />
        ) : isChangePass ? (
          <ChangePasswordForm
            onSubmitClick={() => {
              setIsChangePass(false);
              navigate("/"); // Quay lại trang chính
            }}
            onChangeImage={changeImage}
          />
        ) : (
          <LoginForm
            onForgotPasswordClick={handleForgotPasswordClick} // Chuyển đến Forgot Password
            onChangeImage={changeImage}
          />
        )}
      </div>
      <div className="right">
        <img src={imageSrc} alt={altText} height="600" width="500" />
      </div>
    </div>
  );
};

export default IndexLogin;
