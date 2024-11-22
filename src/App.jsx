import { useState } from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log('app çalıştı!');

  return (
    <div className="app container mx-auto pb-8">
      <Header cartItems={cartItems} />
      <Products setCartItems={setCartItems} />
    </div>
  );
}

export default App;
