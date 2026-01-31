import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../components/ProductStrip';
import { ChevronDown } from 'lucide-react';

interface CategoryPageProps {
  title: string;
  products: Product[];
}

export const CategoryPage = ({ title, products }: CategoryPageProps) => {
  // Duplicate products to ensure grid looks full for demo purposes
  const gridProducts = [...products, ...products].slice(0, 12);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="bg-white pt-12 pb-8 border-b border-heritage-charcoal/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-8">
          <h1 className="font-sans text-3xl md:text-4xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-[80px] z-30 bg-white border-b border-heritage-charcoal/10">
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
              // No badges for category pages as per instructions
              className="border-r border-b border-heritage-charcoal/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
