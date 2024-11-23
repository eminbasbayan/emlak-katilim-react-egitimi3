import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddProduct from './AddProduct';
import ProductCard from './ProductCard';
import Modal from '../UI/Modal';
import Loading from '../UI/Loading';

import { fetchProducts } from '../../redux/slices/productSlice';
import useAxios from '../../hooks/useAxios';

import './Products.css';

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, isLoading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: [action.payload, ...state.products] };
    case 'DELETE_PRODUCT':
      return { ...state, products: action.payload };
    case 'SHOW_MODAL':
      return { ...state, isModalOpen: true };
    case 'HIDE_MODAL':
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  isModalOpen: false,
  isLoading: true,
};

function Products() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { loading, error, productData } = useSelector((state) => state.product);
  const reduxDispatch = useDispatch();

  function addNewProduct(newProduct) {
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  }

  function deleteProduct(productId) {
    const filteredProducts = state.products.filter(
      (product) => product.id !== productId
    );
    dispatch({ type: 'DELETE_PRODUCT', payload: filteredProducts });
  }

  useEffect(() => {
    if (loading === 'idle') {
      reduxDispatch(fetchProducts());
    }
  }, [loading, reduxDispatch]);

  if (loading === 'loading') return <Loading />;

  return (
    <div className="products">
      <AddProduct
        addNewProduct={addNewProduct}
        setIsModalOpen={() => dispatch({ type: 'SHOW_MODAL' })}
      />
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <div className="products-wrapper">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onDeleteProduct={deleteProduct}
          />
        ))}
      </div>
      {state.isModalOpen && (
        <Modal
          setIsModalOpen={() => dispatch({ type: 'HIDE_MODAL' })}
          title="Form Uyarısı"
          ok
        >
          <b className="text-red-600">Input alanları boş geçilemez!</b>
        </Modal>
      )}
    </div>
  );
}

export default Products;
