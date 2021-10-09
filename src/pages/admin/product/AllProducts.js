import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import AdminNav from "../../../components/nav/AdminNav";
import { getProductsByCount } from "../../../functions/product";
import {Spin} from "antd";
import AdminProductCard from "../../../components/cards/AdminProductCard";
import { removeProduct } from "../../../functions/product";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

    // redux
    const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeProduct(slug, user.token)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };
  return (
     <>
     
     <div className="container-fluid p-4">     
        <AdminNav />
        </div>

        <div className="container">
        <div className="row">
        <div className="col-xl text-center">
        {loading ? (
          <Spin size="large"/>
        ) : (

          <h4>All Products</h4>
        )}
        </div>
        <div className="col-xl text-end">
          <Link to="/admin/product" className="btn btn-warning">Add Products</Link>
        </div>
        </div>


        <div className="row">
        
        {products.map((product) => (
          <div key={product._id} 
          className="mt-5">
          <AdminProductCard 
          product={product}
          handleRemove={handleRemove} />
          </div>
        ))}
        </div>
      </div>

     </>
  )
};

export default AllProducts;