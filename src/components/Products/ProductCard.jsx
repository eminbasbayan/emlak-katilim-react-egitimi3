import Button from '../UI/Button';
import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt="product image" />
      </div>
      <div className="product-bottom">
        <b className="product-title">{props.title}</b>
        <span className="product-price">{props.price}₺</span>
        <Button />
      </div>
    </div>
  );
}

export default ProductCard;
