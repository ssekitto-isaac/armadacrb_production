import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";
import Footer from "@/components/Footer";

const ProductSuitePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Product Suites" subtitle="Home - Product Suites" />
        <ProductSuiteList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductSuitePage;
