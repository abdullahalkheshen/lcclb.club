/*
 * DESIGN: Velocity Noir — Full footer with navigation, social, and branding
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.legacy", href: "/legacy" },
  { labelKey: "nav.team", href: "/team" },
  { labelKey: "nav.record", href: "/record" },
  { labelKey: "nav.news", href: "/news" },
  { labelKey: "nav.partners", href: "/partners" },
  { labelKey: "nav.contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/lcclb/", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
  { name: "Instagram", url: "https://www.instagram.com/lcc.lb/", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  { name: "Telegram", url: "https://t.me/lcclb", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                LCC
              </span>
              <span className="w-8 h-[3px] bg-racing-red" />
              <span className="font-display text-xs font-light tracking-[0.3em] text-silver/50 uppercase">
                Lebanon
              </span>
            </div>
            <p className="font-body text-sm text-silver/50 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-racing-red/60 mt-2">
              {t('footer.hashtag')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase text-racing-red mb-4">
              {t('footer.navigation')}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-silver/50 hover:text-racing-red transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase text-racing-red mb-4">
              {t('footer.contact')}
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-white/5 border border-white/10 text-silver hover:bg-racing-red hover:border-racing-red hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-silver/50 leading-relaxed mb-2">
              1700-204, Nabatieh, South Lebanon, Lebanon
            </p>
            <a
              href="tel:+96176535651"
              className="block font-body text-sm text-silver/50 hover:text-racing-red transition-colors mb-2"
            >
              +961 76 535 651
            </a>
            <a
              href="mailto:info@lcclb.club"
              className="font-body text-sm text-silver/50 hover:text-racing-red transition-colors"
            >
              info@lcclb.club
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-silver/30 text-center">
            &copy; {new Date().getFullYear()} Lebanese Cycling Club (LCC). {t('footer.rights')}.
          </p>
          <p className="font-display text-[10px] tracking-[0.2em] uppercase text-silver/20">
            Lebanon's Leading Cycling Team
          </p>
        </div>
      </div>
    </footer>
  );
}
