import { useState } from 'react';

import AddProduct from './AddProduct';
import ProductCard from './ProductCard';

import { productsData } from '../../productsData';

import './Products.css';
import Modal from '../UI/Modal';

function Products() {
  const [products, setProducts] = useState(productsData);

  function addNewProduct(product) {
    setProducts([product, ...products]);
  }

  return (
    <div className="products">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <AddProduct productsData={productsData} addNewProduct={addNewProduct} />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Modal />
    </div>
  );
}

export default Products;
