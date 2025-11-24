import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    // Show a simple notification
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 fade-in';
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-dark-blue-950">
      <Header cartCount={cartCount} />
      <main>
        <Banner />
        <Products onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
