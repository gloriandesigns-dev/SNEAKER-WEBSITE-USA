import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../components/ProductStrip';
import { ChevronDown } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
}

export const BestSellers = ({ products }: BestSellersProps) => {
  // Duplicate products to fill the grid nicely
  const gridProducts = [...products, ...products, ...products].slice(0, 12);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Beige Background */}
      <div className="relative bg-heritage-bone h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 bg-heritage-sand/10" />
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="font-sans text-sm md:text-base font-bold text-heritage-charcoal/60 uppercase tracking-[0.2em] mb-4">
            Everyday Sneakers
          </h2>
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-heritage-charcoal uppercase tracking-tighter leading-none mb-0">
            Bestselling Sneakers
          </h1>
        </div>
      </div>

      {/* FILTER BAR - Matches Reference */}
      <div className="sticky top-[80px] z-30 bg-white border-y border-heritage-charcoal/10">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center h-[50px] md:h-[60px]">
          {/* Left: Categories Tabs */}
          <div className="flex h-full">
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest bg-heritage-charcoal text-white">
              Men
            </button>
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-heritage-charcoal hover:bg-heritage-bone transition-colors border-r border-heritage-charcoal/10">
              Women
            </button>
          </div>

          {/* Right: Filters */}
          <div className="flex h-full border-l border-heritage-charcoal/10">
            <button className="h-full px-6 md:px-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heritage-charcoal hover:bg-heritage-bone transition-colors">
              Filters <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID - 4 Columns */}
      <div className="max-w-[1800px] mx-auto border-x border-heritage-charcoal/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {gridProducts.map((product, index) => (
            <ProductCard 
              key={`${product.id}-${index}`} 
              product={product} 
              badgeText="Made for USA"
              className="border-r border-b border-heritage-charcoal/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
