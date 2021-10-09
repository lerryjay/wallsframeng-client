/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import {Spin} from "antd";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";



const initialState = {
   title: "",
   descriptioin: "",
   price: "",
   categories: [],
   category: "",
   subs: [],
   shipping: "",
   quantity: "",
   images: [],
   colors: ["Black", "Brown", "Silver", "White", "Blue"],
   dimensions: ["Small", "Medium", "Large", "ExtraLarge"],
   color: "",
   dimension: "",
 };

const ProductCreate = () => {
   const [values, setValues] = useState(initialState);
   const [subOptions, setSubOptions] = useState([]);
   const [showSub, setShowSub] = useState(false);
   const [loading, setLoading] = useState(false);
   
   // redux
   const { user } = useSelector((state) => ({ ...state }));
 
   useEffect(() => {
     loadCategories();
   }, []);
 
   const loadCategories = () =>
     getCategories().then((c) => setValues({ ...values, categories: c.data }));
 
   const handleSubmit = (e) => {
     e.preventDefault();
     createProduct(values, user.token)
       .then((res) => {
         console.log(res);
         window.alert(`"${res.data.title}" is created`);
         window.location.reload();
       })
       .catch((err) => {
         console.log(err);
         // if (err.response.status === 400) toast.error(err.response.data);
         toast.error(err.response.data.err);
       });
   };
 
   const handleChange = (e) => {
     setValues({ ...values, [e.target.name]: e.target.value });
     // console.log(e.target.name, " ----- ", e.target.value);
   };
 
   const handleCatagoryChange = (e) => {
     e.preventDefault();
     console.log("CLICKED CATEGORY", e.target.value);
     setValues({ ...values, subs: [], category: e.target.value });
     getCategorySubs(e.target.value).then((res) => {
       console.log("SUB OPTIONS ON CATGORY CLICK", res);
       setSubOptions(res.data);
     });
     setShowSub(true);
   };

   return (
         <>

<div className="container-fluid p-4">
     
          <AdminNav />
        </div>

        <div className="container">
        <div className="row">
        {loading ? (
            <Spin size="large" />
          ) : (
            <h4>Create New Product</h4>
          )}

      </div>
      <div className="row">
        <div className="col-xl-4 mt-5">
            <FileUpload 
            values={values}
            setValues={setValues}
            setLoading={setLoading}
            />
          

        <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCatagoryChange={handleCatagoryChange}
            subOptions={subOptions}
            showSub={showSub}
          />
          </div>
        </div>
        </div>

         </>
   )
}

export default ProductCreate;