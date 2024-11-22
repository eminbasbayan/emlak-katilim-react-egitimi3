import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/Products/ProductCard';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-page">
      <h1 className="text-3xl font-bold mb-5">Cart Page</h1>
      {cartItems.length === 0 && (
        <h4 className="text-xl font-bold">Sepette hiç ürün yok...</h4>
      )}
      <div className="products-wrapper">
        {cartItems.map((item) => (
          <ProductCard key={item.id} {...item} cart />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
