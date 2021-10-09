
import React from "react";
import {Link } from "react-router-dom";


const Footer = () => {
   return (
      <>

      <footer className=" container-fluid f-bg mt-5">

      <div className="row">

      <div className="col f-sec-one">
      <div>
         <h5 className="text-start text-white display-5 ">Company</h5>
         <ul className="text-white">
            <li><Link  to="/" className="text-white">Sell</Link></li>
            <li><Link to="/" className="text-white">Build Frames</Link></li>
            <li><Link to="/" className="text-white">About Us</Link></li>
         </ul>
      </div>
      

      </div>

    
      <div className="col f-sec-two">
      <div>
         <h5 className="text-start text-white display-5">About</h5>
         <ul className="text-white">
            <li><Link  to="/" className="text-white text-decoration-none">Contact Us</Link></li>
            <li> <Link to="/" className="text-white">Terms Of Serice</Link></li>
            <li><Link to="/" className="text-white">Guides</Link></li>
         </ul>
      </div>
      </div>

      <div className="col f-sec-three">
      <div>
      <span className="f-logo">Wallframes.</span><span className="logo-ng">ng</span>
      </div>

      <p className="text-white mt-2">
      Expedia-Home is a leading tech-driven home rental service provider 
      and propertry consultatants in Nigeria. 
      With our ready-to-move-in homes and robust service infrastructure,
      we aim to make house-hunting and properties acquisition effortless.
      </p>

      <p className="text-white mt-2 ">
      What you might not notice while you enjoy a delightful stay at your Expedia-Home 
      is a dedicated team of experience architects 
      seamlessly at work, 24x7, making it happen.
      </p>

      </div>

      </div>

      <div className="b-example-divider"></div>

      <div className="address text-start">
      <h5 className="text-white display-5">Address</h5>
      <p className="">Plot 45, Bode Thomas Street <br />
      Surulere, Lagos Mainland.</p>
      </div>
      <h5 className="text-center text-white display-8">
      © All rights reserved www.wallframes.ng
      </h5>
      </footer> 



      </>

   )
  
};


export default Footer;