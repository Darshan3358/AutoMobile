"use client";

import React, { useState } from 'react';
import { ChevronRight, Search, Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { name: 'Air conditioning', count: 12 },
  { name: 'Belts, chains, rollers', count: 24 },
  { name: 'Body', count: 45 },
  { name: 'Brakes', count: 18 },
  { name: 'Care Kit', count: 9 },
  { name: 'Damping', count: 14 },
  { name: 'Electrics', count: 32 },
  { name: 'Engine', count: 56 },
  { name: 'Filters', count: 21 },
  { name: 'Ignition and preheating', count: 15 },
  { name: 'Induction components', count: 10 },
  { name: 'Interior', count: 18 },
  { name: 'Lighting', count: 22 },
];

const BRANDS = [
  { name: 'DENSO', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/denso.svg' },
  { name: 'KRAFT', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/kraft.svg' },
  { name: 'LuK', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/luk.svg' },
  { name: 'MEYLE', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/meyle.svg' },
  { name: 'ORIGINAL IMPERIUM', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/original-imperium.svg' },
  { name: 'RIDEX', count: 7, logo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg' },
  { name: 'SACHS', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/Sachs.svg' },
  { name: 'STARK', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/stark.svg' },
  { name: 'VAICO', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/vaico.svg' },
  { name: 'VEMO', count: 1, logo: 'https://enovathemes.com/mobex/wp-content/uploads/vemo.svg' },
];

export const ShopSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 1150]);
  const [brandSearch, setBrandSearch] = useState('');

  return (
    <aside className="space-y-8">
      {/* Product Categories */}
      <section>
        <h3 className="text-[15px] font-black text-dark-blue uppercase tracking-tighter mb-4 pb-2 border-b-2 border-accent inline-block">
          Product categories
        </h3>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.name}
              className="flex items-center justify-between py-2 group cursor-pointer"
            >
              <span className="text-[13px] font-bold text-gray-500 group-hover:text-accent transition-colors">
                {cat.name}
              </span>
              <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-accent transition-transform group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Filter by Price */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-black text-dark-blue uppercase">Filter by price</h3>
          <button className="text-[10px] font-black uppercase text-gray-400 hover:text-accent underline transition-colors">Clear</button>
        </div>
        <div className="space-y-6">
           {/* Mock Slider */}
           <div className="relative h-1 bg-gray-100 rounded-full">
              <div className="absolute left-0 right-1/4 h-full bg-accent rounded-full" />
              <div className="absolute left-0 w-4 h-4 bg-dark-blue border-2 border-white rounded-full -top-1.5 shadow-md cursor-pointer" />
              <div className="absolute right-1/4 w-4 h-4 bg-dark-blue border-2 border-white rounded-full -top-1.5 shadow-md cursor-pointer" />
           </div>
           <div className="flex items-center gap-4">
              <div className="flex-1 px-4 py-2 bg-gray-50 rounded-lg text-center font-black text-xs text-dark-blue border border-gray-100">
                 ${priceRange[0]}
              </div>
              <div className="flex-1 px-4 py-2 bg-gray-50 rounded-lg text-center font-black text-xs text-dark-blue border border-gray-100">
                 ${priceRange[1]}
              </div>
           </div>
           <button className="w-full py-3 bg-dark-blue text-white rounded-xl text-xs font-black uppercase hover:bg-black transition-all">
              Filter
           </button>
        </div>
      </section>

      {/* Filter by Brand */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-black text-dark-blue uppercase mb-6">Filter by brand</h3>
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Type a keyword"
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-gray-50 rounded-xl border-none text-xs font-bold focus:ring-2 focus:ring-accent transition-all"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        <div className="space-y-3 max-h-[300px] overflow-y-auto no-scrollbar">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="flex items-center justify-between px-1 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border-2 border-gray-200 group-hover:border-accent transition-colors" />
                <img src={brand.logo} alt={brand.name} className="w-4 h-4 object-contain opacity-50 contrast-125" />
                <span className="text-[12px] font-bold text-gray-500 group-hover:text-dark-blue transition-colors">{brand.name}</span>
              </div>
              <span className="text-[10px] font-black text-gray-300">({brand.count})</span>
            </div>
          ))}
        </div>
      </section>

      {/* Average Rating */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-black text-dark-blue uppercase mb-6">Average rating</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={cn(
                      "transition-colors",
                      i < rating ? "fill-accent text-accent" : "text-gray-200"
                    )} 
                  />
                ))}
              </div>
              <span className="text-[10px] font-black text-gray-300">({rating * 2})</span>
            </div>
          ))}
        </div>
      </section>

      {/* Filter by Condition */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-black text-dark-blue uppercase mb-6">Filter by condition</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between group cursor-pointer">
             <div className="flex items-center gap-3">
               <div className="w-4 h-4 rounded border-2 border-gray-200 group-hover:border-accent transition-colors" />
               <span className="text-[12px] font-bold text-gray-500 group-hover:text-dark-blue transition-colors">New</span>
             </div>
             <span className="text-[10px] font-black text-gray-300">(16)</span>
          </div>
          <div className="flex items-center justify-between opacity-50">
             <div className="flex items-center gap-3">
               <div className="w-4 h-4 rounded border-2 border-gray-200" />
               <span className="text-[12px] font-bold text-gray-500">Used</span>
             </div>
             <span className="text-[10px] font-black text-gray-300">(0)</span>
          </div>
        </div>
      </section>

      {/* Help Banner */}
      <div className="bg-[#034C8C] rounded-2xl p-10 text-white relative overflow-hidden group">
         <div className="relative z-10">
           <span className="text-[10px] font-black uppercase text-accent tracking-widest mb-4 block">Expert Support</span>
           <h4 className="text-3xl font-black italic -skew-x-12 tracking-tighter leading-none mb-4 uppercase">
             Need help <br /> deciding?
           </h4>
           <p className="text-white/60 text-xs mb-8 font-medium">Our specialists are ready to help you find the perfect match for your vehicle.</p>
           <a href="tel:66685555" className="block w-full py-4 bg-accent text-dark-blue text-center font-black uppercase text-xs rounded-xl hover:bg-white transition-all transform group-hover:scale-[1.05]">
              Call 6668 5555
           </a>
         </div>
         <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700" />
      </div>
    </aside>
  );
};
