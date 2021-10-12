import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { registerVendor } from "../../functions/auth";

const VendorRegister = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [name, setStoreName] = useState("");

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter your name/store name");
      return;
    }
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!telephone) {
      toast.error("Please enter you phone number");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    setLoading(true);
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const authcred = await user.getIdTokenResult();

        registerVendor(authcred.token, name, telephone).then(res => {

          toast.success('Registration successful!');
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name,
              email,
              token: authcred.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          setStoreName("");
          setTelephone("");
          setEmail("");
          setPassword("");
          history.push("/vendor/dashboard");
        })
      })
      .catch((error) => toast.error(error.message));
    setLoading(false);
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <label>Store Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={({ target: { value } }) => setStoreName(value)}
          placeholder=""
          autoFocus
        />
      </div>
      <div className="form-group mb-4">
        <label>Email Address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder=""
        />
      </div>
      <div className="form-group mb-4">
        <label>Telephone</label>
        <input
          type="tel"
          className="form-control"
          value={telephone}
          onChange={({ target: { value } }) => setTelephone(value)}
          placeholder=""
        />
      </div>
      <div className="form-group mb-4">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder=""
        />
      </div>
      <button
        type="submit"
        className="btn btn-raised btn-lg w-bold text-signup"
        disabled={loading}
      >
        Register
      </button>
      <br />
      <p className="text-dark mt-5 mb-5">
        Already Sign Up?{" "}
        <Link className="text-btn fw-bold" to="/vendor/login">
          Login here
        </Link>
      </p>
    </form>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mb-4">
          <img src="../../assets/images/vendor11.png" alt="Register Image" />
        </div>

        <div className="col-xl-4 mb-4">
          <div className="text-end">
            <span>
              <h4>Register in one click!</h4>
            </span>
          </div>
          <div className=" my-padding">{registerForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;