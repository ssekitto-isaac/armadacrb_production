import { useState } from "react";
import {
  FileText,
  Phone,
  Calendar,
  PenTool,
  Upload,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Shield,
  Clock,
  User,
  MapPin,
  CreditCard,
  Send,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChat";

import heroImage from "@/assets/men_armada.jpeg";

const SelfInquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    idType: "",
    idNumber: "",
    idFile: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      idType: "",
      idNumber: "",
      idFile: null,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, idFile: e.target.files[0] });
    }
  };

  const processSteps = [
    {
      icon: FileText,
      title: "Complete Form",
      description: "Fill the Corporate Self Inquiry Request Form below.",
    },
    {
      icon: Phone,
      title: "Book Appointment",
      description: "Toll Free line 0800280180\nOffice line 0326301025",
    },
    {
      icon: Calendar,
      title: "Visit Our Office",
      description: "Arrive on time on date of appointment.",
    },
    {
      icon: PenTool,
      title: "Collect Report",
      description: "Collect Self Inquiry Report and sign for collection Note.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero – matched to DisputeResolution */}
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
                <span className="font-semibold">Self Inquiry</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
                Self Inquiry
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#form"
                  className="btn-secondary inline-flex items-center gap-3 px-7 py-4 text-base font-semibold group shadow-md"
                >
                  Start Request Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0800280180"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-all text-base"
                >
                  <Phone className="w-5 h-5" />
                  Book via Phone
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps – adjusted spacing & sizing to match rhythm */}
        <section className="py-16 -mt-12 relative z-10 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="section-label">Easy Process</span>
              <h2 className="section-title-dark mb-4">How to Get Your Report</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to access your credit information securely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl shadow-xl border border-muted p-6 text-center transition-all hover:shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section – matched sizing, padding, inputs */}
        <section id="form" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="section-label">Self Inquiry Request</span>
                <h2 className="section-title-dark mb-4">Submit Your Request</h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Provide accurate details below. All submissions are secure and compliant.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-10 p-6 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-start gap-5">
                  <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Request Submitted Successfully</h4>
                    <p className="text-sm text-muted-foreground">
                      Reference: #SI-{Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}<br />
                      Call 0800 280 180 to book collection appointment.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10 bg-background rounded-2xl shadow-xl p-8 md:p-10 border border-muted">
                {/* Personal Details */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" /> Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
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
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" /> Residential Address
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Address (No P.O. Box) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                        />
                      </div>
                    </div>
                    <div>
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

                {/* Identification */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-secondary" /> Identification
                  </h3>
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          ID Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="idType"
                          value={formData.idType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background appearance-none cursor-pointer"
                        >
                          <option value="">Select ID Type</option>
                          <option value="national-id">National ID</option>
                          <option value="passport">Passport</option>
                          <option value="drivers-license">Driver's License</option>
                          <option value="financial-card">Financial Card</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          ID Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Upload Copy of Valid ID
                      </label>
                      <label
                        htmlFor="id-upload"
                        className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-muted rounded-xl py-8 px-5 cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all group"
                      >
                        <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-all">
                          <Upload className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                        </div>
                        <div className="text-center">
                          <p className="text-foreground font-semibold group-hover:text-secondary text-sm">
                            {formData.idFile ? formData.idFile.name : "Upload Evidence / Supporting Letters"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PDF, JPG, PNG • Max 5MB
                          </p>
                        </div>
                        <input
                          id="id-upload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary-foreground font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 text-base group shadow-md"
                  >
                    Submit Your Request
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </form>

              <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                <p>
                  All requests are handled confidentially and in full compliance with Bank of Uganda guidelines and Uganda's Data Protection Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA – matched to DisputeResolution */}
        <section
          className="relative py-16 bg-cover bg-center bg-no-repeat text-foreground"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-white/65 md:bg-white/55" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-gray-900">
              Need Assistance with Your Request?
            </h2>
            <p className="text-lg max-w-4xl mx-auto mb-8 text-gray-800 opacity-95">
              Our team is here to help. Contact us for guidance on submitting or tracking your inquiry.
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

export default SelfInquiry;