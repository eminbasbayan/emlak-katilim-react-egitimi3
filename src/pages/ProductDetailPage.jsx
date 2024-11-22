import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    async function fecthProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (res.status === 200) {
          const data = await res.json();
          setProduct(data);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    fecthProduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Skeleton Image */}
            <div className="md:w-1/2 p-4">
              <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
            {/* Skeleton Details */}
            <div className="md:w-1/2 p-6 space-y-4">
              <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-full"></div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-5/6"></div>
              <div className="h-6 bg-gray-300 animate-pulse rounded w-1/3"></div>
              <div className="h-10 bg-blue-300 animate-pulse rounded w-1/2"></div>
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
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
