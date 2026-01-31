import React, { useState } from 'react';
import { ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

// Mock data for dropdown thumbnails (reusing existing assets)
const DROPDOWN_THUMBS = {
  everyday: [
    "https://www.dropbox.com/scl/fi/mkfs8pix3c28ew5lerqbh/ChatGPT-Image-Jan-28-2026-01_18_25-AM.webp?rlkey=wgqpvp9ntbb39f5wyrdgfd2he&st=eo9y9jm1&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/38x9ysmr9uoswj6fw9z5e/ChatGPT-Image-Jan-28-2026-11_11_55-PM.webp?rlkey=delyz2q81udhb7hwbjmecerc0&st=gkzfudqu&dl=0&raw=1"
  ],
  functional: [
    "https://www.dropbox.com/scl/fi/nvnqgyvimdg5m2rpzexzs/ChatGPT-Image-Jan-29-2026-02_10_17-AM.webp?rlkey=9m5n5c19w521g4xb2d07ckmu1&st=ydsk86v7&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/ic9vxdkwjbcffzoca0p1c/ChatGPT-Image-Jan-29-2026-02_10_30-AM.webp?rlkey=bgycou32az8z3czwxupy2ks3h&st=9rz6wtyz&dl=0&raw=1"
  ],
  design: [
    "https://www.dropbox.com/scl/fi/3pv0dlgd50odsa491exlf/ChatGPT-Image-Jan-29-2026-02_10_26-AM.webp?rlkey=o7r72160w8fbqqdeuleqs1tah&st=rqg6t7p9&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/3d3f379hruas0dbgbrl3j/ChatGPT-Image-Jan-29-2026-02_10_44-AM.webp?rlkey=kis2u46ehdmjf2zy1axtawtmv&st=61e0wp7r&dl=0&raw=1"
  ]
};

export const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const navLinks = [
    { name: "Bestsellers", id: "bestsellers" },
    { name: "Made for USA", id: "made-for-usa" },
    { name: "Sneakers", id: "sneakers", hasDropdown: true },
    { name: "Slides", id: "home" }, // Placeholder
    { name: "Apparel", id: "home" }, // Placeholder
    { name: "Accessories", id: "home" }, // Placeholder
    { name: "Story", id: "home" }, // Placeholder
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-8 h-[80px] flex items-center border-b border-transparent",
        isScrolled ? "bg-heritage-bone/95 backdrop-blur-sm border-heritage-charcoal/5" : "bg-heritage-bone"
      )}
    >
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
          <h1 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-extrabold text-heritage-charcoal uppercase">
            KANIEN
          </h1>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="h-full flex items-center group relative">
              <button 
                onClick={() => !link.hasDropdown && onNavigate(link.id)}
                className={cn(
                  "flex items-center gap-1 text-sm font-bold transition-colors uppercase tracking-wide h-full",
                  currentPage === link.id ? "text-heritage-clay" : "text-heritage-charcoal hover:text-heritage-clay"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </button>

              {/* MEGA MENU DROPDOWN */}
              {link.hasDropdown && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-[100vw] bg-heritage-bone border-t border-b border-heritage-charcoal/5 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                  <div className="max-w-[1600px] mx-auto px-8 py-12">
                    <div className="grid grid-cols-3 gap-12">
                      
                      {/* Column 1: Everyday */}
                      <div 
                        className="cursor-pointer group/col"
                        onClick={() => onNavigate('everyday')}
                      >
                        <h3 className="font-sans text-lg font-extrabold text-heritage-charcoal uppercase tracking-wide mb-6 border-b border-heritage-charcoal/10 pb-2 group-hover/col:text-heritage-clay transition-colors">
                          Everyday Sneakers
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {DROPDOWN_THUMBS.everyday.map((img, i) => (
                            <div key={i} className="aspect-[4/3] bg-white p-2 border border-heritage-charcoal/5">
                              <img src={img} alt="Everyday" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Functional */}
                      <div 
                        className="cursor-pointer group/col"
                        onClick={() => onNavigate('functional')}
                      >
                        <h3 className="font-sans text-lg font-extrabold text-heritage-charcoal uppercase tracking-wide mb-6 border-b border-heritage-charcoal/10 pb-2 group-hover/col:text-heritage-clay transition-colors">
                          Functional Sneakers
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {DROPDOWN_THUMBS.functional.map((img, i) => (
                            <div key={i} className="aspect-[4/3] bg-white p-2 border border-heritage-charcoal/5">
                              <img src={img} alt="Functional" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Design-led */}
                      <div 
                        className="cursor-pointer group/col"
                        onClick={() => onNavigate('design-led')}
                      >
                        <h3 className="font-sans text-lg font-extrabold text-heritage-charcoal uppercase tracking-wide mb-6 border-b border-heritage-charcoal/10 pb-2 group-hover/col:text-heritage-clay transition-colors">
                          Design-led Sneakers
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {DROPDOWN_THUMBS.design.map((img, i) => (
                            <div key={i} className="aspect-[4/3] bg-white p-2 border border-heritage-charcoal/5">
                              <img src={img} alt="Design-led" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: Icons */}
        <div className="flex items-center gap-6">
          <button className="text-heritage-charcoal hover:text-heritage-clay transition-colors">
            <User className="w-6 h-6 stroke-[1.5]" />
          </button>
          <button className="text-heritage-charcoal hover:text-heritage-clay transition-colors">
            <Search className="w-6 h-6 stroke-[1.5]" />
          </button>
          <button className="relative text-heritage-charcoal hover:text-heritage-clay transition-colors">
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-heritage-clay text-white text-[9px] flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
