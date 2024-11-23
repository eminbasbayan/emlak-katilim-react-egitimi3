import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import CartProvider from './context/CartProvider';
import ThemeProvider from './context/ThemeContext';
import store from './redux/store';

import './index.css';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </ReduxProvider>
);
