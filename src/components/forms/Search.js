import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
   <form className="col-12 col-lg-auto mb-2 mt-2 mb-lg-0 me-lg-3" onSubmit={handleSubmit}>
   <input 
   type="search" 
   onChange={handleChange}
   className="form-control" 
   value={text}
   placeholder="Search..." />
   </form>
  );
};

export default Search;
