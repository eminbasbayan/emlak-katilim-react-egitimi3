import { useContext } from 'react';
import Button from '../UI/Button';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const { addToCart, deleteFromCart } = useContext(CartContext);
  const { onDeleteProduct, cart, quantity, ...productItem } = props;
  const navigate = useNavigate();

  function deleteProduct() {
    if (!cart) {
      onDeleteProduct(props.id);
    } else {
      deleteFromCart(props.id);
    }
  }

  return (
    <div className="product-card">
      <div
        className="product-image cursor-pointer"
        onClick={() => navigate(`/product-detail/${props.id}`)}
      >
        <img src={productItem.image} alt="product image" />
      </div>
      <div className="product-bottom">
        <b
          className="product-title cursor-pointer"
          onClick={() => navigate(`/product-detail/${props.id}`)}
        >
          {productItem.title}
        </b>
        <span className="product-desc">{productItem.description}</span>
        <div className="flex justify-between">
          <span className="product-price">{productItem.price}₺</span>
          {cart && <span className="cart-quantity">x {quantity}</span>}
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
