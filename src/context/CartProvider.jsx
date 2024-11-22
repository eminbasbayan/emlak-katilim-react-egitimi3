import { useState } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productItem) {
    setCartItems((cartItems) => [productItem, ...cartItems]);
    toast('Ürün sepete eklendi!', {
      autoClose: 1000,
      type: 'success',
    });
  }

  function deleteFromCart(cartId) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== cartId));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
