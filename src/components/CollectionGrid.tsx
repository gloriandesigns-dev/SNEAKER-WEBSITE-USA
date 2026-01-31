import React from 'react';

// Renamed collections to American themes
const collections = [
  {
    id: 1,
    name: "Canyon Series",
    image: "https://www.dropbox.com/scl/fi/mkfs8pix3c28ew5lerqbh/ChatGPT-Image-Jan-28-2026-01_18_25-AM.webp?rlkey=wgqpvp9ntbb39f5wyrdgfd2he&st=eo9y9jm1&dl=0&raw=1", // Set 1
  },
  {
    id: 2,
    name: "Frontier Collection",
    image: "https://www.dropbox.com/scl/fi/38x9ysmr9uoswj6fw9z5e/ChatGPT-Image-Jan-28-2026-11_11_55-PM.webp?rlkey=delyz2q81udhb7hwbjmecerc0&st=gkzfudqu&dl=0&raw=1", // Set 2
  },
  {
    id: 3,
    name: "Heritage X Liberty",
    image: "https://www.dropbox.com/scl/fi/nvnqgyvimdg5m2rpzexzs/ChatGPT-Image-Jan-29-2026-02_10_17-AM.webp?rlkey=9m5n5c19w521g4xb2d07ckmu1&st=ydsk86v7&dl=0&raw=1", // Set 3
  },
  {
    id: 4,
    name: "Summit Collection",
    image: "https://www.dropbox.com/scl/fi/ic9vxdkwjbcffzoca0p1c/ChatGPT-Image-Jan-29-2026-02_10_30-AM.webp?rlkey=bgycou32az8z3czwxupy2ks3h&st=9rz6wtyz&dl=0&raw=1", // Set 4
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

      {/* Static Grid - Enforced lg:grid-cols-4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-heritage-charcoal/5">
        {collections.map((collection) => (
          <div key={collection.id} className="relative group p-8 pb-12 flex flex-col justify-between min-h-[400px]">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-sans text-lg font-bold text-heritage-charcoal uppercase tracking-wide">
                {collection.name}
              </h3>
            </div>

            {/* Image */}
            <div className="flex-grow flex items-center justify-center mb-6">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-auto max-h-[200px] object-contain mix-blend-multiply filter contrast-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
