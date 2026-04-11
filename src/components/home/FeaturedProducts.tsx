"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { ALL_PRODUCTS } from '@/data/products';

const PRODUCT_TABS = ['Engine parts', 'Oil & Fluids', 'Suspension'];

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('Engine parts');

  const filteredProducts = ALL_PRODUCTS.filter(p => p.categoryName === activeTab || p.category === activeTab);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-dark-blue tracking-tight text-center uppercase font-oswald italic">
            Featured products in
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {PRODUCT_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[11px] md:text-sm font-black transition-all duration-300 border uppercase tracking-wider",
                  activeTab === tab
                    ? "bg-dark-blue text-accent border-dark-blue shadow-lg shadow-dark-blue/20"
                    : "bg-slate-50 text-dark-blue border-slate-100 hover:border-gray-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group/container">
          <div className="md:hidden flex items-center justify-end gap-2 text-[9px] font-black text-gray-400 mb-4 animate-pulse uppercase tracking-[0.2em]">
             Swipe to view <ChevronRight size={10} />
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-[240px] md:min-w-0 snap-center shrink-0"
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop Arrow */}
          <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center opacity-0 group-hover/container:opacity-100 transition-opacity z-20">
            <ChevronRight className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
