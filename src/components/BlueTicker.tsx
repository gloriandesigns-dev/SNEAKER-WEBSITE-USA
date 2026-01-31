import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BlueTicker = () => {
  const items = [
    "TOP GRADE MATERIALS",
    "CRAFTED BY HAND",
    "MADE FOR THE CULTURE",
    "BUILT TO LAST"
  ];

  return (
    <div className="bg-heritage-blue text-white py-4 overflow-hidden border-y border-heritage-charcoal/5 relative z-30">
      <div className="flex">
        {/* Container for seamless loop - Right to Left */}
        <motion.div
          className="flex items-center flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25, // Slow, steady pace
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate content for loop */}
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              {items.map((text, index) => (
                <div key={`${i}-${index}`} className="flex items-center gap-4 mx-8 whitespace-nowrap">
                  <span className="text-sm md:text-base font-bold uppercase tracking-widest">
                    {text}
                  </span>
                  <ArrowRight className="w-5 h-5 stroke-[2]" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
