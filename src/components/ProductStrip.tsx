import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: boolean;
}

interface ProductStripProps {
  title?: string;
  products: Product[];
  className?: string;
}

export const ProductStrip = ({ title, products, className }: ProductStripProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one item width
      const scrollAmount = current.clientWidth / (window.innerWidth > 768 ? 2 : 1);
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={cn("bg-white border-b border-heritage-charcoal/5 py-12 relative group", className)}>
      {/* Header */}
      {title && (
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 mb-8">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
            {title}
          </h2>
        </div>
      )}

      {/* Navigation Arrows - Minimal Circular Outline */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 w-10 h-10 rounded-full border border-heritage-charcoal/20 bg-white/90 backdrop-blur-sm flex items-center justify-center text-heritage-charcoal hover:bg-heritage-bone hover:border-heritage-charcoal transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 shadow-sm"
        aria-label="Scroll left"
      >
        <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 w-10 h-10 rounded-full border border-heritage-charcoal/20 bg-white/90 backdrop-blur-sm flex items-center justify-center text-heritage-charcoal hover:bg-heritage-bone hover:border-heritage-charcoal transition-all opacity-0 group-hover:opacity-100 shadow-sm"
        aria-label="Scroll right"
      >
        <ArrowRight className="w-4 h-4 stroke-[1.5]" />
      </button>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="
              /* Mobile: Large cards (80% width) */
              min-w-[80vw] 
              /* Desktop: 5 items visible (20% width) */
              md:min-w-[20%] md:w-[20%] 
              border-r border-heritage-charcoal/5 
              flex-shrink-0 snap-start relative 
              px-6 py-8 flex flex-col justify-between 
              group/card hover:bg-heritage-bone/10 transition-colors
            "
          >
            {/* Badge: Stamp-like, Top Right */}
            {product.badge && (
              <div className="absolute top-4 right-4 z-10">
                <div className="border border-heritage-dusk/30 px-2 py-1 bg-heritage-bone/40 backdrop-blur-[2px]">
                  <span className="text-[9px] font-bold text-heritage-dusk uppercase tracking-widest">
                    Made for USA
                  </span>
                </div>
              </div>
            )}

            {/* Image - Centered Side Profile */}
            <div className="aspect-[4/3] w-full mb-6 flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>

            {/* Info */}
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="font-sans text-sm md:text-base font-bold text-heritage-charcoal uppercase tracking-wide leading-tight">
                {product.name}
              </h3>
              <p className="font-sans text-sm font-medium text-heritage-clay">
                {product.price}
              </p>
            </div>
          </div>
        ))}
        
        {/* Spacer for right padding in scroll view */}
        <div className="w-4 md:w-0 flex-shrink-0" />
      </div>
    </section>
  );
};
