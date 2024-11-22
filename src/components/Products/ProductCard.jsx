import { useContext } from 'react';
import Button from '../UI/Button';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';

function ProductCard(props) {
  const { addToCart } = useContext(CartContext);
  const { onDeleteProduct, ...productItem } = props;
  console.log('ProductCard çalıştı!');

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productItem.image} alt="product image" />
      </div>
      <div className="product-bottom">
        <b className="product-title">{productItem.title}</b>
        <span className="product-desc">{productItem.description}</span>
        <div className="flex justify-between">
          <span className="product-price">{productItem.price}₺</span>
          <b className="product-category text-blue-600">
            {productItem.category}
          </b>
        </div>
        <Button onClick={()=> addToCart(productItem)}>Sepete Ekle</Button>
        <Button color="danger" onClick={() => onDeleteProduct(props.id)}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
