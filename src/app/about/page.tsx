import React from 'react';
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { OurValues } from "@/components/about/OurValues";
import { StatsSection } from "@/components/about/StatsSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { AboutCTA } from "@/components/about/AboutCTA";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

export const metadata = {
  title: 'About Mobex - Your Trusted Auto Parts Partner',
  description: 'Learn about Mobex history, mission, values and our exceptional leadership team.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-dark-blue overflow-x-hidden">
      <SchemaOrg />
      <NavBar />
      <AboutHero />
      <MissionVision />
      <OurValues />
      <StatsSection />
      <LeadershipSection />
      <AboutCTA />
      <Footer variant="main" />
    </main>
  );
}
