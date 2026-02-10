import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import armada23 from "@/assets/armada-23.jpg";
import {
  FileText,
  Shield,
  TrendingUp,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface CreditRiskService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const creditRiskServices: CreditRiskService[] = [
  {
    id: "credit-reports",
    icon: <FileText className="w-12 h-12 text-secondary" />,
    title: "Comprehensive Credit Reports",
    description:
      "Detailed credit history and risk assessments that provide a complete picture of borrower profiles. Our reports include payment history, credit utilization, default patterns, and other critical metrics.",
  },
  {
    id: "risk-assessment",
    icon: <Shield className="w-12 h-12 text-secondary" />,
    title: "Risk Assessment & Scoring",
    description:
      "Advanced risk evaluation tools that quantify credit risk and help lenders make informed decisions. Our scoring models assess default probability and creditworthiness with precision.",
  },
  {
    id: "portfolio-analysis",
    icon: <BarChart3 className="w-12 h-12 text-secondary" />,
    title: "Portfolio Risk Analysis",
    description:
      "Analyze your entire credit portfolio to identify concentrations, trends, and potential exposures. Understand portfolio performance and optimize your lending strategy.",
  },
  {
    id: "trend-monitoring",
    icon: <TrendingUp className="w-12 h-12 text-secondary" />,
    title: "Trend & Pattern Monitoring",
    description:
      "Track credit trends and behavioral patterns across markets and segments. Anticipate market shifts and adjust your risk management strategies accordingly.",
  },
  {
    id: "rapid-reporting",
    icon: <Clock className="w-12 h-12 text-secondary" />,
    title: "Real-Time Reporting",
    description:
      "Access up-to-date credit information and risk reports instantly. Make time-sensitive decisions with current data and actionable insights.",
  },
  {
    id: "compliance-reporting",
    icon: <CheckCircle className="w-12 h-12 text-secondary" />,
    title: "Compliance & Regulatory Reports",
    description:
      "Generate reports that meet regulatory requirements and industry standards. Ensure your credit risk management complies with all applicable regulations.",
  },
];

const CreditRiskReports = () => {
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
          <div className="relative text-center px-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
              Credit Information & Risk Reports
            </h1>
            <p className="text-xl text-white">
              Home - Product Suites - Credit Reports
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Data is more than numbers—it's insight, intelligence, and
                opportunity
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                At Armada CRB, our Credit Information and Risk Reports transform
                raw credit and risk data into actionable insights that help
                businesses, lenders, and individuals make smarter, faster, and
                more confident decisions.
              </p>

              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Why Our Reports Stand Out:
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      <strong>Deep Insights:</strong> Understand trends,
                      patterns, and behaviors across credit portfolios with
                      comprehensive analysis.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      <strong>Predictive Power:</strong> Anticipate risks before
                      they occur and seize opportunities proactively with our
                      advanced models.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      <strong>Customizable Reports:</strong> Tailor credit
                      reports to your unique business needs for maximum clarity
                      and relevance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      <strong>Decision-Ready Format:</strong> Data presented in
                      clear, visual, and actionable formats to drive strategy
                      and confidence.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                Available credit information and risk reporting services:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creditRiskServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center">{service.icon}</div>
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
              <Link
                to="/product-suites"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link
                to="/analytics"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90"
              >
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
              Unlock the Story Behind Every Score
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              With Armada CRB Credit Information and Risk Reports, you're not
              just reviewing data—you're gaining the competitive edge in every
              credit decision.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreditRiskReports;
