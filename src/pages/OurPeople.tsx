import React from "react";
import { ArrowRight, Award, Globe, Linkedin, Mail } from "lucide-react";
import ceoImage from "@/assets/CEO.jpg";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChat";

const featuredMember = {
  name: "Adebowale Atobatele",
  position: "Ag. Chief Executive/Operating Officer",
  image: ceoImage,
  bio: "Visionary leader in credit bureau operations, banking & technology. Driving innovation in credit reporting and analytics across Africa — focused on trust, inclusion, and data-driven decisions.",
  expertise: "Global standards, local impact",
  linkedin: "https://www.linkedin.com/in/adebowale-atobatele-9412b212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  email: "info@armadacrb.co.ug",
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[420px] md:h-[520px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${featuredMember.image})` }}
          />
          <div className="absolute inset-0 bg-primary/75" />

          <div className="relative z-10 container mx-auto px-5 md:px-16 h-full flex items-center">
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-wide text-primary-foreground/80">
                Leadership
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
                Meet Our Leadership
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Experienced professionals committed to reliable credit insights and financial empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Leader - IMAGE SIZE REDUCED */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Portrait - smaller & better proportioned */}
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2">
                <div className="relative w-full max-h-[420px] md:max-h-[520px] aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={featuredMember.image}
                    alt={featuredMember.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="
                      absolute inset-0 rounded-2xl border-4 border-transparent 
                      group-hover:border-secondary pointer-events-none 
                      transition-all duration-500 opacity-0 group-hover:opacity-100
                    "
                  />
                </div>

                {/* Social icons on hover - unchanged */}
                <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a
                    href={featuredMember.linkedin}
                    className="w-12 h-12 rounded-full bg-secondary/90 flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors shadow-lg"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${featuredMember.email}`}
                    className="w-12 h-12 rounded-full bg-secondary/90 flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors shadow-lg"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Bio - unchanged */}
              <div>
                <span className="text-sm uppercase tracking-wide text-muted-foreground">CEO</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{featuredMember.name}</h2>
                <p className="text-xl font-bold text-secondary mb-5">{featuredMember.position}</p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {featuredMember.bio}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{featuredMember.expertise}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Committed to financial inclusion & regulatory excellence</span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3 rounded-lg font-medium hover:bg-secondary/90 transition"
                >
                  Connect with Leadership <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default TeamPage;