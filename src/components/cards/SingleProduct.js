import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { Link, useHistory } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";

const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  // router
  let history = useHistory();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };


  const { title, images, description, _id } = product;

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
      history.push("/user/wishlist");
    });
  };


  const contentStyle = {
    height: "100%",
    width: "100%",
    color: '#000000',
    lineHeight: '160px',
    textAlign: 'center',
  };

  return (
    <>
      <div className="col-sm-5 mt-5 container">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} style={contentStyle} className="text-dark" />)}
          </Carousel>
        ) : (
          <Card style={contentStyle} cover={<img src={Laptop} className="mb-3 card-image text-dark" />}></Card>
        )}
      </div>

      <div className="col-md-5">

        <h1 className="fs-4 text-start">{product.title}</h1>

        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="pt-1 pb-2">No rating yet</div>
        )}


        <Card
          bordered={false}
          style={{ width: 450 }}
          size="small"
          actions={[
            <>
              <div className="row">
                <Tooltip title={tooltip}>
                  <div className="col">
                    <Link to="" onClick={handleAddToCart} disabled={product.quantity < 1} className="fs-6">
                      <ShoppingCartOutlined className="text-danger fs-6" /> <br />
                      {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
                    </Link>
                  </div>
                </Tooltip>,



                <div className="col">
                  <Link to="" onClick={handleAddToWishlist} className="fs-6">
                    <HeartOutlined className="text-info fs-6" /> <br /> Add to Wishlist
                  </Link>,
                </div>
              </div>
            </>,


            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
                starDimension="10px"
              />
            </RatingModal>,

          ]}

        >
          <ProductListItems product={product} />
        </Card>

        <br />

        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on xxxx xxx xxx to learn more about this product.
          </TabPane>
        </Tabs>

      </div>
    </>
  );
};

export default SingleProduct;