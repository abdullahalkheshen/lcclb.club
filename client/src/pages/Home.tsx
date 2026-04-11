/*
 * HOME PAGE — Milanote Blueprint (6 sections):
 * 1. Page Intro (Hero) 2. Team Story 3. Achievements/Proof Strip
 * 4. Riders Spotlight 5. Partners + News Preview 6. Footer CTA
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnniversarySection from "@/components/AnniversarySection";
import TickerTape from "@/components/TickerTape";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import RidersSpotlight from "@/components/RidersSpotlight";
import PartnersNewsPreview from "@/components/PartnersNewsPreview";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <HeroSection />
      <AnniversarySection />
      <TickerTape />
      <AboutSection />
      <AchievementsSection />
      <RidersSpotlight />
      <PartnersNewsPreview />
      <FooterCTA />
      <Footer />
    </div>
  );
}
