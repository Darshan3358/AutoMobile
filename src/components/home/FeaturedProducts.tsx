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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12 space-y-6">
          <h2 className="text-3xl font-black text-dark-blue tracking-tight text-center">
            Featured products in
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {PRODUCT_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-2.5 rounded-md text-sm font-black transition-all duration-300 border",
                  activeTab === tab
                    ? "bg-white text-[#034C8C] border-[#034C8C] shadow-sm"
                    : "bg-white text-dark-blue border-transparent hover:border-gray-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group/container">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Slider Arrow Button mirroring reference */}
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center opacity-0 group-hover/container:opacity-100 transition-opacity z-20">
            <ChevronRight className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
