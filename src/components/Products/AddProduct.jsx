import './AddProduct.css';
import Button from '../UI/Button';
import { useState } from 'react';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescChange(event) {
    setDescription(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  return (
    <div className="add-new-product">
      <h2 className="text-2xl font-bold mb-1">Yeni Ürün Ekle</h2>
      <form className="add-product-form">
        {title}
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleTitleChange}
            required
          />
        </label>
        {description}
        <label>
          Description:
          <input
            type="text"
            name="title"
            onChange={handleDescChange}
            required
          />
        </label>
        {price}
        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={handlePriceChange}
            required
          />
        </label>
        {image}
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            onChange={handleImageChange}
            required
          />
        </label>
        <Button color={'success'}>Yeni Ürün Ekle</Button>
      </form>
    </div>
  );
}

export default AddProduct;
