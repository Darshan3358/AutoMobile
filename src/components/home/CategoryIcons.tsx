"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Car, 
  Disc, 
  Droplets, 
  Battery, 
  Layers, 
  Cog, 
  Wind, 
  Settings,
  SprayCan
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { name: 'Body', image: 'https://enovathemes.com/mobex/wp-content/uploads/Body.webp' },
  { name: 'Brakes', image: 'https://enovathemes.com/mobex/wp-content/uploads/Brakes.webp' },
  { name: 'Care Kit', image: 'https://enovathemes.com/mobex/wp-content/uploads/Care-Kit.webp' },
  { name: 'Damping', image: 'https://enovathemes.com/mobex/wp-content/uploads/Damping.webp' },
  { name: 'Electrics', image: 'https://enovathemes.com/mobex/wp-content/uploads/Electrics.webp' },
  { name: 'Engine', image: 'https://enovathemes.com/mobex/wp-content/uploads/Engine.webp' },
  { name: 'Filters', image: 'https://enovathemes.com/mobex/wp-content/uploads/Air-conditioning.webp' },
  { name: 'Interior', image: 'https://enovathemes.com/mobex/wp-content/uploads/Interior.webp' },
  { name: 'Fluids', image: 'https://enovathemes.com/mobex/wp-content/uploads/Oils-and-fluids.webp' },
];

export const CategoryIcons = () => {
  return (
    <div className="w-full py-10 overflow-x-auto no-scrollbar">
      <div className="flex justify-between items-start gap-4 min-w-[1000px] max-w-7xl mx-auto px-4">
        {CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, type: 'spring', damping: 15 }}
            className="flex flex-col items-center group cursor-pointer min-w-[110px]"
          >
            <Link href="#" className="flex flex-col items-center gap-4">
              <div className="w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center p-0 transition-all duration-500 group-hover:bg-white overflow-hidden relative shadow-lg">
                 {/* This mirrors the div.term-image from the snippet */}
                 <img 
                   src={cat.image} 
                   alt={cat.name} 
                   className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                 />
              </div>
              <h4 className="text-[13px] font-bold text-white transition-all group-hover:text-accent uppercase tracking-wide">
                {cat.name}
              </h4>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
