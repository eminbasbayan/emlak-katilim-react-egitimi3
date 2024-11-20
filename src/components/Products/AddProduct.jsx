import './AddProduct.css';
import Button from '../UI/Button';
import { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  function handleInputChange({ target: { value, name } }) {
    setProduct({ ...product, [name]: value });
  }

  return (
    <div className="add-new-product">
      <h2 className="text-2xl font-bold mb-1">Yeni Ürün Ekle</h2>
      <form className="add-product-form">
        {product.title}
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            required
          />
        </label>
        {product.description}
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            required
          />
        </label>
        {product.price}
        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={handleInputChange}
            required
          />
        </label>
        {product.image}
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            onChange={handleInputChange}
            required
          />
        </label>
        <Button color={'success'}>Yeni Ürün Ekle</Button>
      </form>
    </div>
  );
}

export default AddProduct;
