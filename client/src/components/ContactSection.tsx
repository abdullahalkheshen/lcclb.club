/*
 * DESIGN: Velocity Noir — Contact section with social links
 * Dark background, racing red accents, editorial layout
 * Social media links prominent, simple contact form
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const SUNSET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/atwi_1_5f2b490b.jpg";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/lcclb/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lcc.lb/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/lcclb",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Strava",
    url: "https://www.strava.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={SUNSET_IMG}
          alt="Sunset cycling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              JOIN THE <span className="text-racing-red">RIDE</span>
            </h2>
            <p className="font-body text-silver/60 mt-4 max-w-lg mx-auto">
              Ready to challenge your limits? Connect with us and become part of Lebanon's most passionate cycling community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-racing-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-1">Location</h4>
                    <p className="font-body text-silver/70">Nabatieh, South Lebanon</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-racing-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-1">Email</h4>
                    <a href="mailto:info@lcclb.club" className="font-body text-silver/70 hover:text-racing-red transition-colors">
                      info@lcclb.club
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-racing-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-1">Phone</h4>
                    <p className="font-body text-silver/70">Contact us via social media</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-lg tracking-[0.15em] uppercase text-white mb-6">
                  Follow <span className="text-racing-red">Us</span>
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 text-silver hover:bg-racing-red hover:border-racing-red hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Research Citation */}
              <div className="mt-10 p-4 bg-white/5 border-l-2 border-racing-red">
                <p className="font-body text-xs text-silver/50 leading-relaxed">
                  Studies show that cycling reduces all-cause mortality risk and is associated with 84% lower CO2 emissions compared to driving.
                  <br />
                  <span className="text-silver/40">
                    Sources: Logan et al. (2023), Brand et al. (2021) — PMC & ScienceDirect
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-display text-xs tracking-[0.2em] uppercase text-silver/70 block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300 placeholder:text-silver/30"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="font-display text-xs tracking-[0.2em] uppercase text-silver/70 block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300 placeholder:text-silver/30"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="font-display text-xs tracking-[0.2em] uppercase text-silver/70 block mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300 resize-none placeholder:text-silver/30"
                    placeholder="Tell us about yourself or ask a question..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-racing-red/90 transition-all duration-300 hover:translate-x-1 group"
                >
                  Send Message
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
