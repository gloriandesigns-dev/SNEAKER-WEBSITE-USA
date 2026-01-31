import React from 'react';

// Placeholder content to allow scrolling and demonstrate the parallax effect leaving the viewport
export const ContentSection = () => {
  return (
    <div className="bg-heritage-bone py-24 px-6 md:px-12 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl text-heritage-charcoal">
              Rooted in Tradition. <br />
              <span className="italic text-heritage-clay">Designed for Today.</span>
            </h3>
            <p className="text-heritage-brown/80 leading-relaxed max-w-md">
              Our footwear is more than just a product; it is a testament to the enduring spirit of the American landscape. 
              Each stitch tells a story of resilience, craft, and a deep connection to the earth beneath our feet.
            </p>
            <div className="pt-4">
              <a href="#" className="text-heritage-clay uppercase tracking-widest text-sm font-bold border-b border-heritage-clay pb-1 hover:text-heritage-brown hover:border-heritage-brown transition-colors">
                Read Our Story
              </a>
            </div>
          </div>
          <div className="h-[400px] bg-heritage-sand/30 rounded-lg overflow-hidden relative group">
             <div className="absolute inset-0 bg-heritage-clay/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
             <img 
               src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
               alt="Desert Landscape" 
               className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
             />
          </div>
        </div>
        
        {/* Grid of products placeholder */}
        <div className="mt-32">
            <div className="flex justify-between items-end mb-12">
                <h3 className="font-serif text-3xl text-heritage-charcoal">Latest Drops</h3>
                <a href="#" className="text-sm font-medium uppercase tracking-wider text-heritage-charcoal/60 hover:text-heritage-clay">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="group cursor-pointer">
                        <div className="bg-white p-8 rounded-sm mb-4 relative overflow-hidden transition-shadow hover:shadow-lg">
                            <div className="aspect-[4/3] bg-heritage-sand/20 rounded-sm" />
                        </div>
                        <h4 className="font-serif text-lg text-heritage-charcoal">Canyon Runner {item}</h4>
                        <p className="text-heritage-clay text-sm font-medium mt-1">$185.00</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
