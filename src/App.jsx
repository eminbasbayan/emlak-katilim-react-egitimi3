import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeContext } from './context/ThemeContext';

import 'react-toastify/dist/ReactToastify.css';

import router from './routes/routes';

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
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
