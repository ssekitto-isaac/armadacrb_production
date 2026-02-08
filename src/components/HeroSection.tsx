import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Background images
import hero1 from "@/assets/young-team.png";
import hero2 from "@/assets/credit-report-fine.png";
import hero3 from "@/assets/analytics_african_men.png";
import hero4 from "@/assets/women_standing_final2.png";
import hero5 from "@/assets/risk_int.png";
import hero6 from "@/assets/lady and the guy final.png";
import hero7 from "@/assets/welcome6.png";

// Separate clean logo (only used on welcome slide)
import armadaLogo from "@/assets/armada-logo-whitewords.png"; // ← confirm this path is correct

const slides = [
  {
    title: "", // Special handling for logo + gradient text
    subtitle: "We are global leaders in credit reporting and analytics",
    cta: "View Now",
    link: "#",
    image: hero1
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
    link: "/product-suites/credit-reports",
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

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleCTA = (e: any, slideIndex: number) => {
    if (slideIndex === 0 || slideIndex === 1) {
      e?.preventDefault?.();
      const el = document.getElementById("standards");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                  backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)",
                }}
              >
                Welcome to
              </h2>

              {/* Smaller logo */}
              <motion.div
                key="welcome-logo"
                initial={{ opacity: 0, y: 30, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1.0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative inline-block max-w-[380px] md:max-w-[420px] w-full mx-auto md:mx-0 block"
              >
                <img
                  src={armadaLogo}
                  alt="Armada Credit Bureau"
                  className="w-full h-auto drop-shadow-2xl object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-blue-500/10 blur-3xl -z-10 rounded-3xl pointer-events-none" />
              </motion.div>


              {/* Subtitle */}
              <p className="text-xl text-primary-foreground max-w-xl mx-auto md:mx-0 text-center md:text-left">
                {slides[0].subtitle}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <a
                  href={slides[0].link}
                  onClick={(e) => handleCTA(e, 0)}
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
                  <sup className="text-2xl"></sup>
                )}
              </h1>
              <p className="text-xl text-primary-foreground mb-8 max-w-xl">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={slides[currentSlide].link}
                  onClick={(e) => handleCTA(e, currentSlide)}
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