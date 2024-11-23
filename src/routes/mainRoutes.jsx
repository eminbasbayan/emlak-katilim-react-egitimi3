import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import Error404 from '../pages/Error404';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductsPage from '../pages/ProductsPage';
import UsersPage from '../pages/UsersPage';

export const mainRoutes = [
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
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            return data;
          } catch (err) {
            console.log(err);
          }
        },
      },
    ],
  },
];
