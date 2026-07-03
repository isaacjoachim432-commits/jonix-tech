import { motion } from 'motion/react';
import { User, Cpu, Award } from 'lucide-react';
import { BIO_DATA } from '../data';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden border-t border-zinc-900">
      {/* Visual neon red dots/blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[250px] h-[250px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-red-500 tracking-[0.2em] uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            01 // BIOGRAPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mt-4">
            About <span className="text-red-500 font-display">Me</span>
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mt-4 glow-red" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Bio narrative (cards or high-lighting) */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 bento-card glow-red-hover group"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-3">
                <User size={20} className="text-red-500" />
                Who is Jonix Tech?
              </h3>
              
              {/* Highlight paragraph matches prompt exact words */}
              <p className="text-amber-50/90 text-sm leading-relaxed mb-4 p-4 rounded-lg bg-red-950/15 border border-red-500/20 text-red-200">
                “I design and develop modern websites using <strong className="text-white text-glow">HTML, CSS & JavaScript</strong>”
              </p>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {BIO_DATA.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400 border-t border-zinc-900 pt-6">
                <div>
                  <span className="text-red-500 mr-2">&gt;</span> LOCATION: <span className="text-zinc-200 font-sans font-medium">{BIO_DATA.location}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-2">&gt;</span> CONTACT EMAIL: <span className="text-zinc-200 font-sans font-medium">{BIO_DATA.email}</span>
                </div>
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bento-card glow-red-hover"
            >
              <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase mb-2">My Philosophy</h4>
              <p className="text-zinc-400 text-xs italic leading-relaxed">
                &ldquo;Every website is a living digital identity. It shouldn&apos;t just list features &mdash; it should establish authority through aesthetic precision, responsiveness, and premium interaction mechanics.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right panel: Digital Numbers & Stats */}
          <div className="col-span-1 lg:col-span-5 grid grid-cols-2 gap-4">
            {BIO_DATA.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bento-card glow-red-hover flex flex-col justify-center items-center text-center relative overflow-hidden group"
              >
                {/* Glowing subtle top-right border */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none border-t border-r border-transparent group-hover:border-red-500 group-hover:glow-red transition-all duration-300" />
                
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300 mb-2">
                  {stat.value}
                </span>
                
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase group-hover:text-red-500/70 transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            {/* Fully responsive design guarantee card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 p-6 bento-card glow-red-hover flex items-center gap-4"
            >
              <div className="p-3 bg-red-950/50 rounded-lg border border-red-500/20 text-red-500">
                <Cpu size={24} className="animate-pulse" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-white">Full Compatibility Guarantee</h4>
                <p className="text-zinc-500 text-xs mt-1">
                  Engineered to scale perfectly from ultra-high-density retina displays down to space-limited mobile phones.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
