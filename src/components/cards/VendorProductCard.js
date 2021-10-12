/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Card } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";

// const { Meta } = Card;

const VendorProductCard = ({ product, handleRemove }) => {
  const { user } = useSelector((state) => ({ ...state }));
  // destructure
  const { title, description, images, slug, price } = product;

  return (
    <>

      <div className="conatier-fluid mt-5">

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col card2">
            <div className="">
              <div className="card h-100">
                <img
                  src={images && images.length ? images[0].url : laptop}
                  style={{ height: "150px", objectFit: "contain" }}
                  className="card-image" alt=""
                />
              </div>
            </div>
          </div>


          <div className="col card-2">
            <div className="card2">
              <div className="card-body">
                <p className="text-dark "> {title} </p>
                <p className="card-head">By </p>
                <p className="card-head">₦{price}</p>
                <p className="card-head">Category: </p>
              </div>
            </div>
          </div>


          <div className="col-sm-3 align-contain-center mt-5">
            <div className="card">
              <div className="">
                <Link to={`/vendor/product/${slug}`} className="btn btn-success btn-md btn-admin-card">
                  Edit Product
                </Link>
                <button onClick={() => handleRemove(slug)}
                  className="btn btn-danger btn-md btn-admin-card">
                  Remove
                </button>
                <small className="text-dark ">Added 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>



      </div>




    </>
  );
};

export default VendorProductCard;
