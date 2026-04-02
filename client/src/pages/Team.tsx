/*
 * TEAM PAGE — Real LCC Cyclists with official photos
 * Categories: Masters, Elite, Junior
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Zap, Heart, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const TEAM_LINEUP = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Line-Up-Team-iibtf_941be228.png";

const teamValues = [
  { icon: Shield, title: "Discipline", description: "Rigorous training standards that build champions." },
  { icon: Zap, title: "Performance", description: "Pushing limits in every race and training session." },
  { icon: Heart, title: "Unity", description: "Together we train, race, and win as one unit." },
  { icon: Users, title: "Growth", description: "Developing the next generation of Lebanese cyclists." },
];

const riders = [
  // Masters
  { name: "Monzer Toza", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Monzer Toza_047f8a9e.jpg" },
  { name: "Mohamad Ayash", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Mohamad Ayash_63abf230.jpg" },
  { name: "Haidar Sabah", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Haidar Sabah_c246cf93.jpg" },
  { name: "Ali Atwi", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Ali Atwi_99719dfb.jpg" },
  { name: "Hussein Lizeik", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Hussein Lizeik_5002ad5e.jpg" },
  { name: "Mohamad Al Sayed", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Mohamad Al Sayed_bf29b8f9.jpg" },
  { name: "Rida Atwi", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Rida Atwi_33886f58.jpg" },
  { name: "Ramona Khalife", category: "Masters", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Ramona Khalife - We will change her background_0a41205d.jpg" },
  // Elite
  { name: "Hussien Hareb", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Hussien Hareb_0d0d0a7d.jpg" },
  { name: "Ali Assi", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Ali Assi_b133c6c2.jpg" },
  { name: "Abbas Atwi", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Abbas Atwi_819b0601.jpg" },
  { name: "Hadi Haidar", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Hadi Haidar_2fc6c215.jpg" },
  { name: "Mostafa Fahes", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Mostafa Fahes_bf2db6a0.jpg" },
  { name: "Mahdi Moussa", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Mahdi Moussa_48966ca6.jpg" },
  { name: "Mohamad Al Haj", category: "Elite", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Mohamad Al Haj_f4f1f11c.jpg" },
  // Junior
  { name: "Ali Zayoun", category: "Junior", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Ali Zayoun_3aad717c.jpg" },
  { name: "Ali Zarour", category: "Junior", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/Ali Zarour_9c88c7e8.jpg" },
  
];

const categories = ["All", "Masters", "Elite", "Junior"];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState("All");
  const identityRef = useRef(null);
  const identityInView = useInView(identityRef, { once: true, margin: "-100px" });
  const ridersRef = useRef(null);
  const ridersInView = useInView(ridersRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const filteredRiders = activeCategory === "All"
    ? riders
    : riders.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label="Our Team"
        title="MEET THE TEAM BEHIND"
        titleAccent="THE VICTORY"
        subtitle="The athletes, coaches, and staff who power Lebanon's leading cycling team. Together, we train, race, and win as one unit."
        image={TEAM_LINEUP}
      />

      {/* Team Identity / Philosophy */}
      <section ref={identityRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={identityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              WHAT MAKES US <span className="text-racing-red">SPECIAL</span>
            </h2>
            <p className="font-body text-lg text-silver/70 max-w-2xl mx-auto">
              LCC is built on a foundation of discipline, culture, and the relentless development of Lebanese cycling talent.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={identityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-6 bg-charcoal/50 border border-white/5 hover:border-racing-red/30 transition-all duration-500 text-center"
              >
                <value.icon size={32} className="text-racing-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide uppercase">{value.title}</h3>
                <p className="font-body text-sm text-silver/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rider Profiles */}
      <section ref={ridersRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ridersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Athletes
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              OUR <span className="text-racing-red">RIDERS</span>
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

          {/* Riders Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredRiders.map((rider, i) => (
              <motion.div
                key={rider.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden bg-dark-surface"
              >
                <div className="relative h-[320px]">
                  <img
                    src={rider.image}
                    alt={rider.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red bg-racing-red/10 px-3 py-1 inline-block mb-2">
                    {rider.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                    {rider.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section ref={ctaRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-[3px] bg-racing-red mx-auto mb-8" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              JOIN THE <span className="text-racing-red">TEAM</span>
            </h2>
            <p className="font-body text-lg text-silver/70 max-w-xl mx-auto mb-10">
              Interested in becoming part of LCC? Whether you're an elite rider or emerging talent, we're always looking for dedicated cyclists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase hover:bg-racing-red/90 transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase hover:border-racing-red hover:text-racing-red transition-all duration-300"
              >
                Join LCC
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
