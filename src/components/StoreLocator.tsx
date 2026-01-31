import React from 'react';
import { ArrowRight } from 'lucide-react';

export const StoreLocator = () => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full">
      {/* Left: Storefront Image (40%) */}
      <div className="w-full md:w-[40%] h-[300px] md:h-full relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2000&auto=format&fit=crop" 
          alt="Kanien Storefront" 
          className="w-full h-full object-cover grayscale-[20%] contrast-125"
        />
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-heritage-charcoal/10" />
      </div>

      {/* Right: Brand Blue Content (60%) */}
      <div className="w-full md:w-[60%] bg-heritage-blue flex flex-col justify-center px-8 md:px-20 py-16 md:py-0">
        <div className="max-w-xl">
          <h2 className="font-sans text-5xl md:text-7xl font-extrabold text-white uppercase leading-[0.9] tracking-tight mb-6">
            Find a Store <br />
            Near You
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/80 font-medium mb-10 tracking-wide">
            Come Shop Our Line Up IRL
          </p>

          <button className="bg-white text-heritage-blue px-8 py-4 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-heritage-bone transition-colors inline-flex items-center gap-2">
            Get More Directions
          </button>
        </div>
        
        {/* Brand Mark Bottom Right */}
        <div className="hidden md:block absolute bottom-12 right-12 opacity-20">
          <h1 className="font-sans text-9xl font-black text-white tracking-tighter">K</h1>
        </div>
      </div>
    </section>
  );
};
