"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List as ListIcon, ChevronDown, Check, X, ChevronRight } from 'lucide-react';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/home/ProductCard';
import { cn } from '@/lib/utils';
import { useVehicleStore } from '@/store/useVehicleStore';
import { ShopSidebar } from '@/components/shop/ShopSidebar';
import { ALL_PRODUCTS } from '@/data/products';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const SHOP_CATEGORIES = [
  { name: 'Air conditioning', image: 'https://enovathemes.com/mobex/wp-content/uploads/Air-conditioning.webp' },
  { name: 'Belts, chains, rollers', image: 'https://enovathemes.com/mobex/wp-content/uploads/Belts-chains-rollers.webp' },
  { name: 'Body', image: 'https://enovathemes.com/mobex/wp-content/uploads/Body.webp' },
  { name: 'Brakes', image: 'https://enovathemes.com/mobex/wp-content/uploads/Brakes.webp' },
  { name: 'Care Kit', image: 'https://enovathemes.com/mobex/wp-content/uploads/Care-Kit.webp' },
  { name: 'Damping', image: 'https://enovathemes.com/mobex/wp-content/uploads/Damping.webp' },
];

const MAKES = ['Audi', 'BMW', 'Bentley', 'Cadillac', 'Chevrolet', 'Dodge', 'Ford', 'Honda', 'Hyundai', 'Infiniti', 'KIA', 'Lamborghini', 'Lexus', 'Lincoln', 'Maybach', 'Mazda', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Porsche', 'Rolls-Royce', 'Toyota', 'Volkswagen', 'Volvo'];
const MODELS: Record<string, string[]> = {
  'BMW': ['1', '3', '5', '6', 'X5', 'X6'],
  'Audi': ['A3', 'A4', 'A6', 'Q5', 'Q7'],
};
const YEARS: Record<string, string[]> = {
  'X5': ['2011', '2010'],
};
const ENGINES: Record<string, string[]> = {
  '2010': ['4.4', '3.0', '4.8'],
};
const TRANSMISSIONS: Record<string, string[]> = {
  '4.4': ['6 Speed Automatic Select Shift'],
};
const TRIMS: Record<string, string[]> = {
  '6 Speed Automatic Select Shift': ['BMW 4.4L 8 cylinder 555hp 500 ft-lbs Turbo'],
};

export default function ShopPage() {
  const { 
    make, setMake, 
    model, setModel, 
    year, setYear, 
    engine, setEngine, 
    transmission, setTransmission,
    trim, setTrim,
    reset
  } = useVehicleStore();
  
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [onlySale, setOnlySale] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');

  const sortedProducts = [...ALL_PRODUCTS]
    .filter(p => !onlySale || p.badge === 'Sale')
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-[#F8F9FB] min-h-screen flex flex-col">
      <NavBar />
      
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Shop' }]} />
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black text-dark-blue mb-12 tracking-tighter uppercase italic font-oswald">
            Professional <span className="text-accent">Shop</span>
          </h1>

          {/* Horizontal Category Carousel */}
          <div className="mb-12 overflow-x-auto no-scrollbar -mx-4 px-4 pb-4">
            <div className="flex items-stretch gap-4 min-w-[1200px]">
               {SHOP_CATEGORIES.map((cat, idx) => (
                 <motion.div 
                   key={cat.name}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="flex-1 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center gap-4 cursor-pointer group border border-gray-100"
                 >
                   <div className="w-24 h-24 shrink-0 relative overflow-hidden rounded-full bg-gray-50 flex items-center justify-center p-4">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                      />
                   </div>
                   <h4 className="text-[14px] font-black text-dark-blue uppercase tracking-tight text-center group-hover:text-accent transition-colors">
                     {cat.name}
                   </h4>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
            
            {/* Sidebar */}
            <ShopSidebar />

            {/* Main Content */}
            <div className="space-y-8">
               {/* Toolbar */}
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-8">
                  <div className="flex items-center gap-10">
                    <div className="flex bg-gray-100 p-1.5 rounded-xl">
                      <button 
                        onClick={() => setView('grid')}
                        className={cn(
                          "p-2.5 rounded-lg transition-all",
                          view === 'grid' ? "bg-white shadow-md text-accent" : "text-gray-400 hover:text-gray-600"
                        )}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setView('list')}
                        className={cn(
                          "p-2.5 rounded-lg transition-all",
                          view === 'list' ? "bg-white shadow-md text-accent" : "text-gray-400 hover:text-gray-600"
                        )}
                      >
                        <ListIcon className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="text-[14px] font-bold text-gray-500">
                      Showing <span className="text-dark-blue font-black underline underline-offset-4 decoration-accent/30">{Math.min(10, sortedProducts.length)}</span> of <span className="text-dark-blue font-black">{sortedProducts.length}</span> results
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                     <div 
                       onClick={() => setOnlySale(!onlySale)}
                       className="flex items-center gap-3 cursor-pointer group"
                     >
                        <div className={cn(
                          "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                          onlySale ? "bg-accent border-accent" : "border-gray-200 group-hover:border-accent"
                        )}>
                          {onlySale && <Check className="w-4 h-4 text-dark-blue font-black" />}
                        </div>
                        <span className="text-[13px] font-black text-gray-600 group-hover:text-dark-blue uppercase tracking-wide">On Sale</span>
                     </div>

                     <div className="relative group">
                        <select 
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="h-12 pl-6 pr-10 rounded-xl bg-gray-50 border border-gray-200 appearance-none cursor-pointer text-[13px] font-black text-dark-blue focus:ring-2 focus:ring-accent transition-all min-w-[220px] uppercase tracking-wider"
                        >
                          <option value="popularity">Popularity</option>
                          <option value="rating">Average Rating</option>
                          <option value="latest">Latest Items</option>
                          <option value="price-low">Price: Low to High</option>
                          <option value="price-high">Price: High to Low</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-accent transition-colors" />
                     </div>
                  </div>
               </div>

               {/* Product Grid */}
               <div className={cn(
                 "grid gap-8",
                 view === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
               )}>
                  {sortedProducts.slice(0, 12).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
               </div>

               {/* Pagination */}
               <div className="pt-12 flex justify-center items-center gap-3">
                  <button className="w-12 h-12 rounded-xl bg-dark-blue text-white font-black text-sm shadow-xl shadow-dark-blue/20 transform hover:scale-110 transition-all">1</button>
                  {[2, 3].map(p => (
                    <button key={p} className="w-12 h-12 rounded-xl bg-white border border-gray-100 text-gray-600 font-bold text-sm hover:bg-accent hover:border-accent hover:text-dark-blue transition-all">
                      {p}
                    </button>
                  ))}
                  <span className="px-2 text-gray-400 font-bold">...</span>
                  <button className="w-12 h-12 rounded-xl bg-white border border-gray-100 text-gray-600 font-bold text-sm hover:bg-accent hover:border-accent hover:text-dark-blue transition-all flex items-center justify-center group">
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
