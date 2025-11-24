const Banner = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-dark-blue-700 py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Amazing <span className="text-blue-400">Products</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Shop the latest trends with unbeatable prices. Quality products delivered to your doorstep.
          </p>
          <button
            onClick={scrollToProducts}
            className="btn-primary text-lg"
          >
            Shop Now
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">500+</div>
            <div className="text-gray-400">Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">10K+</div>
            <div className="text-gray-400">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
