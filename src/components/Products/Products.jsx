import { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../productsData';
import './Products.css';

function Products() {
  const [title, setTitle] = useState("Title");

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              price={product.price}
              description={product.description}
              title={title}
              setTitle={setTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
