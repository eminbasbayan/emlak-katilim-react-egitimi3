import { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../productsData';
import AddProduct from './AddProduct';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <AddProduct />
      <div className="products-wrapper">
        {productsData.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
