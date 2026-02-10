import React from "react";
import { ArrowRight, CheckCircle, Globe, Zap, Lock, Users } from "lucide-react";
import heroImage from "@/assets/FinanaceTeam1.jpg"; // team or data visualization
import teamImage from "@/assets/FinanceAnyalysing.jpg"; // professional team photo
import LiveChatWidget from "@/components/LiveChat";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";



// Replace these with your actual logo paths (optimized PNG/SVG, ideally 120-180px wide)
import logo1 from "@/assets/GTCO Uganda.png";
import logo2 from "@/assets/Housing Finance Bank Logo.png";
import logo3 from "@/assets/Tropical-Bank.png";
import logo4 from "@/assets/Finance Trust Bank Logo.png";
//import logo5 from "@/assets/armada-logo.png";
//import logo6 from "@/assets/armada-logo.png";


const partners = [
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
  { name: "Company C", logo: logo3 },
  { name: "Company D", logo: logo4 },
 // { name: "Company E", logo: logo5 },
  //{ name: "Company F", logo: logo6 },
  // duplicate first few for seamless infinite scroll
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
];

const whyPartner = [
  {
    icon: Globe,
    title: "Global Insight, Local Impact",
    description: "We blend international expertise with deep regional knowledge to deliver precise, actionable, and context-aware insights.",
    accent: "#14B1E7",
  },
  {
    icon: Zap,
    title: "Real-Time Intelligence",
    description: "By leveraging live, up-to-the-minute data, we empower you to make decisions that are timely, confident, and fully informed.",
    accent: "#91CD95",
  },
  {
    icon: Lock,
    title: "Uncompromising Security",
    description: "We apply industry-leading encryption and rigorous compliance protocols to ensure your data remains secure, private, and fully protected.",
    accent: "#0066AB",
  },
  {
    icon: Users,
    title: "Our Team’s Expertise",
    description: "You will benefit from the collective skills of our seasoned professionals in credit, risk, and data management, delivering insights that are reliable, actionable, and tailored to your specific needs.",
    accent: "#14B1E7",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero Section - unchanged */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-primary/70" />

          <div className="relative z-10 container mx-auto px-6 md:px-28 h-full flex items-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                About Armada Credit Bureau
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
                At Armada Credit Bureau, we believe that reliable data is the heartbeat of a thriving economy. As global leaders in credit information reporting and advanced analytics, we provide the clarity needed to navigate the complexities of today’s financial landscape. We transform raw data into actionable intelligence that fosters trust between lenders and borrowers.
              </p>
              <a
                href="#why-partner"
                className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg group"
              >
                Why Partner With Us
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Excellence & Inclusion Section - unchanged */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  src={teamImage}
                  alt="Armada team analyzing data"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>

              <div className="order-1 lg:order-2">
                <span className="section-label">Our Commitment</span>
                <h2 className="section-title-dark mb-6">
                  Excellence in Analytics, Integrity in Reporting
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In an era where speed and accuracy are paramount, Armada stands at the forefront of innovation. We leverage cutting-edge technology and robust data modeling to deliver comprehensive credit reports that go beyond just numbers. Our analytics provide a deep-dive into financial behaviors, allowing institutions to mitigate risk effectively while identifying new opportunities for sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  A Catalyst for Financial Inclusion: We don't just report data; we empower futures. For individuals, Armada serves as a gateway to financial opportunity. By maintaining the highest standards of data integrity, we ensure that every credit story is told fairly and accurately, helping consumers unlock access to the capital they need to build their dreams.
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us - unchanged */}
        <section id="why-partner" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Why Choose Armada</span>
              <h2 className="section-title-dark mb-6">Why Partner with Armada?</h2>
              <p className="text-lg text-muted-foreground">
                Whether you are a financial institution seeking to optimize your risk management or an individual looking to understand your credit standing, Armada Credit Bureau is your most trusted ally in the journey toward financial clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyPartner.map((item, index) => (
                <div
                  key={item.title}
                  className="value-card group text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300"
                  >
                    <item.icon className="w-10 h-10 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


{/*Worked with companies*/}
{/* Trusted by Leading Institutions – Fixed seamless marquee */}
<section className="py-16 md:py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-5 md:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
      Trusted by Leading Institutions
    </h2>

    <div className="relative">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />

      <div className="overflow-hidden">
        <div
          className="flex animate-marquee whitespace-nowrap will-change-transform hover:pause-marquee"
          style={{
            animationDuration: "35s",           // ← adjust speed: 25s = faster, 45s = slower
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {/* Duplicate logos TWICE for seamless infinite loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 xl:mx-20"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
        {/* Closing CTA - now with hero-style background image, NO full overlay */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat text-foreground"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Subtle light backdrop only behind content area (helps text readability) */}
          <div className="absolute inset-0 bg-white/65 md:bg-white/55" />

          <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-gray-900">
              Your Trusted Partner in Financial Clarity
            </h2>
            <p className="text-xl max-w-4xl mx-auto mb-12 text-gray-800 opacity-95">
              Join institutions and individuals across Uganda and beyond who rely on Armada for reliable, secure, and insightful credit information.
            </p>
           
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default AboutPage;