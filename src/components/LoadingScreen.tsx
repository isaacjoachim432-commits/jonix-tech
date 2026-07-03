import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../data';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          setTimeout(onComplete, 900);
          return 100;
        }
        // Random incremental values to mimic server boot
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm w-full px-6">
            {/* Animated Red Outer Glow */}
            <motion.div
              className="relative w-32 h-32 mb-8 rounded-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-full border border-red-500/30 animate-ping opacity-20" />
              <div className="absolute inset-0 rounded-full border border-red-500/50 glow-red animate-pulse" />
              
              {/* Logo Image */}
              <img
                src={LOGO_URL}
                alt="Jonix Tech Logo"
                className="w-24 h-24 rounded-full object-cover relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Glowing Text Intro */}
            <motion.h1
              className="text-2xl font-display font-medium tracking-widest text-white mb-2"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              JONIX TECH
            </motion.h1>

            <motion.p
              className="font-mono text-[10px] tracking-widest text-red-500/70 mb-8 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Front-End Developer
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full h-[3px] bg-neutral-900 rounded-full overflow-hidden relative border border-white/5 mb-3">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-red-500 glow-red"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Loading Stats */}
            <div className="w-full flex justify-between font-mono text-[11px] text-zinc-500">
              <span className="animate-pulse">BOOTING PORTFOLIO...</span>
              <span className="text-red-400 font-medium">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
