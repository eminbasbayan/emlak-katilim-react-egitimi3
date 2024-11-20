import './ProductCard.css';

const productCardCss = {
  borderColor: 'red',
};

function ProductCard(props) {
  return (
    <div className="product-card" style={productCardCss}>
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
