import React from 'react';
import { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BlogCard } from '@/components/blog/BlogCard';
import { Pagination } from '@/components/blog/Pagination';
import { blogPosts } from '@/components/blog/blog-data';
import { FloatingActions } from '@/components/layout/FloatingActions';

export const metadata: Metadata = {
  title: "Blog | MOBEX Premium Auto Parts",
  description: "Stay Informed @Mobex World. Latest offers, promos, product releases and industry news from the USA's number 1 supplier.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-dark-blue overflow-x-hidden">
      <NavBar />
      
      {/* Blog Hero Section */}
      <section className="bg-white pt-10 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[{ label: 'Blog' }]} 
            className="mb-8"
          />
          
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-5xl lg:text-7xl font-black text-dark-blue font-oswald uppercase tracking-tighter">
              Blog
            </h1>
            <div className="w-20 h-1.5 bg-accent rounded-full" />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={1} totalPages={2} />
        </div>
      </section>

      <Footer variant="main" />
      <FloatingActions />
    </main>
  );
}
