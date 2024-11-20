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
        <Button color="primary" size="xl" classNames="mt-2">
          Sepete Ekle
        </Button>
        <Button color="danger" size="lg" classNames="mb-1">
          Ürünü Sil
        </Button>
        <Button color="success" size="sm" classNames="ml-1">
          Ürün Ekle
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
