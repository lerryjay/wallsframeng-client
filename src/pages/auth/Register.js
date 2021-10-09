/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [history, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
    <label className="mb-3">Enter Email Address</label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised btn-lg w-bold text-signup">
        Register
      </button>
      <br />
      <p className="text-dark mt-5 mb-5">Already Sign Up? <Link className="text-btn fw-bold"to="/login">Login here</Link></p>
    </form>
  );

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-8 mb-4">
          <img src="../../assets/images/05.png" alt="Register Image" />

        </div>


        <div className="col-xl-4 mb-4">
        <div className="text-end">
          <span><h4>Register in one click!</h4></span>
          </div>
          <div className=" my-padding">
          {registerForm()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
