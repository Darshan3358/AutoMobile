"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  ChevronDown, 
  Search, 
  Heart, 
  ShoppingCart, 
  User,
  Menu,
  RotateCw,
  LayoutGrid
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

import { ProductSearch } from './ProductSearch';

// Lazy load MegaMenu for performance
const MegaMenu = dynamic(() => import('./MegaMenu').then(mod => mod.MegaMenu), {
  ssr: false,
});

const BrandMegaMenu = dynamic(() => import('./BrandMegaMenu').then(mod => mod.BrandMegaMenu), {
  ssr: false,
});

export const NavBar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col relative z-[110]">
      {/* Top Bar */}
      <div className="bg-dark-blue/95 text-white/90 text-[11px] py-1.5 border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3 h-3 text-accent" />
              <span>Call us 8 AM - 10 PM / <strong className="text-white">6668 5555</strong></span>
            </div>
            <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-6">
              <MessageSquare className="w-3 h-3 text-accent" />
              <span>Live Chat / <Link href="#" className="underline font-bold text-white hover:text-accent transition-colors">Chat with an Expert</Link></span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-3 h-3 text-accent" />
              <span>Locations</span>
            </Link>
            <div className="flex items-center gap-2 hover:text-white cursor-pointer px-4 border-l border-white/10 h-5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-2.5 object-cover rounded-[1px]" />
                $ USD
              </span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar with Logo & Search */}
      <div className="bg-dark-blue text-white py-6 border-b border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[240px_1fr_auto] items-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-4xl font-black italic tracking-tighter leading-none font-oswald text-white uppercase">
              MOBEX
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent mt-1">
              Auto Parts
            </span>
          </Link>

          {/* Search Bar */}
          <ProductSearch className="hidden lg:flex" />

          {/* Icons */}
          <div className="flex items-center gap-8">
            <div className="hidden xl:flex items-center gap-8">
              <div className="flex flex-col items-center group cursor-pointer">
                 <div className="relative">
                    <RotateCw className="w-5 h-5 group-hover:text-accent transition-colors" />
                    <span className="absolute -top-2 -right-2 bg-accent text-dark-blue rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-black border border-dark-blue">0</span>
                 </div>
                 <span className="text-[10px] uppercase font-bold mt-1 opacity-60">Compare</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                 <div className="relative">
                    <Heart className="w-5 h-5 group-hover:text-accent transition-colors" />
                    <span className="absolute -top-2 -right-2 bg-accent text-dark-blue rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-black border border-dark-blue">0</span>
                 </div>
                 <span className="text-[10px] uppercase font-bold mt-1 opacity-60">Wishlist</span>
              </div>
            </div>
            
            <Link href="/cart" className="flex items-center gap-4 group bg-white/5 hover:bg-white/10 p-2 pr-6 rounded-lg transition-all">
              <div className="relative bg-accent rounded-lg w-10 h-10 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-dark-blue" />
                <span className="absolute -top-1.5 -right-1.5 bg-white text-dark-blue rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-black shadow-lg">0</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-white font-black uppercase tracking-wider">My Cart</span>
                <span className="text-[15px] font-black text-accent">$0.00</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Menu */}
      <div className="bg-dark-blue text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
           <div className="flex items-center gap-8">
              <div 
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                className="flex items-center gap-3 bg-accent text-dark-blue px-6 py-2.5 rounded-md cursor-pointer font-black uppercase text-sm hover:bg-white transition-colors"
                aria-expanded={isMegaMenuOpen}
              >
                <Menu className="w-5 h-5" />
                <span>All categories</span>
              </div>

              <nav className="flex items-center gap-8 font-bold text-[13px] uppercase tracking-wide">
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <Link href="/shop" className="hover:text-accent font-black text-accent transition-colors">Shop</Link>
                <Link href="#" className="hover:text-accent transition-colors">Demos</Link>
                <Link href="#" className="hover:text-accent transition-colors">Shop by brand</Link>
                <Link href="#" className="hover:text-accent transition-colors">Blog</Link>
                <Link href="/elements" className="hover:text-accent transition-colors">Elements</Link>
              </nav>
           </div>

           <div className="flex items-center gap-4">
              <Button size="sm" className="bg-[#FFB800] hover:bg-white text-dark-blue font-black uppercase text-[11px] h-10 px-6 rounded-md transition-all">
                <LayoutGrid className="w-4 h-4 mr-2" />
                My garage
              </Button>
           </div>
        </div>
      </div>

      {/* Mega Menu Overlays */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      <BrandMegaMenu isOpen={isBrandMenuOpen} onClose={() => setIsBrandMenuOpen(false)} />
    </header>
  );
};
