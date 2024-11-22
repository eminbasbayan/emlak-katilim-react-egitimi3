import { useContext } from 'react';
import Button from '../UI/Button';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';

function ProductCard(props) {
  const { addToCart, deleteFromCart } = useContext(CartContext);
  const { onDeleteProduct, cart, ...productItem } = props;

  function deleteProduct() {
    if (!cart) {
      onDeleteProduct(props.id);
    } else {
      deleteFromCart(props.id);
    }
  }

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
        {!cart && (
          <Button onClick={() => addToCart({ ...productItem, quantity: 1 })}>
            Sepete Ekle
          </Button>
        )}
        {
          <Button color="danger" onClick={deleteProduct}>
            {cart ? 'Sepetten Sil' : 'Ürünü Sil'}
          </Button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
