import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: "Gully Number 001 - Barfi Burgundy", price: "$185.00", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop" },
  { id: 2, name: "1928 Turf Olive", price: "$195.00", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, name: "Baaz Noor Yellow", price: "$175.00", image: "https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "Naadu Heritage", price: "$210.00", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1998&auto=format&fit=crop" },
  { id: 5, name: "Canyon Runner Red", price: "$165.00", image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop" },
];

export const FeaturedCarousel = () => {
  return (
    <div className="bg-heritage-bone py-16 border-b border-heritage-charcoal/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 mb-10 flex items-end justify-between">
        <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
          Made for USA
        </h3>
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-heritage-clay hover:text-heritage-brown transition-colors">
          View Collection
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        
        {/* Navigation Arrows (Visible on Hover) */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowLeft className="w-5 h-5 text-heritage-charcoal" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-5 h-5 text-heritage-charcoal" />
        </button>

        {/* Moving Track - Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-px" // gap-px for border effect if needed, or just gap-0
            animate={{ x: ["-50%", "0%"] }} // Left to Right
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate for loop */}
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {products.map((product, index) => (
                  <div 
                    key={`${i}-${product.id}`} 
                    className="w-[300px] md:w-[400px] flex-shrink-0 p-8 bg-white border-r border-heritage-charcoal/5 group/card hover:bg-heritage-bone/30 transition-colors"
                  >
                    <div className="aspect-[4/3] mb-6 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Badge */}
                      <div className="absolute top-0 right-0">
                         <span className="bg-heritage-dusk text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                           Made for USA
                         </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-base font-bold text-heritage-charcoal uppercase tracking-wide">
                        {product.name}
                      </h4>
                      <p className="font-sans text-sm font-medium text-heritage-clay">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
