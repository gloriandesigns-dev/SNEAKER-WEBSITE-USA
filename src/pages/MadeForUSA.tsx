import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../components/ProductStrip';
import { ChevronDown } from 'lucide-react';

interface MadeForUSAProps {
  products: Product[];
}

export const MadeForUSA = ({ products }: MadeForUSAProps) => {
  // Duplicate products to fill the 5-column grid nicely
  const gridProducts = [...products, ...products, ...products].slice(0, 15);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Specific Image */}
      <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden bg-heritage-bone">
        <img 
          src="https://www.dropbox.com/scl/fi/flu309nua3wixb42pp1jr/ChatGPT-Image-Jan-31-2026-11_52_42-AM.webp?rlkey=nu91g4ljduf4nkkrvxk3k7iyt&st=6un5ofkf&dl=0&raw=1" 
          alt="Made for USA Hero" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Text Overlay - Top Right/Center similar to reference */}
        {/* Note: The reference image text placement varies, but typical category pages have centered or offset text. 
            Given the "Shark Approved" reference usually has a banner feel, we'll place text cleanly. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="font-sans text-sm md:text-base font-bold text-white/90 uppercase tracking-[0.2em] mb-2 drop-shadow-md">
            Kanien Labs
          </h2>
          <h1 className="font-sans text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-[0.9] drop-shadow-lg">
            Made For <br /> USA
          </h1>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-[80px] z-30 bg-white border-y border-heritage-charcoal/10">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center h-[50px] md:h-[60px]">
          {/* Left: Categories */}
          <div className="flex h-full">
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest bg-heritage-charcoal text-white">
              All
            </button>
            <button className="h-full px-6 md:px-10 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-heritage-charcoal hover:bg-heritage-bone transition-colors border-r border-heritage-charcoal/10">
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

      {/* PRODUCT GRID - 5 Columns (Strictly following reference density) */}
      <div className="max-w-[1800px] mx-auto border-x border-heritage-charcoal/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
