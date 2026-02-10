import React from "react";
import { ArrowRight, BookOpen, ShieldCheck, TrendingUp, Users } from "lucide-react";
import literacyHero from "@/assets/FinanceWorkshop2.jpg"; // workshop / financial education image
import LiveChatWidget from "@/components/LiveChat";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: BookOpen,
    title: "Master Your Credit",
    description: "Understand credit scoring to unlock better rates and stronger financial access.",
    color: "#14B1E7",
  },
  {
    icon: TrendingUp,
    title: "Strategic Decisions",
    description: "Interpret reports, spot trends, and optimize borrowing & repayment strategies.",
    color: "#91CD95",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Aware Planning",
    description: "Build a resilient profile that anticipates challenges and supports sustainable growth.",
    color: "#0066AB",
  },
  {
    icon: Users,
    title: "Real-World Guidance",
    description: "Practical workshops & tools turn complex concepts into immediate results.",
    color: "#14B1E7",
  },
];

const CreditEducationPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero - with overlay */}
        <section className="relative h-[480px] md:h-[560px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${literacyHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
          <div className="relative z-10 container mx-auto px-5 md:px-16 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5">
                Credit Education & Financial Literacy
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-7">
                Knowledge builds financial confidence. We equip individuals, businesses, and institutions with the skills to make smart credit and money decisions.
              </p>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3 rounded-lg font-medium hover:bg-secondary/90 transition"
              >
                Explore Our Programs <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits section - with working hover effects */}
        <section id="benefits" className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-5 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm uppercase tracking-wide text-muted-foreground">
                Empowerment Through Knowledge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Why It Matters</h2>
              <p className="text-muted-foreground">
                Gain confidence, avoid costly mistakes, and turn financial understanding into real advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group text-center p-6 rounded-xl border border-gray-200 bg-white hover:border-secondary/60 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <benefit.icon
                      className="w-8 h-8 transition-colors duration-300 group-hover:scale-110"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA – background image, no full overlay */}
        <section
          className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat text-foreground"
          style={{ backgroundImage: `url(${literacyHero})` }}
        >
          {/* Subtle backdrop only behind content area */}
          <div className="absolute inset-0 bg-white/65 md:bg-white/55" />

          <div className="relative z-10 container mx-auto px-5 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Turn Knowledge Into Lasting Success
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-800">
              Our programs don’t just teach — they empower you to confidently navigate credit and finance for better outcomes and long-term well-being.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition shadow-md"
              >
                Join a Workshop <ArrowRight className="w-5 h-5" />
              </a>
             
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default CreditEducationPage;