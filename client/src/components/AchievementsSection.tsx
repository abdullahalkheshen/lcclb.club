/*
 * DESIGN: Velocity Noir — "Our 2024 Triumphs" from Milanote
 * Achievement badges + stats counters + championship timeline
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Medal, Award, Crown, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}

function AnimatedCounter({ end, suffix = "", duration = 2, isInView }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span>{count}{suffix}</span>;
}

const achievementBadges = [
  { icon: Crown, title: "Lebanon Cup Champions", year: "2024" },
  { icon: Medal, title: "Women's TT National Champion", year: "2024" },
  { icon: Award, title: "Masters National Champion", year: "2024" },
  { icon: TrendingUp, title: "20+ Podiums in 2023-2024", year: "" },
];

const stats = [
  { number: 20, suffix: "+", label: "Podium Finishes", description: "In 2023-2024 season" },
  { number: 8, suffix: "+", label: "National Titles", description: "Across all categories" },
  { number: 7, suffix: "+", label: "Years Racing", description: "Since 2017" },
  { number: 100, suffix: "+", label: "Active Members", description: "Growing community" },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref}>
      <div className="bg-charcoal relative py-24 md:py-32">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Our Track Record
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              OUR 2024 <span className="text-racing-red">TRIUMPHS</span>
            </h2>
          </motion.div>

          {/* Achievement Badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {achievementBadges.map((badge, i) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group relative bg-dark-surface border border-white/5 hover:border-racing-red/40 p-6 text-center transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
                <badge.icon
                  size={32}
                  className="text-racing-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display text-sm font-semibold text-white tracking-wide uppercase mb-1">
                  {badge.title}
                </h3>
                {badge.year && (
                  <span className="font-display text-xs text-racing-red/70">{badge.year}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="text-center group"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    isInView={isInView}
                    duration={stat.number > 50 ? 2.5 : 2}
                  />
                </div>
                <h3 className="font-display text-sm tracking-[0.2em] uppercase text-racing-red mb-1">
                  {stat.label}
                </h3>
                <p className="font-body text-sm text-silver/60">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
