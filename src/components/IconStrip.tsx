import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

export const IconStrip = () => {
  const icons = [
    { icon: Globe, text: "Ships Globally" },
    { icon: Truck, text: "Free Shipping" },
    { icon: RotateCcw, text: "Returns & Exchanges 30 Days" },
    { icon: ShieldCheck, text: "Cash on Delivery" },
  ];

  return (
    <div className="bg-white border-b border-heritage-charcoal/5 py-6 overflow-hidden relative z-30">
      <div className="flex">
        {/* Container for seamless loop - Right to Left */}
        <motion.div
          className="flex gap-16 items-center flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate content for loop */}
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              {icons.map((item, index) => (
                <div key={`${i}-${index}`} className="flex flex-col items-center gap-2 min-w-[150px]">
                  <item.icon className="w-8 h-8 text-heritage-charcoal stroke-[1.5]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-heritage-charcoal/80 whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
