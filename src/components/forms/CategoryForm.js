import React from "react";


const CategoryForm = ({ handleSubmit, name, setName }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        className="form-control mb-4"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        required
      />
      <button className="btn btn-outline-primary mb-4">Save</button>
    </div>
  </form>
);

export default CategoryForm;
