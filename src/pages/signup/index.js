import Styles from "./signup.module.css";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import  router  from "next/router";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [FormError, setFormError] = useState({
    nameErr: '',
    emailErr: "",
    phoneErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
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
    let nameErr = '';
    let emailErr = "";
    let phoneErr = "";
    let passwordErr = "";
    let confirmpasswordErr = "";


    if (!formData.name || formData.name == "") {
      nameErr = "Please enter your name ";
    }


    if (!formData.email && formData.email == "") {
      emailErr = "Please enter your email ";
    }

    if (formData.phone == "") {
      phoneErr = "Please enter your phone number";
    } else if(formData.phone.length != 10){
      phoneErr = "Phone should have 10 digits";
    }

    if (formData.password == "" || formData.password.length < 6) {
      passwordErr = "Please enter your password";
    }
    if (formData.confirmpassword == "" || formData.confirmpassword.length < 6) {
      confirmpasswordErr = "Please re-enter your password";
    }
    if (formData.password !== formData.confirmpassword) {
      confirmpasswordErr = "Passwords do not match";
    }

    if (nameErr || emailErr || phoneErr || passwordErr || confirmpasswordErr) {
      setFormError({
        ...FormError,
        nameErr,
        emailErr,
        phoneErr,
        passwordErr,
        confirmpasswordErr,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = validateForm();
    if (isValid) {
      axios
      .post(
        '/api/v1/auth/register',
      { name: formData.name, email: formData.email, phone: formData.phone, password:formData.password }
      )
      .then((response)=>{
          toast(response.data.message, {
            type:"success",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            });
            router.push('/login')
      })
      .catch((error)=>{
        let errorMsg = error.response.data.message
        toast(errorMsg, {
          type:"error",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          });
      })
    }
  };

  return (
    <div className={Styles["login-wrapper"]}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6"></div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className={Styles["login-form"]}>
              <h2 className={Styles["login-header"]}>Signup</h2>
              <form>
                <div className={`${Styles["form-group"]} mb-3`}>
                  <label className={Styles["label-style"]} htmlFor="email">
                    Name
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                  <span className="text-danger">{FormError.nameErr}</span>
                </div>
                <div className={`${Styles["form-group"]} mb-3`}>
                  <label className={Styles["label-style"]} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <span className="text-danger">{FormError.emailErr}</span>
                </div>
                <div className={`${Styles["form-group"]} mb-3`}>
                  <label className={Styles["label-style"]} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                  <span className="text-danger">{FormError.phoneErr}</span>
                </div>
                <div className={`${Styles["form-group"]} mb-3`}>
                  <label className={Styles["label-style"]} htmlFor="password">
                    Password
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <span className="text-danger">{FormError.passwordErr}</span>
                </div>
                <div className={`${Styles["form-group"]} mb-3`}>
                  <label className={Styles["label-style"]} htmlFor="password">
                    Confirm Password
                  </label>
                  <input
                    className={Styles["input-style"]}
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Please confirm your password"
                    onChange={handleChange}
                    value={formData.confirmpassword}
                  />
                  <span className="text-danger">
                    {FormError.confirmpasswordErr}
                  </span>
                </div>
                <button
                  type="submit"
                  className={Styles["green-btn"]}
                  onClick={handleSubmit}
                >
                  Signup
                </button>
                <div className="d-flex justify-content-center align-items-center mt-3">
                Already a member? <Link href="/login">&nbsp;Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;