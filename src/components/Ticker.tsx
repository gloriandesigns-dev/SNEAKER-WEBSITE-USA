import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Ticker = () => {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10 && !isHidden) {
      setIsHidden(true);
    } else if (latest <= 10 && isHidden) {
      setIsHidden(false);
    }
  });

  const tickerContent = [
    "Free Domestic Shipping on Orders Over $200",
    "Crafted in the USA",
    "Made for the Culture",
    "USA Eagle Sale Now Live"
  ];

  return (
    <motion.div 
      className="bg-heritage-charcoal text-heritage-bone text-[10px] md:text-xs font-bold tracking-[0.2em] overflow-hidden relative z-50 whitespace-nowrap border-b border-white/10"
      animate={{ 
        height: isHidden ? 0 : "auto",
        opacity: isHidden ? 0 : 1
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="py-2.5 flex">
        {/* Container for seamless loop - Right to Left */}
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            duration: 30, // Slow, calm speed
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Repeat content multiple times to ensure seamless loop */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {tickerContent.map((text, index) => (
                <div key={`${i}-${index}`} className="flex items-center gap-8">
                  <span>{text}</span>
                  <span className="opacity-50">•</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
