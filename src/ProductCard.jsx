import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt="product image" />
      </div>
      <div className="product-info">
        <b className="product-title">{props.title}</b>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
