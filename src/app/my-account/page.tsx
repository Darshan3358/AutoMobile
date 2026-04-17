"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, LogIn } from 'lucide-react';

export default function MyAccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50/50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-accent">Home</Link>
          <ChevronRight size={10} />
          <span className="text-dark-blue">My account</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-black text-dark-blue uppercase tracking-tighter mb-8">My account</h1>

        <div className="max-w-md">
          <h2 className="text-xl font-black text-dark-blue uppercase tracking-tight mb-6">Login</h2>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                Username or email address <span className="text-accent">*</span>
              </label>
              <input 
                type="text" 
                className="w-full h-14 border border-gray-100 bg-gray-50/30 rounded-xl px-5 outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">
                Password <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <input 
                  type="password" 
                  className="w-full h-14 border border-gray-100 bg-gray-50/30 rounded-xl px-5 outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-dark-blue rounded" />
              <label htmlFor="remember" className="text-xs font-bold text-gray-500 uppercase tracking-tight">Remember me</label>
            </div>

            <button className="w-full h-14 bg-dark-blue text-white rounded-xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              <LogIn size={20} />
              Log in
            </button>

            <Link href="#" className="block text-center text-xs font-bold text-accent uppercase tracking-widest hover:underline mt-4">
              Lost your password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
