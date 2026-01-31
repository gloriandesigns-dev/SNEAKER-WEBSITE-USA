import React from 'react';

const collections = [
  {
    id: 1,
    name: "Baaz Collection",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    badge: true
  },
  {
    id: 2,
    name: "Karwaan Series",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
    badge: false
  },
  {
    id: 3,
    name: "Heritage X Raga",
    image: "https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=1974&auto=format&fit=crop",
    badge: true
  },
  {
    id: 4,
    name: "Shahi Collection",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
    badge: false
  }
];

export const CollectionGrid = () => {
  return (
    <section className="bg-white border-b border-heritage-charcoal/5">
      {/* Header */}
      <div className="border-b border-heritage-charcoal/5 px-6 md:px-8 py-8 flex justify-between items-center">
        <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
          Shop By Collection
        </h2>
        <div className="hidden md:flex gap-2">
           <span className="text-heritage-charcoal/40 text-xs">←</span>
           <span className="text-heritage-charcoal/40 text-xs">→</span>
        </div>
      </div>

      {/* Static Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-heritage-charcoal/5">
        {collections.map((collection) => (
          <div key={collection.id} className="relative group p-8 pb-12 flex flex-col justify-between min-h-[400px]">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-sans text-lg font-bold text-heritage-charcoal uppercase tracking-wide">
                {collection.name}
              </h3>
              {collection.badge && (
                <div className="border border-heritage-dusk/30 px-2 py-1 bg-heritage-bone/40">
                  <span className="text-[9px] font-bold text-heritage-dusk uppercase tracking-widest leading-none block">
                    Made for<br/>USA
                  </span>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="flex-grow flex items-center justify-center mb-6">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-auto max-h-[200px] object-contain mix-blend-multiply filter contrast-110"
              />
            </div>

            {/* Static - No hover effects requested */}
          </div>
        ))}
      </div>
    </section>
  );
};
