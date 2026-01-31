import React, { useState, useEffect, useRef } from 'react';
import { Star, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The size tends to run big but these were soooo cute! We accidentally ended up ordering two of the same orders twice and the website was quite okey with just having them sent back.",
    author: "Pranali Patel",
    verified: true,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "The quality of the shoes is really good. It feels like a piece of art on my feet. Definitely worth the wait and the price.",
    author: "James Carter",
    verified: true,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Good. Solid construction and very comfortable for daily wear. The earth tones match everything in my wardrobe.",
    author: "Sarah Jenkins",
    verified: false,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "Finally a brand that respects the culture without trying too hard. The materials feel premium and the fit is perfect.",
    author: "Michael Ross",
    verified: true,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1998&auto=format&fit=crop"
  },
  {
    id: 5,
    text: "Shipping was incredibly fast. The packaging alone was worth the purchase. Will definitely be buying the high-tops next.",
    author: "Elena Rodriguez",
    verified: true,
    rating: 4,
    productImage: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop"
  },
  {
    id: 6,
    text: "These sneakers have become my daily drivers. Rugged enough for the trail but stylish enough for the city.",
    author: "David Kim",
    verified: true,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2115&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Clone the first 3 items to append to the end for infinite loop illusion
  // We need 3 visible items, so we clone 3.
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
  const totalItems = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex >= totalItems) {
      // If we are at the end of the clone, snap back to 0 instantly then slide to 1
      setIsTransitioning(false);
      setCurrentIndex(0);
      // Force reflow to ensure the snap happens before the next slide
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1);
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleTransitionEnd = () => {
    // If we've scrolled past the real items into the clones
    if (currentIndex >= totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <section className="bg-heritage-bone py-24 border-b border-heritage-charcoal/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-sm font-bold text-heritage-charcoal uppercase tracking-[0.2em] mb-2">
            Let Customers Speak For Us
          </h2>
          <div className="flex justify-center items-center gap-1 text-heritage-clay">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-xs text-heritage-charcoal/60 mt-2 font-medium">
            from 256 reviews <BadgeCheck className="w-3 h-3 inline text-heritage-clay ml-1" />
          </p>
        </div>

        {/* Infinite Slider Window */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
              transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedTestimonials.map((review, index) => (
              <div 
                key={`${review.id}-${index}`} 
                className="w-full md:w-1/3 flex-shrink-0 px-4 md:px-8"
              >
                <div className="flex flex-col items-center text-center h-full bg-white p-8 border border-heritage-charcoal/5">
                  {/* Stars */}
                  <div className="flex gap-0.5 text-heritage-clay mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-sans text-sm leading-relaxed text-heritage-charcoal/80 mb-6 max-w-xs flex-grow">
                    "{review.text}"
                  </p>

                  {/* Product Thumbnail */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-heritage-bone/50 rounded-sm overflow-hidden border border-heritage-charcoal/5">
                       <img 
                         src={review.productImage} 
                         alt="Product" 
                         className="w-full h-full object-cover mix-blend-multiply"
                       />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-heritage-charcoal uppercase tracking-wide">
                        {review.author}
                      </p>
                      {review.verified && (
                         <span className="text-[10px] text-heritage-sage font-medium flex items-center gap-1">
                           Verified Buyer
                         </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
