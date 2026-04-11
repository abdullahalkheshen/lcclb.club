/*
 * DESIGN: Velocity Noir — "The LCC Legacy" section from Milanote
 * Asymmetric two-column layout, dark bg, racing red accents
 * Founded 2017, discipline, training, commitment
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Mountain, Trophy } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Line-Up-Team-iibtf_941be228.png";

const valuesData = [
  {
    icon: Target,
    titleKey: "about.values.excellence",
    descKey: "about.values.excellenceDesc",
  },
  {
    icon: Users,
    titleKey: "about.values.community",
    descKey: "about.values.communityDesc",
  },
  {
    icon: Mountain,
    titleKey: "about.values.development",
    descKey: "about.values.developmentDesc",
  },
  {
    icon: Trophy,
    titleKey: "about.values.sportsmanship",
    descKey: "about.values.sportsmanshipDesc",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
                {t('about.label')}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              {t('about.title')}
              <br />
              <span className="text-racing-red">{t('about.titleAccent')}</span>
            </h2>
            <div className="w-16 h-[3px] bg-racing-red mb-6" />
            <p className="font-body text-lg text-silver leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="font-body text-base text-silver/70 leading-relaxed mb-8">
              {t('about.descriptionLong')}
            </p>
            <Link
              href="/legacy"
              className="inline-flex items-center gap-2 px-8 py-3 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300 hover:translate-x-1"
            >
              {t('common.learnMore')}
              <span className="w-4 h-[2px] bg-white" />
            </Link>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((value, i) => (
            <motion.div
              key={value.titleKey}
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
                {t(value.titleKey)}
              </h3>
              <p className="font-body text-sm text-silver/70 leading-relaxed">
                {t(value.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
