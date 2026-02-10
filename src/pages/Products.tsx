import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";
import Footer from "@/components/Footer";

const Products = () => {
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

export default Products;
