import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Users, Eye, ShieldCheck, Cpu, Zap, ChevronRight } from "lucide-react";

/**
 * REFINED HOLOGRAM PRISM
 * Updated to match the Core Orbit's "System Hub" style
 */
const HologramPrism = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative w-56 h-56 flex items-center justify-center pointer-events-none"
  >
    {/* Inner Rotating Core */}
    <motion.div
      animate={{ 
        rotateY: [0, 360],
        rotate: [0, -10, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-32 h-32 bg-white border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center relative shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10"
    >
      <div className="bg-emerald-500/10 p-3 rounded-2xl mb-2">
        <Cpu className="w-8 h-8 text-emerald-600" />
      </div>
      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Active_Core</span>
    </motion.div>

    {/* Orbiters styled like the Core Values Orbit rings */}
    {[0, 120, 240].map((rotation, i) => (
      <motion.div
        key={i}
        animate={{ rotate: [rotation, rotation + 360] }}
        transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-slate-200/60 rounded-full"
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
      </motion.div>
    ))}
  </motion.div>
);

/**
 * REFINED INTELLIGENCE TILE
 * Now mirrors the metadata-heavy style of the OrbitalSlat
 */
const IntelligenceTile = ({ item, index }: { item: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="relative flex-1"
    >
      <div className="group relative bg-white border border-slate-200/80 p-6 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)] hover:border-emerald-500/40 transition-all duration-500 overflow-hidden">
        
        {/* Node Metadata Label (Matching Core Values) */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[9px] font-black text-emerald-600 font-mono tracking-tighter uppercase">SYSTEM_NODE_0{index + 1}</span>
          <div className="h-[0.5px] flex-grow bg-slate-100 group-hover:bg-emerald-100 transition-colors" />
          <Zap className="w-3 h-3 text-slate-300 group-hover:text-emerald-400" />
        </div>

        <div className="flex items-start gap-4" style={{ transform: "translateZ(30px)" }}>
          <div className="w-12 h-12 rounded-2xl bg-slate-900 group-hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-500 shrink-0 shadow-lg">
            {item.icon}
          </div>
          <div>
            <h4 className="text-base font-black uppercase italic text-slate-900 group-hover:text-emerald-700 transition-colors leading-none mb-2">
              {item.title}
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-bold uppercase tracking-tight">
              {item.desc}
            </p>
          </div>
        </div>

        {/* Hover Arrow Indicator */}
        <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ChevronRight className="w-4 h-4 text-emerald-500" />
        </div>
      </div>
    </motion.div>
  );
};

const CompactIntelligenceSection = () => {
  const items = [
    { icon: <Users className="w-5 h-5" />, title: "The Partners", desc: "Forging high-value institutional networks." },
    { icon: <Eye className="w-5 h-5" />, title: "The Vision", desc: "A single source of truth for credit intelligence." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "The Mission", desc: "Systemic trust via advanced data science." }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        
        <div className="bg-white/40 backdrop-blur-xl rounded-[4rem] p-10 md:p-16 border border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center gap-16 relative">
          
          {/* Subtle Background Markings */}
          <div className="absolute top-10 right-10 text-[10px] font-mono text-slate-200 select-none">SYSTEM_REV_4.02</div>

          {/* LEFT: 3D Visual Hub */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-emerald-400/5 blur-[120px] -z-10" />
            <HologramPrism />
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Operational Hub</span>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Density Content */}
          <div className="flex-grow">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-emerald-500" />
                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Protocol Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase italic mb-6">
                Redefining the <br/>
                <span className="text-blue-700 not-italic">Credit Standard.</span>
              </h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider max-w-xl">
                We synthesize deep analytics with localized intelligence to power 
                Africa's most resilient financial institutions.
              </p>
            </div>

            {/* STAGGERED FADE-IN TILES */}
            <div className="flex flex-col md:flex-row gap-6">
              {items.map((item, idx) => (
                <IntelligenceTile key={idx} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactIntelligenceSection;