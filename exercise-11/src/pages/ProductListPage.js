import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { ProductContext } from '../context/ProductContext';
import './productListPage.scss';

const ProductListPage = () => {
  const { searchProducts } = useContext(ProductContext);

  //PASSING QUERY TO PRODUCTCONTEXT.js
  const handleSearch = (query) => {
    searchProducts(query);
  };

  return (
    <div>
      
      <SearchBar onSearch={handleSearch} />
      <p className='heading'>KDU <span>MARKETPLACE</span></p>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
