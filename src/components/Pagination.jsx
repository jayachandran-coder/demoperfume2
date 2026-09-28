import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ totalPages = 3, currentPage = 1, onPageChange }) {
  const [page, setPage] = useState(currentPage);

  const handlePage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    if (onPageChange) onPageChange(p);
    
    // Smooth scroll to top of products grid
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050505] pb-16 pt-4 border-b border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">        {/* Page Control Buttons */}
        <div className="flex items-center justify-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            aria-label="Previous Page"
            className={`p-2.5 rounded border text-xs font-medium transition-all flex items-center justify-center ${
              page === 1
                ? 'bg-[#111111]/50 border-[#222222] text-[#555555] cursor-not-allowed'
                : 'bg-[#111111] border-[#D4AF37]/30 text-[#F5F5F5] hover:text-[#D4AF37] hover:border-[#D4AF37]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Numbered Pages */}
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handlePage(num)}
              className={`w-9 h-9 rounded text-xs font-bold font-serif transition-all ${
                page === num
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C76B] text-[#050505] shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                  : 'bg-[#111111] text-[#999999] hover:text-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              {num}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next Page"
            className={`p-2.5 rounded border text-xs font-medium transition-all flex items-center justify-center ${
              page === totalPages
                ? 'bg-[#111111]/50 border-[#222222] text-[#555555] cursor-not-allowed'
                : 'bg-[#111111] border-[#D4AF37]/30 text-[#F5F5F5] hover:text-[#D4AF37] hover:border-[#D4AF37]'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
