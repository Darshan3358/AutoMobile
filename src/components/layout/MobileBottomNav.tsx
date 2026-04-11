"use client";

import React, { useEffect, useState } from 'react';
import { User, LayoutGrid, Car, Search, ArrowUp } from 'lucide-react';
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
          className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-100 px-4 py-2 z-[100] shadow-[0_-5px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="flex justify-between items-center max-w-md mx-auto">
            {navItems.map((item, i) => (
              <button key={i} className="flex flex-col items-center gap-1 group">
                <div className="text-gray-400 group-hover:text-accent transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter group-hover:text-dark-blue">
                  {item.label}
                </span>
              </button>
            ))}
            <button 
              onClick={scrollToTop}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="text-gray-400 group-hover:text-accent transition-colors">
                <ArrowUp size={20} />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter group-hover:text-dark-blue">
                Top
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
