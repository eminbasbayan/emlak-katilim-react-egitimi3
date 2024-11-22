import React from 'react';
import Products from '../components/Products/Products';
import Header from '../components/Layout/Header';

const ProductsPage = () => {
  return (
    <div className="home-page">
      <Header />
      <h1 className="text-3xl font-bold">Products Page</h1>
      <Products />
    </div>
  );
};

export default ProductsPage;
