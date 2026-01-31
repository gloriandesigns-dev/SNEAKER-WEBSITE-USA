import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // PARALLAX CONFIGURATION
  // Layer 1: Background (Slowest)
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  
  // Layer 2: Text (Medium)
  const yText = useTransform(scrollY, [0, 1000], [0, 350]);
  
  // Layer 3: Shoe (Fastest - Depth Effect)
  const yShoe = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-heritage-bone">
      
      {/* LAYER 1: Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] z-0"
      >
        <div className="absolute inset-0 bg-heritage-sand/10 z-10 mix-blend-multiply" />
        <img 
          src="https://www.dropbox.com/scl/fi/138n9asyy9ly3recakgoo/Gemini_Generated_Image_mjsivzmjsivzmjsi.webp?rlkey=vi4uydbnyy4i2gp9zw2fbcx2l&st=yctodx2x&dl=0&raw=1" 
          alt="American Canyon Landscape" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.03] z-20 pointer-events-none" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-start pt-[30px] pb-0">
        
        {/* LAYER 2: Text Content */}
        <motion.div 
          style={{ y: yText }}
          className="text-center flex flex-col items-center max-w-5xl mx-auto px-6 relative z-30 mt-[50px]"
        >
          <span className="text-heritage-bone/90 md:text-heritage-charcoal font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 drop-shadow-sm md:drop-shadow-none">
            Est. 2025 • Native American Heritage
          </span>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white md:text-heritage-charcoal leading-[0.95] tracking-tight mb-8 uppercase drop-shadow-md md:drop-shadow-none">
            A Sneaker Story <br />
            Rooted in the Land
          </h2>

          <button className="bg-heritage-clay text-white px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs transition-colors hover:bg-heritage-brown">
            Shop the Story
          </button>
        </motion.div>

        {/* LAYER 3: Product Image */}
        <motion.div 
          style={{ y: yShoe }}
          className="absolute bottom-0 left-0 right-0 w-full z-40 flex items-end justify-center pointer-events-none"
        >
          <img 
            src="https://www.dropbox.com/scl/fi/349jphkbay5qtsflxttw6/Gemini_Generated_Image_mjsivzmjsivzmjsia.webp?rlkey=c2fhnletkx3l7kx6tij7u0zmp&st=scq9xnv9&dl=0&raw=1" 
            alt="Heritage Sneaker" 
            className="
              h-auto object-contain object-bottom
              
              /* Mobile Styles: 200% width, centered, no shadow */
              w-[200%] max-w-none left-1/2 -translate-x-1/2 relative
              
              /* Desktop Styles: 100% width, normal positioning */
              md:w-full md:max-w-full md:left-0 md:translate-x-0
            "
          />
        </motion.div>

      </div>
    </div>
  );
};
