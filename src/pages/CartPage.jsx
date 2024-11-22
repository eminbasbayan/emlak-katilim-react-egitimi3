import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-page">
      <h1 className="text-3xl font-bold">Cart Page</h1>
      {cartItems.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default CartPage;
