import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/home/Hero";
import { HomeSlider } from "@/components/home/HomeSlider";
import { FeaturedManufacturers } from "@/components/home/FeaturedManufacturers";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SecondPromoBanner } from "@/components/home/SecondPromoBanner";
import { Promotions } from "@/components/home/Promotions";
import { SpecialBuys } from "@/components/home/SpecialBuys";
import { MoreToLove } from "@/components/home/MoreToLove";
import { BestDeals } from "@/components/home/BestDeals";
import { ContentHub } from "@/components/home/ContentHub";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-dark-blue overflow-x-hidden">
      <SchemaOrg />
      <NavBar />
      <Hero />
      <HomeSlider />
      <FeaturedManufacturers />
      <FeaturedProducts />
      <SecondPromoBanner />
      <Promotions />
      <SpecialBuys />
      <MoreToLove />
      <BestDeals />
      <ContentHub />
      <Footer variant="main" />
      <FloatingActions />
    </main>
  );
}

