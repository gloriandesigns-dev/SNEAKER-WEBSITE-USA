import React from 'react';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IconStrip } from './components/IconStrip';
import { ProductStrip } from './components/ProductStrip';
import { MediaGrid } from './components/MediaGrid';
import { ContentSection } from './components/ContentSection';

// Mock Data
const featuredProducts = [
  { id: 1, name: "Gully Number 001 - Barfi Burgundy", price: "$185.00", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop", badge: true },
  { id: 2, name: "1928 Turf Olive", price: "$195.00", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop", badge: true },
  { id: 3, name: "Baaz Noor Yellow", price: "$175.00", image: "https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=1974&auto=format&fit=crop", badge: true },
  { id: 4, name: "Naadu Heritage", price: "$210.00", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1998&auto=format&fit=crop", badge: true },
  { id: 5, name: "Canyon Runner Red", price: "$165.00", image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop", badge: true },
  { id: 6, name: "Desert Low Bone", price: "$155.00", image: "https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=1974&auto=format&fit=crop", badge: true },
];

const newArrivals = [
  { id: 7, name: "Eagle High Top", price: "$225.00", image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop" },
  { id: 8, name: "Mesa Runner", price: "$180.00", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop" },
  { id: 9, name: "Sage Brush Low", price: "$160.00", image: "https://images.unsplash.com/photo-1514989940723-e8e475bc0887?q=80&w=2076&auto=format&fit=crop" },
  { id: 10, name: "Dusk Patrol", price: "$195.00", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop" },
  { id: 11, name: "Clay Court", price: "$170.00", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop" },
];

function App() {
  return (
    <div className="min-h-screen bg-heritage-bone selection:bg-heritage-clay selection:text-white">
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <IconStrip />
        
        {/* SECTION 1: Featured Products Strip */}
        <ProductStrip products={featuredProducts} />
        
        {/* SECTION 2: New Arrivals */}
        <ProductStrip title="New Arrivals" products={newArrivals} className="border-t-0" />
        
        {/* SECTION 3: Media Grid */}
        <MediaGrid />
        
        <ContentSection />
      </main>
      
      <footer className="bg-heritage-charcoal text-heritage-bone py-12 px-6 text-center">
        <p className="font-sans text-xs tracking-widest opacity-60">© 2025 KANIEN. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
