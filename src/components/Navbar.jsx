import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Heart } from 'lucide-react';

export default function Navbar({ cartCount = 0, wishlistCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <a href="#home" className="group flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E5C76B] to-[#D4AF37] group-hover:opacity-90 transition-opacity">
                DEMO
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#F5F5F5]/80 hover:text-[#D4AF37] tracking-wider uppercase transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#111111] border border-[#D4AF37]/40 rounded-full px-3 py-1.5 text-xs transition-all">
                  <Search className="w-4 h-4 text-[#D4AF37] mr-2" />
                  <input
                    type="text"
                    placeholder="Search fragrance..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white focus:outline-none w-36 sm:w-44 text-xs"
                    autoFocus
                  />
                  <button 
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="text-[#999999] hover:text-white ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2 text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-[#D4AF37] text-[#050505] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Cart Icon */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2 text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-[#D4AF37] text-[#050505] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-[#F5F5F5] hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#D4AF37]/20 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="mb-4 pt-2">
            <div className="flex items-center bg-[#111111] border border-[#D4AF37]/30 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-[#D4AF37] mr-2" />
              <input
                type="text"
                placeholder="Search perfumes, oud, attar..."
                className="bg-transparent text-white focus:outline-none w-full text-sm"
              />
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#F5F5F5] hover:text-[#D4AF37] tracking-wider uppercase py-2 border-b border-[#111111]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
