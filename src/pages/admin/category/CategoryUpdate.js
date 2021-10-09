import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {getCategory, updateCategory} from "../../../functions/category";
import {Spin} from "antd";
import CategoryForm from "../../../components/forms/CategoryForm";

const CategoryUpdate = ({history, match}) => {
   const { user } = useSelector((state) => ({ ...state }));

   const [name, setName] = useState("");
   const [loading, setLoading] = useState(false);
 
   useEffect(() => {
     loadCategory();
   }, []);
 
   const loadCategory = () =>
     getCategory(match.params.slug).then((c) => setName(c.data.name));
 
   const handleSubmit = (e) => {
     e.preventDefault();
     // console.log(name);
     setLoading(true);
     updateCategory(match.params.slug, { name }, user.token)
       .then((res) => {
         // console.log(res)
         setLoading(false);
         setName("");
         toast.success(`"${res.data.name}" is updated`);
         history.push("/admin/category");
       })
       .catch((err) => {
         console.log(err);
         setLoading(false);
         if (err.response.status === 400) toast.error(err.response.data);
       });
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
            <h4> Update Category</h4>
          )}
          </div>
          <div className="row">
          <div className="col-xl-4 mt-5">
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          <hr />
          </div>
        </div>
      </div>
   

      </>
   );
};


export default CategoryUpdate;