"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { ProductSearch } from '@/components/layout/ProductSearch';
import { VerticalVehicleFilter } from '@/components/shop/VerticalVehicleFilter';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ALL_PRODUCTS } from '@/data/products';
import {
  ChevronRight, Search, ShoppingCart, Heart, RotateCw, User,
  LayoutGrid, CheckCircle2, AlertCircle, Star, StarHalf,
  Phone, MessageSquare, MapPin, Truck, Shield, Package,
  Wrench, Zap, Timer, TrendingUp, ArrowRight, Quote,
  PlayCircle, ChevronLeft, Eye, Plus, Minus, SlidersHorizontal,
  Award, Clock, RefreshCw, X
} from 'lucide-react';

/* ─── helpers ─── */
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <Star key={i} size={12}
        className={i <= Math.floor(rating) ? 'fill-accent text-accent' : 'text-gray-200 fill-gray-200'}
      />
    ))}
  </div>
);

const SectionTitle = ({ label, title, sub }: { label?: string; title: string; sub?: string }) => (
  <div className="mb-10">
    {label && <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3">{label}</p>}
    <h2 className="text-4xl font-black font-oswald text-dark-blue uppercase tracking-tight">{title}</h2>
    {sub && <p className="text-gray-500 mt-3 max-w-xl">{sub}</p>}
    <div className="mt-4 flex gap-1.5"><div className="h-1 w-12 bg-accent rounded-full"/><div className="h-1 w-4 bg-accent/30 rounded-full"/></div>
  </div>
);

/* ─── Countdown Timer ─── */
function Countdown() {
  const end = useRef(Date.now() + 48 * 3600 * 1000);
  const [time, setTime] = useState({ d: 1, h: 23, m: 59, s: 0 });
  useEffect(() => {
    const t = setInterval(() => {
      const diff = Math.max(0, end.current - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');
  const Box = ({ val, lbl }: { val: number; lbl: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg w-14 h-14 flex items-center justify-center font-black font-oswald text-2xl text-white tabular-nums">{pad(val)}</div>
      <span className="text-[9px] font-black uppercase tracking-widest text-white/60 mt-1">{lbl}</span>
    </div>
  );
  return <div className="flex gap-3"><Box val={time.d} lbl="Days"/><Box val={time.h} lbl="Hrs"/><Box val={time.m} lbl="Min"/><Box val={time.s} lbl="Sec"/></div>;
}

/* ─── Animated Counter ─── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start = Math.min(start + Math.ceil(to / 60), to);
        setVal(start);
        if (start < to) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref} className="tabular-nums">{val.toLocaleString()}{suffix}</span>;
}

/* ─── Mini Product Card ─── */
const ProductCard = ({ product }: { product: typeof ALL_PRODUCTS[0] }) => (
  <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="relative overflow-hidden bg-gray-50 aspect-square">
      <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"/>
      {product.badge && (
        <span className={`absolute top-3 left-3 text-[9px] font-black uppercase px-2.5 py-1 rounded-full ${product.badge === 'Sale' ? 'bg-accent text-dark-blue' : product.badge === 'New' ? 'bg-dark-blue text-white' : 'bg-green-500 text-white'}`}>
          {product.badge}
        </span>
      )}
      <div className="absolute inset-0 bg-dark-blue/0 group-hover:bg-dark-blue/5 transition-colors"/>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
        <button className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-dark-blue hover:bg-accent transition-colors"><Heart size={14}/></button>
        <button className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-dark-blue hover:bg-accent transition-colors"><RotateCw size={14}/></button>
        <button className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-dark-blue hover:bg-accent transition-colors"><Eye size={14}/></button>
      </div>
    </div>
    <div className="p-4">
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{product.brand}</p>
      <h4 className="text-sm font-bold text-dark-blue leading-snug mb-2 line-clamp-2">{product.name}</h4>
      <StarRating rating={product.rating}/>
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="text-lg font-black text-dark-blue">${product.price.toFixed(2)}</span>
          {product.originalPrice && <span className="text-xs text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>}
        </div>
        <button className="w-9 h-9 rounded-full bg-dark-blue text-accent flex items-center justify-center hover:bg-accent hover:text-dark-blue transition-colors">
          <ShoppingCart size={14}/>
        </button>
      </div>
    </div>
  </div>
);

/* ─── Tab Component ─── */
const tabs = ['All Parts', 'Engine', 'Brakes', 'Filters', 'Oils & Fluids'];

/* ─── Icon Box ─── */
const IconBox = ({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) => (
  <div className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
    <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent flex items-center justify-center mb-5 transition-colors duration-300">
      <Icon size={24} className="text-accent group-hover:text-dark-blue transition-colors duration-300"/>
    </div>
    <h4 className="font-black font-oswald text-dark-blue uppercase text-lg mb-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
  </div>
);

export default function ElementsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [qty, setQty] = useState(1);

  const showcaseProducts = ALL_PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <NavBar/>

      {/* ── Page Hero ── */}
      <div className="bg-dark-blue text-white py-10">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Elements' }]} className="mb-4 [&_*]:text-white/60 [&_a:hover]:text-accent"/>
          <h1 className="text-6xl font-black font-oswald italic uppercase tracking-tighter">
            UI Elements & <span className="text-accent">Animations</span>
          </h1>
          <p className="text-white/60 mt-3 max-w-2xl text-base">A comprehensive showcase of the MOBEX design system — premium components built for high-performance e-commerce.</p>
        </div>
      </div>

      <main className="flex-1 py-20 space-y-32">

        {/* ══ 1. COUNTDOWN BANNER ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Promotions" title="Flash Sale Timer" sub="Countdown banners drive urgency and boost conversions."/>
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-accent via-amber-400 to-accent relative">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage:'repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 0,transparent 50%)',backgroundSize:'8px 8px'}}/>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10">
              <div>
                <p className="text-dark-blue/70 font-black uppercase text-xs tracking-widest mb-2">Limited Time Offer</p>
                <h3 className="text-4xl font-black font-oswald text-dark-blue uppercase">Pre-Black Friday Sale</h3>
                <p className="text-dark-blue/80 font-bold mt-1">Up to <strong className="text-5xl font-black">65%</strong> off on selected parts. Use code <span className="bg-dark-blue text-accent px-2 py-0.5 rounded font-black">BLACK</span></p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Countdown/>
                <Button className="bg-dark-blue text-accent hover:bg-white hover:text-dark-blue font-black uppercase px-10 h-12">Shop the Sale <ArrowRight size={16} className="ml-2"/></Button>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. ICON BOXES ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Features" title="Icon Box Elements" sub="Highlight key selling points and service features with animated icon boxes."/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IconBox icon={Truck} title="Free Delivery" text="Free shipping on all orders over $99. Fast dispatch within 24 hours."/>
            <IconBox icon={Shield} title="Quality Assured" text="All parts tested to OEM standards. 100% genuine products guaranteed."/>
            <IconBox icon={RefreshCw} title="Easy Returns" text="30-day hassle-free returns policy. No questions asked on faulty items."/>
            <IconBox icon={Award} title="Expert Support" text="Our auto specialists are available 8 AM – 10 PM to assist you."/>
          </div>
        </section>

        {/* ══ 3. PRODUCT CARDS + TABBED LAYOUT ══ */}
        <section className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <SectionTitle label="Catalog" title="Product Card Variants" sub="Featuring hover effects, badges, and quick-action overlays."/>
            <div className="flex gap-2 flex-wrap">
              {tabs.map((t, i) => (
                <button key={t} onClick={() => setActiveTab(i)}
                  className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${activeTab === i ? 'bg-dark-blue text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-accent hover:text-dark-blue'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {showcaseProducts.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </section>

        {/* ══ 4. STATS COUNTER ══ */}
        <section className="bg-dark-blue py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { to: 130000, suffix: '+', label: 'Parts Available' },
                { to: 250, suffix: '+', label: 'Branches Nationwide' },
                { to: 48000, suffix: '+', label: 'Happy Customers' },
                { to: 12, suffix: ' yrs', label: 'Industry Experience' },
              ].map(({ to, suffix, label }) => (
                <div key={label} className="group">
                  <div className="text-5xl font-black font-oswald text-accent mb-2">
                    <Counter to={to} suffix={suffix}/>
                  </div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{label}</p>
                  <div className="mx-auto mt-4 h-0.5 w-8 bg-accent/30 group-hover:w-16 group-hover:bg-accent transition-all duration-500"/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. BUTTONS & BADGES ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Design System" title="Buttons & Status Badges"/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
              <h3 className="font-black font-oswald text-dark-blue uppercase text-xl border-b pb-3 mb-6">Button Variants</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-dark-blue text-white hover:bg-dark-blue/90">Primary</Button>
                  <Button size="lg" className="bg-accent text-dark-blue font-black hover:bg-dark-blue hover:text-white">Accent CTA</Button>
                  <Button size="lg" variant="outline" className="border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white">Outline</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-green-500 text-white hover:bg-green-600 font-black"><CheckCircle2 size={16} className="mr-2"/>In Stock</Button>
                  <Button className="bg-red-500 text-white hover:bg-red-600 font-black"><X size={16} className="mr-2"/>Sold Out</Button>
                  <Button className="bg-orange-500 text-white hover:bg-orange-600 font-black"><AlertCircle size={16} className="mr-2"/>Low Stock</Button>
                </div>
                {/* Icon action row */}
                <div className="flex gap-3 pt-2">
                  {[Heart, RotateCw, Eye, ShoppingCart].map((Icon, i) => (
                    <button key={i} className="w-11 h-11 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-accent hover:border-accent text-dark-blue transition-all hover:scale-110">
                      <Icon size={16}/>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="font-black font-oswald text-dark-blue uppercase text-xl border-b pb-3 mb-6">Status Badges</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'New Arrival', cls: 'bg-dark-blue text-white' },
                  { label: '65% Off', cls: 'bg-accent text-dark-blue' },
                  { label: 'Popular', cls: 'bg-green-500 text-white' },
                  { label: 'Sold Out', cls: 'bg-red-500 text-white' },
                  { label: 'Limited', cls: 'bg-purple-600 text-white' },
                  { label: 'Staff Pick', cls: 'bg-orange-500 text-white' },
                ].map(({ label, cls }) => (
                  <span key={label} className={`${cls} text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full`}>{label}</span>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { Icon: CheckCircle2, label: 'In Stock', sub: '247 units available', cls: 'bg-green-50 text-green-700 border-green-100' },
                  { Icon: AlertCircle, label: 'Low Stock', sub: 'Only 3 units left!', cls: 'bg-orange-50 text-orange-700 border-orange-100' },
                  { Icon: X, label: 'Out of Stock', sub: 'Notify when available', cls: 'bg-red-50 text-red-700 border-red-100' },
                ].map(({ Icon, label, sub, cls }) => (
                  <div key={label} className={`flex items-center gap-3 p-3 rounded-xl border ${cls}`}>
                    <Icon size={16}/><div><p className="font-black text-xs uppercase">{label}</p><p className="text-xs opacity-70">{sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. SEARCH + VEHICLE FILTER ══ */}
        <section className="bg-dark-blue/95 py-20">
          <div className="container mx-auto px-4">
            <SectionTitle label="Search" title="Product & Vehicle Search"
              sub="Find the exact part using keyword/SKU search or the interactive vehicle filter."
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-4">Standard Search Bar</p>
                  <ProductSearch/>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-4">Compact Variant</p>
                  <ProductSearch variant="compact" className="max-w-lg"/>
                </div>
              </div>
              <div>
                <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-4">Vehicle Filter Widget</p>
                <VerticalVehicleFilter/>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. QUANTITY SELECTOR + ADD TO CART ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Commerce" title="Add to Cart Element" sub="Quantity selector with animated add-to-cart interaction."/>
          <div className="max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-2">Quantity Selector</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center bg-gray-50 hover:bg-accent transition-colors text-dark-blue">
                    <Minus size={14}/>
                  </button>
                  <span className="w-14 text-center font-black text-dark-blue text-lg">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="w-11 h-11 flex items-center justify-center bg-gray-50 hover:bg-accent transition-colors text-dark-blue">
                    <Plus size={14}/>
                  </button>
                </div>
                <Button className="flex-1 bg-dark-blue text-accent hover:bg-accent hover:text-dark-blue font-black h-12 gap-2">
                  <ShoppingCart size={16}/> Add to Cart
                </Button>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 h-11 rounded-xl border-2 border-gray-200 flex items-center justify-center gap-2 text-sm font-bold text-gray-600 hover:border-accent hover:text-dark-blue transition-colors">
                <Heart size={15}/> Wishlist
              </button>
              <button className="flex-1 h-11 rounded-xl border-2 border-gray-200 flex items-center justify-center gap-2 text-sm font-bold text-gray-600 hover:border-accent hover:text-dark-blue transition-colors">
                <RotateCw size={15}/> Compare
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-bold border-t pt-4">
              <Truck size={14} className="text-accent"/> Free shipping on orders over $99
            </div>
          </div>
        </section>

        {/* ══ 8. TYPOGRAPHY ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Branding" title="Typography System"/>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              <div className="p-12 border-l-8 border-accent">
                <p className="text-[10px] font-black uppercase text-accent tracking-[0.3em] mb-4">Primary / Display — Oswald</p>
                <h3 className="text-7xl font-black font-oswald text-dark-blue italic uppercase tracking-tighter leading-[0.9]">
                  The Future<br/>of Auto Parts
                </h3>
                <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest">Oswald Bold · Display Headings · Hero Sections</p>
              </div>
              <div className="p-12 border-l-8 border-dark-blue">
                <p className="text-[10px] font-black uppercase text-dark-blue/40 tracking-[0.3em] mb-4">Secondary / UI — Outfit</p>
                <p className="text-2xl font-bold text-dark-blue leading-relaxed">
                  Explore over <span className="text-accent underline decoration-4 underline-offset-8 italic">130,000 spare parts</span> from world-leading brands.
                </p>
                <p className="mt-4 text-base text-gray-500 leading-relaxed">Body text uses Outfit — clean, modern, and highly legible at all sizes for product descriptions and UI labels.</p>
              </div>
            </div>
            <div className="bg-gray-50 px-12 py-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-gray-100">
              {[
                { label: 'H1 · 72px', cls: 'text-5xl font-black font-oswald text-dark-blue' },
                { label: 'H2 · 48px', cls: 'text-3xl font-black font-oswald text-dark-blue' },
                { label: 'H3 · 32px', cls: 'text-2xl font-bold text-dark-blue' },
                { label: 'Body · 16px', cls: 'text-base text-gray-600' },
                { label: 'Small · 12px', cls: 'text-xs text-gray-500 font-bold uppercase' },
              ].map(({ label, cls }) => (
                <div key={label}><span className={cls}>Aa</span><span className="block text-[9px] text-gray-400 font-bold mt-0.5">{label}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 9. COLOR PALETTE ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Design Tokens" title="Color Palette"/>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Dark Blue', hex: '#003d6b', cls: 'bg-[#003d6b]', light: false },
              { name: 'Accent', hex: '#ffb400', cls: 'bg-accent', light: true },
              { name: 'Primary', hex: '#0066b2', cls: 'bg-primary', light: false },
              { name: 'Success', hex: '#22c55e', cls: 'bg-green-500', light: false },
              { name: 'Warning', hex: '#f97316', cls: 'bg-orange-500', light: false },
              { name: 'Error', hex: '#ef4444', cls: 'bg-red-500', light: false },
            ].map(({ name, hex, cls, light }) => (
              <div key={name} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <div className={`${cls} h-24 w-full`}/>
                <div className="bg-white p-3">
                  <p className="font-black text-dark-blue text-xs">{name}</p>
                  <p className="text-gray-400 text-[10px] font-mono mt-0.5">{hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 10. TESTIMONIALS ══ */}
        <section className="bg-slate-100 py-20">
          <div className="container mx-auto px-4">
            <SectionTitle label="Social Proof" title="Testimonial Cards" sub="Customer reviews displayed with premium card design."/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'James Cooper', role: 'BMW E46 Owner', text: 'Found the exact brake pads for my BMW within seconds. Genuine quality and delivered next day — superb!', rating: 5 },
                { name: 'Maria Santos', role: 'Auto Mechanic', text: 'As a mechanic I order from MOBEX weekly. The vehicle filter is incredibly accurate. Never had a wrong-fit part.', rating: 5 },
                { name: 'David Patel', role: 'Ford Focus Owner', text: 'Saved 40% versus dealership prices. The compatibility checker gave me full confidence before I bought.', rating: 4 },
              ].map(({ name, role, text, rating }) => (
                <div key={name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                  <Quote size={36} className="text-accent/20 absolute top-6 right-6"/>
                  <StarRating rating={rating}/>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-dark-blue flex items-center justify-center text-accent font-black text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-black text-dark-blue text-sm">{name}</p>
                      <p className="text-gray-400 text-[11px]">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 11. INFO BANNERS ══ */}
        <section className="container mx-auto px-4">
          <SectionTitle label="Promotions" title="Info Banner Styles"/>
          <div className="space-y-4">
            {/* Dark full-width */}
            <div className="rounded-2xl bg-dark-blue text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-accent text-dark-blue px-2.5 py-1 rounded-full mb-3 inline-block">New Arrivals</span>
                <h3 className="text-3xl font-black font-oswald uppercase">Premium Oils & Fluids <span className="text-accent">Just In!</span></h3>
                <p className="text-white/60 mt-1">Liqui-Moly, Castrol, Mobil 1 — all at unbeatable prices.</p>
              </div>
              <Button className="bg-accent text-dark-blue hover:bg-white font-black uppercase whitespace-nowrap h-12 px-8">Shop Now <ArrowRight size={16} className="ml-2"/></Button>
            </div>
            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-primary p-8 text-white flex justify-between items-center overflow-hidden relative">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full"/>
                <div><p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Free Delivery</p><h4 className="text-2xl font-black font-oswald uppercase">Orders over $99</h4></div>
                <Truck size={48} className="text-white/20"/>
              </div>
              <div className="rounded-2xl bg-green-600 p-8 text-white flex justify-between items-center overflow-hidden relative">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full"/>
                <div><p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Guaranteed</p><h4 className="text-2xl font-black font-oswald uppercase">30-Day Returns</h4></div>
                <Shield size={48} className="text-white/20"/>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 12. CONTACT ICON BOXES ══ */}
        <section className="container mx-auto px-4 pb-8">
          <SectionTitle label="Contact" title="Contact Methods"/>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { Icon: Phone, label: 'Call Us', detail: '6668 5555 8464', sub: 'Available 8 AM – 10 PM' },
              { Icon: MessageSquare, label: 'Live Chat', detail: 'Chat with an Expert', sub: 'Instant response' },
              { Icon: MapPin, label: 'Locations', detail: '250+ Branches', sub: 'Nationwide coverage' },
            ].map(({ Icon, label, detail, sub }) => (
              <div key={label} className="bg-white rounded-2xl border border-gray-100 p-8 flex items-center gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-dark-blue flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <Icon size={22} className="text-accent group-hover:text-dark-blue transition-colors"/>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</p>
                  <p className="font-black text-dark-blue">{detail}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer/>
    </div>
  );
}
