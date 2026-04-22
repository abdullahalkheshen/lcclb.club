import { Home, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-dark-surface flex items-center justify-center">
      <div className="container text-center max-w-lg">
        <div className="w-16 h-[3px] bg-racing-red mx-auto mb-8" />
        <h1 className="font-display text-8xl md:text-9xl font-bold text-white mb-2">404</h1>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-wide uppercase mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-lg text-silver/60 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 px-10 py-4 bg-racing-red text-white font-display text-sm tracking-[0.15em] uppercase transition-[background-color,transform] duration-300 hover:bg-racing-red/90 active:scale-[0.97] min-h-[44px]"
        >
          <Home className="w-4 h-4" />
          Go Home
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
