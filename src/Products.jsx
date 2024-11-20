import ProductCard from './ProductCard';

function Products() {
  const image =
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg';

  const title = 'Tisört';
  const price = '100';

  return (
    <div className="products">
      <h2>Products</h2>
      <div
        className="products-wrapper"
        style={{
          display: 'flex',
          columnGap: '20px',
        }}
      >
        <ProductCard image={image} title={title} price={price} />
        <ProductCard
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          title="Mens Cotton Jacket"
          price={55.99}
        />
      </div>
    </div>
  );
}

export default Products;
