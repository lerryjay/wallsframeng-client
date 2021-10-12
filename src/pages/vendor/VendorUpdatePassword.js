import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import VendorNav from "../../components/nav/VendorNav";

const VendorUpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(password);

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword("");
        toast.success("Password updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Your Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter new password"
          disabled={loading}
          value={password}
        />
        <button
          className="btn btn-primary"
          disabled={!password || password.length < 6 || loading}
        >
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <>
      <div className="container-fluid p-4">
        <VendorNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="mx-auto col-md-4">
            {loading ? (
              <h4 className="text-danger">Loading..</h4>
            ) : (
              <h4>Password Update</h4>
            )}
            {passwordUpdateForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorUpdatePassword;
