import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../components/ProductStrip';
import { ChevronDown } from 'lucide-react';

interface ApparelProps {
  products: Product[];
}

export const Apparel = ({ products }: ApparelProps) => {
  // Duplicate products to fill the grid
  const gridProducts = [...products, ...products, ...products].slice(0, 10);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO / HEADER */}
      <div className="bg-heritage-bone pt-16 pb-12 border-b border-heritage-charcoal/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 text-center">
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-heritage-charcoal uppercase tracking-tighter mb-4">
            Apparel
          </h1>
          <p className="font-sans text-sm font-bold text-heritage-charcoal/60 uppercase tracking-[0.2em]">
            Heritage Threads • Built to Last
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-[80px] z-30 bg-white border-b border-heritage-charcoal/10">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center h-[50px] md:h-[60px]">
          <div className="flex h-full">
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest bg-heritage-charcoal text-white">
              All Apparel
            </button>
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-heritage-charcoal hover:bg-heritage-bone transition-colors border-r border-heritage-charcoal/10">
              Tees
            </button>
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-heritage-charcoal hover:bg-heritage-bone transition-colors border-r border-heritage-charcoal/10">
              Outerwear
            </button>
          </div>
          <div className="flex h-full border-l border-heritage-charcoal/10">
            <button className="h-full px-6 md:px-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heritage-charcoal hover:bg-heritage-bone transition-colors">
              Filters <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID - 5 Columns (Portrait Cards) */}
      <div className="max-w-[1800px] mx-auto border-x border-heritage-charcoal/5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {gridProducts.map((product, index) => (
            <ProductCard 
              key={`${product.id}-${index}`} 
              product={product} 
              // Use portrait aspect ratio for apparel
              aspectRatio="aspect-[3/4]"
              showSaleBadge={index % 3 === 0} // Mock sale badges
              className="border-r border-b border-heritage-charcoal/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
