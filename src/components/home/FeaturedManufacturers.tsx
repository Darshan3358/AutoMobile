"use client";

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Audi", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/audi.webp" },
  { name: "Bentley", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/bentley.webp" },
  { name: "Chevrolet", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/chevrolet.webp" },
  { name: "Ford", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/ford.webp" },
  { name: "Infiniti", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/infiniti.webp" },
  { name: "KIA", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/kia.webp" },
  { name: "Lexus", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/lexus.webp" },
  { name: "Mazda", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/mazda.webp" },
  { name: "Mitsubishi", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/mitsubishi.webp" },
  { name: "Porsche", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/porche.webp" },
  { name: "Toyota", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/toyota.webp" },
  { name: "Volvo", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/volvo.webp" },
  { name: "BMW", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/bmw.webp" },
  { name: "Cadillac", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/cadillac.webp" },
  { name: "Dodge", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/dodge.webp" },
  { name: "Honda", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/honda.webp" },
  { name: "Hyundai", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/hyundai.webp" },
  { name: "Lamborghini", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/lamborghini.webp" },
  { name: "Lincoln", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/lincoln.webp" },
  { name: "Mercedes", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/mercedes-benz.webp" },
  { name: "Nissan", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/nissan.webp" },
  { name: "Rolls-Royce", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/rolls-royce.webp" },
  { name: "Volkswagen", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/volkswagen.webp" },
  { name: "Maybach", logo: "https://enovathemes.com/mobex/wp-content/themes/mobex/images//vehicle-logos/maybach.webp" }
];

export const FeaturedManufacturers = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4">
        <h4 className="text-3xl font-black text-dark-blue mb-12 tracking-tight">
          Featured manufacturers
        </h4>

        {/* 2-Row Grid matching the reference image */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-y-4 gap-x-2">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-full aspect-square rounded-full bg-[#F5F5F5] flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl border border-transparent group-hover:border-accent/10">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain filter transition-all duration-300 group-hover:brightness-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
