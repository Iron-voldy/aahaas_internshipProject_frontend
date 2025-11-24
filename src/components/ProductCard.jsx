const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className="product-card bg-gradient-to-b from-dark-blue-800 to-dark-blue-900 rounded-xl overflow-hidden shadow-xl"
      data-aos="fade-up"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-900 to-transparent opacity-50"></div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2 truncate">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-400">
            ${parseFloat(product.price).toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
