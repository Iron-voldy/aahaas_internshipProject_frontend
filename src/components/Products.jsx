import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Loading from './Loading';

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/products');
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please make sure the backend server is running.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <section id="products" className="py-16 px-4 bg-dark-blue-950">
        <div className="container mx-auto text-center">
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-400">{error}</p>
            <button
              onClick={fetchProducts}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 px-4 bg-dark-blue-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of high-quality products at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="fade-in"
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
