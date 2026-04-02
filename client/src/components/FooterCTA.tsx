/*
 * DESIGN: Velocity Noir — Footer CTA from Milanote
 * "Join the Future of Lebanese Cycling"
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/FB-cover-10th_c85bad05.png";

export default function FooterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Cycling action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-[3px] bg-racing-red mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            JOIN THE FUTURE OF
            <br />
            <span className="text-racing-red">LEBANESE CYCLING</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-silver/70 max-w-xl mx-auto mb-10">
            Whether you're a rider or a sponsor, there's a place for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300 hover:translate-x-1"
            >
              Join the Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
