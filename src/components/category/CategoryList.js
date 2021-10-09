import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);

  const showCategories = () =>
    categories.map((c) => (
      <div 
      className=""
      key={c._id} >
      
      <li className="nav-item">
       <Link  className="nav-link"  to={`/category/${c.slug}`}>{c.name}</Link>
      </li>
      </div>
    ));

  return (
    <div className="container">
      <div className="category-tab-home">
      <ul className="nav nav-tabs">
        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
         
          showCategories()
        )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
