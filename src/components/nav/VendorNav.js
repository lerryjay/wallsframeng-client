import React from "react";
import { Link } from "react-router-dom";

const VendorNav = () => {
  const active = window.location.pathname;
  // const active = window.location.pathname;
  //   console.log(active);


  return (
    <>


      <div className="text-start"><h1>Wellcome Vendor</h1></div>

      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link className={`nav-link ${active === "/vendor/dashboard" && "active"}`}
            to="/vendor/dashboard"
          >
            Orders
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${active === "/vendor/products" && "active"}`}
            to="/vendor/products">
            Products
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${active === "/vendor/password" && "active"}`}
            to="/vendor/update-password">
            Password
          </Link>
        </li>
      </ul>
    </>
  )
};



export default VendorNav;