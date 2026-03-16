/*
 * DESIGN: Velocity Noir — Asymmetric two-column layout
 * Dark background with warm white text, racing red accents
 * Image with diagonal overlay, editorial typography
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Mountain, Trophy } from "lucide-react";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/about-section-Wy528oT5NVbEnNXuvhTkzQ.webp";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Promote health and well-being through regular cycling events and professional training across Lebanon.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a passionate cycling community in South Lebanon since 2015, uniting riders of all levels.",
  },
  {
    icon: Mountain,
    title: "Adventure",
    description: "Exploring Lebanon's breathtaking mountain roads, coastal routes, and challenging terrains together.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Competing at the highest level with Lebanese Championship titles in MTB and Road cycling.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-dark-surface py-24 md:py-32" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="LCCLB team riding together in the Lebanese mountains"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Red accent corner */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-racing-red" />
                <div className="absolute top-0 left-0 w-[3px] h-full bg-racing-red" />
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-2 md:right-8 bg-racing-red px-6 py-4">
              <span className="font-display text-4xl font-bold text-white block leading-none">10+</span>
              <span className="font-display text-xs tracking-[0.2em] uppercase text-white/80">Years Strong</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
                About Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              THE FIRST
              <br />
              <span className="text-racing-red">CYCLING CLUB</span>
              <br />
              IN SOUTH LEBANON
            </h2>
            <div className="w-16 h-[3px] bg-racing-red mb-6" />
            <p className="font-body text-lg text-silver leading-relaxed mb-6">
              Founded in 2015 in Nabatieh, the Lebanese Cycling Club (LCCLB) is a pioneering force in South Lebanon's cycling scene. We are dedicated to promoting physical and mental well-being through the sport of cycling, while showcasing the stunning landscapes of our homeland.
            </p>
            <p className="font-body text-base text-silver/70 leading-relaxed">
              From mountain trails to coastal roads, our members push boundaries and challenge limits every day. With multiple Lebanese Championship titles under our belt, we continue to inspire the next generation of cyclists in Lebanon and beyond.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="group p-6 bg-charcoal/50 border border-white/5 hover:border-racing-red/30 transition-all duration-500"
            >
              <value.icon
                size={28}
                className="text-racing-red mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide uppercase">
                {value.title}
              </h3>
              <p className="font-body text-sm text-silver/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
