import { ArrowRight, FileText, BarChart3, Shield, Database } from "lucide-react";

interface Product {
  id: string;
  icon: any;
  title: string;
  description: string;
  link: string;
}

const products: Product[] = [
  {
    id: "credit-reports",
    icon: FileText,
    title: "Credit Information & Risk Reports",
    description: "Credit information and risk reports are an important source of actionable insights.",
    link: "/product-suites/credit-reports",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Decision and Data Analytics",
    description: "Data speaks. We know its voice and help you understand its language.",
    link: "/product-suites/analytics",
  },
  {
    id: "portfolio",
    icon: Shield,
    title: "Portfolio & Risk Management",
    description: "Risk is ubiquitous. You need a partner that works hand-in-glove with you to manage it.",
    link: "/product-suites/portfolio",
  },
  {
    id: "data-management",
    icon: Database,
    title: "Data Management",
    description: "Data is a valuable source of actionable insight for organizations that win.",
    link: "/product-suites/data-management",
  },
];

const ProductSuite = () => {
  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-2px]"></div>
            <span className="section-label">What We Offer</span>
            <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-2px]"></div>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="section-title-dark">Product Suite</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Armada Credit Bureau has an advanced suite of credit bureau and analytics products and services that will help you achieve your business objectives.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center justify-items-center">
          {products.map((p) => (
            <div
              key={p.id}
              className="product-card group scroll-mt-24 h-[26rem] flex flex-col w-full items-center text-center bg-white shadow-lg rounded-none"
            >
              {/* Icon Header */}
              <div className="p-4 justify-center">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary/90 transition-all duration-300">
                  <p.icon
                    className="w-12 h-12 text-primary-foreground"
                    stroke="currentColor"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 w-full items-center text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-foreground text-base mb-4 line-clamp-3 flex-1">
                  {p.description}
                </p>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-foreground font-bold text-base hover:gap-3 transition-all"
                >
                  Read More{" "}
                  <span className="w-8 h-8 rounded-full bg-[#1d2530] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;