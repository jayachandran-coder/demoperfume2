import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      // parse numeric value from price format e.g. "₹1,499" -> 1499
      const priceNum = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
      return sum + priceNum * (item.quantity || 1);
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#050505]/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111111] border-l border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                Your Shopping Bag ({cartItems.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#999999] hover:text-white hover:bg-[#050505] rounded-full border border-[#D4AF37]/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#D4AF37]/30 mx-auto" />
                <p className="text-sm text-[#999999]">Your shopping bag is currently empty.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#050505] text-[#D4AF37] border border-[#D4AF37]/40 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#050505] transition-all"
                >
                  Explore Perfumes
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center space-x-4 bg-[#050505] p-3 rounded-lg border border-[#D4AF37]/15"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded border border-[#D4AF37]/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-[11px] text-[#999999]">{item.selectedSize || '50ml'} • Qty: {item.quantity || 1}</p>
                    <p className="font-serif text-sm font-bold text-[#E5C76B] mt-1">{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-1.5 text-[#999999] hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#D4AF37]/20 bg-[#050505] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#999999] uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl font-extrabold text-[#E5C76B]">
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <div className="p-3 bg-[#111111] rounded border border-[#D4AF37]/20 text-[11px] text-[#999999] flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Demo Mode: This frontend demonstration shows how cart totals are computed. Checkout is disabled per project scope.
                </span>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={onClearCart}
                  className="w-1/3 py-3 bg-[#111111] hover:bg-red-950/40 text-xs text-[#999999] hover:text-red-400 font-bold uppercase tracking-wider rounded border border-[#D4AF37]/20 transition-all"
                >
                  Clear
                </button>
                <button
                  onClick={() => alert('Frontend Demo Store: Checkout functionality is excluded as per requirements.')}
                  className="w-2/3 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E5C76B] text-[#050505] font-bold text-xs uppercase tracking-wider rounded hover:opacity-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center justify-center space-x-2"
                >
                  <span>CHECKOUT DEMO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
