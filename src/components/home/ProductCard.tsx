"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, GitCompare, Eye, ArrowRight } from 'lucide-react';
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
      className="group bg-white rounded-xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl relative flex flex-col h-full overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
        {badge === 'Sale' && (
          <span className="bg-[#ffb400] text-black px-2 py-0.5 text-[10px] font-black uppercase rounded-[3px] shadow-sm">
            Sale
          </span>
        )}
        {badge === 'Popular' && (
          <span className="bg-[#004b7c] text-white px-2 py-0.5 text-[10px] font-black uppercase rounded-[3px] shadow-sm">
            Popular
          </span>
        )}
        {badge === 'New' && (
          <span className="bg-[#04BF33] text-white px-2 py-0.5 text-[10px] font-black uppercase rounded-[3px] shadow-sm">
            New!
          </span>
        )}
      </div>

      {/* Image Area */}
      <Link href={dynamicHref} className="relative w-full aspect-square mb-2 bg-white flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-[85%] h-[85%] object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://enovathemes.com/mobex/wp-content/uploads/product-124-img-1.webp';
            }}
          />
      </Link>

      {/* Quick Actions - Always Visible in this design */}
      <div className="flex items-center justify-center gap-2.5 mb-5">
        <button className="w-9 h-9 rounded-full border border-gray-50 flex items-center justify-center hover:bg-gray-50 transition-all">
          <Eye size={16} className="text-black/80" strokeWidth={1.5} />
        </button>
        <button className="w-9 h-9 rounded-full border border-gray-50 flex items-center justify-center hover:bg-gray-50 transition-all">
          <Heart size={16} className="text-black/80" strokeWidth={1.5} />
        </button>
        <button className="w-9 h-9 rounded-full border border-gray-50 flex items-center justify-center hover:bg-gray-50 transition-all">
          <GitCompare size={16} className="text-black/80" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 px-1">
        <Link href={dynamicHref} className="block">
          <h3 className="text-[14px] font-black text-black leading-[1.2] mb-2 line-clamp-2 uppercase">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="fill-gray-100 text-gray-100" />
          ))}
        </div>

        {/* Price and Action */}
        <div className="mt-auto flex flex-col gap-2.5">
          <span className="text-[19px] font-black text-[#BC3120] tracking-tight leading-none">${price}</span>
          
          <Link href="/cart" className="flex items-center gap-1 text-[#004b7c] font-black uppercase text-[11px] hover:translate-x-0.5 transition-transform group/link">
            Add to cart
            <ArrowRight size={13} className="mt-0.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
