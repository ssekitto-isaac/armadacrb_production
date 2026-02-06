import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";

const ProductSuitePage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <ProductHero />
        <ProductSuiteList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductSuitePage;
