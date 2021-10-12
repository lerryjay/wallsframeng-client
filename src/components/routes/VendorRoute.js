import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentVendor } from "../../functions/auth";

const VendorRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.token && user.role === "vendor" ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default VendorRoute;