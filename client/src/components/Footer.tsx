/*
 * DESIGN: Velocity Noir — Minimal footer with racing red accent
 * Dark background, copyright and social links
 */

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-wider text-white">
              LCC
            </span>
            <span className="w-6 h-[2px] bg-racing-red" />
            <span className="font-display text-[10px] font-light tracking-[0.3em] text-silver/50 uppercase">
              Lebanon
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-silver/40 text-center">
            &copy; {new Date().getFullYear()} Lebanese Cycling Club (LCCLB). All rights reserved.
          </p>

          {/* Tagline */}
          <p className="font-display text-[10px] tracking-[0.2em] uppercase text-silver/30">
            Challenge Your Limits
          </p>
        </div>
      </div>
    </footer>
  );
}
