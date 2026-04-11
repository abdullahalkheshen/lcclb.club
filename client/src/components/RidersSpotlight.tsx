/*
 * DESIGN: Velocity Noir — "Meet Our Champions" from Milanote
 * Featured riders spotlight with real LCC cyclist photos
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const riders = [
  {
    name: "Ramon Khalife",
    category: "Elite",
    achievement: "Women's TT National Champion 2024",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/ramon-khalife_f9e45c1b.png",
  },
  {
    name: "Ali Atwi",
    category: "Elite",
    achievement: "National Road Race Champion",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/AliAtwi_710c1abc.webp",
  },
  {
    name: "Haidar Sabah",
    category: "Elite",
    achievement: "Lebanon Cup Winner 2024",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/HaidarSabah_fbfcc35d.webp",
  },
];

export default function RidersSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-dark-surface py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
            Our Athletes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            MEET OUR <span className="text-racing-red">CHAMPIONS</span>
          </h2>
        </motion.div>

        {/* Riders Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {riders.map((rider, i) => (
            <motion.div
              key={rider.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative overflow-hidden bg-charcoal"
            >
              <div className="relative h-[400px] md:h-[450px]">
                <img
                  src={rider.image}
                  alt={rider.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {/* Red top accent */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red bg-racing-red/10 px-3 py-1 inline-block mb-3">
                  {rider.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-1">
                  {rider.name}
                </h3>
                <p className="font-body text-sm text-silver/70">
                  {rider.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300 group"
          >
            View All Riders
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
