/*
 * DESIGN: Velocity Noir — Minimal top bar for multi-page site
 * Dark transparent background that becomes solid on scroll
 * Racing red accent on active/hover states
 * Language switcher in top right
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Legacy", href: "/legacy" },
  { label: "Team", href: "/team" },
  { label: "Record", href: "/record" },
  { label: "News", href: "/news" },
  { label: "Partners", href: "/partners" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact", href: "/contact" },
];

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "ENG" },
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-500 ${
          isScrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="font-display text-2xl md:text-3xl font-bold tracking-wider text-white">
              LCC
            </span>
            <span className="w-8 h-[3px] bg-racing-red group-hover:w-12 transition-[width] duration-300" />
            <span className="font-display text-xs md:text-sm font-light tracking-[0.3em] text-silver uppercase">
              Lebanon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-xs xl:text-sm font-light tracking-[0.12em] uppercase transition-colors duration-300 group ${
                  location === link.href
                    ? "text-white"
                    : "text-silver hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-racing-red transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden lg:flex items-center gap-2 ml-6 xl:ml-8 pl-6 xl:pl-8 border-l border-white/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`font-display text-xs font-light tracking-[0.1em] uppercase px-2 py-2 min-h-[44px] flex items-center transition-[color,border-color] duration-300 ${
                  language === lang.code
                    ? "text-racing-red border-b-2 border-racing-red"
                    : "text-silver hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white p-2.5"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                    location === link.href
                      ? "text-racing-red"
                      : "text-silver hover:text-racing-red"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="w-16 h-[2px] bg-white/10 my-4" />
            <div className="flex gap-3">
              {languages.map((lang, i) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + i) * 0.06, duration: 0.3 }}
                  onClick={() => setLanguage(lang.code)}
                  className={`font-display text-lg font-light tracking-[0.1em] uppercase px-3 py-1 transition-[color,border-color] duration-300 ${
                    language === lang.code
                      ? "text-racing-red border-b-2 border-racing-red"
                      : "text-silver hover:text-racing-red"
                  }`}
                >
                  {lang.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
