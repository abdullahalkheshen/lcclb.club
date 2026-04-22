/*
 * CALENDAR PAGE — 2026 Cycling Events
 * Chronological list view with category and month filters
 * Events: Race, Training, Social
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GALLERY_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/lizeik_42758a09.jpg";

interface CalendarEvent {
  id: string;
  name: string;
  date: string;
  month: number;
  time: string;
  location: string;
  category: "race" | "training" | "social";
  description: string;
}

const getEvents = (): CalendarEvent[] => [
  {
    id: "1",
    name: "Union Cup",
    date: "June 7, 2026",
    month: 6,
    time: "08:00 AM",
    location: "Beirut, Lebanon",
    category: "race",
    description: "National championship race featuring elite and master categories.",
  },
  {
    id: "2",
    name: "Lebanon Championship",
    date: "July 5, 2026",
    month: 7,
    time: "07:30 AM",
    location: "Mount Lebanon",
    category: "race",
    description: "Annual Lebanon cycling championship on scenic mountain routes.",
  },
  {
    id: "3",
    name: "Lebanon Hand Bike Championship",
    date: "July 12, 2026",
    month: 7,
    time: "09:00 AM",
    location: "Beirut Waterfront",
    category: "race",
    description: "Inclusive championship for hand bike cyclists of all levels.",
  },
  {
    id: "4",
    name: "Zadorian Brothers Cup",
    date: "August 23, 2026",
    month: 8,
    time: "08:00 AM",
    location: "South Lebanon",
    category: "race",
    description: "Traditional summer race honoring cycling heritage.",
  },
  {
    id: "5",
    name: "Lebanon Mountain Bike Enduro Championship",
    date: "September 6, 2026",
    month: 9,
    time: "07:00 AM",
    location: "Cedars Region",
    category: "race",
    description: "Challenging enduro mountain bike championship across technical terrain.",
  },
  {
    id: "6",
    name: "Lebanon Mountain Bike XCO Championship",
    date: "September 13, 2026",
    month: 9,
    time: "08:30 AM",
    location: "Barouk Forest",
    category: "race",
    description: "Cross-country mountain bike championship with multiple laps.",
  },
  {
    id: "7",
    name: "Lebanon Cup",
    date: "October 11, 2026",
    month: 10,
    time: "08:00 AM",
    location: "Beirut",
    category: "race",
    description: "Premier national cycling cup featuring all categories.",
  },
  {
    id: "8",
    name: "Independence Cup",
    date: "November 22, 2026",
    month: 11,
    time: "08:00 AM",
    location: "Central Beirut",
    category: "race",
    description: "Patriotic cycling race celebrating Lebanese independence.",
  },
  {
    id: "9",
    name: "Marathon Beirut + Disability Race",
    date: "November 29, 2026",
    month: 11,
    time: "07:00 AM",
    location: "Beirut Marathon Route",
    category: "race",
    description: "Inclusive marathon event with dedicated disability cycling category.",
  },
  {
    id: "10",
    name: "Lebanon Time Trial Championship",
    date: "June 28, 2026",
    month: 6,
    time: "10:00 AM",
    location: "Beirut Coastal Road",
    category: "race",
    description: "Individual time trial championship testing speed and endurance.",
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "race":
      return Trophy;
    case "training":
      return Calendar;
    default:
      return Calendar;
  }
};

export default function CalendarPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const eventsRef = useRef(null);
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

  const events = getEvents();

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const categoryMatch = selectedCategory === "all" || event.category === selectedCategory;
        const monthMatch = selectedMonth === "all" || event.month === parseInt(selectedMonth);
        return categoryMatch && monthMatch;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [selectedCategory, selectedMonth]);

  const months = [
    { value: "all", label: t("calendar.allCategories") },
    { value: "6", label: t("calendar.june") },
    { value: "7", label: t("calendar.july") },
    { value: "8", label: t("calendar.august") },
    { value: "9", label: t("calendar.september") },
    { value: "10", label: t("calendar.october") },
    { value: "11", label: t("calendar.november") },
    { value: "12", label: t("calendar.december") },
  ];

  const categories = [
    { value: "all", label: t("calendar.allCategories") },
    { value: "race", label: t("calendar.race") },
    { value: "training", label: t("calendar.training") },
    { value: "social", label: t("calendar.social") },
  ];

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label={t("calendar.label")}
        title={t("calendar.title")}
        titleAccent={t("calendar.titleAccent")}
        subtitle={t("calendar.subtitle")}
        image={GALLERY_1}
      />

      {/* Events Section */}
      <section ref={eventsRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t("calendar.upcomingEvents")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              {t("calendar.upcomingEvents")}
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            {/* Category Filter */}
            <div>
              <label className="font-display text-sm tracking-[0.15em] uppercase text-racing-red block mb-4">
                {t("calendar.filterByCategory")}
              </label>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`font-display text-xs tracking-[0.15em] uppercase px-5 py-2.5 min-h-[44px] border transition-[background-color,border-color,color] duration-300 ${
                      selectedCategory === cat.value
                        ? "bg-racing-red border-racing-red text-white"
                        : "border-white/20 text-silver hover:border-racing-red hover:text-racing-red"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Month Filter */}
            <div>
              <label className="font-display text-sm tracking-[0.15em] uppercase text-racing-red block mb-4">
                {t("calendar.filterByMonth")}
              </label>
              <div className="flex flex-wrap gap-3">
                {months.map((month) => (
                  <button
                    key={month.value}
                    onClick={() => setSelectedMonth(month.value)}
                    className={`font-display text-xs tracking-[0.15em] uppercase px-5 py-2.5 min-h-[44px] border transition-[background-color,border-color,color] duration-300 ${
                      selectedMonth === month.value
                        ? "bg-racing-red border-racing-red text-white"
                        : "border-white/20 text-silver hover:border-racing-red hover:text-racing-red"
                    }`}
                  >
                    {month.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events List */}
          {filteredEvents.length > 0 ? (
            <div className="space-y-6">
              {filteredEvents.map((event, i) => {
                const IconComponent = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                    className="group p-6 md:p-8 bg-charcoal border border-white/5 hover:border-racing-red/30 transition-[border-color] duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      {/* Left: Icon & Title */}
                      <div className="flex gap-4 flex-1">
                        <div className="flex-shrink-0">
                          <IconComponent size={32} className="text-racing-red" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                            {event.name}
                          </h3>
                          <p className="font-body text-sm md:text-base text-silver/70 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Right: Details */}
                      <div className="md:text-end space-y-3 flex-shrink-0">
                        {/* Date */}
                        <div className="flex md:justify-end items-center gap-2">
                          <Calendar size={16} className="text-racing-red md:hidden" />
                          <div>
                            <span className="font-display text-xs tracking-[0.15em] uppercase text-racing-red block">
                              {t("calendar.eventDate")}
                            </span>
                            <span className="font-body text-sm text-white">{event.date}</span>
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex md:justify-end items-center gap-2">
                          <Clock size={16} className="text-racing-red md:hidden" />
                          <div>
                            <span className="font-display text-xs tracking-[0.15em] uppercase text-racing-red block">
                              {t("calendar.eventTime")}
                            </span>
                            <span className="font-body text-sm text-white">{event.time}</span>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex md:justify-end items-center gap-2">
                          <MapPin size={16} className="text-racing-red md:hidden" />
                          <div>
                            <span className="font-display text-xs tracking-[0.15em] uppercase text-racing-red block">
                              {t("calendar.eventLocation")}
                            </span>
                            <span className="font-body text-sm text-white">{event.location}</span>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="flex md:justify-end">
                          <span className={`font-display text-xs tracking-[0.15em] uppercase px-3 py-1 ${
                            event.category === "race"
                              ? "bg-racing-red/20 text-racing-red"
                              : event.category === "training"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                          }`}>
                            {event.category === "race"
                              ? t("calendar.race")
                              : event.category === "training"
                              ? t("calendar.training")
                              : t("calendar.social")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={eventsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="font-body text-lg text-silver/60">{t("calendar.noEvents")}</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
