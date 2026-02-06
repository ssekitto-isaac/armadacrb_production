import { useState, useEffect, useRef } from "react";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import heroImage from "@/assets/hero-image.jpg";
import hero1 from "@/assets/two_ladies_african american final.jpeg";
import hero2 from "@/assets/white_and_african_lady3.png";
import hero3 from "@/assets/analytics_african_men.png";

const slides = [
	{
		title: "ArmadaScore®",
		subtitle: "A good credit score gives you easy access to credit. Know your credit score today",
		cta: "View Now",
		link: "#",
		image: hero1,
	},
	{
		title: "Credit Reports",
		subtitle: "Our predictive score module makes it possible for creditors to access credit applicants",
		cta: "View Now",
		link: "#",
		image: hero2,
	},
	{
		title: "Analytics",
		subtitle: "With our analytics services, you will get more insight from data while learning more about prevailing trends",
		cta: "View More",
		link: "#",
		image: hero3,
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
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

	return (
		<section
			className="hero-section"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			{/* Background Images (stacked for cross-fade) */}
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 bg-cover bg-center bg-no-repeat carousel-image ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"}`}
					style={{ backgroundImage: `url(${slide.image})` }}
					aria-hidden={index !== currentSlide}
				/>
			))}

			{/* Overlay */}
			<div className="hero-overlay" />

			{/* Content */}
			<div className="relative z-10 container mx-auto px-28 py-28">
				<div className="max-w-3xl animate-fade-in">
					<h1
						key={currentSlide}
						className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-slide-in-left"
					>
						{slides[currentSlide].title}
						{slides[currentSlide].title === "ArmadaScore®" && (
							<sup className="text-2xl">®</sup>
						)}
					</h1>
					<p className="text-xl text-primary-foreground mb-8 max-w-xl">
						{slides[currentSlide].subtitle}
					</p>

					<div className="flex items-center gap-6">
						<button className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-300 border border-primary-foreground/30">
							<Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
						</button>

						<a
							href={slides[currentSlide].link}
							className="btn-secondary flex items-center gap-2 group"
						>
							{slides[currentSlide].cta}
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</a>
					</div>
				</div>

				{/* Navigation arrows */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
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
