import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Button from '../components/UI/Button';
import useAxios from '../hooks/useAxios';
import Skeleton from '../components/UI/Skeleton';

const ProductDetailPage = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const { productId } = useParams();

  const {
    data: product,
    error,
    loading,
  } = useAxios({
    url: `https://fakestoreapi.com/products/${productId}`,
    method: 'GET',
  });

  const findCartItem = cartItems.find((item) => item.id === product?.id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Sol Taraf - Ürün Görseli Skeleton */}
            <div className="md:w-1/2 p-4">
              <Skeleton className="w-full aspect-square rounded-lg" />
            </div>

            {/* Sağ Taraf - Ürün Detayları Skeleton */}
            <div className="md:w-1/2 p-6 space-y-4">
              {/* Başlık */}
              <Skeleton className="h-8 w-3/4" />

              {/* Kategori */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>

              {/* Açıklama */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Fiyat */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-24" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-32" />
              </div>

              {/* Sepete Ekle Butonu */}
              <Skeleton className="h-10 w-32 mt-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Kategori:{' '}
              <span className="font-semibold text-gray-800">
                {product.category}
              </span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Açıklama: {product.description}
            </p>
            <div className="text-gray-800 font-semibold text-lg mb-4">
              Fiyat: <span className="text-green-600">${product.price}</span>
            </div>
            {/* Rating */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg mr-2">
                ★ {product.rating.rate}
              </span>
              <span className="text-gray-600 text-sm">
                ({product.rating.count} değerlendirme)
              </span>
            </div>
            {/* Add to Cart Button */}
            <Button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              disabled={findCartItem}
            >
              Sepete Ekle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
