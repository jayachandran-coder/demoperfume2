import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onExploreOud }) {
  return (
    <section id="home" className="relative bg-[#050505] bg-islamic-pattern py-12 md:py-24 border-b border-[#D4AF37]/10 overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E5C76B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop: 2-column grid | Mobile: Stacked heading then image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#D4AF37]/30 text-xs font-semibold tracking-widest text-[#E5C76B] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Luxury Perfumes • Oud • Attar</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight">
              DISCOVER YOUR <br className="hidden sm:inline" />
              <span className="gold-gradient-text">SIGNATURE SCENT</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#999999] max-w-xl leading-relaxed">
              Timeless fragrances crafted for those who leave a lasting impression. Experience pure Arabian elegance with every drop.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E5C76B] text-[#050505] font-bold text-sm tracking-wider uppercase rounded hover:opacity-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center flex items-center justify-center gap-2 group"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onExploreOud}
                className="w-full sm:w-auto px-8 py-4 bg-[#111111] hover:bg-[#1A1A1A] border border-[#D4AF37]/40 text-[#F5F5F5] hover:text-[#D4AF37] font-semibold text-sm tracking-wider uppercase rounded transition-all text-center"
              >
                EXPLORE OUD
              </button>
            </div>

            {/* Subtle Arabian Feature Highlights */}
            <div className="pt-6 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-4 text-center lg:text-left w-full max-w-md">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#999999]">Pure Extract</p>
                <p className="text-sm font-semibold text-[#E5C76B] font-serif">100% Oil</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#999999]">Longevity</p>
                <p className="text-sm font-semibold text-[#E5C76B] font-serif">24+ Hours</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#999999]">Handcrafted</p>
                <p className="text-sm font-semibold text-[#E5C76B] font-serif">Artisanal</p>
              </div>
            </div>

          </div>

          {/* Perfume Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D4AF37]/30 via-[#E5C76B]/10 to-[#D4AF37]/30 blur-sm group-hover:blur-md transition-all"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src="/hero.jpg"
                  alt="DEMO Luxury Perfume"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                
                {/* Badge Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#050505]/80 backdrop-blur-md rounded-xl border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#E5C76B] font-serif uppercase">Signature Edition</p>
                    <p className="text-sm font-bold text-white">Royal Oud Extrait de Parfum</p>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37] px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                    PREMIUM
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
