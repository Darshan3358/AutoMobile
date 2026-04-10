"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ALL_PRODUCTS } from '@/data/products';

export const BestDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 1,
    minutes: 18,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = ALL_PRODUCTS.filter(p => p.isBestDeal);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <h2 className="text-3xl font-black text-dark-blue tracking-tighter uppercase">Best Deals of the week!</h2>
            
            <div className="flex items-center gap-2">
              {Object.entries(timeLeft).map(([label, value], idx) => (
                <React.Fragment key={label}>
                  <div className="bg-[#BC3120] text-white w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center text-lg font-black shadow-lg shadow-red-500/10">
                    {value.toString().padStart(2, '0')}
                  </div>
                  {idx < 3 && <span className="text-xl font-black text-[#BC3120]">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
             <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-dark-blue hover:text-white transition-all shadow-sm">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-dark-blue hover:text-white transition-all shadow-sm">
                <ChevronRight className="w-5 h-5" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          {dealProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
