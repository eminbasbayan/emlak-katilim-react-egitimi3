import './ProductCard.css';

const productCardCss = {
  borderColor: 'red',
};

function ProductCard() {
  const image =
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg';

  const title = 'Tisört';
  const price = '100';
  
  return (
    <div className="product-card" style={productCardCss}>
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <b className="product-title">{title}</b>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
