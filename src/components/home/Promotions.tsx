"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, RotateCcw, Zap, Settings, MapPin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Promotions = () => {
  const categories = [
    {
      title: 'TOOLS',
      subtitle: 'You need',
      tag: 'Top brands',
      color: 'bg-[#04BF33]', // Green
      image: 'https://enovathemes.com/mobex/wp-content/uploads/Care-Kit.webp',
      buttonText: 'Shop now'
    },
    {
      title: 'ENGINE OIL',
      subtitle: 'Run smoothly!',
      tag: 'Up to 40% Off',
      color: 'bg-[#034C8C]', // blue
      image: 'https://enovathemes.com/mobex/wp-content/uploads/Oils-and-fluids.webp',
      buttonText: 'Shop now'
    },
    {
      title: 'BUY 1 GET 1',
      subtitle: 'FREE',
      tag: 'Big sale',
      color: '#EA580C', // Orange
      gradient: 'linear-gradient(135deg, #FF5A1F 0%, #EA580C 100%)',
      image: 'https://enovathemes.com/mobex/wp-content/uploads/Suspension.webp',
      buttonText: 'Shop now'
    }
  ];

  const usps = [
    { title: "In-Store Pickup", desc: "Buy your parts online and pick them up in-store in 30 minutes", icon: MapPin },
    { title: "Free Shipping Over $25", desc: "Receive free standard shipping on orders over $25 (US only).", icon: Truck },
    { title: "Speed Perks", desc: "Spend $30, get $5 or spend $100, get $20 off your next purchase.", icon: Zap },
    { title: "Free In-Store Services", desc: "Free battery installation, check engine light scanning", icon: Settings },
    { title: "Oil & Battery Recycling", desc: "Recycle motor oil and gear oil at no charge. Gift card for returning", icon: RotateCcw },
    { title: "Store Locator", desc: "Use our store locator to find the closest store near you.", icon: MapPin },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* 3-Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={cn(
              "relative h-[320px] rounded-2xl p-10 flex flex-col justify-center overflow-hidden shadow-sm group border border-gray-100",
              !cat.gradient && cat.color
            )}
            style={cat.gradient ? { background: cat.gradient } : {}}
          >
            <div className="relative z-10 space-y-2">
              <span className={cn(
                "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider w-fit",
                i === 0 ? "bg-[#034C8C] text-white" : i === 1 ? "bg-[#22C55E] text-white" : "bg-[#FFB800] text-dark-blue"
              )}>
                {cat.tag}
              </span>
              <div className="space-y-0">
                <h3 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter">{cat.title}</h3>
                <p className="text-lg text-white/90 font-bold leading-tight">{cat.subtitle}</p>
              </div>
              <div className="pt-6">
                <button className="bg-white text-dark-blue px-6 py-2 rounded-md text-[11px] font-black uppercase tracking-tighter hover:bg-[#FFB800] hover:text-white transition-all flex items-center gap-2">
                  {cat.buttonText} <ChevronRight size={14} />
                </button>
              </div>
            </div>
            {/* Asset Image */}
            <div className="absolute right-[-5%] bottom-[-5%] w-[60%] h-[70%] z-0 group-hover:scale-105 transition-transform duration-500">
               <img 
                 src={cat.image} 
                 alt={cat.title}
                 className="w-full h-full object-contain object-bottom-right drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]" 
               />
            </div>
          </motion.div>
        ))}
      </div>

      {/* USP Section */}
      <div className="space-y-12">
        <h2 className="text-3xl font-black text-dark-blue text-center uppercase tracking-tighter">Know what you pay for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-3xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#FFB800] transition-colors duration-300">
                <usp.icon className="w-7 h-7 text-[#FFB800] group-hover:text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-lg font-black text-dark-blue leading-tight uppercase tracking-tighter">{usp.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
