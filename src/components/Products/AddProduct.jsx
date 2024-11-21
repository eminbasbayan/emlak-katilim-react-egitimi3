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

function AddProduct({ productsData, addNewProduct }) {
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

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = { id: Math.random(), ...product };
    addNewProduct(newProduct);

    setProduct({
      title: '',
      description: '',
      price: '',
      image: '',
      category: '',
    });
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
