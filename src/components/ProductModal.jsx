import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check, Shield, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#111111] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#050505]/80 hover:bg-[#D4AF37] text-white hover:text-[#050505] rounded-full border border-[#D4AF37]/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto bg-[#0A0A0A] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#D4AF37]/20">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[350px] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#050505]/90 text-[10px] font-bold tracking-widest text-[#E5C76B] uppercase border border-[#D4AF37]/40 rounded">
              {product.category}
            </span>
          </div>

          {/* Details Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[10px] font-bold">Extrait De Parfum</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                {product.name}
              </h2>

              {/* Price & Rating */}
              <div className="flex items-center justify-between pt-1 pb-3 border-b border-[#D4AF37]/15">
                <span className="font-serif text-2xl font-extrabold text-[#E5C76B]">
                  {product.price}
                </span>

                <div className="flex items-center space-x-1.5 text-xs text-[#999999]">
                  <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                  <span className="text-white font-bold">{product.rating || '4.9'}</span>
                  <span>({product.reviews || '120'} reviews)</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#999999] leading-relaxed">
                {product.description}
              </p>

              {/* Fragrance Notes */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Fragrance Pyramid</span>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-[#999999]">
                  <div className="bg-[#050505] p-2 rounded border border-[#D4AF37]/10">
                    <span className="text-[#E5C76B] block font-semibold">Top</span> Saffron & Bergamot
                  </div>
                  <div className="bg-[#050505] p-2 rounded border border-[#D4AF37]/10">
                    <span className="text-[#E5C76B] block font-semibold">Heart</span> Damask Rose
                  </div>
                  <div className="bg-[#050505] p-2 rounded border border-[#D4AF37]/10">
                    <span className="text-[#E5C76B] block font-semibold">Base</span> Aged Agarwood
                  </div>
                </div>
              </div>

              {/* Bottle Size Selector */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Bottle Size</span>
                <div className="flex space-x-3">
                  {['12ml Oil', '50ml', '100ml Spray'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-[#D4AF37] text-[#050505] font-bold'
                          : 'bg-[#050505] text-[#999999] border border-[#D4AF37]/20 hover:border-[#D4AF37]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#D4AF37]/15">
              <button
                onClick={handleAdd}
                className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#E5C76B] text-[#050505] font-bold text-xs uppercase tracking-wider rounded hover:opacity-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center space-x-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO CART</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
