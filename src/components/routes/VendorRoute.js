import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentVendor } from "../../functions/auth";

const VendorRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      currentVendor(user.token)
        .then((res) => {
          console.log("CURRENT VENDOR RES", res);
          setOk(true);
        })
        .catch((err) => {
          console.log("VENODR ROUTE ERR", err);
          setOk(false);
        });
    }
  }, [user]);

  return ok ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default VendorRoute;