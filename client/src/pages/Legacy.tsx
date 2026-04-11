/*
 * LEGACY PAGE — Milanote Blueprint (5 sections):
 * 1. Page Intro 2. Our Story & History 3. Mission & Values
 * 4. Team Leadership 5. Future Vision & CTA
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Line-Up-Team-iibtf_941be228.png";

const getMilestones = (t: any) => [
  { year: "2017", title: t('legacyPage.milestone1Title'), description: t('legacyPage.milestone1Desc') },
  { year: "2018", title: t('legacyPage.milestone2Title'), description: t('legacyPage.milestone2Desc') },
  { year: "2019", title: t('legacyPage.milestone3Title'), description: t('legacyPage.milestone3Desc') },
  { year: "2020", title: t('legacyPage.milestone4Title'), description: t('legacyPage.milestone4Desc') },
  { year: "2022", title: t('legacyPage.milestone5Title'), description: t('legacyPage.milestone5Desc') },
  { year: "2024", title: t('legacyPage.milestone6Title'), description: t('legacyPage.milestone6Desc') },
];

const getCoreValues = (t: any) => [
  { icon: Target, title: t('legacyPage.excellence'), description: t('legacyPage.excellenceDesc') },
  { icon: Users, title: t('legacyPage.community'), description: t('legacyPage.communityDesc') },
  { icon: TrendingUp, title: t('legacyPage.development'), description: t('legacyPage.developmentDesc') },
  { icon: Heart, title: t('legacyPage.sportsmanship'), description: t('legacyPage.sportsmanshipDesc') },
];

export default function Legacy() {
  const { t } = useLanguage();
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });

  const milestones = getMilestones(t);
  const coreValues = getCoreValues(t);

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label={t('legacyPage.label')}
        title={t('legacyPage.title')}
        titleAccent={t('legacyPage.titleAccent')}
        subtitle={t('legacyPage.subtitle')}
        image={ABOUT_IMAGE}
      />

      {/* Our Journey — Timeline */}
      <section ref={storyRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t('legacyPage.ourJourney')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              {t('legacyPage.fromStartup')} <span className="text-racing-red">{t('legacyPage.toChampions')}</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-[1px]" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-racing-red -translate-x-[5px] md:-translate-x-[6px] mt-2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:ml-auto"}`}>
                  <span className="font-display text-3xl font-bold text-racing-red">{milestone.year}</span>
                  <h3 className="font-display text-xl font-semibold text-white tracking-wide uppercase mt-2 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-sm text-silver/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section ref={valuesRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t('legacyPage.whatDrivesUs')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t('legacyPage.ourMission')} <span className="text-racing-red"></span>
            </h2>
            <p className="font-body text-lg text-silver/70 max-w-2xl mx-auto leading-relaxed">
              {t('legacyPage.missionStatement')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-6 bg-dark-surface border border-white/5 hover:border-racing-red/30 transition-all duration-500 text-center"
              >
                <value.icon
                  size={32}
                  className="text-racing-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
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

      {/* Future Vision CTA */}
      <section ref={visionRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red block mb-4">
              {t('legacyPage.nextChapter')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('legacyPage.expandingYouth')}
              <br />
              <span className="text-racing-red">{t('legacyPage.dominatingNational')}</span>
            </h2>
            <p className="font-body text-lg text-silver/70 max-w-xl mx-auto mb-10">
              {t('legacyPage.futureVision')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300"
              >
                {t('legacyPage.joinLegacy')}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
              >
                {t('legacyPage.supportMission')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
