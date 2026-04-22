/*
 * DESIGN: Velocity Noir — Shared page hero for inner pages
 * Compact hero with title, subtitle, and background image
 */

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  image?: string;
}

const DEFAULT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/FB-cover-10th_c85bad05.png";

export default function PageHero({ label, title, titleAccent, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image || DEFAULT_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 container pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-[3px] bg-racing-red mb-6" />
          <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red block mb-3">
            {label}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-4">
            {title} <span className="text-racing-red">{titleAccent}</span>
          </h1>
          <p className="font-body text-lg text-silver/70 max-w-xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
