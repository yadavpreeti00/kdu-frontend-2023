import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ProductContext } from "../context/ProductContext";
import "./productDetail.scss";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));
  return (
    <div>
      <p className="heading">{product.title}</p>
      <div className="product-detail">
        <div className="product-img">
          <img className="image" src={product.image} alt="product" />
        </div>
        <div className="product-description">
          <p className="desciption">Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <button>
            <Link to={`/`}>Back To Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
