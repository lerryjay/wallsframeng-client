import React from "react";
import ModalImage from "react-modal-image";
import laptop from "../../images/laptop.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
// import { userCart } from "../../function/UserCart";

const ProductCardInCheckout = ({ p }) => {

  const { user, cart } = useSelector((state) => ({ ...state }));

  // destructure
  const { title, description, images, slug, price } = p;

  const colors = ["Black", "Brown", "Silver", "White", "Blue"];
  let dispatch = useDispatch();

  const handleColorChange = (e) => {
    console.log("color changed", e.target.value);

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (

    <>

      <div className="conatier mt-5">
        <div className="row row-cols-2 row-cols-lg-7 g-2 g-lg-3 ">

          <div className="col-sm">
            <div className="">
              {p.images.length ? (
                <img
                  src={p.images[0].url} large={p.images[0].url}
                  style={{ height: "150px", objectFit: "contain" }}
                  className="" alt=""
                />

              ) : (

                <img
                  src={laptop} large={laptop}
                  style={{ height: "150px", objectFit: "contain" }}
                  className="" alt="" />
              )}
            </div>
          </div>

          <div className="col-sm">
            <div className="">
              <div className="">
                <p className="text-dark "> {p.title} </p>
                <p className="card-head">By: </p>
                <p className="card-head">₦{p.price}</p>
              </div>
            </div>
          </div>


          <div className="col-sm">
            <div className="">
              <button onClick={() => handleRemove(slug)}
                className="btn btn-danger btn-sm">
                Remove
              </button>

            </div>
          </div>

          <div className="col-sm">
            <select
              onChange={handleColorChange}
              name="color"
              className="form-control-sm"
            >
              {p.color ? (
                <option value={p.color}>{p.color}</option>
              ) : (
                <option>Select</option>
              )}
              {colors
                .filter((c) => c !== p.color)
                .map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-sm">
            <span className="">Shipping </span>
            {p.shipping === "Yes" ? (
              <CheckCircleOutlined className="text-success" />
            ) : (
              <CloseCircleOutlined className="text-danger" />
            )}

          </div>


          <div className="col-sm">


            <input
              type="number"
              className="form-control-sm"
              id="qty-cart"
              value={p.count}
              onChange={handleQuantityChange}
            />
          </div>

          <div className="col-sm">
            {cart.map((c, i) => (

              <div className="" key={i}>
                <span className="text-muted calcu ">{c.count} X </span>
                <span className=" text-muted calcu  ">₦{c.price * c.count}</span>
              </div>
            ))}
          </div>










        </div>



      </div>

















      {/* <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>₦{p.price}</td>
        <td>{p.dimension}</td>
        <td>
          <select
            onChange={handleColorChange}
            name="color"
            className="form-control"
          >
            {p.color ? (
              <option value={p.color}>{p.color}</option>
            ) : (
              <option>Select</option>
            )}
            {colors
              .filter((c) => c !== p.color)
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </td>
        <td className="text-center">
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQuantityChange}
          />
        </td>
        <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody> */}
    </>
  );
};

export default ProductCardInCheckout;