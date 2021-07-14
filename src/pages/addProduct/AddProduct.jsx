import React from "react";
import "./addProduct.scss";

const AddProduct = () => {
  return (
    <div className="addProduct">
      <h1 className="title">New Product</h1>
      <form className="form">
        <div className="item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default AddProduct;
