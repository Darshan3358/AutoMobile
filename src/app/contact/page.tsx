import React from 'react';
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: 'Contact Us - Mobex Auto Parts',
  description: 'Get in touch with Mobex for expert support and inquiries about our automotive parts.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-dark-blue overflow-x-hidden">
      <SchemaOrg />
      <NavBar />
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      <ContactHero />
      <ContactDetails />
      <Footer variant="main" />
    </main>
  );
}
