import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeContext } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layouts/MainLayout';

function App() {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
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
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
      ],
    },
  ]);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1F2937',
    color: theme === 'light' ? '#1F2937' : '#ffffff',
    transition: 'all 0.3s ease',
  };

  return (
    <div className="app" style={appStyle}>
      <div className="container mx-auto pb-8">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
