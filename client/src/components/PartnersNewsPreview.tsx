/*
 * DESIGN: Velocity Noir — Partners + News Preview from Milanote
 * Logo grid for sponsors + latest news preview
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "wouter";

const newsItems = [
  {
    category: "Race Result",
    title: "LCC Dominates Lebanon Cup 2024",
    excerpt: "Our riders secured multiple podium positions across all categories in the national championship series.",
    date: "Dec 2024",
  },
  {
    category: "Team Announcement",
    title: "New Season Kit Unveiled",
    excerpt: "LCC reveals the 2025 team kit featuring our signature design and new partner branding.",
    date: "Jan 2025",
  },
];

export default function PartnersNewsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-charcoal py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Partners Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Our Partners
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              PROUDLY <span className="text-racing-red">PARTNERED</span>
            </h3>
            <p className="font-body text-silver/70 leading-relaxed mb-8">
              Proudly partnered with forward-thinking brands supporting Lebanese cycling. Our sponsors share our vision of developing champions and advancing the sport in Lebanon.
            </p>

            {/* Partner Logos */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="h-20 bg-dark-surface border border-white/5 flex items-center justify-center hover:border-racing-red/20 transition-colors duration-300">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/caseX-black_2f839a95.png"
                  alt="CaseX"
                  className="h-12 object-contain"
                />
              </div>
              <div className="h-20 bg-dark-surface border border-white/5 flex items-center justify-center hover:border-racing-red/20 transition-colors duration-300">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/drscent-white_78d5e3fd.png"
                  alt="Dr Scent"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            <Link
              href="/partners"
              className="inline-flex items-center gap-2 px-8 py-3 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300 hover:translate-x-1"
            >
              Partner With Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* News Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Latest News
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
              FROM THE <span className="text-racing-red">ROAD</span>
            </h3>

            <div className="space-y-6 mb-8">
              {newsItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group p-6 bg-dark-surface border border-white/5 hover:border-racing-red/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Newspaper size={14} className="text-racing-red" />
                    <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red">
                      {item.category}
                    </span>
                    <span className="font-body text-xs text-silver/40 ml-auto">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-2 group-hover:text-racing-red transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-silver/60 leading-relaxed">
                    {item.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-silver hover:text-racing-red font-display text-sm tracking-[0.15em] uppercase transition-colors duration-300 group"
            >
              View All News
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
