import { useRef, useState, useEffect } from "react";

const items = [
  "LEBANON CUP CHAMPIONS 2024",
  "WOMEN'S TT NATIONAL CHAMPION",
  "MASTERS NATIONAL CHAMPION",
  "20+ PODIUMS IN 2023-2024",
  "FOUNDED 2017",
  "LEBANON'S LEADING CYCLING TEAM",
];

let styleInjected = false;

export default function TickerTape() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!styleInjected) {
      const style = document.createElement("style");
      style.textContent = `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .animate-ticker.paused {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
      styleInjected = true;
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-racing-red overflow-hidden py-3 relative">
      <div className={`flex animate-ticker whitespace-nowrap ${paused ? "paused" : ""}`}>
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-xs tracking-[0.25em] uppercase text-white/90 mx-8 flex-shrink-0 flex items-center gap-8"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-white/40 rotate-45 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
