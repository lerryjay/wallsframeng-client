import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import { Menu, Badge } from "antd";
import { ShoppingCartOutlined} from "@ant-design/icons";



const { Item } = Menu;

const Header = () => {

  const [current, setCurrent] = useState("home");
 
  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };


  const active = window.location.pathname;
  //   console.log(active);

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
 <>
<header className="container-fluid  header-bg ">
  <div className="d-flex flex-wrap justify-content-lg-around justify-content-center py-3 ">
    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
     <div><span className="logo">Wallframes.</span><span className="logo-ng">ng</span></div>
    </a>

    <ul className="nav col-12 col-md-auto mb-2 header-font justify-content-center mb-md-0">
      <li><Link to="/shop" className="nav-link px-2 link-secondary" >Shop</Link></li>
      <li><Link to="/" className="nav-link px-2 link-dark">Sell</Link></li>
      <li><Link to="/" className="nav-link px-2 link-dark">Build Frame</Link></li>
      <li><Link to="/" className="nav-link px-2 link-dark">About Us</Link></li>
    </ul>

  <Search />

  <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
  <Item key="cart" icon={<ShoppingCartOutlined />} >
  <Link to="/cart" className="bg-transparent">
    <Badge count={cart.length} offset={[9, 0]}>
      Cart
    </Badge>
  </Link>
  </Item>
  </Menu>


    <div className="col-md-3 text-end">

    
      
    {!user && (
      <Link to="/login">
      <button type="button" className=" btn btn-outline-white fw-bold header-font text-btn me-2">Login</button>
      </Link>
      )}

      {!user && (
        <Link to="/register">
      <button type="button" className="btn login-btn text-white text-signup header-font ">Sign-up</button>
      </Link>
      )}

      {user && (
    <div className="dropdown">
  <Link to="#" className="link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
  </Link>
  {user && user.role === "subscriber" && (
  <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
    <li><Link className="dropdown-item" to="/user/dashboard">dashboard</Link></li>
    <li><Link className="dropdown-item" onClick={logout}>Sign out</Link></li>
  </ul>
  )}

  {user && user.role === "admin" && (
    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
    <li><Link className="dropdown-item" to="/admin/dashboard">dashboard</Link></li>
    <li><a className="dropdown-item" onClick={logout}>Sign out</a></li>
    </ul>
    )}


</div>

    )}

    </div>
  </div>
</header>

 </> 
  );
};

export default Header;
