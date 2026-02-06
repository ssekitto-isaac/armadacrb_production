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
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title-dark mb-4">Product Suite</h2>
          <p className="text-lg text-muted-foreground">
            Armada Credit Bureau has an advanced suite of credit bureau and analytics products and services that will help you achieve your business objectives.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="product-card group scroll-mt-24">
              {/* Icon Header */}
              <div className="bg-primary p-8 flex justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                  <p.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 line-clamp-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{p.description}</p>
                <a href={p.link} className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <h3 className="text-3xl font-bold mb-4">Let's Get Started</h3>
          <p className="text-lg text-muted-foreground">Are you ready to know your credit score?</p>
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
