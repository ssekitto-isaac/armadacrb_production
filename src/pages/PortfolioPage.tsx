import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";
import armada20 from "@/assets/armada-20.jpg";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Portfolio & Risk Management" subtitle="Home - Product Suites - Portfolio Management" />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Risk is ubiquitous. You need a partner that works hand-in-glove with you to manage it</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Comprehensive portfolio management solutions designed to identify, assess, and mitigate risk across your entire credit portfolio.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Portfolio Monitoring</h3>
                <p className="text-muted-foreground">Real-time tracking and assessment of your entire credit portfolio performance.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Risk Mitigation</h3>
                <p className="text-muted-foreground">Proactive strategies to reduce exposure and protect your portfolio value.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Regulatory Compliance</h3>
                <p className="text-muted-foreground">Ensure your portfolio meets all regulatory requirements and industry standards.</p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${armada20})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Manage Risk Effectively</h3>
            <p className="text-lg text-white">Protect and optimize your portfolio today.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;