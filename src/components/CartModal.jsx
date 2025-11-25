const CartModal = ({ cartItems, onClose, onRemove, onUpdateQuantity, totalPrice }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-dark-blue-800 rounded-2xl p-6 shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transform animate-scaleIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-400 text-lg">Your cart is empty</p>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-dark-blue-900 rounded-lg p-4 flex items-center gap-4"
                >
                  {/* Product Image */}
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80?text=Product';
                    }}
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-blue-400 font-bold">${parseFloat(item.price).toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="bg-dark-blue-700 hover:bg-dark-blue-600 text-white w-8 h-8 rounded-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="bg-dark-blue-700 hover:bg-dark-blue-600 text-white w-8 h-8 rounded-lg transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                    title="Remove from cart"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="border-t border-dark-blue-700 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-lg">Total Items:</span>
                <span className="text-white font-semibold text-lg">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 text-xl">Total Price:</span>
                <span className="text-blue-400 font-bold text-2xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 bg-dark-blue-700 hover:bg-dark-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Continue Shopping
                </button>
                <button
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
