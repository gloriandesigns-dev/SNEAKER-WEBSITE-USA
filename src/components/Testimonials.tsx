import React from 'react';
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
    author: "Anonymous",
    verified: true,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Good. Solid construction and very comfortable for daily wear.",
    author: "Anonymous",
    verified: false,
    rating: 5,
    productImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-white py-20 border-b border-heritage-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-sm font-bold text-heritage-charcoal uppercase tracking-[0.2em] mb-2">
            Let Customers Speak For Us
          </h2>
          <div className="flex justify-center items-center gap-1 text-heritage-blue">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-xs text-heritage-charcoal/60 mt-2 font-medium">
            from 256 reviews <BadgeCheck className="w-3 h-3 inline text-heritage-blue ml-1" />
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {testimonials.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-0.5 text-heritage-blue mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm leading-relaxed text-heritage-charcoal/80 mb-6 max-w-xs">
                "{review.text}"
              </p>

              {/* Product Thumbnail */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 bg-heritage-bone/50 rounded-sm overflow-hidden border border-heritage-charcoal/5">
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
          ))}
        </div>
        
      </div>
    </section>
  );
};
