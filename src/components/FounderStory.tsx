import React from 'react';

export const FounderStory = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-heritage-charcoal">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20 p-6 md:p-10 bg-gradient-to-b from-black/50 to-transparent">
        <h2 className="font-sans text-white text-xl md:text-2xl uppercase tracking-widest font-bold">
          From the <span className="text-heritage-tan">Founder</span>
        </h2>
      </div>

      {/* Cinematic Image (Simulating Video Frame) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
          alt="Founder Walking in Nature" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
      </div>

      {/* Subtitle Overlay */}
      <div className="absolute bottom-20 left-0 w-full z-20 text-center px-4">
        <p className="font-sans text-white/90 text-lg md:text-2xl font-medium tracking-wide drop-shadow-lg bg-black/40 inline-block px-4 py-2 backdrop-blur-sm rounded-sm">
          I moved back from Australia to reconnect with my roots...
        </p>
      </div>

      {/* Play Button Hint */}
      <div className="absolute bottom-6 right-6 z-20">
         <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-md">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
         </div>
      </div>
    </section>
  );
};
