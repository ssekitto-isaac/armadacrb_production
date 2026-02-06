import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSuite from "@/components/ProductSuite";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <HeroSection variant="products" />
        <ProductSuite />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
