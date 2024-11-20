import { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../productsData';
import './Products.css';
import AddProduct from './AddProduct';

function Products() {
  const [title, setTitle] = useState("Title");

  return (
    <div className="products">
      <h2 className='text-3xl font-bold mb-4'>Products</h2>
      <AddProduct />
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
