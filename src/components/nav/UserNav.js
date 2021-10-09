import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  const active = window.location.pathname;
  //   console.log(active);
return (
  <ul className="nav nav-tabs">
  <li className="nav-item">
    <Link className={`nav-link ${active === "/user/dashboard" && "active"}`}
    to="/user/dashboard" 
    >
      Dashboard
    </Link>
  </li>

  <li className="nav-item">
    <Link  className={`nav-link ${active === "/user/password" && "active"}`}
      to="/user/password"
    >
      Password
    </Link>
  </li>

  <li className="nav-item">
    <Link  className={`nav-link ${active === "/user/wishlist" && "active"}`}
     to="/user/wishlist" 
    >
      Wishlist
    </Link>
  </li>
</ul>
)

};

export default UserNav;
