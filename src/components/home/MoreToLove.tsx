"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ALL_PRODUCTS } from '@/data/products';

export const MoreToLove = () => {
  const products = ALL_PRODUCTS.filter(p => p.isMoreToLove);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black text-dark-blue tracking-tighter uppercase">More to love!</h2>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-dark-blue hover:text-white transition-all shadow-sm">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-dark-blue hover:text-white transition-all shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
