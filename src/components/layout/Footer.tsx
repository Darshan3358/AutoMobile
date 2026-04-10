"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Send,
  MapPin,
  Phone,
  MessageSquare,
  ChevronUp,
} from 'lucide-react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from '@/components/shared/SocialIcons';
import { cn } from '@/lib/utils';
 
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Logo, Social & Newsletter */}
          <div className="space-y-8">
            <Link href="/" className="inline-flex flex-col">
              <span className="text-4xl font-black italic tracking-tighter leading-none text-white">
                MOBEX
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 mt-1">
                Auto Parts & Accessories
              </span>
            </Link>

            <div className="flex gap-4">
              {[
                { name: 'Facebook',  Icon: Facebook  },
                { name: 'Instagram', Icon: Instagram },
                { name: 'Linkedin',  Icon: Linkedin  },
                { name: 'Twitter',   Icon: Twitter   },
                { name: 'Youtube',   Icon: Youtube   },
              ].map(({ name, Icon }) => (
                <Link key={name} href="#" className="w-5 h-5 text-gray-500 hover:text-accent transition-colors" title={name}>
                  <Icon className="w-full h-full" strokeWidth={2} />
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-400 leading-relaxed max-w-[260px]">
                What&apos;s inside: new arrivals, exclusive sales, truck news and more!
              </p>
              <div className="relative group max-w-[280px]">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full bg-[#1A1A1A] border-none rounded-xl h-14 pl-6 pr-14 text-sm font-medium focus:ring-2 focus:ring-accent transition-all outline-none"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-dark-blue text-white rounded-lg flex items-center justify-center hover:bg-accent hover:text-dark-blue transition-all">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Menus Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Account */}
            <div className="space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-white border-b-2 border-accent inline-block pb-1">Account</h3>
              <ul className="space-y-3">
                {['Dashboard', 'Orders', 'Wishlist', 'My garage', 'Addresses'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[13px] font-bold text-gray-500 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Catalog */}
            <div className="space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-white border-b-2 border-accent inline-block pb-1">Catalog</h3>
              <ul className="space-y-3">
                {['Shop by parts', 'Shop by brands', 'Shop by make', 'Promotions', 'Sitemap'].map((item) => (
                  <li key={item}>
                    <Link href="/shop" className="text-[13px] font-bold text-gray-500 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-white border-b-2 border-accent inline-block pb-1">Help</h3>
              <ul className="space-y-3">
                {['Features', 'FAQ', 'About us', 'Career', 'Contact us'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[13px] font-bold text-gray-500 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <h3 className="text-base font-black uppercase tracking-tight text-white">Need help? / Contact us</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-5 h-5 mt-1 shrink-0">
                  <MapPin size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-[14px] leading-tight font-medium text-gray-400">
                  7031 N 35th Ave, Phoenix
                  <span className="block mt-1">Arkansas United States</span>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-5 h-5 mt-1 shrink-0">
                  <Phone size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-[14px] leading-tight font-medium text-gray-400">
                  Call us between 8 AM - 10 PM
                  <span className="block mt-1 font-black text-lg text-accent tracking-tight">6668 5555 8464</span>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-5 h-5 mt-1 shrink-0">
                  <MessageSquare size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h6 className="text-[15px] font-black text-white">Live chat</h6>
                  <p className="text-[13px] font-bold text-gray-500">Chat with an Expert</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Languages & Payments */}
        <div className="border-t border-gray-800 py-8 flex flex-wrap justify-between items-center gap-6">
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-[13px] font-bold text-gray-500">
                 <span className="text-white">Languages</span>
                 <div className="flex gap-4 grayscale opacity-50">
                    <button className="hover:text-white flex items-center gap-1"><img src="https://flagcdn.com/us.svg" className="w-4 h-3 object-cover rounded-px" alt="en" /> English</button>
                    <button className="hover:text-white flex items-center gap-1"><img src="https://flagcdn.com/de.svg" className="w-4 h-3 object-cover rounded-px" alt="de" /> Deutsch</button>
                    <button className="hover:text-white flex items-center gap-1"><img src="https://flagcdn.com/fr.svg" className="w-4 h-3 object-cover rounded-px" alt="fr" /> Français</button>
                 </div>
              </div>
           </div>

           <div className="flex items-center gap-6">
              <span className="text-[13px] font-bold text-gray-300">Payment options</span>
              <img 
                src="https://enovathemes.com/mobex/wp-content/uploads/payment-options-footer.jpg" 
                alt="Payment Options" 
                className="h-4 object-contain opacity-80"
              />
           </div>
        </div>

        {/* Final Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-between items-center gap-4">
           <p className="text-[13px] font-bold text-gray-500">
             Copyright © 2026 <span className="text-white">Mobex</span>. All Rights Reserved
           </p>
           <div className="flex gap-6">
              {['Terms of Use', 'Privacy Policy', 'Interest-Based Ads', 'Accessibility'].map((item) => (
                <Link key={item} href="#" className="text-[13px] font-bold text-gray-500 hover:text-white transition-colors">{item}</Link>
              ))}
           </div>
        </div>

      </div>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-dark-blue rounded-xl flex items-center justify-center shadow-2xl hover:bg-white transition-all transform hover:-translate-y-2 z-50"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};
