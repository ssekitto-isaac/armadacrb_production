import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";
import armada20 from "@/assets/armada-20.jpg";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Decision and Data Analytics" subtitle="Home - Product Suites - Analytics" />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Data speaks. We know its voice and help you understand its language</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Transform raw data into actionable insights with our advanced analytics platform. Make smarter business decisions with data-driven intelligence.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Predictive Analytics</h3>
                <p className="text-muted-foreground">Forecast trends and outcomes using advanced machine learning algorithms.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Business Intelligence</h3>
                <p className="text-muted-foreground">Visualize and analyze business metrics to drive strategic decision-making.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground">Monitor and optimize key performance indicators across your organization.</p>
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
            <h3 className="text-3xl font-bold text-white mb-4">Unlock Data Insights</h3>
            <p className="text-lg text-white">Let data drive your business forward.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;