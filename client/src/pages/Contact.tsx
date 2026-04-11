/*
 * CONTACT PAGE — Milanote Blueprint (4 sections):
 * 1. Page Intro 2. Contact Options (Dual Forms) 3. FAQ Preview 4. Final CTA
 */

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const RACE_SABAH = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/sabah_c84c8fe6.jpg";

const getRiderFAQ = (t: any) => [
  { q: t('contactPage.riderFAQ1Q'), a: t('contactPage.riderFAQ1A') },
  { q: t('contactPage.riderFAQ2Q'), a: t('contactPage.riderFAQ2A') },
  { q: t('contactPage.riderFAQ3Q'), a: t('contactPage.riderFAQ3A') },
];

const getSponsorFAQ = (t: any) => [
  { q: t('contactPage.sponsorFAQ1Q'), a: t('contactPage.sponsorFAQ1A') },
  { q: t('contactPage.sponsorFAQ2Q'), a: t('contactPage.sponsorFAQ2A') },
];

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/lcclb/", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
  { name: "Instagram", url: "https://www.instagram.com/lcc.lb/", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  { name: "Telegram", url: "https://t.me/lcclb", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
  { name: "Strava", url: "https://www.strava.com", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" /></svg> },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-display text-sm font-semibold text-white tracking-wide uppercase group-hover:text-racing-red transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-racing-red flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="font-body text-sm text-silver/70 leading-relaxed pb-4">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const formsRef = useRef(null);
  const formsInView = useInView(formsRef, { once: true, margin: "-100px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [riderForm, setRiderForm] = useState({ name: "", email: "", phone: "", category: "", experience: "" });
  const [partnerForm, setPartnerForm] = useState({ company: "", contact: "", email: "", interest: "", message: "" });

  const handleRiderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contactPage.riderSubmitSuccess'));
    setRiderForm({ name: "", email: "", phone: "", category: "", experience: "" });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contactPage.partnerSubmitSuccess'));
    setPartnerForm({ company: "", contact: "", email: "", interest: "", message: "" });
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300 placeholder:text-silver/30";
  const labelClass = "font-display text-xs tracking-[0.2em] uppercase text-silver/70 block mb-2";

  return (
    <div className="min-h-screen bg-dark-surface text-warm-white">
      <Navbar />
      <PageHero
        label={t('contactPage.label')}
        title={t('contactPage.title')}
        titleAccent={t('contactPage.titleAccent')}
        subtitle={t('contactPage.subtitle')}
        image={RACE_SABAH}
      />

      {/* Dual Contact Forms */}
      <section ref={formsRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t('contactPage.howCanWeHelp')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              {t('contactPage.readyToJoin')} <span className="text-racing-red">{t('contactPage.readyToJoinAccent')}</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Join the Team Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-charcoal border border-white/5"
            >
              <h3 className="font-display text-2xl font-bold text-white tracking-wide uppercase mb-2">
                {t('contactPage.joinTeam')} <span className="text-racing-red"></span>
              </h3>
              <p className="font-body text-sm text-silver/60 mb-8">
                {t('contactPage.joinTeamDesc')}
              </p>
              <form onSubmit={handleRiderSubmit} className="space-y-6">
                <div>
                  <label className={labelClass}>{t('contactPage.fullName')}</label>
                  <input type="text" value={riderForm.name} onChange={(e) => setRiderForm({ ...riderForm, name: e.target.value })} required className={inputClass} placeholder={t('contactPage.yourName')} />
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.email')}</label>
                  <input type="email" value={riderForm.email} onChange={(e) => setRiderForm({ ...riderForm, email: e.target.value })} required className={inputClass} placeholder="your@email.com" />
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.phone')}</label>
                  <input type="tel" value={riderForm.phone} onChange={(e) => setRiderForm({ ...riderForm, phone: e.target.value })} className={inputClass} placeholder="+961 XX XXX XXX" />
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.racingCategory')}</label>
                  <select
                    value={riderForm.category}
                    onChange={(e) => setRiderForm({ ...riderForm, category: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300"
                  >
                    <option value="" className="bg-charcoal">{t('contactPage.selectCategory')}</option>
                    <option value="elite-men" className="bg-charcoal">{t('contactPage.eliteMen')}</option>
                    <option value="elite-women" className="bg-charcoal">{t('contactPage.eliteWomen')}</option>
                    <option value="masters" className="bg-charcoal">{t('contactPage.masters')}</option>
                    <option value="u23" className="bg-charcoal">U23</option>
                    <option value="development" className="bg-charcoal">{t('contactPage.development')}</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.experienceLevel')}</label>
                  <input type="text" value={riderForm.experience} onChange={(e) => setRiderForm({ ...riderForm, experience: e.target.value })} className={inputClass} placeholder={t('contactPage.describeExperience')} />
                </div>
                <button type="submit" className="w-full py-4 bg-racing-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-racing-red/90 transition-all duration-300">
                  {t('contactPage.submitApplication')}
                </button>
              </form>
            </motion.div>

            {/* Partner With Us Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-charcoal border border-white/5"
            >
              <h3 className="font-display text-2xl font-bold text-white tracking-wide uppercase mb-2">
                {t('contactPage.partnerWithUs')} <span className="text-racing-red"></span>
              </h3>
              <p className="font-body text-sm text-silver/60 mb-8">
                {t('contactPage.partnerWithUsDesc')}
              </p>
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div>
                  <label className={labelClass}>{t('contactPage.companyName')}</label>
                  <input type="text" value={partnerForm.company} onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })} required className={inputClass} placeholder={t('contactPage.yourCompany')} />
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.contactName')}</label>
                  <input type="text" value={partnerForm.contact} onChange={(e) => setPartnerForm({ ...partnerForm, contact: e.target.value })} required className={inputClass} placeholder={t('contactPage.yourName')} />
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.email')}</label>
                  <input type="email" value={partnerForm.email} onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })} required className={inputClass} placeholder="your@company.com" />
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.partnershipInterest')}</label>
                  <select
                    value={partnerForm.interest}
                    onChange={(e) => setPartnerForm({ ...partnerForm, interest: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300"
                  >
                    <option value="" className="bg-charcoal">{t('contactPage.selectInterest')}</option>
                    <option value="title" className="bg-charcoal">{t('partnersPage.titleSponsor')}</option>
                    <option value="official" className="bg-charcoal">{t('partnersPage.official')}</option>
                    <option value="supporting" className="bg-charcoal">{t('partnersPage.supporting')}</option>
                    <option value="in-kind" className="bg-charcoal">{t('partnersPage.inKind')}</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t('contactPage.message')}</label>
                  <textarea
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 focus:border-racing-red text-white font-body py-3 px-0 outline-none transition-colors duration-300 resize-none placeholder:text-silver/30"
                    placeholder={t('contactPage.partnershipVision')}
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-racing-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-racing-red/90 transition-all duration-300">
                  {t('contactPage.sendInquiry')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section ref={faqRef} className="bg-charcoal py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
              {t('contactPage.commonQuestions')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              {t('contactPage.faq')}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Rider FAQ */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={faqInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-6">
                {t('contactPage.forRiders')} <span className="text-racing-red"></span>
              </h3>
              <div>
                {getRiderFAQ(t).map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>

            {/* Sponsor FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={faqInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-6">
                {t('contactPage.forSponsors')} <span className="text-racing-red"></span>
              </h3>
              <div>
                {getSponsorFAQ(t).map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA — Visit Us */}
      <section ref={ctaRef} className="bg-dark-surface py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red block mb-4">
              {t('contactPage.findUs')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              {t('contactPage.visitUs')} <span className="text-racing-red"></span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <MapPin size={24} className="text-racing-red mx-auto mb-3" />
              <h4 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-1">{t('contactPage.address')}</h4>
              <p className="font-body text-sm text-silver/70">1700-204, Nabatieh, South Lebanon, Lebanon</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Mail size={24} className="text-racing-red mx-auto mb-3" />
              <h4 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-1">{t('contactPage.emailLabel')}</h4>
              <a href="mailto:info@lcclb.club" className="font-body text-sm text-silver/70 hover:text-racing-red transition-colors">
                info@lcclb.club
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Phone size={24} className="text-racing-red mx-auto mb-3" />
              <h4 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-1">{t('contactPage.phoneLabel')}</h4>
              <a href="tel:+96176535651" className="font-body text-sm text-silver/70 hover:text-racing-red transition-colors">
                +961 76 535 651
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4"
          >
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
