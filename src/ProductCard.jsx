function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="product image"
        />
      </div>
      <b className="product-title">Tisört</b>
      <span className="product-price">100₺</span>
    </div>
  );
}

export default ProductCard;
