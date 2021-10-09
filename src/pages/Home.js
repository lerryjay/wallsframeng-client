/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getProductsByCount } from "../functions/product";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
// import CategoryList from "../components/category/CategoryList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    getProductsByCount(3).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  const active = window.location.pathname;
  // const active = window.location.pathname;
 //   console.log(active);

 
  return (

    <>

<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
      <img  className= "my-slide"  src="../../assets/images/02.png" / >
      <div className="container">
        <div className="carousel-caption text-start home-caption">
          <div className="bg-caption-head">
          <h5 className="home-caption-heading">Let Your walls do the talking</h5>
          </div>
          
          <h1 className="home-caption-sub">
          Nothing makes a <br />
          room sing so much  <br />
          as a big bold art on  <br />
          the wall <br />
          </h1>
          <p><a className="btn btn-lg login-btn home-button" href="#">Shop Now</a></p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
      <img  className= "my-slide"  src="../../assets/images/03.png" / >
      <div className="container">
        <div className="carousel-caption text-start home-caption">
        <div className="bg-caption-head">
          <h5 className="home-caption-heading">Let Your walls do the talking</h5>
          </div>
          
          <h1 className="home-caption-sub">
          Nothing makes a <br />
          room sing so much  <br />
          as a big bold art on  <br />
          the wall <br />
          </h1>
          <p><a className="btn btn-lg login-btn home-button" href="#">Shop Now</a></p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
      <img  className= "my-slide"  src="../../assets/images/02.png" / >
      <div className="container">
        <div className="carousel-caption text-start home-caption">
        <div className="bg-caption-head">
          <h5 className="home-caption-heading">Let Your walls do the talking</h5>
          </div>
          
          <h1 className="home-caption-sub">
          Nothing makes a <br />
          room sing so much  <br />
          as a big bold art on  <br />
          the wall <br />
          </h1>
          <p><a className="btn btn-lg login-btn home-button" href="#">Shop Now</a></p>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



{/* <div className="jumbotron text-danger h1 font-weight-bold text-center">
  <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
</div> */}
<div className=" jumbo-home-2">

<div className=" container jumbo-home p-5 rounded-3">
  <div className="container py-5">
    <p className="fs-4 text-end">
    Finest & <br />
    Carefully <br />
    Sourced <br />
    Handcrafted <br />
    </p>
    <h4 className="display-7 fw-bold text-end">Wall Frames</h4> 
  </div>
</div>
</div>


<div className="wave">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#07213B" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,37.3C1120,0,1280,0,1360,0L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  
</div>
    <div className="wave-container">
    <h4 className=" wave-text display-4 ">
        Shop Our Best Sellers
      </h4> 
      
      <div className="text-white">
      <BestSellers />
      </div>
    </div>


{/* Category tabs */}


<div className="container catgory-home">
<div className="mt-5">
<h4>BEST SELLING CATEGORIES</h4>
</div>

<div className="row row-cols-1 row-cols-sm-4 g-4 mt-5">
  <div className="col mt-5">
    <div className="card h-100">
      <img src="../assets/svg/mask-group-1@2x.svg" className="card-img-top" alt="..." />
      <div className="card-body">
       <Link to="/category/painting"> 
       <h5 className="card-title">PAINTINGS</h5>
       </Link>
      </div>
    </div>
  </div>
  <div className="col mt-5">
    <div className="card h-100">
      <img src="../assets/svg/mask-group-7@2x.svg" className="card-img-top" alt="..." />
      <div className="card-body">
       <Link to="/category/wooden-frames">
        <h5 className="card-title">WOODEN FRAMES</h5>
      </Link>
      </div>
    </div>
  </div>
  <div className="col mt-5">
    <div className="card h-100">
      <img src="../assets/svg/mask-group-10@2x.svg" className="card-img-top" alt="..." />
      <div className="card-body">
       <Link to="/category/canvas">
        <h5 className="card-title">CANVAS FRAMES</h5>
      </Link>
      </div>
    </div>
  </div>
  <div className="col mt-4">
    <div className="card h-100">
    <div className="text-center catogry-home ">
        <p className="text-white">Wanna see more <br />
        Frames ?
        </p>
        <Link to="">
        <button className="btn btn-lg btn-category">
          View More
        </button>
        </Link>
    </div>
    </div>
  </div>
</div>
</div>



   <br />

{/* Deal of the week Card Section */}
<div className="deals-headline">
<p className="text-start text-white">
  DEALS OF THE WEEK
</p>
</div>

<div className="container">
  <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">

    <div className="card deals-card-bg">

    <div className="row">
    <h5 className="mt-5 deals-sub-home">
    Make a subtle statement on your wall with our <br /> <span className="deals-span">deals for the week</span>!
    </h5>
    <div className="col">
  
    <img src="../assets/svg/mask-group@2x.svg" className="card-img-top card-image" alt="..." />
    
    </div>
    <div className="col">
        <div className="home-card-body">
        <h5 className="home-card-title">Girls on bike, monaco blanck..</h5>
        <p className="home-card-text">By BennyArts</p>
        <h5 className="deals-price mb-4">₦8,000.00</h5>
        <Link to="">
          <button className="btn deals-btn deals-text-btn">
            SHOP NOW
          </button>
        </Link>

    </div>
      
    </div>
    </div>
      
     
    </div>
  </div>
 
  <div className="col">
  
    <div className="card deals-card-bg">
    <div className="row">
   <div className="col">
      <img src="../assets/images/01.png" className="card-img-top card-image2" alt="..." />
      <div className="card-body">
        <h4 className="home-card-title text-center mb-4 mt-5">Love our wallframes? We’ve got <br /> 
        something for you</h4>
        <p className="home-card-text text-center">Yes! Send me exclusive offers, 
        unique gift ideas,
        <br />
         and personalized tips for shopping and selling on wallframes.</p>
      </div>
    </div>
    </div>

    <form className="row row-cols-lg-auto g-3 align-items-justify mb-3 deals-subscribe">
  <div className="col-4">
    <div className="input-group">
      <input type="text" className="form-control" id="inlineFormInputGroupUsername"  />
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn deals-subscribe-btn">Subscribe</button>
  </div>
</form>

</div>
  </div>
</div>
</div>


<div className="new-arrival-sec new-arrivals-bg ">
      <h4 className="text-center mb-5 p-3 display-4 ">
        Shop Our new Arrivals
      </h4>
      <NewArrivals />
     
    </div>
      <br />
      <br />




<div className="container icon-div">


<div className="row align-items-center icon-sec-bg mb-5">
  <div className="col">
  <div className="icon-one">
  {/* <i className="fas fa-award text-center"></i> */}
  <img src= "../assets/svg/globe.png" className="icon-one-img"/>
  </div>
    <h4 className="icon-quality-head">
    Premium Quality <br />
    products
    </h4>

    <p className="text-center icon-quality-sub">
    Our products are carefully 
    <br />
    crafted with time tested materials 
    <br />
    that give a meaning to every story
    </p>

  </div>
  <div className="col">
  <div className="icon-two">
  {/* <i className="fas fa-hand-holding-heart"></i> */}
  <img src= "../assets/svg/love.svg" className="icon-two-img"/>
</div>
  <h4 className="icon-quality-head">
  Made with  <br />
  love
  </h4>

  <p className="text-center icon-quality-sub">
  We strive to create a feel good and 
  <br />
  happy moment for every order
  <br />
  experience
  </p>
  </div>

  <div className="col">
  <div className="icon-three">
  {/* <i className="fas fa-globe-africa"></i> */}
  <img src= "../assets/svg/home.svg" className="icon-three-img"/>
  </div>
    <h4 className="icon-quality-head">
    Assembled in  <br />
    Africa
    </h4>

    <p className="text-center icon-quality-sub">
    We maintain a deep connection 
    <br />
    with the artframes we create by 
    <br />
    crafting them close to home 
    </p>
  </div>
</div>
</div>





    </>
  );
};

export default Home;
