import React from 'react';
import { ArrowRight } from 'lucide-react';

// Updated Image Assets for "Made for USA" section
const NEW_IMAGES = {
  IMG_1: "https://www.dropbox.com/scl/fi/2qtbwp2kv8hrfvs8051vh/ChatGPT-Image-Jan-29-2026-02_10_41-AM.webp?rlkey=45qocb7muwsfhdh0zjzjejrgr&st=qqwkv2kw&dl=0&raw=1",
  IMG_2: "https://www.dropbox.com/scl/fi/0i8iiy8ze9eiq11j96iv1/ChatGPT-Image-Jan-29-2026-02_10_19-AM.webp?rlkey=wk2zakrz2mm80gaypxb0fs0xo&st=q0atdeq9&dl=0&raw=1",
  IMG_3: "https://www.dropbox.com/scl/fi/l6gya0oq03efdou9pkmie/ChatGPT-Image-Jan-28-2026-11_11_53-PM.webp?rlkey=7mi5mja9a9hl6kbrinxehiaxx&st=mzu7930d&dl=0&raw=1",
  IMG_4: "https://www.dropbox.com/scl/fi/zori7xr22bci8zdmu92se/ChatGPT-Image-Jan-29-2026-02_10_28-AM.webp?rlkey=xsqtn4unw4e2hov0nl30s1xte&st=20q49nga&dl=0&raw=1",
};

interface ProductInfo {
  name: string;
  price: string;
}

interface GridItem {
  id: number;
  image: string;
  product: ProductInfo;
  altText: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    image: NEW_IMAGES.IMG_1,
    altText: "Desert Low Bone",
    product: { name: "Desert Low Bone", price: "$155.00" }
  },
  {
    id: 2,
    image: NEW_IMAGES.IMG_2,
    altText: "Eagle Sun Yellow",
    product: { name: "Eagle Sun Yellow", price: "$175.00" }
  },
  {
    id: 3,
    image: NEW_IMAGES.IMG_3,
    altText: "Frontier Turf Olive",
    product: { name: "Frontier Turf Olive", price: "$195.00" }
  },
  {
    id: 4,
    image: NEW_IMAGES.IMG_4,
    altText: "Canyon Runner Red",
    product: { name: "Canyon Runner Red", price: "$165.00" }
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
            View Collection <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Responsive Grid Layout: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer border border-heritage-charcoal/5"
            >
              {/* Main Image - Object Cover for consistent aspect ratio */}
              <img 
                src={item.image} 
                alt={item.altText} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Overlay: Visible on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <p className="font-bold uppercase text-sm tracking-wide text-heritage-bone">
                    {item.product.name}
                  </p>
                  <p className="text-heritage-sand text-xs mt-1 font-medium">
                    {item.product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden flex justify-center">
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heritage-clay hover:text-heritage-brown transition-colors">
            View Collection <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
