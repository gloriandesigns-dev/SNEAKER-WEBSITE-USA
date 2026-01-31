import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Product } from './ProductStrip';

interface ProductCardProps {
  product: Product;
  badgeText?: string;
  className?: string;
  aspectRatio?: string; // Allow custom aspect ratios (e.g., "aspect-[3/4]")
  showSaleBadge?: boolean;
}

export const ProductCard = ({ 
  product, 
  badgeText, 
  className, 
  aspectRatio = "aspect-[4/3]",
  showSaleBadge = false
}: ProductCardProps) => {
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
      className={cn(
        "w-full bg-white flex flex-col justify-between group/card hover:bg-heritage-bone/10 transition-colors px-6 py-8 relative border-r border-b border-heritage-charcoal/5",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Badge (e.g., Made for USA) */}
      {badgeText && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-heritage-dusk text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider shadow-sm">
            {badgeText}
          </div>
        </div>
      )}

      {/* Sale Badge (Bottom Left usually, or Top Left) */}
      {showSaleBadge && (
        <div className="absolute top-4 left-4 z-20">
           <div className="bg-heritage-clay text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
             Save $20
           </div>
        </div>
      )}

      {/* Image Container */}
      <div className={cn("w-full mb-6 relative flex items-center justify-center p-2 overflow-hidden", aspectRatio)}>
        {product.images.map((img, idx) => (
          <img 
            key={img}
            src={img} 
            alt={`${product.name} view ${idx + 1}`} 
            className={cn(
              "absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-opacity duration-500 ease-in-out p-2",
              idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          />
        ))}
      </div>

      {/* Info */}
      <div className="space-y-1.5 text-left relative z-10">
        <span className="text-[10px] text-heritage-charcoal/40 font-bold uppercase tracking-wider">
          MEN
        </span>
        <h3 className="font-sans text-sm font-bold text-heritage-charcoal uppercase tracking-wide leading-tight min-h-[40px]">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <p className="font-sans text-sm font-medium text-heritage-charcoal">
            {product.price}
          </p>
          {showSaleBadge && (
             <p className="font-sans text-xs font-medium text-heritage-charcoal/40 line-through">
               $245.00
             </p>
          )}
        </div>
      </div>
    </div>
  );
};
