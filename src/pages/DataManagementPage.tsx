import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";
import armada20 from "@/assets/armada-20.jpg";

const DataManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Data Management" subtitle="Home - Product Suites - Data Management" />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Data is a valuable source of actionable insight for organizations that win</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Manage, organize, and leverage your data infrastructure to gain competitive advantage and drive meaningful business outcomes.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Data Integration</h3>
                <p className="text-muted-foreground">Seamlessly integrate data from multiple sources into a unified platform.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Data Quality Management</h3>
                <p className="text-muted-foreground">Ensure accuracy, consistency, and reliability of your data assets.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Data Security</h3>
                <p className="text-muted-foreground">Protect sensitive information with enterprise-grade security protocols.</p>
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
            <h3 className="text-3xl font-bold text-white mb-4">Master Your Data</h3>
            <p className="text-lg text-white">Turn data into competitive advantage.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataManagementPage;