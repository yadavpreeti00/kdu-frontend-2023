import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import './productList.scss';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    
    <ul className="product-card">
      {products.map((product) => (
        <li className="card-item" key={product.id}>
          <Link to={`/products/${product.id}`}>
          <img className="card-img" src={product.image} alt="product"></img>
          <p>{product.title}</p>
          <p>${product.price}</p>
          </Link>
          
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
