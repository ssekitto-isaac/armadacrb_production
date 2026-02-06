import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";
import armada20 from "@/assets/armada-20.jpg";

const CreditReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Credit Information & Risk Reports" subtitle="Home - Product Suites - Credit Reports" />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Credit information and risk reports are an important source</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our comprehensive credit information and risk reports provide you with detailed insights into creditworthiness, financial health, and potential risks. These reports are designed to help you make informed decisions in lending, hiring, and business partnerships.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Individual Credit Reports</h3>
                <p className="text-muted-foreground">Detailed credit profiles for individuals including credit history, payment patterns, and risk assessment.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Corporate Credit Reports</h3>
                <p className="text-muted-foreground">Comprehensive business credit information covering company financials, payment history, and corporate risk evaluation.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Risk Assessment Reports</h3>
                <p className="text-muted-foreground">Advanced risk analysis and scoring to help you understand potential exposure and make better credit decisions.</p>
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
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-white">Contact us today to learn more about our credit reports.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreditReportsPage;