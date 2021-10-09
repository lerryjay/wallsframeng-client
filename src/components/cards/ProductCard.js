/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card} from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";



const { Meta } = Card;

const ProductCard = ({ product }) => {





   const { images, title, description, slug, price } = product;

      return (

<> 

  {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center">No rating yet</div>
      )}
<div className="bg-transparent">
  <div className="col">
    <div className="card h-100">
      <img 
        src={images && images.length ? images[0].url : laptop}
        // style={{ height: "211px", width: "226px", objectFit: "cover" }}
       className="card-img-top" 
       alt="..." />
    </div>
    <div className="card-body bg-transparent">
        <Link to={`/product/${slug}`}>
        <h5 className="card-title bg-transparent">{title}</h5>
        </Link>
        <p className="card-text bg-transparent">Art by </p>
      </div>
      <div className="card-footer bg-transparent">
        <small className="bg-transparent">₦{price}</small>
      </div>
  </div>
</div>

</>
   
   );

};




export default ProductCard;
