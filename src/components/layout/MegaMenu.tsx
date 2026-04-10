"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronRight, 
  Settings2, 
  Car, 
  Disc, 
  Activity, 
  Battery, 
  Cpu, 
  Layout,
  ArrowRight,
  ChevronRightCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import categoriesData from '@/data/categories.json';

const getCategoryIcon = (iconName: string) => {
  const props = { className: "w-5 h-5" };
  switch (iconName) {
    case 'cog': return <Settings2 {...props} />;
    case 'car': return <Car {...props} />;
    case 'disc': return <Disc {...props} />;
    case 'layers': return <Activity {...props} />;
    case 'zap': return <Battery {...props} />;
    case 'cpu': return <Cpu {...props} />;
    case 'layout': return <Layout {...props} />;
    default: return <Settings2 {...props} />;
  }
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState(categoriesData[0]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center pt-[135px]">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          />

          {/* Menu Container */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[1300px] h-fit max-h-[calc(100vh-160px)] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex overflow-hidden border-t-2 border-[#FFB800]"
          >
            {/* Sidebar */}
            <div className="w-[280px] bg-gray-50 border-r border-gray-100 overflow-y-auto">
              <nav className="flex flex-col">
                {categoriesData.map((category) => (
                  <div 
                    key={category.id}
                    onMouseEnter={() => setActiveCategory(category)}
                    className={cn(
                      "px-8 py-4 flex items-center justify-between cursor-pointer transition-all group",
                      activeCategory.id === category.id 
                        ? "bg-white text-[#FFB800]" 
                        : "text-gray-900 hover:bg-white hover:text-[#034C8C]"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "transition-colors",
                        activeCategory.id === category.id ? "text-[#FFB800]" : "text-gray-400 group-hover:text-[#034C8C]"
                      )}>
                        {getCategoryIcon(category.icon)}
                      </div>
                      <span className="text-[13px] font-black uppercase tracking-tight">{category.name}</span>
                    </div>
                    <ChevronRight size={14} className={cn(
                      "transition-transform",
                      activeCategory.id === category.id ? "translate-x-1" : "text-gray-300"
                    )} />
                  </div>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white flex">
              {/* Sub-categories Grid */}
              <div className="flex-1 p-10 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-4 gap-x-10 gap-y-12">
                  {activeCategory.subCategories.length > 0 ? (
                    activeCategory.subCategories.map((sub, i) => (
                      <div key={i} className="space-y-4">
                        <h3 className="text-[15px] font-black text-[#034C8C] leading-none mb-4">
                          {sub.title}
                        </h3>
                        <ul className="space-y-2">
                          {sub.links.map((link, j) => (
                            <li key={j}>
                              <Link href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors block">
                                {link}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link href="/shop" className="text-11px font-black text-[#FFB800] uppercase flex items-center gap-1 pt-2 hover:gap-2 transition-all">
                              View all <ChevronRight size={10} strokeWidth={4} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-4 flex items-center justify-center h-48 text-gray-300 italic">
                      More categories coming soon...
                    </div>
                  )}
                </div>
              </div>

              {/* Right Promo Banner - Vertical */}
              <div className="w-[280px] bg-[#BC3120] relative flex flex-col p-8 text-white">
                 <div className="space-y-1 z-10">
                    <span className="text-[11px] font-black uppercase text-[#FFB800] tracking-widest bg-dark-blue/20 px-3 py-1 rounded-full">Special deals</span>
                    <h4 className="text-4xl font-black italic -skew-x-12 tracking-tighter leading-none pt-4">
                      ONE TIME <br /> SPECIAL <br /> 
                      <span className="text-5xl">BUYS</span>
                    </h4>
                    <p className="text-[13px] font-black opacity-80 pt-4">Good Values. Always.</p>
                 </div>
                 
                 <div className="mt-8 z-10">
                    <button 
                      onClick={() => {
                        onClose();
                        window.location.href = '/shop';
                      }}
                      className="bg-white text-black px-6 py-3 rounded-lg text-xs font-black uppercase tracking-tighter hover:bg-[#FFB800] transition-all flex items-center gap-2 shadow-xl"
                    >
                      Shop now <ArrowRight size={14} />
                    </button>
                 </div>

                 {/* Asset positioning - Bleeds off the bottom */}
                 <div className="absolute -bottom-6 -right-16 w-[400px] z-0 pointer-events-none opacity-90">
                    <img 
                      src="https://enovathemes.com/mobex/wp-content/uploads/banner13-img.webp" 
                      alt="Special Deals" 
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
