import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import armada25 from "@/assets/credit_report.png";
import { FileText, BarChart3, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CreditService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const creditServices: CreditService[] = [
  {
    id: "individual-reports",
    icon: <FileText className="w-12 h-12 text-secondary" />,
    title: "Individual Credit Reports",
    description: "Detailed credit profiles for individuals including credit history, payment patterns, and risk assessment.",
  },
  {
    id: "corporate-reports",
    icon: <BarChart3 className="w-12 h-12 text-secondary" />,
    title: "Corporate Credit Reports",
    description: "Comprehensive business credit information covering company financials, payment history, and corporate risk evaluation.",
  },
  {
    id: "risk-assessment",
    icon: <CheckCircle className="w-12 h-12 text-secondary" />,
    title: "Risk Assessment Reports",
    description: "Advanced risk analysis and scoring to help you understand potential exposure and make better credit decisions.",
  },
];

const CreditReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <div
         className="relative h-[500px] flex items-center justify-start bg-cover bg-center pl-6 md:pl-12 lg:pl-20"
          style={{ backgroundImage: `url(${armada25})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
         <div className="relative text-left px-0">
  <h1 className="text-5xl md:text-6xl text-left font-heading font-bold text-white mb-4 leading-tight">
    Credit Information &<br />
    Risk Reports
  </h1>
 
</div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Credit information and risk reports are an important source
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                of actionable insights. Our comprehensive credit information and risk reports provide you with detailed insights into creditworthiness, financial health, and potential risks. These reports are designed to help you make informed decisions in lending, hiring, and business partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creditServices.map((service) => (
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
              <Link to="/product-suites/data-management" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/analytics" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${armada25})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Make Informed Credit Decisions
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Access comprehensive credit reports and risk assessments to support your lending decisions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreditReportsPage;