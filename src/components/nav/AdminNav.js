import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const active = window.location.pathname;
   // const active = window.location.pathname;
  //   console.log(active);


   return (
      <>


<div className="text-start"><h1>Wellcome Admin</h1></div>

  <ul className="nav nav-tabs justify-content-center">
    <li className="nav-item">
      <Link className={`nav-link ${active === "/admin/dashboard" && "active"}`} 
      to="/admin/dashboard"
      >
      Orders
      </Link>
    </li>
    {/* <li className="nav-item">
      <Link 
      className={`nav-link ${active === "/admin/product" && "active"}`} 
      to="/admin/product" 
      >
        Add Products
      </Link>
    </li> */}

    <li className="nav-item">
      <Link 
      className={`nav-link ${active === "/admin/products" && "active"}`}
      to="/admin/products">
        Products
      </Link>
    </li>

    <li className="nav-item">
      <Link 
      className={`nav-link ${active === "/admin/category" && "active"}`}
      to="/admin/category"
      >
        Category
      </Link>
    </li>

    <li className="nav-item">
    
      <Link 
      className={`nav-link ${active === "/admin/sub" && "active"}`}
      to="/admin/sub" 
      >
         Sub Category
      </Link>
    </li>

    <li className="nav-item">
      <Link 
      className={`nav-link ${active === "/admin/coupon" && "active"}`}
      to="/admin/coupon" 
      >
        Coupon
      </Link>
    </li>

    <li className="nav-item">
      <Link 
      className={`nav-link ${active === "/admin/vendor" && "active"}`}
      to="/admin/vendor" 
      >
       Vendor
      </Link>
    </li>
    
    <li>
      <Link
      className={`nav-link ${active === "/user/password" && "active"}`}
       to="/user/password">
        Password
      </Link>
    </li>
  </ul>
      </>
   )
};



export default AdminNav;