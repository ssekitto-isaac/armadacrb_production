import { useEffect, useState, useRef } from "react";
import analyticsImage from "@/assets/stats2.png";

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatItem = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(value, 2000, inView);
  
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${analyticsImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for color consistency */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0, backgroundColor: "rgba(0, 30, 121, 0.77)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-8 h-18 bg-[#91CD95]"></div>
            <span className="text-white font-extrabold text-base tracking-wider">Let's Get Started</span>
            <div className="h-1 w-8 h-18 bg-[#91CD95]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Are you ready to know your<br />credit score?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#91CD95] hover:bg-[#91CD95] text-white px-8 py-3 rounded-full font-bold transition-colors mt-8 text-lg"
          >
            <span>Contact Us</span>
            <div className="w-8 h-9 rounded-full bg-white flex items-center justify-center">
              {/* <span className="text-red-600 text-sm">→</span> */}
            </div>

            
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
