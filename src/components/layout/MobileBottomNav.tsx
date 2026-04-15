"use client";

import React, { useEffect, useState } from 'react';
import { User, LayoutGrid, Car, Search, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileBottomNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { icon: User, label: 'Account' },
    { icon: LayoutGrid, label: 'Categories' },
    { icon: Car, label: 'Car filter' },
    { icon: Search, label: 'Search' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-100 px-4 py-4 z-[110] shadow-[0_-15px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="flex justify-between items-center max-w-md mx-auto px-4">
            {navItems.map((item, i) => (
              <button key={i} className="flex flex-col items-center gap-1.5 group">
                <div className="text-[#64748b] group-hover:text-[#005c7a] transition-all duration-300 transform group-active:scale-90">
                  <item.icon size={23} strokeWidth={1.4} />
                </div>
                <span className="text-[11px] font-bold text-[#1e293b] font-outfit uppercase tracking-tighter opacity-80 group-hover:opacity-100 group-hover:text-[#005c7a]">
                  {item.label}
                </span>
              </button>
            ))}
            <button 
              onClick={scrollToTop}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="text-[#64748b] group-hover:text-[#005c7a] transition-all duration-300 transform group-active:scale-90">
                <ChevronUp size={23} strokeWidth={1.4} />
              </div>
              <span className="text-[11px] font-bold text-[#1e293b] font-outfit uppercase tracking-tighter opacity-80 group-hover:opacity-100 group-hover:text-[#005c7a]">
                Top
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
