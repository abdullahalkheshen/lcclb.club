/*
 * DESIGN: Velocity Noir — Bold stat counters with count-up animation
 * Dark charcoal background, oversized numbers in racing red
 * Diagonal section dividers, editorial layout
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Medal, Route, Calendar, Users } from "lucide-react";

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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Medal,
    number: 8,
    suffix: "+",
    label: "Championship Titles",
    description: "Lebanese Champions in MTB, Road, TT",
  },
  {
    icon: Route,
    number: 50000,
    suffix: "+",
    label: "Kilometers Ridden",
    description: "Across Lebanon's mountains and coasts",
  },
  {
    icon: Calendar,
    number: 10,
    suffix: "+",
    label: "Years Active",
    description: "Pioneering cycling since 2015",
  },
  {
    icon: Users,
    number: 100,
    suffix: "+",
    label: "Active Members",
    description: "Growing community of passionate riders",
  },
];

const achievements = [
  { year: "2017", title: "Lebanese MTB Champions", category: "Mountain Bike" },
  { year: "2018", title: "Lebanese Road Champions", category: "Road Cycling" },
  { year: "2024", title: "Selaata Race Participants", category: "Road Race" },
  { year: "2024", title: "Grand Prix Tour De Montreal", category: "International" },
  { year: "2025", title: "TT Women's Category Champions", category: "Time Trial" },
  { year: "2025", title: "Lebanon Cup Masters", category: "Masters" },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref}>
      {/* Stats Section — Dark with red accents */}
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
              NUMBERS THAT <span className="text-racing-red">SPEAK</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="text-center group"
              >
                <stat.icon
                  size={24}
                  className="text-racing-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    isInView={isInView}
                    duration={stat.number > 1000 ? 2.5 : 2}
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

          {/* Achievements Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              CHAMPIONSHIP <span className="text-racing-red">TIMELINE</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 bg-dark-surface border border-white/5 hover:border-racing-red/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <span className="font-display text-2xl font-bold text-racing-red">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase group-hover:text-racing-red transition-colors">
                      {item.title}
                    </h4>
                    <span className="font-body text-xs text-silver/50">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
