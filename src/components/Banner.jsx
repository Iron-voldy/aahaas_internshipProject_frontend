const Banner = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%'
          }}
          src="https://www.youtube.com/embed/YGQBm9Mnad8?si=3ggBD5ZrucZsg9jS&autoplay=1&muted=1&loop=1&playlist=YGQBm9Mnad8&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-900/80 via-dark-blue-800/70 to-dark-blue-700/80"></div>
      </div>

      {/* Content on top of video */}
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Discover Amazing <span className="text-blue-400">Products</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
            Shop the latest trends with unbeatable prices. Quality products delivered to your doorstep.
          </p>
          <button
            onClick={scrollToProducts}
            className="btn-primary text-lg shadow-2xl"
          >
            Shop Now
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-4xl font-bold text-blue-400 drop-shadow-lg">500+</div>
            <div className="text-gray-200 drop-shadow-md">Products</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-4xl font-bold text-blue-400 drop-shadow-lg">10K+</div>
            <div className="text-gray-200 drop-shadow-md">Customers</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-4xl font-bold text-blue-400 drop-shadow-lg">24/7</div>
            <div className="text-gray-200 drop-shadow-md">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
