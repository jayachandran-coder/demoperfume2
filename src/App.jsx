import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Products from './components/Products';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import { products } from './data/products';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Royal Oud",
      category: "Oud",
      price: "₹1,499",
      image: "/products/royal-oud.jpg",
      quantity: 1,
      selectedSize: "50ml"
    }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });

    // Show temporary toast notification
    setToastMessage(`${product.name} added to cart`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleRemoveCartItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#D4AF37]/30 selection:text-[#E5C76B]">
      
      {/* 1. NAVBAR */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 2. FULL-WIDTH AUTOMATIC BANNER */}
      <HeroSlider
        onExploreOud={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. PRODUCTS SECTION */}
      <Products
        products={products}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onAddToCart={handleAddToCart}
      />

      {/* 4. PAGINATION */}
      <Pagination
        totalPages={3}
        currentPage={1}
        onPageChange={(page) => console.log('Navigated to page:', page)}
      />

      {/* 5. FOOTER */}
      <Footer />

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] border border-[#D4AF37] text-white px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(212,175,55,0.25)] flex items-center space-x-3 animate-in slide-in-from-bottom duration-300">
          <div className="p-1 bg-[#D4AF37] text-[#050505] rounded-full">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold font-serif uppercase tracking-wider text-[#E5C76B]">
            {toastMessage}
          </span>
        </div>
      )}

    </div>
  );
}
