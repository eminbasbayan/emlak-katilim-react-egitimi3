import { useState } from 'react';

import Button from '../UI/Button';
import ProductInput from './ProductInput';

import './AddProduct.css';

const productInputs = [
  {
    label: 'Title',
    name: 'title',
    placeholder: 'Ürün ismi giriniz.',
    required: true,
  },
  {
    label: 'Description',
    name: 'description',
    placeholder: 'Ürün açıklaması giriniz.',
    required: true,
  },
  {
    label: 'Price',
    name: 'price',
    placeholder: 'Ürün fiyatı giriniz.',
    type: 'number',
    required: true,
  },
  {
    label: 'Image URL',
    name: 'image',
    placeholder: 'Ürün görseli giriniz.',
    required: true,
  },
  {
    label: 'Category',
    name: 'category',
    placeholder: 'Ürün kategorisi giriniz.',
    required: true,
  },
];

const initialValues = {
  title: '',
  description: '',
  price: '',
  image: '',
  category: '',
};

function AddProduct({ addNewProduct, setIsModalOpen }) {
  const [product, setProduct] = useState(initialValues);

  function handleInputChange({ target: { value, name } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      setIsModalOpen();
      return;
    }

    const newProduct = { id: Math.random(), ...product };
    addNewProduct(newProduct);

    setProduct(initialValues);
  }

  return (
    <div className="add-new-product">
      <h2 className="text-2xl font-bold mb-1">Yeni Ürün Ekle</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        {productInputs.map((input, index) => (
          <ProductInput
            key={index}
            {...input}
            value={product[input.name]}
            onInputChange={handleInputChange}
          />
        ))}

        <Button color={'success'}>Yeni Ürün Ekle</Button>
      </form>
    </div>
  );
}

export default AddProduct;
