/*
 * TEAM PAGE — Milanote Blueprint (6 sections):
 * 1. Page Intro 2. Team Identity 3. Coaches & Staff
 * 4. Rider Profiles 5. Team Achievements 6. Footer CTA
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Zap, Heart, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const EVENTS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/events-section-A4VmqmsXqCNAyLjTRTagMw.webp";

const teamValues = [
  { icon: Shield, title: "Discipline", description: "Rigorous training standards that build champions." },
  { icon: Zap, title: "Performance", description: "Pushing limits in every race and training session." },
  { icon: Heart, title: "Unity", description: "Together we train, race, and win as one unit." },
  { icon: Users, title: "Growth", description: "Developing the next generation of Lebanese cyclists." },
];

const staff = [
  { name: "Head Coach", role: "Head Coach", description: "Leading LCC's training and race strategy since founding." },
  { name: "Team Manager", role: "Director Sportif", description: "Coordinating logistics, race planning, and team operations." },
  { name: "Assistant Coach", role: "Development Coach", description: "Focused on youth development and new rider programs." },
];

const riders = [
  { name: "Rider 1", category: "Elite Women", achievement: "Women's TT National Champion 2024", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80" },
  { name: "Rider 2", category: "Masters", achievement: "Masters National Champion 2024", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500&q=80" },
  { name: "Rider 3", category: "Elite Men", achievement: "Lebanon Cup Podium Finisher", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500&q=80" },
  { name: "Rider 4", category: "Elite Men", achievement: "Road Race Specialist", image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=500&q=80" },
  { name: "Rider 5", category: "U23", achievement: "Rising Star — Development Squad", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=500&q=80" },
  { name: "Rider 6", category: "Elite Women", achievement: "Road Race Competitor", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80" },
];

const categories = ["All", "Elite Men", "Elite Women", "Masters", "U23"];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState("All");
  const identityRef = useRef(null);
  const identityInView = useInView(identityRef, { once: true, margin: "-100px" });
  const staffRef = useRef(null);
  const staffInView = useInView(staffRef, { once: true, margin: "-100px" });
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
        image={EVENTS_IMAGE}
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

      {/* Coaches & Staff */}
      <section ref={staffRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={staffInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              COACHES & <span className="text-racing-red">STAFF</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {staff.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={staffInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-8 bg-dark-surface border border-white/5 hover:border-racing-red/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-racing-red/10 flex items-center justify-center mb-6">
                  <Users size={28} className="text-racing-red" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-wide uppercase mb-1">
                  {member.name}
                </h3>
                <span className="font-display text-xs tracking-[0.2em] uppercase text-racing-red block mb-3">
                  {member.role}
                </span>
                <p className="font-body text-sm text-silver/70 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rider Profiles */}
      <section ref={ridersRef} className="bg-dark-surface py-24 md:py-32">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRiders.map((rider, i) => (
              <motion.div
                key={rider.name}
                initial={{ opacity: 0, y: 30 }}
                animate={ridersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden"
              >
                <div className="relative h-[350px]">
                  <img
                    src={rider.image}
                    alt={rider.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red bg-racing-red/10 px-3 py-1 inline-block mb-2">
                    {rider.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase mb-1">
                    {rider.name}
                  </h3>
                  <p className="font-body text-sm text-silver/70">{rider.achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section ref={ctaRef} className="bg-charcoal py-24 md:py-32">
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
