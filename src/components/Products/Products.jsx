import { useState, useEffect } from 'react';

import AddProduct from './AddProduct';
import ProductCard from './ProductCard';
import Modal from '../UI/Modal';
import Loading from '../UI/Loading';

import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function addNewProduct(product) {
    setProducts([product, ...products]);
  }

  function deleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (res.status === 200) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isModalOpen === false) {
      fetchProducts();
    }
  }, [isModalOpen]);

  return (
    <div className="products">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <AddProduct
        addNewProduct={addNewProduct}
        setIsModalOpen={setIsModalOpen}
      />
      <div className="products-wrapper">
        <Loading isLoading={isLoading} />
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onDeleteProduct={deleteProduct}
          />
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
