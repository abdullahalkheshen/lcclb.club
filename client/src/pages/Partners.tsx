/*
 * PARTNERS PAGE — Milanote Blueprint (5 sections):
 * 1. Page Intro 2. Why Partner With LCC 3. Partnership Tiers
 * 4. Success Stories 5. CTA
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, TrendingUp, Shield, Star, ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const advantages = [
  { icon: Trophy, title: "Championship-Winning Team", description: "Align your brand with proven winners — multiple national titles and Lebanon Cup victories." },
  { icon: Users, title: "Growing Fan Base", description: "Reach an engaged and expanding audience of cycling enthusiasts across Lebanon." },
  { icon: Shield, title: "Disciplined Athletes", description: "Professional athletes who represent your brand with integrity and dedication." },
  { icon: TrendingUp, title: "Leadership in Development", description: "Be part of the movement advancing cycling in Lebanon at every level." },
];

const tiers = [
  {
    name: "Title Sponsor",
    highlight: true,
    features: ["Jersey front placement", "Naming rights", "Exclusive brand visibility at all events", "Social media feature campaigns", "Priority media coverage"],
  },
  {
    name: "Official Partner",
    highlight: false,
    features: ["Category exclusivity", "Jersey placement", "Social media mentions", "Event branding", "Rider ambassador program"],
  },
  {
    name: "Supporting Partner",
    highlight: false,
    features: ["Logo on team materials", "Event presence", "Social media acknowledgment", "Community engagement opportunities"],
  },
  {
    name: "In-Kind Partner",
    highlight: false,
    features: ["Product/service exchange", "Team usage & feedback", "Brand exposure through team use", "Event participation"],
  },
];

const metrics = [
  { value: "50K+", label: "Social Media Reach" },
  { value: "20+", label: "Events Per Year" },
  { value: "100+", label: "Active Members" },
  { value: "8+", label: "National Titles" },
];

export default function Partners() {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const tiersRef = useRef(null);
  const tiersInView = useInView(tiersRef, { once: true, margin: "-100px" });
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label="Partners"
        title="PARTNER WITH"
        titleAccent="CHAMPIONS"
        subtitle="Join Lebanon's winning cycling movement. Align your brand with excellence, community, and proven results."
      />

      {/* Why Partner With LCC */}
      <section ref={whyRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Why Partner With Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              THE LCC <span className="text-racing-red">ADVANTAGE</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-6 bg-charcoal border border-white/5 hover:border-racing-red/30 transition-all duration-500 text-center"
              >
                <adv.icon size={32} className="text-racing-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide uppercase">{adv.title}</h3>
                <p className="font-body text-sm text-silver/70 leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section ref={tiersRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tiersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Partnership Options
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              PARTNERSHIP <span className="text-racing-red">TIERS</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`group p-6 border transition-all duration-500 relative overflow-hidden ${
                  tier.highlight
                    ? "bg-racing-red/10 border-racing-red/40 hover:border-racing-red"
                    : "bg-dark-surface border-white/5 hover:border-racing-red/30"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 right-0">
                    <Star size={16} className="text-racing-red m-3" fill="currentColor" />
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-4">
                  {tier.name}
                </h3>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-racing-red mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-silver/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tiersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <button
              onClick={() => toast.info("Sponsor kit download coming soon!")}
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
            >
              <Download size={16} />
              Download Full Sponsor Kit
            </button>
          </motion.div>
        </div>
      </section>

      {/* Proven Impact */}
      <section ref={impactRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Proven Impact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              THE <span className="text-racing-red">NUMBERS</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2">{metric.value}</div>
                <span className="font-display text-sm tracking-[0.2em] uppercase text-racing-red">{metric.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto p-8 bg-charcoal border border-white/5"
          >
            <p className="font-body text-lg text-silver italic text-center leading-relaxed">
              "Partnering with LCC has given our brand incredible visibility in the Lebanese sports community. Their professionalism and competitive success make them the ideal partner."
            </p>
            <p className="font-display text-sm text-racing-red text-center mt-4 tracking-[0.15em] uppercase">
              — LCC Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Current Sponsors */}
      <section className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Our Partners
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              PROUD <span className="text-racing-red">SPONSORS</span>
            </h2>
            <p className="font-body text-silver/70 mt-4 max-w-2xl mx-auto">
              We're grateful to our partners who support Lebanese cycling excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
            {/* CaseX Sponsor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={impactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center p-8 bg-charcoal border border-white/5 hover:border-racing-red/30 transition-all duration-300 group"
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex items-center justify-center"
                title="CaseX"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/caseX-black_2f839a95.png"
                  alt="CaseX"
                  className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </motion.div>

            {/* Dr Scent Sponsor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={impactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center p-8 bg-charcoal border border-white/5 hover:border-racing-red/30 transition-all duration-300 group"
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex items-center justify-center"
                title="Dr Scent"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/drscent-white_78d5e3fd.png"
                  alt="Dr Scent"
                  className="h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="bg-charcoal py-24 md:py-32">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-[3px] bg-racing-red mx-auto mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              START YOUR <span className="text-racing-red">PARTNERSHIP</span>
            </h2>
            <p className="font-body text-lg text-silver/70 max-w-xl mx-auto mb-10">
              Ready to align your brand with Lebanese cycling excellence? Let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => toast.info("Media kit download coming soon!")}
                className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
              >
                <Download size={16} />
                Download Media Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
