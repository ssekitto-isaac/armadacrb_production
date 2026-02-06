import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, Users, ShieldCheck, Zap } from "lucide-react";
import CorevaluesMQ2 from "../assets/CoreValueMQ2.jpg";

const OrbitalSlat = ({ item, index, total, isGlobalPaused, setGlobalPaused }: any) => {
  // Increased radius for better spacing of large cards
  const radius = 350;
  // Calculate starting position based on index (0, 90, 180, 270 degrees for 4 items)
  const startAngle = (360 / total) * index;

  return (
    <motion.div
      style={{ rotate: startAngle }}
      animate={{ rotate: isGlobalPaused ? startAngle : startAngle + 360 }}
      transition={{ 
        duration: 40, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        style={{ transform: `translateY(-${radius}px)` }}
        className="group pointer-events-auto relative cursor-pointer"
      >
        {/* Counter-rotate the inner content so text remains upright */}
        <motion.div
          style={{ rotate: -startAngle }}
          animate={{ rotate: isGlobalPaused ? -startAngle : -startAngle - 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          onMouseEnter={() => setGlobalPaused(true)}
          onMouseLeave={() => setGlobalPaused(false)}
        >
          <div className="w-[420px] h-[110px] bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-[2.5rem] p-5 flex items-center gap-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] group-hover:shadow-[0_40px_90px_rgba(16,185,129,0.3)] group-hover:border-emerald-500/60 transition-all duration-500 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500 rounded-[2.5rem]" />

            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-900 group-hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-500 shadow-2xl relative overflow-hidden z-10">
              <item.icon className="w-7 h-7 relative z-20" />
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full" 
              />
            </div>

            <div className="flex-grow text-left pr-4 z-20">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-black text-emerald-600 font-mono tracking-tighter uppercase">NODE_0{index + 1}</span>
                <div className="h-[0.5px] flex-grow bg-slate-200 group-hover:bg-emerald-200 transition-colors" />
              </div>
              <h4 className="text-lg font-black uppercase text-slate-900 group-hover:text-emerald-700 leading-none mb-1.5 tracking-tight">
                {item.title}
              </h4>
              <p className="text-[9px] font-bold text-slate-500 group-hover:text-slate-700 uppercase tracking-wider truncate">
                {item.description}
              </p>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
              <Zap className="w-4 h-4 text-slate-300 group-hover:text-emerald-400 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CoreValuesOrbit = () => {
  const [isPaused, setIsPaused] = useState(false);

  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Pioneering Financial Data Architecture" },
    { icon: Award, title: "Excellence", description: "Unmatched Precision In Every Audit" },
    { icon: ShieldCheck, title: "Integrity", description: "Institutional Trust & Security" },
    { icon: Users, title: "Collaboration", description: "Building Africa's Growth Network" },
  ];

  return (
    <section className="h-screen w-full overflow-hidden flex items-center justify-center relative bg-slate-50">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={CorevaluesMQ2}
          alt="Core Values"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/5_0%,white/50_100%)]" />
      </div>

      <div className="relative w-full max-w-7xl flex items-center justify-center h-full z-10">
        
        {/* CENTER HUB */}
        <motion.div 
          className="relative z-50 w-80 h-80 rounded-full bg-white/98 border border-slate-200/80 shadow-[0_0_120px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center text-center p-12 backdrop-blur-xl"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-dashed border-emerald-500/20 rounded-full"
          />

          <div className="bg-slate-50/80 px-4 py-1.5 rounded-full border border-slate-200 flex items-center gap-2 mb-6 z-10">
            <motion.div 
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
            />
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">Backbone System</span>
          </div>

          <h2 className="text-6xl font-black text-slate-900 leading-[0.8] tracking-[-0.05em] uppercase italic mb-2 z-10">
            Core <br/> 
            <span className="text-blue-700 not-italic">Values</span>
          </h2>
          
          <div className="mt-6 flex gap-2 z-10">
            <div className="w-12 h-1 bg-emerald-500 rounded-full" />
            <div className="w-4 h-1 bg-slate-300 rounded-full" />
          </div>

          <div className="absolute bottom-6 text-[8px] font-mono text-slate-400 tracking-wider z-10">
            {isPaused ? "● SYSTEM_LOCKED" : "● SYSTEM_ORBITING"}
          </div>
        </motion.div>

        {/* ORBITAL RINGS */}
        <div className="absolute w-[700px] h-[700px] border border-slate-300/20 rounded-full pointer-events-none" />
        <div className="absolute w-[900px] h-[900px] border border-dashed border-slate-200/10 rounded-full pointer-events-none" />

        {/* CARDS */}
        {values.map((val, idx) => (
          <OrbitalSlat 
            key={idx} 
            item={val} 
            index={idx} 
            total={values.length}
            isGlobalPaused={isPaused} 
            setGlobalPaused={setIsPaused} 
          />
        ))}
      </div>

      {/* STATUS HUD */}
      <div className="absolute bottom-8 right-8 z-50 hidden lg:flex items-center gap-4 text-slate-600 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200/50">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-xs font-black uppercase tracking-widest">Live Core Engine</span>
      </div>

    </section>
  );
};

export default CoreValuesOrbit;