import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';
import addToCartGif from './assets/addToCart_gif.gif';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCartAnimation, setShowCartAnimation] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    setAddedProduct(product);
    setShowCartAnimation(true);

    // Auto-close after 2.5 seconds
    setTimeout(() => {
      setShowCartAnimation(false);
      setAddedProduct(null);
    }, 2500);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-dark-blue-950">
      <Header
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <main>
        <Banner />
        <Products
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      </main>
      <Footer />

      {/* Add to Cart Success Animation Modal */}
      {showCartAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-dark-blue-800 rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 transform animate-scaleIn">
            {/* GIF Animation */}
            <div className="flex justify-center mb-4">
              <img
                src={addToCartGif}
                alt="Adding to cart"
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>

            {/* Success Message */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Added to Cart! 🎉
              </h3>
              <p className="text-gray-300 mb-1">
                {addedProduct?.name}
              </p>
              <p className="text-blue-400 font-semibold">
                ${parseFloat(addedProduct?.price).toFixed(2)}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => {
                setShowCartAnimation(false);
                setAddedProduct(null);
              }}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
