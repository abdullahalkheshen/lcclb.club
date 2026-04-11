/*
 * NEWS PAGE — Milanote Blueprint (5 sections):
 * 1. Page Intro 2. Featured Story 3. Latest News List
 * 4. Filters & Categories 5. Stay Connected CTA
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const RACE_LIZEIK = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/lizeik_42758a09.jpg";
const RACE_HAREB = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/hareb_991a0a8b.jpg";

const getFeaturedStory = (t: any) => ({
  category: t('newsPage.raceResults'),
  title: t('newsPage.featuredTitle'),
  summary: t('newsPage.featuredSummary'),
  date: "December 2024",
  image: RACE_LIZEIK,
});

const getNewsArticles = (t: any) => [
  { category: t('newsPage.teamAnnouncement'), title: t('newsPage.article1Title'), summary: t('newsPage.article1Summary'), date: "Jan 2025", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Line-Up-Team-iibtf_941be228.png" },
  { category: t('newsPage.raceResults'), title: t('newsPage.article2Title'), summary: t('newsPage.article2Summary'), date: "Nov 2024", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/ramona_0d6d5a75.jpg" },
  { category: t('newsPage.riderStories'), title: t('newsPage.article3Title'), summary: t('newsPage.article3Summary'), date: "Nov 2024", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/sabah_c84c8fe6.jpg" },
  { category: t('newsPage.behindTheScenes'), title: t('newsPage.article4Title'), summary: t('newsPage.article4Summary'), date: "Oct 2024", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/moussa_5214407b.jpg" },
  { category: t('newsPage.raceResults'), title: t('newsPage.article5Title'), summary: t('newsPage.article5Summary'), date: "Sep 2024", image: RACE_HAREB },
  { category: t('newsPage.teamAnnouncement'), title: t('newsPage.article6Title'), summary: t('newsPage.article6Summary'), date: "Aug 2024", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/ayash_26820c18.jpg" },
];

const getCategories = (t: any) => [
  t('newsPage.all'),
  t('newsPage.raceResults'),
  t('newsPage.riderStories'),
  t('newsPage.teamAnnouncement'),
  t('newsPage.behindTheScenes'),
];

export default function News() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t('newsPage.all'));
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px" });
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const categories = getCategories(t);
  const newsArticles = getNewsArticles(t);
  const featuredStory = getFeaturedStory(t);

  const filteredArticles = activeCategory === t('newsPage.all')
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label={t('newsPage.label')}
        title={t('newsPage.title')}
        titleAccent={t('newsPage.titleAccent')}
        subtitle={t('newsPage.subtitle')}
      />

      {/* Featured Story */}
      <section ref={featuredRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t('newsPage.featuredStory')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group grid lg:grid-cols-2 gap-0 bg-charcoal border border-white/5 hover:border-racing-red/30 transition-all duration-500 overflow-hidden"
          >
            <div className="relative h-[300px] lg:h-auto overflow-hidden">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Tag size={14} className="text-racing-red" />
                <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red">
                  {featuredStory.category}
                </span>
                <span className="font-body text-xs text-silver/40 ml-auto flex items-center gap-1">
                  <Calendar size={12} /> {featuredStory.date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide uppercase mb-4 group-hover:text-racing-red transition-colors">
                {featuredStory.title}
              </h2>
              <p className="font-body text-silver/70 leading-relaxed mb-6">
                {featuredStory.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-racing-red font-display text-sm tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform">
                {t('newsPage.readMore')} <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section ref={listRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t('newsPage.allNews')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              {t('newsPage.latestUpdates')} <span className="text-racing-red"></span>
            </h2>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-display text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-racing-red border-racing-red text-white"
                    : "border-white/20 text-silver hover:border-racing-red hover:text-racing-red"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-dark-surface border border-white/5 hover:border-racing-red/30 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red">
                      {article.category}
                    </span>
                    <span className="font-body text-xs text-silver/40 ml-auto">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-2 group-hover:text-racing-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-silver/60 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected CTA */}
      <section ref={ctaRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red block mb-4">
              {t('newsPage.stayConnected')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {t('newsPage.follow')} <span className="text-racing-red">LCC</span>
            </h2>
            <p className="font-body text-lg text-silver/70 max-w-xl mx-auto mb-10">
              {t('newsPage.followDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
              >
                {t('newsPage.meetRiders')}
              </Link>
              <Link
                href="/record"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
              >
                {t('newsPage.viewResults')}
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-8 py-3 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300"
              >
                {t('newsPage.partnerWithLCC')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
