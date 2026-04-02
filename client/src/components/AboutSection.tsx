/*
 * DESIGN: Velocity Noir — "The LCC Legacy" section from Milanote
 * Asymmetric two-column layout, dark bg, racing red accents
 * Founded 2017, discipline, training, commitment
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Mountain, Trophy } from "lucide-react";
import { Link } from "wouter";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Line-Up-Team-iibtf_941be228.png";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Championship-winning team across multiple categories with a relentless pursuit of competitive success.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a passionate cycling movement in Lebanon since 2017, uniting riders of all levels and backgrounds.",
  },
  {
    icon: Mountain,
    title: "Development",
    description: "Advancing cycling in Lebanon through youth development, training programs, and expanding competitive categories.",
  },
  {
    icon: Trophy,
    title: "Sportsmanship",
    description: "Competing with discipline, respect, and integrity — values that define our culture on and off the road.",
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
                alt="LCC team riding together"
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
              <span className="font-display text-4xl font-bold text-white block leading-none">8+</span>
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
              THE LCC
              <br />
              <span className="text-racing-red">LEGACY</span>
            </h2>
            <div className="w-16 h-[3px] bg-racing-red mb-6" />
            <p className="font-body text-lg text-silver leading-relaxed mb-6">
              Founded in 2017, LCC has shaped the future of Lebanese cycling. Our culture of discipline, training, and commitment has produced multiple national champions and a strong roster of elite athletes.
            </p>
            <p className="font-body text-base text-silver/70 leading-relaxed mb-8">
              From mountain trails to coastal roads, our members push boundaries and challenge limits every day. With multiple Lebanese Championship titles and Lebanon Cup victories, we continue to inspire the next generation of cyclists in Lebanon and beyond.
            </p>
            <Link
              href="/legacy"
              className="inline-flex items-center gap-2 px-8 py-3 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300 hover:translate-x-1"
            >
              Explore Our Legacy
              <span className="w-4 h-[2px] bg-white" />
            </Link>
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
