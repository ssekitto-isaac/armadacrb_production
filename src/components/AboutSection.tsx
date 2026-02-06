import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Activity, Zap, Award } from "lucide-react";

// Importing your new images
import AboutUsS1 from "@/assets/AboutUsS1.jpg";
import AboutUsS2 from "@/assets/AboutUsS2.jpg";
import AboutUsS3 from "@/assets/AboutUsS3.jpg";

const features = [
  { title: "Bank of Uganda Licensed", desc: "Regulated Credit Reporting", icon: ShieldCheck },
  { title: "Advanced Analytics", desc: "Predictive Risk Modeling", icon: Activity },
  { title: "Robust Reporting", desc: "High-Fidelity Data Stacks", icon: Zap },
  { title: "Stakeholder Focus", desc: "Institutional Growth", icon: Award },
];

const AboutSection = () => {
  // We double the array to create a seamless infinite loop
  const marqueeImages = [AboutUsS1, AboutUsS2, AboutUsS3, AboutUsS1, AboutUsS2, AboutUsS3];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      
      {/* Background Tech Watermark */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <div className="text-[100px] font-black leading-none text-slate-900 select-none uppercase italic">Intelligence</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: VERTICAL IMAGE MARQUEE */}
          <div className="relative h-[600px] group">
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl bg-slate-100">
              
              {/* The Marquee Container */}
              <motion.div 
                className="flex flex-col gap-4"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {marqueeImages.map((img, idx) => (
                  <div key={idx} className="h-[400px] w-full flex-shrink-0 px-2">
                    <img
                      src={img}
                      alt={`Institutional View ${idx}`}
                      className="w-full h-full object-cover rounded-[2rem] shadow-sm"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Glass Overlay for professional blending */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/40 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem] pointer-events-none" />
            </div>

            {/* FLOATING DATA BADGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Bureau Identity</div>
                  <div className="text-xs font-bold uppercase">Certified Infrastructure</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-emerald-500" />
              <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">Protocol_Biography</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase italic mb-8">
              dedicated to supporting you <br/>
              <span className="text-blue-700 not-italic">Credit Standard.</span>
            </h2>

            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
              Armada Credit Bureau Limited is a duly licensed entity operating within the 
              regulatory framework of the <span className="text-slate-900 font-bold">Central Bank</span>. 
              We synthesize high-velocity data into actionable institutional intelligence.
            </p>

            {/* INTERACTIVE FEATURE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <div className="text-[13px] font-black text-slate-900 uppercase tracking-tight">
                      {feature.title}
                    </div>
                    <div className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">
                      {feature.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a 
              href="#" 
              className="inline-flex items-center gap-6 bg-slate-900 hover:bg-emerald-600 text-white pl-8 pr-3 py-3 rounded-full transition-all duration-500 group"
            >
              <span className="text-xs font-black uppercase tracking-widest">Explore Full Profile</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;