import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import addToCartGif from './assets/addToCart_gif.gif';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCartAnimation, setShowCartAnimation] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleAddToCart = (product) => {
    // Check if product already in cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Increase quantity
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setAddedProduct(product);
    setShowCartAnimation(true);

    // Auto-close after 2.5 seconds
    setTimeout(() => {
      setShowCartAnimation(false);
      setAddedProduct(null);
    }, 2500);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleOpenCart = () => {
    setShowCartModal(true);
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
  };

  return (
    <div className="min-h-screen bg-dark-blue-950">
      <Header
        cartCount={getTotalItems()}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onCartClick={handleOpenCart}
      />
      <main>
        <Banner />
        <Products
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      </main>
      <Footer />

      {/* Cart Modal */}
      {showCartModal && (
        <CartModal
          cartItems={cartItems}
          onClose={handleCloseCart}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          totalPrice={getTotalPrice()}
        />
      )}

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
