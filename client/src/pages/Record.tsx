/*
 * RECORD PAGE — Milanote Blueprint (6 sections):
 * 1. Page Intro 2. Major Results Summary 3. Detailed Results Archive
 * 4. Championship Profiles 5. Testimonials 6. Footer CTA
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Medal, Crown, Award, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const GALLERY_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/lizeik_42758a09.jpg";

const majorResults = [
  { icon: Crown, category: "National Championships", count: "8+", description: "National titles across MTB, Road, TT, and Masters categories" },
  { icon: Medal, category: "Lebanon Cup", count: "3+", description: "Lebanon Cup victories establishing LCC as a dominant force" },
  { icon: Award, category: "Regional Podiums", count: "20+", description: "Podium finishes in the 2023-2024 season alone" },
  { icon: TrendingUp, category: "International", count: "5+", description: "International race participations and results" },
];

const resultsArchive = [
  { year: "2024", event: "Lebanon Cup", category: "Elite Men", rider: "Team LCC", result: "1st Place" },
  { year: "2024", event: "National TT Championship", category: "Elite Women", rider: "LCC Rider", result: "1st Place" },
  { year: "2024", event: "National Championship", category: "Masters", rider: "LCC Rider", result: "1st Place" },
  { year: "2024", event: "Selaata Race", category: "Elite Men", rider: "Team LCC", result: "Multiple Podiums" },
  { year: "2023", event: "National Road Championship", category: "Elite Men", rider: "LCC Rider", result: "Podium" },
  { year: "2023", event: "Lebanon Cup Series", category: "Elite Men", rider: "Team LCC", result: "Top 3" },
  { year: "2022", event: "Lebanon Cup", category: "Elite Men", rider: "Team LCC", result: "1st Place" },
  { year: "2019", event: "National MTB Championship", category: "Elite Men", rider: "LCC Rider", result: "1st Place" },
  { year: "2018", event: "National Road Championship", category: "Elite Men", rider: "LCC Rider", result: "Podium" },
];

const championships = [
  { title: "Lebanon Cup Champions 2024", description: "Dominant performance across the entire Lebanon Cup series, securing the overall team title.", badge: "Team Title" },
  { title: "Women's TT National Champion 2024", description: "Historic victory in the Women's Time Trial, showcasing LCC's commitment to women's cycling.", badge: "Individual Title" },
  { title: "Masters National Champion 2024", description: "Proving that excellence has no age limit, our Masters rider claimed the national title.", badge: "Individual Title" },
];

const testimonials = [
  { quote: "LCC has transformed Lebanese cycling. Their discipline and commitment are unmatched.", author: "Sports Journalist", role: "Lebanese Sports Media" },
  { quote: "Being part of LCC pushed me to levels I never thought possible. This team is family.", author: "LCC Rider", role: "National Champion" },
];

const yearFilters = ["All", "2024", "2023", "2022", "2019", "2018"];

export default function Record() {
  const [activeYear, setActiveYear] = useState("All");
  const summaryRef = useRef(null);
  const summaryInView = useInView(summaryRef, { once: true, margin: "-100px" });
  const archiveRef = useRef(null);
  const archiveInView = useInView(archiveRef, { once: true, margin: "-100px" });
  const champRef = useRef(null);
  const champInView = useInView(champRef, { once: true, margin: "-100px" });
  const testRef = useRef(null);
  const testInView = useInView(testRef, { once: true, margin: "-100px" });

  const filteredResults = activeYear === "All"
    ? resultsArchive
    : resultsArchive.filter((r) => r.year === activeYear);

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label="Our Record"
        title="OUR"
        titleAccent="PROOF."
        subtitle="Every result, every podium, every milestone. The numbers tell our story."
        image={GALLERY_1}
      />

      {/* Major Results Summary */}
      <section ref={summaryRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={summaryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Results Summary
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              WINNING IS A <span className="text-racing-red">HABIT</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorResults.map((result, i) => (
              <motion.div
                key={result.category}
                initial={{ opacity: 0, y: 30 }}
                animate={summaryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-6 bg-charcoal border border-white/5 hover:border-racing-red/30 transition-all duration-500 text-center"
              >
                <result.icon size={28} className="text-racing-red mx-auto mb-4" />
                <div className="font-display text-4xl font-bold text-white mb-2">{result.count}</div>
                <h3 className="font-display text-sm tracking-[0.15em] uppercase text-racing-red mb-2">{result.category}</h3>
                <p className="font-body text-sm text-silver/60">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Results Archive */}
      <section ref={archiveRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={archiveInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Full Archive
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              RESULTS <span className="text-racing-red">ARCHIVE</span>
            </h2>
          </motion.div>

          {/* Year Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {yearFilters.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`font-display text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 ${
                  activeYear === year
                    ? "bg-racing-red border-racing-red text-white"
                    : "border-white/20 text-silver hover:border-racing-red hover:text-racing-red"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="font-display text-xs tracking-[0.2em] uppercase text-racing-red text-left py-4 pr-4">Year</th>
                  <th className="font-display text-xs tracking-[0.2em] uppercase text-racing-red text-left py-4 pr-4">Event</th>
                  <th className="font-display text-xs tracking-[0.2em] uppercase text-racing-red text-left py-4 pr-4 hidden md:table-cell">Category</th>
                  <th className="font-display text-xs tracking-[0.2em] uppercase text-racing-red text-left py-4 pr-4 hidden lg:table-cell">Rider</th>
                  <th className="font-display text-xs tracking-[0.2em] uppercase text-racing-red text-left py-4">Result</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={archiveInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="border-b border-white/5 hover:bg-dark-surface/50 transition-colors"
                  >
                    <td className="font-display text-sm font-bold text-white py-4 pr-4">{result.year}</td>
                    <td className="font-body text-sm text-silver py-4 pr-4">{result.event}</td>
                    <td className="font-body text-sm text-silver/70 py-4 pr-4 hidden md:table-cell">{result.category}</td>
                    <td className="font-body text-sm text-silver/70 py-4 pr-4 hidden lg:table-cell">{result.rider}</td>
                    <td className="py-4">
                      <span className={`font-display text-xs tracking-[0.15em] uppercase px-3 py-1 ${
                        result.result.includes("1st") ? "bg-racing-red/20 text-racing-red" : "bg-white/5 text-silver"
                      }`}>
                        {result.result}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Championship Profiles */}
      <section ref={champRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={champInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Highlights
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              CHAMPIONSHIP <span className="text-racing-red">PROFILES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {championships.map((champ, i) => (
              <motion.div
                key={champ.title}
                initial={{ opacity: 0, y: 30 }}
                animate={champInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-8 bg-charcoal border border-white/5 hover:border-racing-red/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
                <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red bg-racing-red/10 px-3 py-1 inline-block mb-4">
                  {champ.badge}
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-3">
                  {champ.title}
                </h3>
                <p className="font-body text-sm text-silver/70 leading-relaxed">
                  {champ.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              What They Say
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              VOICES OF <span className="text-racing-red">LCC</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={testInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="p-8 bg-dark-surface border border-white/5 relative"
              >
                <Quote size={24} className="text-racing-red/30 mb-4" />
                <p className="font-body text-lg text-silver leading-relaxed mb-6 italic">
                  "{test.quote}"
                </p>
                <div>
                  <span className="font-display text-sm font-semibold text-white block">{test.author}</span>
                  <span className="font-body text-xs text-silver/50">{test.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              BE PART OF THE <span className="text-racing-red">NEXT VICTORY</span>
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300 mt-4"
            >
              Join LCC
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
