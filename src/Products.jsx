import ProductCard from './ProductCard';
import { productsData } from './productsData';

function Products() {
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
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
