import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productList.scss";
import { fetchProducts } from "../../redux/productsSlice";
import Snackbar from "../snackbar/Snackbar";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.status);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch(fetchProducts());
  }, [reduxDispatch]);

  return productsStatus === "pending" ? (
    <div className="loader"></div>
  ) : (
    <div>
      <p className="heading">
        KDU <span>MARKETPLACE</span>
      </p>
      <ul className="product-card">
        {products.map((product) => (
          <li className="card-item" key={product.id}>
            <img className="card-img" src={product.image} alt="product"></img>
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      <Snackbar status={productsStatus} />
    </div>
  );
};

export default ProductList;
