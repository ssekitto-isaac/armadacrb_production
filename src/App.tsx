import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProductSuitePage from "./pages/ProductSuitePage";
import CreditReportsPage from "./pages/CreditReportsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import PortfolioPage from "./pages/PortfolioPage";
import DataManagementPage from "./pages/DataManagementPage";
import NewsPage from "./pages/NewsPage";
import Contact from "./pages/Contactus";
import SelfInquiry from "./pages/SelfInquiry";
import CreditEducation from "./pages/CreditEducation";
import ArmadaScorePage from "./pages/ArmadaScorePage";
import FAQPage from "./pages/FAQ";
import DisputeResolutionForm from "./pages/DisputeResolutionForm";
import AboutArmada from "./pages/AboutArmada";
import OurPeople from "./pages/OurPeople";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* About Us */}
          <Route path="/AboutArmada" element={<AboutArmada />} />
          <Route path="/OurPeople" element={<OurPeople />} />

          {/* Product Suites */}
          <Route path="/product-suites" element={<ProductSuitePage />} />
          <Route path="/product-suites/credit-reports" element={<CreditReportsPage />} />
          <Route path="/product-suites/analytics" element={<AnalyticsPage />} />
          <Route path="/product-suites/portfolio" element={<PortfolioPage />} />
          <Route path="/product-suites/data-management" element={<DataManagementPage />} />

          {/* News */}
          <Route path="/news" element={<NewsPage />} />

          {/* Customer Information */}
          <Route path="/SelfInquiry" element={<SelfInquiry />} />
          <Route path="/DisputeResolutionForm" element={<DisputeResolutionForm />} />
          <Route path="/credit-education" element={<CreditEducation />} />
          <Route path="/FAQ" element={<FAQPage />} />

          {/* Contact Us */}
          <Route path="/contact" element={<Contact />} />

          {/* Additional Pages */}
          <Route path="/armadascore" element={<ArmadaScorePage />} />

          {/* 404 Not Found - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;