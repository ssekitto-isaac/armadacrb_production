import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dataImage from "@/assets/data.jpg";
import { Database, Shield, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DataService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const dataServices: DataService[] = [
  {
    id: "data-assurance",
    icon: <Shield className="w-12 h-12 text-secondary" />,
    title: "Data Assurance",
    description: "For identifying, analyzing, and resolving all data quality issues that may impede your ability to draw intelligent conclusions from your data.",
  },
  {
    id: "data-consolidation",
    icon: <Database className="w-12 h-12 text-secondary" />,
    title: "Data Consolidation",
    description: "For aggregating your organization's data from multiple sources in order to provide a centralized view and usability.",
  },
  {
    id: "enterprise-data",
    icon: <Zap className="w-12 h-12 text-secondary" />,
    title: "Enterprise Data Management",
    description: "For establishing enterprise-wide policies and standards for collating, storing, securing, accessing, and using your organization's data.",
  },
];

const DataManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <div
          className="relative h-[500px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${dataImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 md:px-12 lg:px-28">
            <h1 className="text-5xl md:text-6xl text-left font-heading font-bold text-white mb-4">
              Data Management
            </h1>
            <p className="text-xl text-white">Home - Product Suites - Data Management</p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Data is a valuable source of actionable insight.
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Organizations that win adopt a data-driven approach to making business and management decisions, improving service delivery, and identifying trends that lead to value creation. Armada CRB has an all-inclusive data management implementation strategy that includes, but is not limited to, data architecture design, data aggregation, data management, data integration, data quality management, and data usage.
              </p>
              
              <div className="bg-secondary/10 border-l-4 border-secondary pl-6 py-4 mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-2">Products</h3>
                <p className="text-lg text-foreground">
                  <span className="font-bold text-secondary">Contact us today for an organized, efficient</span> and scalable way of collating, storing, and mining your organization's data. We will help you design and implement a comprehensive data management strategy that covers:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataServices.map((service) => (
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
              <Link to="/product-suites/portfolio" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/credit-reports" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${dataImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Manage Your Data Effectively
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Build a comprehensive data management strategy that delivers value and insight.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataManagementPage;