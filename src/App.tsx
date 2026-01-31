import React, { useState, useEffect } from 'react';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IconStrip } from './components/IconStrip';
import { ProductStrip, Product } from './components/ProductStrip';
import { MediaGrid } from './components/MediaGrid';
import { CollectionGrid } from './components/CollectionGrid';
import { HeritageTicker } from './components/HeritageTicker';
import { Testimonials } from './components/Testimonials';
import { StoreLocator } from './components/StoreLocator';
import { FeaturedLogos } from './components/FeaturedLogos';
import { FounderStory } from './components/FounderStory';
import { Footer } from './components/Footer';
import { BestSellers } from './pages/BestSellers';
import { MadeForUSA } from './pages/MadeForUSA';
import { CategoryPage } from './pages/CategoryPage';
import { Slides } from './pages/Slides';
import { Apparel } from './pages/Apparel';

// --- IMAGE ASSETS ---
const SET_1 = [
  "https://www.dropbox.com/scl/fi/mkfs8pix3c28ew5lerqbh/ChatGPT-Image-Jan-28-2026-01_18_25-AM.webp?rlkey=wgqpvp9ntbb39f5wyrdgfd2he&st=eo9y9jm1&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/p5e1nn6r3nrm3xzvz7v3d/ChatGPT-Image-Jan-28-2026-01_18_31-AM.webp?rlkey=19bc332s4lsm6q9jm4dnx50i7&st=oyvowdtc&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/tu4pnisimholsino3zkh4/ChatGPT-Image-Jan-28-2026-01_18_23-AM.webp?rlkey=0cab3jxkw9faijxmpxzvjt64s&st=7ljbwzvy&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/wjye6krgli0fmj32emw5g/ChatGPT-Image-Jan-28-2026-01_18_27-AM.webp?rlkey=i2j8e78jm0kj7xalkqbh7yqiy&st=4e5b535k&dl=0&raw=1"
];

const SET_2 = [
  "https://www.dropbox.com/scl/fi/38x9ysmr9uoswj6fw9z5e/ChatGPT-Image-Jan-28-2026-11_11_55-PM.webp?rlkey=delyz2q81udhb7hwbjmecerc0&st=gkzfudqu&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/8k3birxlam96vririb2nd/ChatGPT-Image-Jan-28-2026-11_11_59-PM.webp?rlkey=ydmi5kxi0g3c1dila00deellh&st=u6b9shbb&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/ooc3iczmv220n9bw380v9/ChatGPT-Image-Jan-28-2026-11_11_57-PM.webp?rlkey=ht959j9et5r01jrfaiaffgv6y&st=08co3qrb&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/l6gya0oq03efdou9pkmie/ChatGPT-Image-Jan-28-2026-11_11_53-PM.webp?rlkey=7mi5mja9a9hl6kbrinxehiaxx&st=2bkaox96&dl=0&raw=1"
];

const SET_3 = [
  "https://www.dropbox.com/scl/fi/nvnqgyvimdg5m2rpzexzs/ChatGPT-Image-Jan-29-2026-02_10_17-AM.webp?rlkey=9m5n5c19w521g4xb2d07ckmu1&st=ydsk86v7&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/0i8iiy8ze9eiq11j96iv1/ChatGPT-Image-Jan-29-2026-02_10_19-AM.webp?rlkey=wk2zakrz2mm80gaypxb0fs0xo&st=qpagh10w&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/wki170g30eke982y26k0y/ChatGPT-Image-Jan-29-2026-02_10_23-AM.webp?rlkey=r02elsu6ki042v920n1o4era4&st=xzswqc2c&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/ew2qhmrz3h1xksm6rebsh/ChatGPT-Image-Jan-29-2026-02_10_24-AM.webp?rlkey=tvm0x08np5ph1t9faknobgo0h&st=m64vvwkr&dl=0&raw=1"
];

const SET_4 = [
  "https://www.dropbox.com/scl/fi/ic9vxdkwjbcffzoca0p1c/ChatGPT-Image-Jan-29-2026-02_10_30-AM.webp?rlkey=bgycou32az8z3czwxupy2ks3h&st=9rz6wtyz&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/hr56xf31zv1azl6lo8o5l/ChatGPT-Image-Jan-29-2026-02_10_34-AM.webp?rlkey=5o6p6gn6iyh968r3ljacdhlup&st=laxyzhzt&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/0ukwm100dvamczzl5kflp/ChatGPT-Image-Jan-29-2026-02_10_32-AM.webp?rlkey=x6h2ih4t5a0p0mq0idsh47144&st=2p2dwwpl&dl=0&raw=1"
];

const SET_5 = [
  "https://www.dropbox.com/scl/fi/3pv0dlgd50odsa491exlf/ChatGPT-Image-Jan-29-2026-02_10_26-AM.webp?rlkey=o7r72160w8fbqqdeuleqs1tah&st=rqg6t7p9&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/zori7xr22bci8zdmu92se/ChatGPT-Image-Jan-29-2026-02_10_28-AM.webp?rlkey=xsqtn4unw4e2hov0nl30s1xte&st=toaaind4&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/8u72abvnluav16e4tizja/ChatGPT-Image-Jan-29-2026-02_10_29-AM.webp?rlkey=q9uspiovrzzv6nuua9ewh23tg&st=uwr1fg1d&dl=0&raw=1"
];

const SET_6 = [
  "https://www.dropbox.com/scl/fi/3d3f379hruas0dbgbrl3j/ChatGPT-Image-Jan-29-2026-02_10_44-AM.webp?rlkey=kis2u46ehdmjf2zy1axtawtmv&st=61e0wp7r&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/2qtbwp2kv8hrfvs8051vh/ChatGPT-Image-Jan-29-2026-02_10_41-AM.webp?rlkey=45qocb7muwsfhdh0zjzjejrgr&st=6kwchqvc&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/rxdapx0tctr0jgm3ar6b8/ChatGPT-Image-Jan-29-2026-02_10_39-AM.webp?rlkey=fnupb9lomg0vpuz1qtz7pa34e&st=oruzikbu&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/2ya6boi826woxbqtwswhw/ChatGPT-Image-Jan-29-2026-02_10_41-AM-1.webp?rlkey=xxznytpmmrax8x4riqw9ngkxp&st=agqbq8w9&dl=0&raw=1"
];

const SET_7 = [
  "https://www.dropbox.com/scl/fi/fp6fqoumyj7t9i2xzk6w3/ChatGPT.webp?rlkey=43zaxru6p3v12p0okwbwoiz5q&st=8z8zxn23&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/psoe4xppb8k62ghenbd8q/ChatGPT-Image-Jan-29-2026-02_10_36-AM.webp?rlkey=qpm9hywouq8sr54cyk5k07par&st=o0aze7j5&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/ujex9x3a5f3tvvihjw43u/ChatGPT-Image-Jan-29-2026-02_10_35-AM.webp?rlkey=fi3y5er7vsxpon3vdjw4d8k64&st=aap93q33&dl=0&raw=1",
  "https://www.dropbox.com/scl/fi/xlbhufzuxa68r5oznwr6j/ChatGPT-Image-Jan-29-2026-02_10_37-AM.webp?rlkey=v7a3xft4gjsjsbo531afb1a6g&st=lg1acxa3&dl=0&raw=1"
];

// --- MOCK DATA MAPPING ---
const featuredProducts: Product[] = [
  { id: 1, name: "Canyon Number 001", price: "$185.00", images: SET_1 },
  { id: 2, name: "Frontier Turf Olive", price: "$195.00", images: SET_2 },
  { id: 3, name: "Eagle Sun Yellow", price: "$175.00", images: SET_3 },
  { id: 4, name: "Dakota Heritage", price: "$210.00", images: SET_4 },
  { id: 5, name: "Canyon Runner Red", price: "$165.00", images: SET_5 },
  { id: 6, name: "Desert Low Bone", price: "$155.00", images: SET_6 },
];

const newArrivals: Product[] = [
  { id: 7, name: "Eagle High Top", price: "$225.00", images: SET_7 },
  { id: 8, name: "Mesa Runner", price: "$180.00", images: SET_1 },
  { id: 9, name: "Sage Brush Low", price: "$160.00", images: SET_2 },
  { id: 10, name: "Dusk Patrol", price: "$195.00", images: SET_3 },
  { id: 11, name: "Clay Court", price: "$170.00", images: SET_4 },
];

// Mock Apparel Data (Reusing images as placeholders, but named appropriately)
const apparelProducts: Product[] = [
  { id: 101, name: "Heritage Tee - Bone", price: "$45.00", images: SET_1 },
  { id: 102, name: "Canyon Hoodie - Clay", price: "$85.00", images: SET_2 },
  { id: 103, name: "Workwear Jacket", price: "$120.00", images: SET_3 },
  { id: 104, name: "Utility Cargo Pant", price: "$95.00", images: SET_4 },
  { id: 105, name: "Logo Cap - Navy", price: "$35.00", images: SET_5 },
];

// Mock Slides Data
const slideProducts: Product[] = [
  { id: 201, name: "Canyon Slide - Tan", price: "$55.00", images: SET_6 },
  { id: 202, name: "Recovery Slide - Black", price: "$55.00", images: SET_7 },
  { id: 203, name: "Heritage Mule", price: "$75.00", images: SET_1 },
];

// Combine for larger grids
const allProducts = [...featuredProducts, ...newArrivals];

// Subsets for categories
const everydayProducts = [featuredProducts[0], featuredProducts[1], newArrivals[0], newArrivals[1]];
const functionalProducts = [featuredProducts[2], featuredProducts[3], newArrivals[2], newArrivals[3]];
const designProducts = [featuredProducts[4], featuredProducts[5], newArrivals[4], featuredProducts[0]];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case "bestsellers":
        return <BestSellers products={allProducts} />;
      case "made-for-usa":
        return <MadeForUSA products={allProducts} />;
      case "slides":
        return <Slides products={slideProducts} />;
      case "apparel":
        return <Apparel products={apparelProducts} />;
      case "everyday":
        return <CategoryPage title="Everyday Sneakers" products={everydayProducts} />;
      case "functional":
        return <CategoryPage title="Functional Sneakers" products={functionalProducts} />;
      case "design-led":
        return <CategoryPage title="Design-led Sneakers" products={designProducts} />;
      case "home":
      default:
        return (
          <>
            <Hero />
            <IconStrip />
            <ProductStrip products={featuredProducts} />
            <ProductStrip title="New Arrivals" products={newArrivals} className="border-t-0" />
            <MediaGrid />
            <CollectionGrid />
            <HeritageTicker />
            <Testimonials />
            <StoreLocator />
            <FeaturedLogos />
            <FounderStory />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-heritage-bone selection:bg-heritage-clay selection:text-white">
      <Ticker />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
