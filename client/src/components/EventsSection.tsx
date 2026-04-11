/*
 * DESIGN: Velocity Noir — Events section with editorial card layout
 * Full-bleed event image, dark cards with red accents
 * Diagonal top divider from previous section
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EVENTS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/hareb_991a0a8b.jpg";

const events = [
  {
    title: "Spring Mountain Challenge",
    date: "April 2026",
    time: "7:00 AM",
    location: "Nabatieh — Jezzine Route",
    distance: "85 km",
    elevation: "1,200m",
    type: "Road Race",
  },
  {
    title: "Coastal Century Ride",
    date: "May 2026",
    time: "6:30 AM",
    location: "Tyre — Sidon Coastal Road",
    distance: "100 km",
    elevation: "400m",
    type: "Group Ride",
  },
  {
    title: "Cedar MTB Classic",
    date: "June 2026",
    time: "8:00 AM",
    location: "Barouk Cedar Forest",
    distance: "45 km",
    elevation: "1,800m",
    type: "MTB Race",
  },
  {
    title: "Summer Night Ride",
    date: "July 2026",
    time: "7:00 PM",
    location: "Nabatieh City Circuit",
    distance: "30 km",
    elevation: "200m",
    type: "Social Ride",
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" ref={ref} className="relative">
      {/* Full-width Event Banner */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={EVENTS_IMAGE}
          alt="Cycling race start line in a Lebanese town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black/60 to-dark-surface" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Upcoming
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-2">
              EVENTS & <span className="text-racing-red">RACES</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Events Cards */}
      <div className="bg-dark-surface py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group relative bg-charcoal border border-white/5 hover:border-racing-red/40 transition-all duration-500 overflow-hidden"
              >
                {/* Red top accent */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-racing-red group-hover:w-full transition-all duration-500" />

                <div className="p-6 md:p-8">
                  {/* Event Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-[10px] tracking-[0.3em] uppercase text-racing-red bg-racing-red/10 px-3 py-1">
                      {event.type}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-silver/30 group-hover:text-racing-red group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>

                  {/* Event Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 tracking-wide uppercase group-hover:text-racing-red transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-silver/70">
                      <Calendar size={14} className="text-racing-red flex-shrink-0" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-silver/70">
                      <Clock size={14} className="text-racing-red flex-shrink-0" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-silver/70">
                      <MapPin size={14} className="text-racing-red flex-shrink-0" />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>

                  {/* Distance & Elevation */}
                  <div className="flex gap-6 pt-4 border-t border-white/5">
                    <div>
                      <span className="font-display text-2xl font-bold text-white">{event.distance}</span>
                      <span className="font-body text-xs text-silver/50 block">Distance</span>
                    </div>
                    <div>
                      <span className="font-display text-2xl font-bold text-racing-red">{event.elevation}</span>
                      <span className="font-body text-xs text-silver/50 block">Elevation</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center font-body text-sm text-silver/40 mt-8"
          >
            Follow us on social media for the latest event updates and registration details.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
