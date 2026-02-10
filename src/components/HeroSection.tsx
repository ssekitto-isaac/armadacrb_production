import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Background images
import hero1 from "@/assets/young-team.png";
import hero2 from "@/assets/credit-report-fine.png";
import hero3 from "@/assets/analytics_african_men.png";
import hero4 from "@/assets/women_standing_final2.png";
import hero5 from "@/assets/risk_int.png";
import hero6 from "@/assets/lady and the guy final.png";
import hero7 from "@/assets/welcome6.png";

// Separate clean logo (only used on welcome slide)
import armadaLogo from "@/assets/armada-logo-whitewords.png";

const slides = [
  {
    title: "",
    subtitle: "We are global leaders in credit reporting and analytics",
    cta: "View Now",
    link: "/AboutArmada",
    image: hero1
  },
  {
    title: "ArmadaScore®",
    subtitle:
      "Our predictive scoring module delivers a high-precision measure of credit risk, empowering lenders to anticipate borrower behavior and minimize default exposure with confidence.",
    cta: "View Now",
    link: "/armadascore",
    image: hero6,
  },
  {
    title: "Credit & Risk Reports",
    subtitle:
      "Our predictive score module makes it possible for creditors to access risk reports about credit applicants",
    cta: "View Now",
    link: "/product-suites/credit-reports",
    image: hero2,
  },
  {
    title: "Analytics",
    subtitle:
      "With our analytics services, you will get more insight from data while learning more about prevailing trends",
    cta: "View More",
    link: "/product-suites/analytics",
    image: hero3,
  },
  {
    title: "Credit Education & Financial Literacy",
    subtitle:
      "Credit education is key to building a healthy credit culture. Learn more about credit today",
    cta: "View More",
    link: "/credit-education",
    image: hero4,
  },
  {
    title: "Business Intelligence & Insights Reports",
    subtitle:
      "Our risk intelligence module provides insights into credit risk factors and trends",
    cta: "View More",
    link: "#",
    image: hero5,
  },
];

// Shattered logo piece configurations (9 pieces in a 3x3 grid)
const logoPieces = [
  // Top row
  { id: 0, row: 0, col: 0, delay: 0 },
  { id: 1, row: 0, col: 1, delay: 0.1 },
  { id: 2, row: 0, col: 2, delay: 0.2 },
  // Middle row
  { id: 3, row: 1, col: 0, delay: 0.15 },
  { id: 4, row: 1, col: 1, delay: 0.25 },
  { id: 5, row: 1, col: 2, delay: 0.35 },
  // Bottom row
  { id: 6, row: 2, col: 0, delay: 0.3 },
  { id: 7, row: 2, col: 1, delay: 0.4 },
  { id: 8, row: 2, col: 2, delay: 0.5 },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const start = () => {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    };

    if (!isPaused) start();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]);

  useEffect(() => {
    if (currentSlide === 0 && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const isWelcomeSlide = currentSlide === 0;

  return (
    <section
      className="hero-section h-[400px] sm:h-[450px] md:h-[500px] lg:h-[512px] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${slide.image})`,
            zIndex: index === currentSlide ? 2 : 1
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Overlay - Stronger on mobile for better text readability */}
      <div className="hero-overlay absolute inset-0 bg-black/40 md:bg-black/30 z-[3]" />

      {/* Content - Responsive padding and spacing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-28 h-full flex items-center">
        <div className="max-w-4xl w-full animate-fade-in">
          {isWelcomeSlide ? (
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              {/* Welcome Text - Static Position */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wide text-white mb-1 sm:mb-2 text-left">
                Welcome to
              </h2>

              {/* Shattered Logo Animation Container */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mx-auto md:mx-0">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 blur-3xl -z-10 rounded-3xl" />
                
                {/* Shattered logo pieces */}
                <div className="relative w-full aspect-[420/120]">
                  {logoPieces.map((piece) => {
                    // Calculate random starting positions for dramatic effect
                    const randomX = (Math.random() - 0.5) * 800;
                    const randomY = (Math.random() - 0.5) * 800;
                    const randomRotate = (Math.random() - 0.5) * 360;

                    return (
                      <motion.div
                        key={piece.id}
                        initial={{
                          x: randomX,
                          y: randomY,
                          rotate: randomRotate,
                          opacity: 0,
                          scale: 0.3,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          rotate: 0,
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: piece.delay,
                          ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
                        }}
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          clipPath: `inset(${piece.row * 33.33}% ${(2 - piece.col) * 33.33}% ${(2 - piece.row) * 33.33}% ${piece.col * 33.33}%)`,
                        }}
                      >
                        <img
                          src={armadaLogo}
                          alt=""
                          className="w-full h-full object-contain drop-shadow-2xl"
                          draggable={false}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Shimmer effect after pieces come together */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    delay: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                  style={{
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s ease-in-out 1.5s 1",
                  }}
                />
              </div>

              {/* Subtitle - Animated */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-primary-foreground max-w-xl mx-auto md:mx-0 text-center md:text-left px-2 sm:px-0"
              >
                {slides[0].subtitle}
              </motion.p>

              {/* CTA Button - Animated */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                className="flex items-center gap-6 justify-center md:justify-start"
              >
                <Link
                  to={slides[0].link}
                  className="btn-secondary flex items-center gap-2 group px-6 py-3 text-sm sm:text-base"
                >
                  {slides[0].cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ) : (
            <>
              {/* Regular Slide Title - Responsive sizing */}
              <h1
                key={currentSlide}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4 md:mb-6 animate-slide-in-left text-center md:text-left"
              >
                {slides[currentSlide].title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i !== arr.length - 1 && <br />}
                  </span>
                ))}
                {slides[currentSlide].title === "ArmadaScore®" && (
                  <sup className="text-lg sm:text-xl md:text-2xl"></sup>
                )}
              </h1>

              {/* Subtitle - Responsive sizing and line clamping on mobile */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-left line-clamp-3 sm:line-clamp-none px-2 sm:px-0">
                {slides[currentSlide].subtitle}
              </p>

              {/* CTA Button */}
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <Link
                  to={slides[currentSlide].link}
                  className="btn-secondary flex items-center gap-2 group px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Navigation arrows - Hidden on small mobile, visible on larger screens */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide indicators - Responsive positioning and sizing */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary-foreground w-6 sm:w-8"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add shimmer keyframe animation to global styles if not already present */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;