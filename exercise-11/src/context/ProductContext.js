import React, { useState, useEffect } from "react";
import instance from "../axios/axios";

export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //GET PRODUCTS FROM GIVEN API AND SET PRODUCT
  useEffect(() => {
    instance
      .get("")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  //SET THE STATE OF SELECTED PRODUCT
  const selectProduct = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  //FILTER PRODUCT BASED ON SEARCH QUERY AND SET PRODUCT BASED ON SEARCH
  const searchProducts = (query) => {
    if (query === null || query === "") {
      setProducts(products);
    }
    const filteredData = products.filter((product) => {
      return product.title.toLowerCase().includes(query);
    });
    setProducts(filteredData);
  };

  const contextValues = {
    products,
    selectedProduct,
    selectProduct,
    searchProducts,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
