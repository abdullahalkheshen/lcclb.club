import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerTape from "@/components/TickerTape";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <HeroSection />
      <TickerTape />
      <AboutSection />
      <AchievementsSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
