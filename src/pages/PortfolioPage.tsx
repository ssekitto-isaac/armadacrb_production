import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import menArmada from "@/assets/men_armada.jpeg";
import { BarChart3, AlertCircle, Zap, Workflow, Clock, TrendingUp, Filter, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  subDescription?: string;
}

const portfolioServices: PortfolioService[] = [
  {
    id: "armada-promax",
    icon: <BarChart3 className="w-12 h-12 text-secondary" />,
    title: "ArmadaPromax®",
    description: "Portfolio Management for managing all types of portfolio sizes and applying risk and business policies (ArmadaScore, Decision Trees, etc.). It is deployable at all categories of institutions. With ArmadaPromax, our customers will have full liberty to review their credit portfolio whenever they desire.",
  },
  {
    id: "warning-alerts",
    icon: <AlertCircle className="w-12 h-12 text-secondary" />,
    title: "Warning and Alerts",
    description: "For maintaining a daily, weekly, and monthly automated control of the variation of the risk levels of credit customers, including changes in the probability of defaults, variations in debt levels, and other variations in the quality and condition of credit customers.",
  },
  {
    id: "armada-xpress",
    icon: <Zap className="w-12 h-12 text-secondary" />,
    title: "ArmadaXpress®",
    description: "For expediting order flows within an institution. It helps to make processes more efficient, reduces response times for any type of product, and can be customized to each institution's unique requirements.",
  },
  {
    id: "armada-credit-factory",
    icon: <Workflow className="w-12 h-12 text-secondary" />,
    title: "Armada Credit Factory (ACF)",
    description: "For managing the flow of all types of credit products, from loan origination to loan disbursement or product delivery.",
    subDescription: "[Decision Tree] for incorporating an institution's business and risk policies into pre-selected Armada CRB's products, services, or reports. ArmadaFilters® is customizable to each institution.",
  },
  {
    id: "armada-retro",
    icon: <Clock className="w-12 h-12 text-secondary" />,
    title: "ArmadaRetro®",
    description: "Past behavior is indicative of future behavior. Our retrospective helps you go back in time to get a view of the past credit footprints of your current customers. Our automated ArmadaRetro® offers you the flexibility to decide what you want to see from the past and also use ArmadaScore® to determine what the customer's score was at that particular point in time.",
  },
  {
    id: "armada-risk-insight",
    icon: <TrendingUp className="w-12 h-12 text-secondary" />,
    title: "Armada Risk Insight",
    description: "For comparison between market risk and institution risk. This product will help institutions know how well their portfolios and products perform in comparison to the rest of the market.",
  },
  {
    id: "armada-filters",
    icon: <Filter className="w-12 h-12 text-secondary" />,
    title: "ArmadaFilters®",
    description: "For incorporating an institution's business and risk policies into pre-selected Armada CRB's products, services, or reports. ArmadaFilters® is customizable to each institution.",
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <div
          className="relative h-[500px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${menArmada})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 md:px-12 lg:px-28">
            <h1 className="text-5xl md:text-6xl text-left font-heading font-bold text-white mb-4">
              Portfolio & Risk Management
            </h1>
            <p className="text-xl text-white">Home - Product Suites - Portfolio Management</p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Risk is ubiquitous. You need a partner that works
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                hand-in-glove with you to manage the dynamics of your credit portfolio's lifecycle with the objective of minimizing the risk of losses and maximizing opportunities for profitability. Available analytics products and services are:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioServices.map((service) => (
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
                  <p className="text-foreground leading-relaxed mb-3">
                    {service.description}
                  </p>
                  {service.subDescription && (
                    <p className="text-sm text-secondary font-semibold leading-relaxed">
                      {service.subDescription}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
              <Link to="/product-suites/analytics" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/data-management" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${menArmada})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Manage Risk Effectively
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Protect and optimize your portfolio with comprehensive risk management solutions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;