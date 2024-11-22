import { useContext } from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import { ThemeContext } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  const { theme } = useContext(ThemeContext);
  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1F2937',
    color: theme === 'light' ? '#1F2937' : '#ffffff',
    transition: 'all 0.3s ease',
  };
  return (
    <div className="app" style={appStyle}>
      <div className="container mx-auto pb-8">
        <ProductsPage />
      </div>
    </div>
  );
}

export default App;
