import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";
import armada23 from "@/assets/armada-23.jpg";
import { BarChart3, TrendingUp, Target, Users, Zap, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AnalyticsService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const analyticsServices: AnalyticsService[] = [
  {
    id: "batch-review",
    icon: <BarChart3 className="w-12 h-12 text-secondary" />,
    title: "Armada Batch Review",
    description: "For periodic assessment of your entire credit portfolio. Our batch review allows for large-scale assessment in order to obtain detailed information contained in credit reports, in a practical format that supports content filtering.",
  },
  {
    id: "reject-inference",
    icon: <TrendingUp className="w-12 h-12 text-secondary" />,
    title: "Reject Inference Analysis",
    description: "Optimal Cut-off Calculation useful for determining the optimal cut-off score based on maximizing the gross profit of the credit portfolio. RIA adopted the Monte Carlo simulation in calculating the value at risk and the economic capital for credit portfolios held by banks and other creditors.",
  },
  {
    id: "armada-score-plus",
    icon: <Target className="w-12 h-12 text-secondary" />,
    title: "ArmadaScore® Plus",
    description: "For customization of variables, parameter adjustments, and most importantly, modeling the product with the information of the credits that make up the credit portfolios of the Institution.",
  },
  {
    id: "income-capacity",
    icon: <Users className="w-12 h-12 text-secondary" />,
    title: "Expected Income Capacity",
    description: "For estimating the expected income of credit customers in order to determine their capacity to repay a loan or credit facility.",
  },
  {
    id: "armada-score",
    icon: <Zap className="w-12 h-12 text-secondary" />,
    title: "ArmadaScore®",
    description: "Also called credit score, makes it feasible for creditors to quickly measure the credit default risk of each credit applicant.",
  },
  {
    id: "risk-pricing",
    icon: <DollarSign className="w-12 h-12 text-secondary" />,
    title: "Armada Risk-Pricing Score",
    description: "(Risk Based Interest Rates) for calculating the ideal interest rate for each credit customer based on the level of risk associated with each consumer.",
  },
];

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <div
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${armada23})` }}
        >
            <div className="absolute inset-0 bg-black/40" />
         <div className="relative text-left px-0">
  <h1 className="text-5xl md:text-6xl text-left font-heading font-bold text-white mb-4 leading-tight">
    Data & Decision<br />
    Analytics 
  </h1>
  <p className="text-xl text-white">
    Home - Product Suites - Analytics
  </p>
</div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Data speaks. We know its voice and we will help you
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                to understand the language of data's intelligence. With our analytics services, you will get more insight from data, learn more about prevailing trends and acquire the acumen to scale and optimize your products and services. Available analytics products/services are:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
              <Link to="/product-suites/credit-reports" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/portfolio" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${armada23})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Transform Your Data Into Insights
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Let our advanced analytics solutions help you understand trends, optimize decisions, and drive measurable business growth.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;