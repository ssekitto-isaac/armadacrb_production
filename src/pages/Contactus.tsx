import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronRight, Globe, Shield, Zap, MessageSquare } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * 3D TILT ENGINE
   * Provides realistic physics-based rotation and depth layers
   */
  const TiltCard3D = ({ item }: { item: any }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the movement with spring physics
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Map mouse position to degree rotation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        className="relative h-full"
      >
        {/* Main Card Body */}
        <div 
          style={{ 
            transform: "translateZ(0px)",
            transformStyle: "preserve-3d" 
          }}
          className="group relative h-full glass p-8 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500 overflow-hidden"
        >
          {/* Dynamic Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-emerald-500/0 group-hover:from-blue-500/5 group-hover:to-emerald-500/5 transition-colors duration-700 pointer-events-none" />

          {/* ICON LAYER (High Depth: 60px) */}
       
<div 
  style={{ transform: "translateZ(60px)" }}
  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 shadow-sm ${
    item.color === 'emerald' 
      ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-emerald-200' 
      : 'bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-blue-200'
  }`}
>
  {item.icon}
</div>

         {/* TEXT LAYER (Medium Depth: 40px) */}
<div style={{ transform: "translateZ(40px)" }} className="text-center">
  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
    {item.title}
  </h3>
  <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
    {item.desc}
  </p>
</div>
{/* BUTTON LAYER (Medium Depth: 30px) */}
<div style={{ transform: "translateZ(30px)" }} className="text-center">
  <button className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
    item.color === 'emerald' ? 'text-emerald-600' : 'text-blue-700'
  }`}>
    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current group-hover:after:w-full after:transition-all">
      {item.action}
    </span>
    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
  </button>
</div>

          {/* Abstract 3D Geometric Shape in Background */}
          <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
            <div className={`w-24 h-24 rounded-full border-[10px] ${item.color === 'emerald' ? 'border-emerald-500' : 'border-blue-500'}`} />
          </div>
        </div>
      </motion.div>
    );
  };

  /**
   * 3D SUPPORT TERMINAL VISUAL
   * Compact orbiting animation representing secure connectivity
   */
  const SupportVisual = () => (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-28 h-28 bg-white rounded-[2.5rem] shadow-2xl border border-blue-100 flex items-center justify-center group"
      >
        <MessageSquare className="w-12 h-12 text-blue-900 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-sm" />
        </div>
      </motion.div>
      
      {/* Orbiting Elements */}
      {[0, 120, 240].map((rotation, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [rotation, rotation + 360] }}
          transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-52 h-52 border border-dashed border-slate-200 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-center shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
          </div>
        </motion.div>
      ))}
      
      {/* Atmospheric Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10" />
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: "Head Office", 
      desc: "29A, Lumumba Avenue, Kampala", 
      color: "blue",
      action: "View on Map" 
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "Toll Free  ", 
      desc: "Toll Free: 0800 280 180", 
      color: "emerald",
      action: "Call Now" 
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Digital Concierge", 
      desc: "info@armadacrb.co.ug", 
      color: "blue",
      action: "Copy Email" 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Availability", 
      desc: "Mon - Fri: 8:00 - 17:00", 
      color: "emerald",
      action: "Schedule Call" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <TopBar />
      <Header />

      {/* COMPACT HERO */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
             
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Contact Us <br/>
              
              </h1>
              <p className="text-lg text-slagit chete-500 max-w-lg leading-relaxed antialiased">
                Connect with our certified credit specialists for dispute resolution, 
                institutional partnerships, and technical API assistance.
              </p>
            </motion.div>
      <motion.div 
  initial={{ opacity: 0, scale: 0.9 }} 
  animate={{ opacity: 1, scale: 1 }} 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center lg:justify-end cursor-pointer"
  onClick={() => {
    document.getElementById('ContactForm')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }}
>
  <SupportVisual />
</motion.div>
          </div>
        </div>
        {/* Background Mesh Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      </section>

      {/* Interactive Quick Contact Grid with 3D Tilt Cards */}
      <section className="pb-24 -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactItems.map((item, idx) => (
              <TiltCard3D key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Terminal */}
     <section id="ContactForm" className="pb-32">
  <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Form Container */}
            <div className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 p-8 md:p-14 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Dispatch an Inquiry</h2>
                  <p className="text-slate-500">Our automated routing system will direct your request to the appropriate department.</p>
                </div>

                {isSubmitted && (
                  <div className="mb-8 p-5 bg-emerald-500 text-white rounded-2xl flex items-center gap-4 animate-in zoom-in duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                    <div>
                      <p className="font-bold">Message Transmitted</p>
                      <p className="text-sm opacity-90 text-emerald-50">Reference #ARC-{Math.floor(Math.random() * 10000)} generated.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Identity</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full bg-slate-50 border-transparent border-b-2 border-b-slate-200 py-3 px-1 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Corporate Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className="w-full bg-slate-50 border-transparent border-b-2 border-b-slate-200 py-3 px-1 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300"
                            required
                        />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Case Category</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-transparent border-b-2 border-b-slate-200 py-3 px-1 focus:outline-none focus:border-blue-600 appearance-none cursor-pointer transition-all"
                        required
                    >
                        <option value="">Select Priority</option>
                        <option value="credit-report">Access to My Credit Report</option>
                        <option value="dispute">Data Dispute / Correction</option>
                        <option value="partnership">Bank Partnership</option>
                        <option value="support">Technical API Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Context & Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Provide details for faster processing..."
                        className="w-full bg-slate-50 border-transparent border-b-2 border-b-slate-200 py-3 px-1 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 resize-none"
                        required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white font-bold py-5 rounded-2xl hover:bg-emerald-600 transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.98] flex items-center justify-center gap-3 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Visual Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden h-fit group">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-1000" />
                <Shield className="w-12 h-12 text-emerald-400 mb-8" />
                <h3 className="text-2xl font-bold mb-4">Enterprise Data Guard</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">Join 500+ financial institutions leveraging Armada's secure data analytics for real-time risk assessment.</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO 27001 Certified
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bank of Uganda Regulated
                    </div>
                </div>
              </div>

              {/* Map Component with styling */}
              <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden h-[300px] border border-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573268772547!2d32.5771!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7b6c6c6c6d%3A0x7b7b7b7b7b7b7b7b!2s29A%20Lumumba%20Ave%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Armada Office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      {/* Custom Styles for Blobs and Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }ZA tY
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
};

export default Contact;