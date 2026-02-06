import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductSuitePage from "./pages/ProductSuitePage";
import NewsPage from "./pages/NewsPage";

import Index from "./pages/Index";
import Products from "./pages/Products";
import Contact from "./pages/Contactus";
import SelfInquiry from "./pages/SelfInquiry";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Index />} />
            <Route path="/product-suites" element={<ProductSuitePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/self-inquiry" element={<SelfInquiry />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
