import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const banners = [
  { id: 1, image: "/banners/banner-1.jpg", alt: "DEMO Perfume Banner 1" },
  { id: 2, image: "/banners/banner-2.jpg", alt: "DEMO Perfume Banner 2" },
  { id: 3, image: "/banners/banner-3.jpg", alt: "DEMO Perfume Banner 3" },
  { id: 4, image: "/banners/banner-4.jpg", alt: "DEMO Perfume Banner 4" }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-play slider: 4.5s interval with clean teardown
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#050505] overflow-hidden border-b border-[#D4AF37]/20 select-none"
    >
      {/* Banner Container: Clean image with 100% original brightness and colors */}
      <div className="relative w-full">
        {banners.map((banner, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={banner.id}
              className={`w-full transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
              }`}
            >
              {/* Original Banner Image without darkening or text overlays */}
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-auto block object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* Manual Navigation Controls: Previous / Next Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous Banner"
        className="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#050505]/60 hover:bg-[#D4AF37] text-white hover:text-[#050505] border border-[#D4AF37]/40 hover:border-[#D4AF37] backdrop-blur-md transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next Banner"
        className="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#050505]/60 hover:bg-[#D4AF37] text-white hover:text-[#050505] border border-[#D4AF37]/40 hover:border-[#D4AF37] backdrop-blur-md transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Manual Controls: Bottom Pagination Dots */}
      <div className="absolute bottom-3 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center space-x-2 sm:space-x-2.5">
        {banners.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/70 border border-[#D4AF37]/20'
              }`}
            />
          );
        })}
      </div>

    </section>
  );
}
