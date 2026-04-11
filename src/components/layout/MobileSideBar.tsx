"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Phone, MessageCircle, MapPin, LayoutGrid } from 'lucide-react';

interface MobileSideBarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileSideBar = ({ isOpen, onClose, navLinks }: MobileSideBarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-blue/80 backdrop-blur-sm z-[200] lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[201] flex flex-col lg:hidden"
          >
            {/* Header */}
            <div className="p-6 bg-dark-blue flex items-center justify-between">
              <Link href="/" className="flex flex-col" onClick={onClose}>
                <span className="text-2xl font-black italic font-oswald text-white uppercase">MOBEX</span>
                <span className="text-[8px] uppercase font-bold tracking-[0.3em] text-accent mt-0.5">Auto Parts</span>
              </Link>
              <button onClick={onClose} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-dark-blue transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-8">
              <nav className="px-6 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Main Menu</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 border-b border-gray-50 text-dark-blue font-bold uppercase text-xs tracking-wide hover:text-accent transition-colors"
                  >
                    {link.name}
                    <ChevronRight size={14} className="text-gray-300" />
                  </Link>
                ))}
              </nav>

              <div className="mt-12 px-6">
                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Support</p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-accent"><Phone size={18} /></div>
                       <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Call us</p>
                          <p className="text-sm font-black text-dark-blue tracking-tight">6668 5555</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-accent"><MessageCircle size={18} /></div>
                       <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Live Chat</p>
                          <p className="text-sm font-black text-dark-blue tracking-tight underline decoration-accent/30 decoration-2">Chat with Expert</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-gray-100">
              <button className="w-full h-14 bg-accent text-dark-blue rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-accent/20">
                <LayoutGrid size={16} />
                My Garage
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
