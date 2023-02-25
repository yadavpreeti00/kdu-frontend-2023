import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductContextProvider from './context/ProductContext';
import ProductDetail from './components/ProductDetail';


const App = () => {
  return (
    <BrowserRouter>
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
      </Routes>
    </ProductContextProvider>
  </BrowserRouter>
  );
};

export default App;
