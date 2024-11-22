import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeContext } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layouts/MainLayout';

import 'react-toastify/dist/ReactToastify.css';
import Error404 from './pages/Error404';
import ProductDetailPage from './pages/ProductDetailPage';
import UsersPage from './pages/UsersPage';

function App() {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error404 />,
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
        {
          path: '/product-detail/:productId',
          element: <ProductDetailPage />,
        },
        {
          path: '/users',
          element: <UsersPage />,
          loader: async () => {
            try {
              const res = await fetch(
                'https://fakestoreapi.com/products'
              );
              const data = await res.json();
              return data;
            } catch (err) {
              console.log(err);
            }
          },
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
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
