import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  badge?: boolean;
}

interface ProductStripProps {
  title?: string;
  products: Product[];
  className?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovered && product.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 2000);
    } else {
      setCurrentImageIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, product.images.length]);

  return (
    <div 
      className="
        w-full
        bg-white
        flex flex-col justify-between 
        group/card hover:bg-heritage-bone/10 transition-colors
        px-6 py-8
        relative
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] w-full mb-6 relative flex items-center justify-center p-4">
        {product.images.map((img, idx) => (
          <img 
            key={img}
            src={img} 
            alt={`${product.name} view ${idx + 1}`} 
            className={cn(
              "absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-opacity duration-500 ease-in-out p-4",
              idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          />
        ))}
      </div>

      {/* Info */}
      <div className="space-y-1.5 text-center md:text-left relative z-10">
        <h3 className="font-sans text-sm md:text-base font-bold text-heritage-charcoal uppercase tracking-wide leading-tight">
          {product.name}
        </h3>
        <p className="font-sans text-sm font-medium text-heritage-clay">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export const ProductStrip = ({ title, products, className }: ProductStripProps) => {
  // Limit to exactly 4 items for the grid
  const displayProducts = products.slice(0, 4);

  return (
    <section className={cn("bg-white border-b border-heritage-charcoal/5 py-12", className)}>
      {/* Header */}
      {title && (
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 mb-8">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
            {title}
          </h2>
        </div>
      )}

      {/* Responsive Grid Container */}
      {/* 
         - grid-cols-1 (Mobile) -> grid-cols-2 (Tablet) -> grid-cols-4 (Desktop)
         - gap-px with a background color creates the borders between items
      */}
      <div className="bg-heritage-charcoal/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border-t border-heritage-charcoal/5 lg:border-t-0">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
