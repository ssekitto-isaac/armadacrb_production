import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Background images
import hero1 from "@/assets/welcome2.png";
import hero2 from "@/assets/credit_report.png";
import hero3 from "@/assets/analytics_african_men.png";
import hero4 from "@/assets/women_standing_final2.png";
import hero5 from "@/assets/risk_int.png";
import hero6 from "@/assets/lady and the guy.png";

// Separate clean logo (only used on welcome slide)
import armadaLogo from "@/assets/armada-logo.png";

// Animated Logo Component
interface AnimatedLogoProps {
  src: string;
  alt: string;
  className?: string;
}

function AnimatedLogo({ src, alt, className = "" }: AnimatedLogoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Create 16 pieces (4x4 grid)
  const pieces = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    row: Math.floor(i / 4),
    col: i % 4,
  }));

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Hidden image to load */}
      <img
        src={src}
        alt={alt}
        className="invisible w-full h-auto"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Animated pieces overlay */}
      {imageLoaded && (
        <div className="absolute inset-0 w-full h-full">
          {pieces.map((piece) => {
            // Checkered pattern: alternate pieces come from different directions
            const isCheckered = (piece.row + piece.col) % 2 === 0;
            
            // Organized positions based on checkered pattern
            let initialX, initialY;
            
            if (isCheckered) {
              // White squares - come from top-left
              initialX = -400 - (piece.col * 50);
              initialY = -400 - (piece.row * 50);
            } else {
              // Black squares - come from bottom-right
              initialX = 400 + (piece.col * 50);
              initialY = 400 + (piece.row * 50);
            }

            return (
              <motion.div
                key={piece.id}
                initial={{
                  x: initialX,
                  y: initialY,
                  opacity: 0,
                  scale: 0.3,
                  rotate: isCheckered ? -180 : 180,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.4,
                  delay: (piece.row + piece.col) * 0.06, // Diagonal wave effect
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                }}
                className="absolute inset-0"
                style={{
                  clipPath: `inset(${piece.row * 25}% ${75 - piece.col * 25}% ${75 - piece.row * 25}% ${piece.col * 25}%)`,
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-auto drop-shadow-2xl object-contain"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </div>
      )}
      
      {/* Gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-blue-500/10 blur-3xl -z-10 rounded-3xl pointer-events-none" />
    </div>
  );
}

const slides = [
  {
    title: "", // Special handling for logo + gradient text
    subtitle: "We are global leaders in credit reporting and analytics",
    cta: "View Now",
    link: "#",
    image: hero1,
  },
  {
    title: "ArmadaScore®",
    subtitle:
      "Our predictive score module makes it possible for creditors to access risk reports about credit applicants",
    cta: "View Now",
    link: "/armadascore",
    image: hero6,
  },
  {
    title: "Credit & Risk Reports",
    subtitle:
      "Our predictive score module makes it possible for creditors to access risk reports about credit applicants",
    cta: "View Now",
    link: "#",
    image: hero2,
  },
  {
    title: "Analytics",
    subtitle:
      "With our analytics services, you will get more insight from data while learning more about prevailing trends",
    cta: "View More",
    link: "/analytics",
    image: hero3,
  },
  {
    title: "Credit Education & Financial Literacy",
    subtitle:
      "Credit education is key to building a healthy credit culture. Learn more about credit today",
    cta: "View More",
    link: "#",
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

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const start = () => {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    if (!isPaused) start();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const isWelcomeSlide = currentSlide === 0;

  return (
    <section
      className="hero-section h-[512px] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-28 py-28 h-full flex items-center">
        <div className="max-w-4xl animate-fade-in">
          {isWelcomeSlide ? (
            <div className="space-y-6 md:space-y-8">
              {/* Gradient "Welcome to" text */}
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wide bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #91CD95, #0066AB)",
                }}
              >
                Welcome to
              </h2>

              {/* Animated logo with pieces coming together */}
              <AnimatedLogo
                src={armadaLogo}
                alt="Armada Credit Bureau"
                className="max-w-[380px] md:max-w-[420px] w-full mx-auto md:mx-0 block"
              />

              {/* Subtitle */}
              <p className="text-xl text-primary-foreground max-w-xl mx-auto md:mx-0 text-center md:text-left">
                {slides[0].subtitle}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <a
                  href={slides[0].link}
                  className="btn-secondary flex items-center gap-2 group"
                >
                  {slides[0].cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ) : (
            <>
              <h1
                key={currentSlide}
                className="text-4xl md:text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 animate-slide-in-left"
              >
                {slides[currentSlide].title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i !== arr.length - 1 && <br />}
                  </span>
                ))}
                {slides[currentSlide].title === "ArmadaScore®" && (
                  <sup className="text-2xl">®</sup>
                )}
              </h1>
              <p className="text-xl text-primary-foreground mb-8 max-w-xl">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={slides[currentSlide].link}
                  className="btn-secondary flex items-center gap-2 group"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </>
          )}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary-foreground w-8"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;