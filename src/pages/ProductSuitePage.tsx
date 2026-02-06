import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";

const ProductSuitePage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <ProductHero />
        <ProductSuiteList />
      </main>
    </div>
  );
};

export default ProductSuitePage;
