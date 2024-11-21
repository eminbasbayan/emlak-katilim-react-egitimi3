import { useState } from 'react';

import AddProduct from './AddProduct';
import ProductCard from './ProductCard';

import './Products.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

function Products() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addNewProduct(product) {
    setProducts([product, ...products]);
  }

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  return (
    <div className="products">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <AddProduct
        addNewProduct={addNewProduct}
        setIsModalOpen={setIsModalOpen}
      />
      <Button classNames={'mb-4'} onClick={fetchProducts}>
        Fetch Products
      </Button>
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} title="Form Uyarısı" ok>
          <b className="text-red-600">Input alanları boş geçilemez!</b>
        </Modal>
      )}
    </div>
  );
}

export default Products;
