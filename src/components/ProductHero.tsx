import armadaHero from "@/assets/armada-18.jpg";

interface ProductHeroProps {
  title?: string;
  subtitle?: string;
}

const ProductHero = ({ title = "Product Suites", subtitle = "" }: ProductHeroProps) => {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${armadaHero})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white">
          {title}
        </h1>
        {subtitle && <p className="text-xl text-white mt-4">{subtitle}</p>}
      </div>
    </section>
  );
};

export default ProductHero;
