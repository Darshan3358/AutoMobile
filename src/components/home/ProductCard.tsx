"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, GitCompare, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: 'Sale' | 'New' | 'Popular';
  sku?: string;
  brandLogo?: string;
  href?: string;
}

export const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews,
  image, 
  badge,
  href // Remove default value here to handle it inside
}: ProductCardProps) => {
  const dynamicHref = href || `/product/${id}`;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl border border-gray-100 p-4 xl:p-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative flex flex-col h-full overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 z-20">
        {badge === 'Sale' && (
          <span className="bg-[#FFB800] text-dark-blue px-2.5 py-1 text-[10px] font-black uppercase rounded-lg shadow-sm">
            Sale
          </span>
        )}
        {badge === 'Popular' && (
          <span className="bg-[#034C8C] text-white px-2.5 py-1 text-[10px] font-black uppercase rounded-lg shadow-sm">
            Popular
          </span>
        )}
        {badge === 'New' && (
          <span className="bg-[#04BF33] text-white px-2.5 py-1 text-[10px] font-black uppercase rounded-lg shadow-sm">
            New!
          </span>
        )}
      </div>

      {/* Quick Actions (Hover) */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20">
        <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent transition-all hover:scale-110 active:scale-90">
          <Heart size={16} className="text-gray-400 group-hover:text-dark-blue" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent transition-all hover:scale-110 active:scale-90">
          <GitCompare size={16} className="text-gray-400 group-hover:text-dark-blue" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent transition-all hover:scale-110 active:scale-90">
          <Eye size={16} className="text-gray-400 group-hover:text-dark-blue" />
        </button>
      </div>

      {/* Image Area - Fixed Aspect Ratio and Background */}
      <Link href={dynamicHref} className="relative w-full pt-[100%] mb-6 bg-gray-50/50 rounded-xl overflow-hidden block">
        <div className="absolute inset-0 p-6 flex items-center justify-center">
            <img 
              src={image} 
              alt={name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://enovathemes.com/mobex/wp-content/uploads/product-124-img-1.webp';
              }}
            />
        </div>
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </Link>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        <Link href={dynamicHref} className="block">
          <h3 className="text-[13px] xl:text-[11px] font-black text-dark-blue leading-tight line-clamp-2 uppercase mb-2 group-hover:text-accent transition-colors h-8">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={cn(i < Math.floor(rating) ? "fill-accent text-accent" : "fill-gray-100 text-gray-100")} />
          ))}
          <span className="ml-1 text-[9px] font-black text-gray-300 uppercase tracking-tight">{reviews} Reviews</span>
        </div>

        {/* Price and Action */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-[10px] text-gray-400 line-through font-bold">${originalPrice}</span>
            )}
            <span className="text-lg xl:text-base font-black text-[#BC3120] tracking-tighter">${price}</span>
          </div>
          
          <button className="h-10 px-3 bg-dark-blue text-white rounded-lg font-black uppercase text-[9px] transition-all hover:bg-accent hover:text-dark-blue flex items-center justify-center gap-1 group/btn active:scale-95 whitespace-nowrap">
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};
