import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Layout/Header';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-page">
      <Header />
      <h1 className="text-3xl font-bold">Cart Page</h1>
      {cartItems.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default CartPage;
