import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, easeOut, easeInOut } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  FileText,
  Shield,
  Upload,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Clock,
  FileCheck,
  Send,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";

// Hero image (used in both top hero and bottom CTA)
import heroImage from "@/assets/DisputeResolution.jpg";
import LiveChatWidget from "@/components/LiveChat";

const DisputeResolution = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reportReference: "",
    disputeNature: "",
    attachments: null as File | null,
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      reportReference: "",
      disputeNature: "",
      attachments: null,
    });
    setFileName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFormData({ ...formData, attachments: e.target.files[0] });
    }
  };

  // Hover expand variants (unchanged)
  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 10px 30px rgba(0, 102, 171, 0.08)",
      transition: { duration: 0.5, ease: easeOut },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 30px 70px rgba(20, 177, 231, 0.25)",
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  // Gentle floating animation (unchanged)
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

     <main className="flex-grow">
  {/* Hero – floating icons removed */}
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
          <span className="font-semibold">Dispute Resolution</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
          Dispute Resolution Form
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#form"
            className="btn-secondary inline-flex items-center gap-3 px-7 py-4 text-base font-semibold group shadow-md"
          >
            Submit Dispute Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:0800280180"
            className="inline-flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-all text-base"
          >
            <Phone className="w-5 h-5" />
            Need Help? Call Us
          </a>
        </div>
      </div>
    </div>
  </section>



        {/* 3D Expand-on-Hover Card – unchanged */}
        <section className="py-16 -mt-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="relative perspective-1000 cursor-pointer"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                onClick={() => {
                  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  className="bg-background rounded-3xl shadow-2xl border border-muted/50 overflow-hidden p-8 md:p-12 text-center relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    variants={floatVariants}
                    animate="float"
                  >
                    <Shield className="absolute top-8 left-8 w-24 h-24 md:w-28 md:h-28 text-secondary/15" />
                    <FileCheck className="absolute bottom-10 right-10 w-28 h-28 md:w-32 md:h-32 text-accent/10" />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-6 mx-auto">
                      <Shield className="w-10 h-10 text-secondary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-5">
                      Lodge Your Credit Dispute
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                      Found inaccuracies in your credit report? Click below to start the formal dispute process — secure, compliant, and handled promptly.
                    </p>

                    <div className="inline-flex items-center gap-3 px-7 py-4 bg-secondary/10 rounded-full text-secondary font-semibold hover:bg-secondary/20 transition-colors group">
                      Click to Start Dispute
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust facts – unchanged */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-bold text-foreground">Response Time</p>
                  <p className="text-sm text-muted-foreground">5–7 Business Days</p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-bold text-foreground">Secure & Encrypted</p>
                  <p className="text-sm text-muted-foreground">End-to-End Protection</p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <FileCheck className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-bold text-foreground">Regulated</p>
                  <p className="text-sm text-muted-foreground">Bank of Uganda Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form – unchanged */}
        <section id="form" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="section-label">Official Dispute</span>
                <h2 className="section-title-dark mb-4">Submit Your Dispute</h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Provide details below. All submissions are secure and handled in compliance with regulatory standards.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-10 p-6 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-start gap-5">
                  <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Dispute Submitted Successfully</h4>
                    <p className="text-sm text-muted-foreground">
                      Reference: #DR-{Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}<br />
                      We will contact you within 5-7 business days.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10 bg-background rounded-2xl shadow-xl p-8 md:p-10 border border-muted">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" /> Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Dispute Details */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-secondary" /> Dispute Details
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Credit Report Reference Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="reportReference"
                        value={formData.reportReference}
                        onChange={handleChange}
                        required
                        placeholder="e.g., CRB-12345678"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nature of Dispute <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="disputeNature"
                        value={formData.disputeNature}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe the inaccurate information in detail..."
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <Upload className="w-5 h-5 text-secondary" /> Supporting Documents
                  </h3>
                  <label
                    htmlFor="dispute-upload"
                    className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-muted rounded-xl py-8 px-5 cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all group"
                  >
                    <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-all">
                      <Upload className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div className="text-center">
                      <p className="text-foreground font-semibold group-hover:text-secondary text-sm">
                        {fileName || "Upload Evidence / Supporting Letters"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, JPG, PNG • Max 5MB
                      </p>
                    </div>
                    <input
                      id="dispute-upload"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary-foreground font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 text-base group shadow-md"
                  >
                    Submit Dispute Request
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </form>

              <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                <p>
                  All disputes are handled confidentially and in full compliance with Bank of Uganda guidelines and Uganda's Data Protection Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Help CTA – now uses hero background image, no full overlay */}
        <section
          className="relative py-16 bg-cover bg-center bg-no-repeat text-foreground"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Subtle semi-transparent backdrop behind content only */}
          <div className="absolute inset-0 bg-white/65 md:bg-white/55" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-gray-900">
              Need Assistance with Your Dispute?
            </h2>
            <p className="text-lg max-w-4xl mx-auto mb-8 text-gray-800 opacity-95">
              Our team is here to help. Contact us for guidance on submitting or tracking your dispute.
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
                href="#"
                className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-base font-semibold group shadow-md"
              >
                Contact Support
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default DisputeResolution;