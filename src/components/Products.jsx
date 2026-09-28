import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';

export default function Products({ products, onSelectProduct, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState({});

  const categories = ['All', 'Oud', 'Musk', 'Amber', 'Attar'];

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="products" className="py-10 md:py-16 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            OUR <span className="gold-gradient-text">COLLECTION</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#999999] leading-relaxed">
            Discover fragrances crafted for every occasion. Pure oils and luxurious extrait de parfum blending timeless oriental heritage.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C76B] text-[#050505] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#111111] text-[#999999] hover:text-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isLiked = !!wishlist[product.id];

            return (
              <div
                key={product.id}
                className="group bg-[#111111] rounded-xl border border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-[#0A0A0A] cursor-pointer" onClick={() => onSelectProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/hero.jpg'; // fallback
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#050505]/80 backdrop-blur-sm text-[10px] font-bold tracking-widest text-[#E5C76B] uppercase border border-[#D4AF37]/30 rounded">
                      {product.category}
                    </span>

                    {/* Heart / Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      aria-label="Wishlist"
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                        isLiked
                          ? 'bg-[#D4AF37] text-[#050505]'
                          : 'bg-[#050505]/60 text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-[#050505]/90'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-2">
                    
                    {/* Rating & Category */}
                    <div className="flex items-center justify-between text-xs text-[#999999]">
                      <div className="flex items-center text-[#D4AF37] gap-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-semibold text-white">{product.rating || '4.9'}</span>
                        <span className="text-[#999999]">({product.reviews || '100+'})</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-[#999999]">Pure Extract</span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-lg font-bold text-white group-hover:text-[#E5C76B] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#999999] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Price & Buttons */}
                <div className="p-5 pt-0 mt-2 space-y-3">
                  <div className="flex items-center justify-between border-t border-[#D4AF37]/10 pt-3">
                    <div>
                      <span className="text-[10px] text-[#999999] uppercase tracking-wider block">Price</span>
                      <span className="font-serif text-lg font-extrabold text-[#E5C76B]">
                        {product.price}
                      </span>
                    </div>

                    {/* Quick Add to Cart button */}
                    <button
                      onClick={() => onAddToCart(product)}
                      title="Add to Cart"
                      className="p-2.5 bg-[#050505] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#050505] border border-[#D4AF37]/30 rounded transition-all"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>

                  {/* View Product Button */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#050505] text-xs font-bold uppercase tracking-wider rounded border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW PRODUCT</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
