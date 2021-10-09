import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Spin } from 'antd';
import {Link} from "react-router-dom"

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR MSG IN FORGOT PASSWORD", error);
      });
  };

  return (
    <div className="container mt-5">
    <div className="row">
    
    <div className="col-md-8 mb-4">
          <img src="../../assets/images/06.png"  alt="Login"/>
        </div>

    <div className="container col-xl-4 mb-4">

     {loading ? (
          <Spin size="large" />
          ) : (
            <h4>Reset your password</h4>
          )}
      <div className="auth-bg my-padding">
      <form onSubmit={handleSubmit}>
      <label className="mb-4">Enter Email Address</label>
        <input
          type="email"
          className="form-control mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        />
        <div className="text-center mb-4">
        <button className="btn btn-lg text-signup mt-4" disabled={!email}>
          Submit
        </button>
        <br/>
        <div className="mt-5">
        <Link to="/login" className="float-right text-dark fw-bold">
            Remember Password?
          </Link>
          </div>
        </div>
       
      </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
