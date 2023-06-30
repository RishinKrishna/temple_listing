import Styles from "./login.module.css";
// import loginBg from '@/assets/images/'
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import  router  from "next/router";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [FormError, setFormError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  //handle form fields changes

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    let errorKey = `${[e.target.name]}Err`;
    setFormError({
      ...FormError,
      [errorKey]: "",
    });
  };

  const validateForm = () => {
    let emailErr = "";
    let passwordErr = "";

    if (!formData.email && formData.email == "") {
      emailErr = "Please enter your email ";
    }
    console.log(formData.password , formData.email);
    if (formData.password == "" || formData.password.length < 6) {
      passwordErr = "Please enter your password";
    }

    if (emailErr || passwordErr) {
      setFormError({
        ...FormError,
        emailErr,
        passwordErr,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation statements
    let isValid = validateForm();
    if (isValid) {
      //integrating axios
      axios
        .post("/api/v1/auth/login", {
          email: formData.email,
          password: formData.password,
        }).then((response) => {
          console.log(response.data.message);
          toast(response.data.message, {
            type: "success",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          router.push("/");
        })
        .catch((error) => {
          let errorMsg = error.response.data.message;
          toast(errorMsg, {
            type: "error",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        });
    }
  };


  return (
    <div className={Styles["login-wrapper"]}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6"></div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className={Styles["login-form"]}>
              <h2 className={Styles["login-header"]}>Login</h2>
              <form>
                <div className={`${Styles["form-group"]} mb-3`}>
                  <label className={Styles["label-style"]} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    onChange={handleChange}
                  />
                  <span className="text-danger">{FormError.emailErr}</span>
                </div>
                <div className="form-group">
                  <label className={Styles["label-style"]} htmlFor="password">
                    Password
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={handleChange}
                  />
                  <span className="text-danger">{FormError.passwordErr}</span>
                </div>
                <button
                  href="#"
                  type="submit"
                  className={Styles["green-btn"]}
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Link href="/signup">Create an Account?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
