import React from "react";
import "./editProduct.scss";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

const EditProduct = () => {
  return (
    <div className="editProduct">
      <div className="titleContainer">
        <h1 className="title">Edit Product</h1>
        <Link to="/new">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="top">
        <div className="topLeft">
          <Chart data={productData} active="Sales" title="Sales Performance" />
        </div>
        <div className="topRight">
          <div className="infoTop">
            <img
              src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UL320_.jpg"
              alt=""
              className="infoImg"
            />
            <span className="name">Razer Blade 15</span>
          </div>
          <div className="infoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">123</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">sales:</span>
              <span className="infoValue">99</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">active:</span>
              <span className="infoValue">yes</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">in stock:</span>
              <span className="infoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form className="form">
          <div className="formLeft">
            <label>Product Name</label>
            <input type="text" placeholder="product name" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="formRight">
            <div className="upload">
              <img
                src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UL320_.jpg"
                alt=""
                className="uploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
