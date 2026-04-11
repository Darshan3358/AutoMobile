"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  ChevronDown, 
  Heart, 
  ShoppingCart, 
  Menu,
  RotateCw,
  LayoutGrid,
  Search,
  User,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductSearch } from './ProductSearch';
import { MobileSideBar } from './MobileSideBar';
import { MyGarageDropdown } from './MyGarageDropdown';

const MegaMenu = dynamic(() => import('./MegaMenu').then(mod => mod.MegaMenu), { ssr: false });
const BrandMegaMenu = dynamic(() => import('./BrandMegaMenu').then(mod => mod.BrandMegaMenu), { ssr: false });

export const NavBar = () => {
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGarageOpen, setIsGarageOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    // { name: 'Demos', href: '#' },
    { name: 'Shop by brand', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Elements', href: '/elements' },
  ];

  return (
    <header className="w-full flex flex-col relative z-[110]">
      {/* Top Bar - High Fidelity Desktop */}
      <div className="hidden lg:block bg-[#05111b] text-white/90 text-[11px] py-2 border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-accent" />
              <span className="font-bold">Call us between 8 AM - 10 PM / <strong className="text-white">6668 5555</strong></span>
            </div>
            <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-accent" />
              <span className="font-bold underline underline-offset-4 decoration-accent/30">Live Chat / Chat with an Expert</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
               <span className="cursor-pointer hover:text-white flex items-center gap-1 font-bold italic">$ USD <ChevronDown size={10}/></span>
               <span className="cursor-pointer hover:text-white flex items-center gap-1 font-bold italic">En <ChevronDown size={10}/></span>
            </div>

            <div className="relative group">
                <button 
                  onClick={() => setIsGarageOpen(!isGarageOpen)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-accent hover:text-dark-blue px-4 py-1.5 rounded-lg transition-all font-black uppercase text-[10px] tracking-widest"
                >
                  <Settings size={14} className={isGarageOpen ? 'animate-spin' : ''} />
                  <span>My Garage</span>
                  <ChevronDown size={12} className={isGarageOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                <MyGarageDropdown isOpen={isGarageOpen} onClose={() => setIsGarageOpen(false)} />
            </div>

            <Link href="#" className="flex items-center gap-2 bg-accent text-dark-blue px-4 py-1.5 rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors shadow-lg shadow-accent/20">
              <User size={14} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-dark-blue text-white py-4 lg:py-6 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl lg:text-4xl font-black italic tracking-tighter leading-none font-oswald text-white uppercase">
                MOBEX
              </span>
              <span className="text-[7px] lg:text-[10px] uppercase font-bold tracking-[0.3em] text-accent mt-0.5">
                Auto Parts & Accessories
              </span>
            </Link>

            <ProductSearch className="hidden lg:flex flex-1 mx-10" />

            <div className="flex items-center gap-4 lg:gap-8">
               <div className="hidden xl:flex items-center gap-6">
                   <RotateCw className="w-5 h-5 hover:text-accent cursor-pointer transition-transform hover:rotate-180 duration-500" />
                   <Heart className="w-5 h-5 hover:text-accent cursor-pointer transition-transform hover:scale-110" />
               </div>

               <Link href="/cart" className="flex items-center gap-3 relative group">
                 <div className="relative">
                   <ShoppingCart className="w-6 h-6 lg:w-5 lg:h-5 text-white lg:text-accent group-hover:text-white transition-colors" />
                   <span className="absolute -top-1.5 -right-1.5 bg-accent text-dark-blue rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-black animate-pulse">0</span>
                 </div>
                 <div className="hidden lg:flex flex-col leading-tight">
                    <span className="text-[10px] font-black uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">My Cart</span>
                    <span className="text-[14px] font-black text-accent">$0.00</span>
                 </div>
               </Link>

               <button 
                 onClick={() => setIsMobileMenuOpen(true)}
                 className="lg:hidden p-1 text-white hover:text-accent transition-colors"
                >
                  <Menu size={28} strokeWidth={2.5} />
                </button>
            </div>
          </div>

          <div className="lg:hidden mt-5">
            <div className="relative group">
               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search size={16} className="text-accent" />
               </div>
               <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full h-11 bg-white rounded-lg pl-12 pr-4 text-xs font-bold text-dark-blue placeholder:text-gray-400 focus:outline-none shadow-xl border-none"
               />
               <div className="absolute inset-y-0 right-3 flex items-center">
                  <LayoutGrid size={16} className="text-accent/50" />
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-[#034C8C] text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
           <div className="flex items-center gap-8">
              <div 
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                className="flex items-center gap-3 bg-accent text-dark-blue px-6 py-2.5 rounded-md cursor-pointer font-black uppercase text-sm hover:bg-white transition-colors"
              >
                <Menu className="w-4 h-4" />
                <span>All categories</span>
              </div>

              <nav className="flex items-center gap-8 font-bold text-[13px] uppercase tracking-wide">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`hover:text-accent transition-colors relative group py-2 ${pathname === link.href ? 'text-accent font-black' : 'text-white'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                ))}
              </nav>
           </div>
        </div>
      </div>

      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      <BrandMegaMenu isOpen={isBrandMenuOpen} onClose={() => setIsBrandMenuOpen(false)} />
      <MobileSideBar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks} 
      />
    </header>
  );
};
