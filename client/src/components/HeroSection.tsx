/*
 * DESIGN: Velocity Noir — Cinematic full-bleed hero with dramatic overlay
 * Diagonal clip-path at bottom, oversized typography, speed-inspired motifs
 * Dark overlay on image with racing red accent line
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/hero-banner-BDTymoM9crACR9RNWH9Kzp.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Cyclist racing through Lebanese mountains"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24">
        <div className="max-w-3xl">
          {/* Red accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-racing-red mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-sm md:text-base font-light tracking-[0.4em] uppercase text-silver mb-4"
          >
            The First Cycling Club in South Lebanon
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
          >
            LEBANESE
            <br />
            <span className="text-racing-red">CYCLING</span>
            <br />
            CLUB
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-body text-lg md:text-xl text-warm-white/80 max-w-lg mb-10 leading-relaxed"
          >
            Don't limit your challenges, challenge your limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300 hover:translate-x-1"
            >
              Discover More
              <span className="w-4 h-[2px] bg-white" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
            >
              Join the Club
            </a>
          </motion.div>
        </div>

        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute right-4 md:right-8 bottom-32 md:bottom-40 hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="font-display text-8xl lg:text-9xl font-bold text-white/5">
              2015
            </span>
            <span className="font-display text-xs tracking-[0.3em] uppercase text-silver/50 -mt-4">
              Est.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-display text-[10px] tracking-[0.3em] uppercase text-silver/50">
            Scroll
          </span>
          <ChevronDown size={16} className="text-silver/50" />
        </motion.div>
      </motion.div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96L1440 0V96H0Z"
            className="fill-dark-surface"
          />
        </svg>
      </div>
    </section>
  );
}
