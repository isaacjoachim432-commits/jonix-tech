import { motion } from 'motion/react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { LOGO_URL, BIO_DATA } from '../data';

export default function Hero() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent"
    >
      {/* 1. CYBER METRIC GRID BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-transparent"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <div className="absolute inset-0 animate-grid-move bg-[size:40px_40px]" />
      </div>

      {/* 2. AMBIENT RED NEON HEATING BLOB */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. CORE CONTENTS CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Brand Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-red-500/20 bg-red-950/20 text-red-400 text-[11px] font-mono tracking-widest uppercase"
        >
          <Sparkles size={12} className="text-red-500 animate-pulse" />
          AVAILABLE FOR FREELANCE & CONTRACTS
        </motion.div>

        {/* Floating Core Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-32 h-32 md:w-36 md:h-36 mb-6 rounded-full p-1 group"
        >
          {/* Pulsing Backlight */}
          <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl group-hover:bg-red-500/25 transition-all duration-300 pointer-events-none" />
          
          {/* Tech rotating border rings */}
          <div className="absolute inset-0 rounded-full border border-dashed border-red-500/30 group-hover:border-red-500/80 animate-spin [animation-duration:15s] transition-all" />
          <div className="absolute inset-1.5 rounded-full border border-red-500/50 glow-red animate-float [animation-duration:5s]" />
          
          {/* Actual circular avatar image */}
          <img
            src={LOGO_URL}
            alt="Jonix Tech Logo"
            className="w-full h-full rounded-full object-cover relative z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Big Intro Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4"
        >
          <h2 className="text-zinc-500 font-mono text-sm tracking-[0.25em] uppercase mb-2">
            WELCOME TO MY UNIVERSE
          </h2>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight text-white mb-4">
            Hi, I’m <span className="text-red-500 text-glow-red font-display">Jonix Tech</span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-2xl text-zinc-300 font-sans tracking-wide max-w-2xl mb-10 leading-snug"
        >
          Front-End Developer & Website Designer
        </motion.p>

        {/* Call-to-actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-[340px] px-4"
        >
          <button
            onClick={() => scrollToId('projects')}
            className="flex-1 sm:flex-initial px-8 py-4 bg-red-600 hover:bg-red-700 font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 glow-red border border-red-500"
          >
            View My Work
          </button>
          
          <button
            onClick={() => scrollToId('contact')}
            className="flex-1 sm:flex-initial px-8 py-4 bg-transparent hover:bg-zinc-950 font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold text-zinc-300 hover:text-white rounded-lg transition-all duration-300 border border-zinc-800 hover:border-red-500/40 transform hover:-translate-y-1 hover:glow-red"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Animated Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => scrollToId('about')}
        >
          <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">EXPLORE</span>
          <ArrowDown size={14} className="text-red-500/50 animate-bounce" />
        </motion.div>
      </div>

      {/* Modern bottom diagonal divider styled using pure css */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
