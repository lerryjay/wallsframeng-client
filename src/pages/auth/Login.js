import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrUpdateUser } from "../../functions/auth";
import { Spin } from 'antd';


const Login = ({ history }) => {
  const [email, setEmail] = useState("it.dannybizman@gmail.com");
  const [password, setPassword] = useState("qwerty12345");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [history, user]);

  let dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    if (res.data.role === "admin") {
      history.push("/admin/dashboard");
    } else if (res.data.role === "vendor") {
      history.push("/vendor/dashboard");
    } else {
      history.push("/user/dashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));

      // history.push("user/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <label>Email Address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group mb-4">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="mb-3 btn btn-lg w-btn login-btn"
          disabled={!email || password.length < 6}
        >
          Login
        </button>
      </div>
    </form>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mb-4">
          <img src="../../assets/images/06.png" alt="Login" />
        </div>

        <div className="col-xl-4 mb-4">
          <div className="text-end">
            {loading ? (
              <Spin size="large" />
            ) : (
              <span><h4>Login</h4><p>Dont have an account? <Link to="/register">Register</Link></p></span>

            )}

          </div>
          <div className="auth-bg my-padding ">
            {loginForm()}

            <div className="text-center">

              <button
                onClick={googleLogin}
                className="mb-3 btn btn-lg google-btn"
              >
                {/* <span><i className="fas fa-envelope"></i></span> */}
                <span className="text-end p-2">Login with <span className="g1">G</span><span className="g2">o</span><span className="g3">o</span><span className="g4">g</span><span className="g5">l</span><span className="g6">e</span></span>
              </button>
            </div>
            <Link to="/forgot/password" className="float-right text-dark fw-bold">
              Forgot Password?
            </Link>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Login;
