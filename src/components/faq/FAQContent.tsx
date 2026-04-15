"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ_DATA = [
  {
    category: "Shopping with us",
    questions: [
      { q: "The auto repair my car is too much?", a: "We offer competitive pricing and various payment plans to help manage your repair costs." },
      { q: "Do you offer the Best Price?", a: "Yes, we have a price match guarantee on most of our top-tier automotive parts." },
      { q: "What delivery options and when?", a: "We offer standard, express, and next-day delivery options depending on your location." },
      { q: "How do I find parts available for my vehicle?", a: "Use our advanced vehicle filter to select your year, make, and model to see compatible parts." },
    ]
  },
  {
    category: "After sale support",
    questions: [
      { q: "My order arrived damaged, what should I do?", a: "Please contact our support team immediately with photos of the damage for a quick replacement." },
      { q: "If have a more questions after my order?", a: "Our expert support team is available 24/7 to answer any technical or order-related questions." },
      { q: "How do I return an order?", a: "You can initiate a return through your account dashboard within 30 days of purchase." },
      { q: "My order hasn't arrived, where is it?", a: "Track your order in real-time using the tracking number provided in your shipping confirmation email." },
    ]
  },
  {
    category: "Product help",
    questions: [
      { q: "I can't see the part I'm looking for on your app?", a: "Try using the search bar with the SKU or part name, or contact us for assistance." },
      { q: "Are the images of the product on the site the list one?", a: "Yes, we use high-fidelity images of the actual products we sell in our inventory." },
      { q: "How can I count the right part for my car?", a: "Double-check your VIN number against our compatibility table on the product page." },
      { q: "Do you sell used items?", a: "No, we only sell brand-new, high-quality automotive parts from trusted manufacturers." },
    ]
  }
];

export const FAQContent = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-20">
          {FAQ_DATA.map((section, sidx) => (
            <div key={sidx} className="space-y-10">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest leading-none">Category</span>
                <h2 className="text-4xl font-black text-dark-blue uppercase tracking-tight italic font-oswald">{section.category}</h2>
                <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
              </div>

              <div className="space-y-4">
                {section.questions.map((item, qidx) => {
                  const key = `${sidx}-${qidx}`;
                  const isOpen = openKey === key;
                  
                  return (
                    <div key={key} className="bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-transparent hover:border-accent/20 transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50">
                      <button 
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left group"
                      >
                        <h3 className={cn(
                          "text-[15px] font-black uppercase tracking-tight transition-colors",
                          isOpen ? "text-accent" : "text-dark-blue group-hover:text-accent"
                        )}>
                          {item.q}
                        </h3>
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                          isOpen ? "bg-accent text-dark-blue" : "bg-white text-gray-400 group-hover:bg-gray-100 shadow-sm"
                        )}>
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-8 pb-8 pt-2">
                               <div className="h-px bg-gray-100 mb-6" />
                               <p className="text-gray-500 font-medium leading-relaxed">
                                  {item.a}
                               </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
