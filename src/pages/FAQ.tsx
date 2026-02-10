import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Phone,
  MessageSquare,
  HelpCircle,
  Shield,
} from 'lucide-react';

import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChat";

import heroImage from "@/assets/DisputeResolution.jpg"; // consistent hero background
import TopBar from '@/components/TopBar';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Are Credit Reference Bureaus?",
      answer: "Credit Reference Bureaus (CRBs) are primarily data aggregators. They collate, research and analyze the data sourced from multiple data providers and use the data to produce credit information reports about the credit history, borrowing pattern and repayment behaviors of business and individuals.\n\nCRBs are primarily known to produce and sell credit information reports which lenders or creditors across all sectors use in assessing the creditworthiness of their customers."
    },
    {
      question: "What is a Credit Report?",
      answer: "Credit reports contain data on the past and current credit-related activities of an individual or a business. In addition, a credit report contains data on the demographic details of an individual or the registration and ownership details of a business."
    },
    {
      question: "What is a Credit Score?",
      answer: "A credit score is a numeric indicator of a borrower’s creditworthiness or propensity to repay. You can think of it as a number that indicates the level of risk associated with granting credit to a customer. The data used in calculating a credit score is sourced from the credit report."
    },
    {
      question: "From where do CRBs Get Data?",
      answer: "Depending on the legal and regulatory framework that guides the operations of a CRB, its sources data may include banks, telcos, microfinance companies, credit unions, saving and cooperative societies (SACOOS), retailers, utility companies, public registries and any other source of relevant data."
    },
    {
      question: "Can I Get a Copy of My Credit Information Report?",
      answer: "Yes, you can! Every individual is entitled to one free copy of their credit information report every twelve (12) calendar months. However, subsequent copies will be at a cost. You can get a copy of your personal credit report by completing and submitting the Self Inquiry Form."
    },
    {
      question: "Is My Data Safe at Armada CRB?",
      answer: "Yes. Your data is safe with us. As Uganda’s leading CRB, we consider it part of our fiduciary responsibility to preserve and protect the integrity all types of data in our repository. Access is granted on need-to-know basis."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar/>
      <Header />

      {/* Hero – same dimensions & treatment as DisputeResolution */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] scale-105 hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-primary/75 to-primary/85" />

       

        <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-28 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary-foreground/80 text-sm uppercase tracking-wider mb-5">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">FAQ</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Find quick answers to the most common questions about credit reporting and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section – same vertical spacing as form in DisputeResolution */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-label">Support Center</span>
              <h2 className="section-title-dark mb-4">Common Questions</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Browse through our most frequently asked questions. If your question isn't listed, feel free to contact us.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl shadow-xl border border-muted overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between group hover:bg-muted/40 transition-colors"
                  >
                    <div className="flex items-start gap-5 flex-1 pr-4">
                      <div className="mt-1 flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-foreground group-hover:text-secondary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-7 h-7 text-muted-foreground flex-shrink-0 transition-transform duration-400 ${
                        openIndex === index ? 'rotate-180 text-secondary' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-1">
                          <div className="h-px w-16 bg-secondary/40 mb-6" />
                          <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Compliance note – same style as DisputeResolution */}
            <div className="mt-12 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm max-w-3xl mx-auto">
              <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
              <p>
                All information is handled confidentially and in full compliance with Bank of Uganda guidelines and Uganda's Data Protection Act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA – matched exactly to DisputeResolution CTA styling */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat text-foreground"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/65 md:bg-white/55" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-gray-900">
            Still Have Questions?
          </h2>
          <p className="text-lg max-w-4xl mx-auto mb-8 text-gray-800 opacity-95">
            Our support team is ready to assist you with any additional inquiries about credit reports, disputes, or our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="tel:0800280180"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md text-base"
            >
              <Phone className="w-5 h-5" />
              Call Toll-Free: 0800 280 180
            </a>
            <a
              href="mailto:info@armadacrb.co.ug"
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-md text-base"
            >
              <MessageSquare className="w-5 h-5" />
              Email Support
            </a>
          </div>
        </div>
      </section>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default FAQ;