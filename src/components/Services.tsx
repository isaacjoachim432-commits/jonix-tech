import { motion } from 'motion/react';
import { Palette, Code, Rocket, Sparkles, Check, Video } from 'lucide-react';
import { SERVICES_DATA } from '../data';

// Map icon name strings to Lucide icon components
const iconMap = {
  Palette: Palette,
  Code: Code,
  Rocket: Rocket,
  Sparkles: Sparkles,
  Video: Video,
};

type IconNameType = keyof typeof iconMap;

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden border-t border-zinc-900">
      <div className="absolute top-[30%] right-[-10%] w-[250px] h-[250px] bg-red-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-red-500 tracking-[0.2em] uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            04 // SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mt-4">
            How I Can <span className="text-red-500 font-display">Help</span>
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mt-4 glow-red" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName as IconNameType] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 bento-card glow-red-hover group relative flex flex-col justify-between"
              >
                {/* Micro-interaction decorative corner lines */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-zinc-900 group-hover:border-red-500 group-hover:glow-red transition-all duration-350" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-zinc-900 group-hover:border-red-500 group-hover:glow-red transition-all duration-350" />

                <div>
                  {/* Decorative Icon circle with neon red background */}
                  <div className="w-14 h-14 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:glow-red transition-all duration-500 mb-6">
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-extrabold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* List of features */}
                  <ul className="space-y-3 pt-6 border-t border-zinc-900">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check size={14} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 flex justify-between items-center text-[10px] font-mono text-zinc-500 group-hover:text-red-400 transition-colors">
                  <span>JONIX_TECH_EXPERTIZE_DEV0{index + 1}</span>
                  <span className="text-red-500 font-bold">&gt;&gt;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
