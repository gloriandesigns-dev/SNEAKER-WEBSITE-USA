import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-heritage-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        
        {/* Top Section: Brand + Newsletter + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand & Newsletter (Col 1-5) */}
          <div className="md:col-span-5 space-y-8">
            <h1 className="font-sans text-4xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
              KANIEN
            </h1>
            <p className="text-sm text-heritage-charcoal/60 max-w-sm leading-relaxed">
              Built with the community. Shared with the community. First access, always.
              Crafted for the culture, rooted in the land.
            </p>
            
            <div className="flex gap-0 max-w-md">
              <input 
                type="email" 
                placeholder="your@email.address" 
                className="flex-1 bg-white border border-heritage-charcoal/20 px-4 py-3 text-sm outline-none focus:border-heritage-charcoal transition-colors placeholder:text-heritage-charcoal/30"
              />
              <button className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-heritage-blue transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links (Col 7-12) */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-heritage-charcoal">Shop</h4>
              <ul className="space-y-3 text-sm text-heritage-charcoal/70">
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Sneakers</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Slides</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Apparel</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Accessories</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-heritage-charcoal">Explore More</h4>
              <ul className="space-y-3 text-sm text-heritage-charcoal/70">
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Stores</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-heritage-charcoal">Quick Links</h4>
              <ul className="space-y-3 text-sm text-heritage-charcoal/70">
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Exchanges or Returns</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Terms & Services</a></li>
                <li><a href="#" className="hover:text-heritage-clay transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-heritage-charcoal/10 mb-8"></div>

        {/* Bottom Section: Contact & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-heritage-charcoal/60">
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <span className="font-bold text-heritage-charcoal">Get in Touch</span>
              <span className="mx-2 hidden md:inline">|</span>
              <a href="mailto:hello@kanien.com" className="hover:text-heritage-clay underline decoration-1 underline-offset-2">hello@kanien.com</a>
            </div>
            <div>
              <span className="font-bold text-heritage-charcoal">Our Store:</span>
              <span className="ml-2">14, Panscheel Park, New York</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-heritage-clay transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-heritage-clay transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-heritage-clay transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="#" className="hover:text-heritage-clay transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
           <p className="text-[10px] uppercase tracking-widest text-heritage-charcoal/40">
             © 2025 Kanien. All rights reserved. Made for USA.
           </p>
        </div>

      </div>
    </footer>
  );
};
