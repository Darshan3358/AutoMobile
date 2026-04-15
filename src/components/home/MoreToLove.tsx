"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ProductCardHorizontal } from './ProductCardHorizontal';
import { ALL_PRODUCTS } from '@/data/products';

export const MoreToLove = () => {
  const products = ALL_PRODUCTS.filter(p => p.isMoreToLove);

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-black text-black text-center md:text-left mb-8 md:mb-12">
          More to love!
        </h2>

        {/* Mobile: 3-Row Scrollable Layout */}
        <div className="md:hidden w-full overflow-x-auto no-scrollbar pb-6 px-4 -mx-4">
          <div className="grid grid-rows-3 grid-flow-col gap-3 min-w-max h-[580px] snap-x snap-mandatory">
            {products.map(product => (
              <div key={product.id} className="w-[300px] snap-start">
                <ProductCardHorizontal {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid of Horizontal Cards - As per reference image */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCardHorizontal key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
