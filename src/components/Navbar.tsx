import React, { useState } from 'react';
import { ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const navLinks = [
    { name: "Bestsellers", href: "#" },
    { name: "Made for USA", href: "#" }, // Replaced branding
    { name: "Sneakers", href: "#", hasDropdown: true },
    { name: "Slides", href: "#" },
    { name: "Apparel", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Story", href: "#" },
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
        <div className="flex-shrink-0">
          <h1 className="font-sans text-2xl md:text-3xl tracking-[0.05em] font-extrabold text-heritage-charcoal uppercase">
            KANIEN
          </h1>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="group flex items-center gap-1 text-sm font-bold text-heritage-charcoal hover:text-heritage-clay transition-colors uppercase tracking-wide"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              )}
            </a>
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
