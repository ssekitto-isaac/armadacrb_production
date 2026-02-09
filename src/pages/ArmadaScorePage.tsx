import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  CheckCircle,
  Zap,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import coupleImage from "@/assets/lady and the guy final.png";

interface ScoreFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const scoreFeatures: ScoreFeature[] = [
  {
    id: "why-matters",
    icon: <CheckCircle className="w-12 h-12 text-secondary" />,
    title: "Why Your Armada Score Matters",
    description:
      "Lower interest rates, higher credit limits, faster approvals, and better terms on mortgages, mobile contracts, and more.",
  },
  {
    id: "what-makes-up",
    icon: <TrendingUp className="w-12 h-12 text-secondary" />,
    title: "What Makes Up Your Score",
    description:
      "Payment history, credit utilization, credit history length, and account diversity all contribute to your comprehensive score.",
  },
  {
    id: "how-to-improve",
    icon: <Zap className="w-12 h-12 text-secondary" />,
    title: "How to Improve Your Armada Score",
    description:
      "Pay on time every time, reduce outstanding debt, and check your report regularly to ensure accuracy and security.",
  },
];

const ArmadaScorePage = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="relative h-[500px] flex items-center justify-center md:justify-start bg-cover bg-center"
          style={{ backgroundImage: `url(${coupleImage})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative text-left px-4 md:px-0 md:pl-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              ArmadaScore®
            </h1>
            <p className="text-xl text-white">Our predictive score module makes it possible for creditors to <br/> access risk reports about credit applicants</p>
          </div>
        </div>

        {/* Main Content Section */}
        <section ref={mainRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Your Armada Score isn't just a set of numbers
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                It's a powerful reflection of your financial health. Your credit score is your "financial resume" that follows you through every phase of your adult life. It shows lenders at a glance how responsibly you manage credit, helping them make informed lending decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scoreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
              <Link to="./product-suites/credit-reports" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="./product-suites/analytics" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${coupleImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Build Your Financial Success
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Understand your ArmadaScore and take control of your financial future with informed decisions and responsible credit management.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArmadaScorePage;
