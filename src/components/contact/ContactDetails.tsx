"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, Send } from 'lucide-react';

export const ContactDetails = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
               <h1 className="text-5xl font-black text-dark-blue uppercase tracking-tighter italic font-oswald leading-none">
                 Contact <span className="text-accent underline decoration-4 underline-offset-8">us</span>
               </h1>
               <p className="text-gray-500 font-medium leading-relaxed">
                 Great team work well with our different skillset for our customers. Provide you can count on support for repair and maintain your vehicle. We operate in many countries.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark-blue transition-all">
                     <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Call us now</span>
                     <div className="text-xl font-black text-dark-blue italic font-oswald">+01 123 456 7890</div>
                     <p className="text-xs text-gray-400 font-bold uppercase">Monday - Friday: 8am - 10pm</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark-blue transition-all">
                     <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Our Location</span>
                     <div className="text-xl font-black text-dark-blue italic font-oswald">Central Park, New York</div>
                     <p className="text-xs text-gray-400 font-bold uppercase">United States of America</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark-blue transition-all">
                     <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Email address</span>
                     <div className="text-xl font-black text-dark-blue italic font-oswald group-hover:text-accent transition-colors">support@mobex.com</div>
                     <p className="text-xs text-gray-400 font-bold uppercase">Official technical support</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 bg-[#F8F9FA] rounded-[40px] p-10 lg:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-dark-blue uppercase tracking-widest leading-none ml-2">Name *</label>
                      <input className="w-full h-14 bg-white rounded-2xl px-6 outline-none border border-transparent focus:border-accent transition-all text-dark-blue font-medium" placeholder="Your full name" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-dark-blue uppercase tracking-widest leading-none ml-2">Email address *</label>
                      <input className="w-full h-14 bg-white rounded-2xl px-6 outline-none border border-transparent focus:border-accent transition-all text-dark-blue font-medium" placeholder="Email@example.com" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-dark-blue uppercase tracking-widest leading-none ml-2">Phone *</label>
                      <input className="w-full h-14 bg-white rounded-2xl px-6 outline-none border border-transparent focus:border-accent transition-all text-dark-blue font-medium" placeholder="+01 123 456 7890" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-dark-blue uppercase tracking-widest leading-none ml-2">Subject *</label>
                      <select className="w-full h-14 bg-white rounded-2xl px-6 outline-none border border-transparent focus:border-accent transition-all text-dark-blue font-medium appearance-none">
                         <option>Technical Support</option>
                         <option>Order Inquiry</option>
                         <option>Careers</option>
                         <option>Other</option>
                      </select>
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-dark-blue uppercase tracking-widest leading-none ml-2">Message *</label>
                   <textarea className="w-full bg-white rounded-2xl p-6 min-h-[150px] outline-none border border-transparent focus:border-accent transition-all text-dark-blue font-medium" placeholder="How can we help you?" />
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                   <button className="h-14 px-12 bg-dark-blue text-white rounded-2xl font-black uppercase text-sm flex items-center justify-center gap-4 hover:bg-accent hover:text-dark-blue transition-all shadow-xl shadow-dark-blue/10 transform hover:-translate-y-1">
                      Send message <Send size={20} />
                   </button>
                   <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tight text-center md:text-right">
                      Instantly connect with us <br /> via our dedicated support team
                   </p>
                </div>
             </div>
             
             {/* Background branding */}
             <div className="absolute top-0 right-0 p-12 opacity-[0.02] select-none pointer-events-none">
                <h2 className="text-[20rem] font-black text-dark-blue uppercase italic tracking-tighter leading-none">CONNECT</h2>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
