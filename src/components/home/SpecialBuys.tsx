"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const SpecialBuys = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] md:h-[360px] rounded-[3rem] flex items-center shadow-2xl overflow-visible bg-[#F5A623]"
          style={{ 
            backgroundImage: 'url(https://enovathemes.com/mobex/wp-content/uploads/banner13-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none rounded-[3rem]" 
               style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
          
          <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-20">
            
            {/* Products Image - Left Side, positioned to bleed off edges */}
            <div className="hidden lg:block absolute -left-16 -bottom-10 w-[580px] z-20 pointer-events-none">
              <img 
                src="https://enovathemes.com/mobex/wp-content/uploads/banner13-img.webp" 
                alt="Special Buys Products"
                className="w-full h-auto object-contain drop-shadow-[40px_40px_60px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Group - Structured for balance */}
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-10 lg:gap-20 relative z-30">
              
              {/* Heading Group */}
              <div className="flex flex-col items-center lg:items-start space-y-2 text-center lg:text-left mr-auto lg:mr-0 lg:ml-[400px]">
                <span className="text-[12px] md:text-[13px] font-black uppercase text-white tracking-[0.25em] drop-shadow-sm">
                  One Time Special
                </span>
                <h2 className="text-7xl md:text-8xl font-black text-white italic tracking-tighter leading-none -skew-x-12 drop-shadow-md">
                  BUYS
                </h2>
              </div>

              {/* Action and Tagline */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <button className="bg-black text-white px-10 py-4 rounded-xl text-sm font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all shadow-2xl flex items-center gap-2 transform hover:-translate-y-1">
                  Shop now <ChevronRight size={18} />
                </button>

                <p className="hidden md:block text-2xl font-black text-white italic leading-tight uppercase tracking-tight max-w-[150px] drop-shadow-sm">
                  Good Values. <br /> Always.
                </p>
              </div>

            </div>
          </div>

          {/* Gold Shine Hover Effect */}
          <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-[3rem]" />
        </motion.div>
      </div>
    </section>
  );
};
