import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductInfo {
  name: string;
  price: string;
  thumbnail: string;
}

interface MediaItem {
  id: number;
  type: 'lifestyle' | 'campaign';
  mainImage: string;
  product: ProductInfo;
  altText: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'lifestyle',
    mainImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop',
    altText: "Desert Lifestyle Shot",
    product: { 
      name: "Canyon Runner", 
      price: "$185.00", 
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
    }
  },
  {
    id: 2,
    type: 'lifestyle',
    mainImage: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2115&auto=format&fit=crop',
    altText: "Urban Culture Shot",
    product: { 
      name: "1928 Turf", 
      price: "$195.00", 
      thumbnail: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop" 
    }
  },
  {
    id: 3,
    type: 'lifestyle',
    mainImage: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop',
    altText: "Heritage Detail Shot",
    product: { 
      name: "Baaz Noor", 
      price: "$175.00", 
      thumbnail: "https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=1974&auto=format&fit=crop" 
    }
  },
  {
    id: 4,
    type: 'lifestyle',
    mainImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
    altText: "Landscape Inspiration",
    product: { 
      name: "Naadu Heritage", 
      price: "$210.00", 
      thumbnail: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1998&auto=format&fit=crop" 
    }
  }
];

export const MediaGrid = () => {
  return (
    <section className="bg-heritage-bone py-16 md:py-24 border-b border-heritage-charcoal/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
            Made for USA
          </h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heritage-clay hover:text-heritage-brown transition-colors">
            View Gallery <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer"
            >
              {/* Main Image with Hover Scale */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={item.mainImage} 
                  alt={item.altText} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Overlay: Visible on Hover (Desktop) / Always visible gradient on Mobile if needed, 
                  but sticking to hover for cleaner look as requested */}
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal/90 via-heritage-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3 rounded-sm border border-white/10">
                    <div className="w-12 h-12 bg-white rounded-sm overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.thumbnail} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover mix-blend-multiply" 
                      />
                    </div>
                    <div className="text-white">
                      <p className="font-bold uppercase text-xs tracking-wide text-heritage-bone">{item.product.name}</p>
                      <p className="text-heritage-sand text-[10px] mt-0.5">{item.product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden flex justify-center">
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heritage-clay hover:text-heritage-brown transition-colors">
            View Gallery <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
