"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Wiper Blades",
    subtitle: "KEEP YOUR VISION CLEAR",
    description: "Plus Price Lock on 100s of lines",
    image: "https://enovathemes.com/mobex/wp-content/uploads/slide-2.webp",
    assets: [
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-4.webp",
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-5.webp",
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-6.webp"
    ],
    buttonText: "Shop now",
    buttonLink: "/shop?category=wipers"
  },
  {
    id: 2,
    title: "Mobil 1",
    subtitle: "FULL SYNTHETIC",
    description: "It's more than just oil.\nIt's liquid engineering.",
    image: "https://enovathemes.com/mobex/wp-content/uploads/slide-4.webp",
    assets: [
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-1.webp",
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-2.webp",
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-3.webp"
    ],
    buttonText: "Shop now",
    buttonLink: "/shop?category=oil"
  },
  {
    id: 3,
    title: "JUMP STARTERS",
    subtitle: "START BATTERIES IN SECONDS",
    description: "Up to 45% Off",
    image: "https://enovathemes.com/mobex/wp-content/uploads/slide-5.webp",
    assets: [
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-7.webp",
      "https://enovathemes.com/mobex/wp-content/uploads/slider-asset-8.webp"
    ],
    buttonText: "Shop now",
    buttonLink: "/shop?category=tools"
  }
];

export const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[530px]">
          
          {/* Main Slider */}
          <div className="lg:col-span-2 relative rounded-4xl overflow-hidden bg-[#DDD] h-[400px] lg:h-full group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16 z-20">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                  >
                    <h2 className="text-4xl lg:text-7xl font-oswald font-bold text-white uppercase leading-tight mb-2 drop-shadow-lg">
                      {slides[currentSlide].title}
                    </h2>
                    <h3 className="text-xl lg:text-4xl font-oswald font-bold text-white uppercase mb-6 drop-shadow-md">
                      {slides[currentSlide].subtitle}
                    </h3>
                    <p className="text-white text-lg lg:text-xl font-inter mb-8 whitespace-pre-line drop-shadow">
                      {slides[currentSlide].description}
                    </p>
                    <Link 
                      href={slides[currentSlide].buttonLink}
                      className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {slides[currentSlide].buttonText}
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </div>

                {/* Floating Assets Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {slides[currentSlide].assets.map((asset, idx) => (
                    <motion.img
                      key={asset}
                      src={asset}
                      alt="Floating asset"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.5 + idx * 0.2, 
                        duration: 1.5, 
                        ease: "easeOut" 
                      }}
                      className="absolute bottom-0 right-0 w-[50%] lg:w-auto h-auto max-h-[80%] object-contain"
                      style={{ 
                        right: idx === 0 ? '5%' : idx === 1 ? '15%' : '0%',
                        zIndex: 10 - idx 
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bullets */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    currentSlide === idx ? 'w-12 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Right Side Banners - Home 2 Specific */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Banner 1: Batteries */}
            <div className="relative rounded-4xl overflow-hidden bg-[#FDB913] group">
              <div className="relative z-10 p-8 flex flex-col h-full justify-center">
                <span className="text-black font-bold uppercase text-sm mb-2">Top brands</span>
                <h3 className="text-4xl font-oswald font-black text-black uppercase mb-2">Batteries</h3>
                <p className="text-black font-medium mb-6">Stay charged up!</p>
                <Link 
                  href="/shop?ca=battery"
                  className="inline-flex items-center justify-center w-fit bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-black hover:text-white transition-all text-sm mb-12"
                >
                  Shop now
                </Link>
              </div>
              <img 
                src="https://enovathemes.com/mobex/wp-content/uploads/banner5-img.webp" 
                alt="Battery"
                className="absolute right-[-20px] bottom-[-20px] w-64 h-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-4"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent pointer-events-none" />
            </div>

            {/* Banner 2: Tires */}
            <div className="relative rounded-4xl overflow-hidden bg-[#EA580C] group">
              <div className="relative z-10 p-8 flex flex-col h-full justify-center">
                <span className="text-white font-bold uppercase text-sm mb-2">Buy 3 Get 1 For Free</span>
                <h3 className="text-4xl font-oswald font-black text-white uppercase mb-2">TIRES & WHEELS</h3>
                <p className="text-white/90 font-medium mb-6">Stay safe on road!</p>
                <Link 
                  href="/shop?ca=tires"
                  className="inline-flex items-center justify-center w-fit bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-black hover:text-white transition-all text-sm mb-12"
                >
                  Shop now
                </Link>
              </div>
              <img 
                src="https://enovathemes.com/mobex/wp-content/uploads/banner7-img.webp" 
                alt="Tires"
                className="absolute right-[-30px] bottom-[-10px] w-72 h-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-4 mt-8 pt-8"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
