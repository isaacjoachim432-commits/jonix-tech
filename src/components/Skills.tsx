import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden border-t border-zinc-900">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-red-500 tracking-[0.2em] uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            02 // EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mt-4">
            My <span className="text-red-500 font-display">Skillset</span>
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mt-4 glow-red" />
        </div>

        {/* Skills grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bento-card glow-red-hover group relative overflow-hidden"
            >
              {/* Backlight glow */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="font-mono text-xs text-red-500 font-bold bg-red-950/30 px-2 py-1 rounded-md border border-red-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar with animated fill */}
              <div className="w-full h-[6px] bg-zinc-900 rounded-full overflow-hidden relative border border-white/5 mb-4">
                <motion.div
                  className="absolute top-0 left-0 bottom-0 bg-red-500 glow-red"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                />
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                {skill.description}
              </p>

              {/* Cyber index label */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-30 transition-opacity font-mono text-[9px] text-zinc-500">
                CORE_STAT_0{index + 1}
              </div>
            </motion.div>
          ))}

          {/* Special bonus "Full Stack Synergy" Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: SKILLS_DATA.length * 0.1 }}
            className="p-6 bento-card glow-red-hover flex flex-col justify-between group overflow-hidden relative"
          >
            {/* Red accent ribbon */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-500 glow-red" />

            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                Aesthetic Engineering
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Specialized in combining strict clean front-end code layout architectures with smooth transitions, modern responsive layouts, and ultra-high dynamic micro-interactions.
              </p>
            </div>

            <div className="flex gap-2 text-[10px] font-mono text-red-400 uppercase">
              <span>⚡ COMPATIBLE</span>
              <span className="text-zinc-600">•</span>
              <span>⚡ HIGH-SPEED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
