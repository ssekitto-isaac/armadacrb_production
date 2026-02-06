import { useState, useEffect, useRef } from "react";
import hero1 from "@/assets/two_ladies_african american final.jpeg";
import hero2 from "@/assets/white_and_african_lady3.png";
import hero3 from "@/assets/analytics_african_men.png";
import armadaHero from "@/assets/armada-18.jpg";

type HeroVariant = "home" | "products";

interface HeroSectionProps {
  variant?: HeroVariant;
}

const HeroSection = ({ variant = "home" }: HeroSectionProps) => {
  const homeSlides = [
    {
      title: "ArmadaScore®",
      subtitle: "A good credit score gives you easy access to credit. Know your credit score today",
      link: "#",
      image: hero1,
    },
    {
      title: "Credit Reports",
      subtitle: "Our predictive score module makes it possible for creditors to access credit applicants",
      link: "#",
      image: hero2,
    },
    {
      title: "Analytics",
      subtitle: "With our analytics services, you will get more insight from data while learning more about prevailing trends",
      link: "#",
      image: hero3,
    },
  ];

  const productSlide = [
    {
      title: "Product Suites",
      subtitle: "",
      link: "#",
      image: armadaHero,
    },
  ];

  const slides = variant === "products" ? productSlide : homeSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (variant === "products") return;

    const start = () => {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    if (!isPaused) start();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slides.length, variant]);

  return (
    <section
      className="hero-section relative overflow-hidden h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white text-center">
        {slides[currentSlide].title}
      </h1>
    </section>
  );
};

export default HeroSection;
