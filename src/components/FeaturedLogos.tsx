import React from 'react';

export const FeaturedLogos = () => {
  // Using text representation for logos to keep it clean and dependency-free
  const logos = [
    { name: "VOGUE", font: "font-serif" },
    { name: "GQ", font: "font-sans font-black tracking-tighter" },
    { name: "GRAZIA", font: "font-serif tracking-widest" },
    { name: "BAZAAR", font: "font-serif font-bold" },
    { name: "ELLE", font: "font-serif font-black tracking-tight" },
    { name: "HYPEBEAST", font: "font-sans font-bold tracking-tighter" },
  ];

  return (
    <section className="bg-white py-12 border-b border-heritage-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-heritage-charcoal/40">
            Featured In
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className={`text-3xl md:text-4xl text-heritage-charcoal ${logo.font}`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
