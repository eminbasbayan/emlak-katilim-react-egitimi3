import './AddProduct.css';
import Button from '../UI/Button';
import { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  function handleInputChange({ target: { value, name } }) {
    setProduct({ ...product, [name]: value });
  }

  return (
    <div className="add-new-product">
      <h2 className="text-2xl font-bold mb-1">Yeni Ürün Ekle</h2>
      <form className="add-product-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            placeholder="Ürün ismi giriniz."
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            placeholder="Ürün açıklaması giriniz."
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={handleInputChange}
            placeholder="Ürün fiyatı giriniz."
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            onChange={handleInputChange}
            placeholder="Ürün görseli giriniz."
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            onChange={handleInputChange}
            placeholder="Ürün kategorisi giriniz."
            required
          />
        </label>
        <Button color={'success'}>Yeni Ürün Ekle</Button>
      </form>
    </div>
  );
}

export default AddProduct;
