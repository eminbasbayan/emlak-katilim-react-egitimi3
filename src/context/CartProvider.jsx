import { useState } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  function addToCart(productItem) {
    const findProduct = cartItems.find((item) => item.id === productItem.id);

    if (findProduct) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === productItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(newCartItems);
    } else {
      setCartItems((cartItems) => [productItem, ...cartItems]);
    }

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
