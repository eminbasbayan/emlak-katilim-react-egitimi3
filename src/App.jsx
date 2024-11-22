import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeContext } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Layout/Header';
import CartPage from './pages/CartPage';

function App() {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
  ]);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1F2937',
    color: theme === 'light' ? '#1F2937' : '#ffffff',
    transition: 'all 0.3s ease',
  };

  return (
    <div className="app" style={appStyle}>
      <Header />
      <div className="container mx-auto pb-8">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
