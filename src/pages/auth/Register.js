/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../functions/auth";

const Register = ({ history }) => {
  const [fullname, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [history, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !fullname || !telephone || !email) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    await auth.createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const authcred = await user.getIdTokenResult();

        registerUser(authcred.token, fullname, telephone).then(res => {

          toast.success('Registration successful!');
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: fullname,
              email,
              token: authcred.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          setFullName("");
          setTelephone("");
          setEmail("");
          setPassword("");
          history.push("/");
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`);
      });

  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className="">Full Name</label>
        <input
          type="text"
          className="form-control"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          placeholder=""
          autoFocus
          required
        />
      </div>
      <div className="form-group mb-3">
        <label>Telephone</label>
        <input
          type="tel"
          className="form-control"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="form-group mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="form-group mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          required
        />
      </div>

      <br />
      <button type="submit" className="btn btn-raised btn-lg w-bold text-signup">
        Register
      </button>
      <br />
      <p className="text-dark mt-5 mb-5">Already have an account ? <Link className="ml-3" to=" /login">Login here</Link></p>
    </form >
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
