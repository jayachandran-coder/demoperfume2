import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Truck, Clock, Share2, Globe, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-[#D4AF37]/20 text-[#999999] pt-16 pb-12 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#D4AF37]/15">
          <div className="flex items-center space-x-4 bg-[#111111] p-4 rounded-xl border border-[#D4AF37]/10">
            <div className="p-3 bg-[#050505] text-[#D4AF37] border border-[#D4AF37]/30 rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">100% Authentic Oud</h4>
              <p className="text-xs text-[#999999]">Sourced directly from rare agarwood forests</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-[#111111] p-4 rounded-xl border border-[#D4AF37]/10">
            <div className="p-3 bg-[#050505] text-[#D4AF37] border border-[#D4AF37]/30 rounded-lg">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">Worldwide Express</h4>
              <p className="text-xs text-[#999999]">Insured luxury packaging & fast delivery</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-[#111111] p-4 rounded-xl border border-[#D4AF37]/10">
            <div className="p-3 bg-[#050505] text-[#D4AF37] border border-[#D4AF37]/30 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">24-Hour Longevity</h4>
              <p className="text-xs text-[#999999]">High concentration pure perfume oils</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-serif text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E5C76B] to-[#D4AF37]">
                DEMO
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#999999] leading-relaxed max-w-sm">
              DEMO is a premier Islamic & Arabian perfume brand dedicated to crafting timeless fragrances, pure Cambodian Oud, and royal attars for those who appreciate true oriental luxury.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Official Website" className="p-2.5 bg-[#111111] hover:bg-[#D4AF37] text-[#999999] hover:text-[#050505] rounded-full border border-[#D4AF37]/20 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Newsletter" className="p-2.5 bg-[#111111] hover:bg-[#D4AF37] text-[#999999] hover:text-[#050505] rounded-full border border-[#D4AF37]/20 transition-all">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share Store" className="p-2.5 bg-[#111111] hover:bg-[#D4AF37] text-[#999999] hover:text-[#050505] rounded-full border border-[#D4AF37]/20 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Shop Collection</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Fragrance Categories */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Pure Cambodian Oud</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Royal White Musk</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Dark Amber Resin</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Traditional Attar Oils</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Limited Edition Gift Sets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Downtown Luxury Boulevard, Dubai / Mumbai</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>contact@demo-perfumes.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#999999] gap-4">
          <p>© 2026 DEMO Perfumes. All Rights Reserved.</p>
          <p className="text-[11px] text-[#777777]">
            Frontend Demonstration Store • Designed for Retail Perfume Business Showcase
          </p>
        </div>

      </div>
    </footer>
  );
}
