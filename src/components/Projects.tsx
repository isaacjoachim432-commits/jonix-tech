import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, Eye, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Design', 'Front-End Development', 'Video Editing', 'Landing Pages', 'Portfolio Websites'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden border-t border-zinc-900">
      <div className="absolute top-[20%] left-[-10%] w-[250px] h-[250px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-red-500 tracking-[0.2em] uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            03 // PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mt-4">
            Featured <span className="text-red-500 font-display">Projects</span>
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mt-4 glow-red" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 max-w-4xl mx-auto px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-red-500 border-red-500 text-white glow-red'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-red-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveModalProject(project)}
                className="bento-card glow-red-hover group relative cursor-pointer overflow-hidden flex flex-col h-full"
              >
                {/* Project Image Panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent opacity-90" />
                  
                  {/* Glowing Hover Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-xs">
                    <div className="flex gap-4">
                      <div className="p-3 bg-red-600 rounded-full text-white glow-red hover:bg-red-700 hover:scale-105 transition-all">
                        <Eye size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top Category Badge */}
                  <span className="absolute top-4 left-4 z-10 font-mono text-[9px] tracking-widest uppercase bg-red-950/80 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-md py-1">
                    {project.category}
                  </span>
                </div>

                {/* Info Deck */}
                <div className="p-6 relative flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-sans line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-widest uppercase text-zinc-500 hover:text-red-400 bg-zinc-900 px-2 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Advanced Project details Modal popup */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-2xl w-full rounded-2xl bg-[#090909] border border-red-500 hover:glow-red-lg overflow-hidden flex flex-col"
              initial={{ scale: 0.95, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 25, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/80 hover:bg-red-500 border border-zinc-800 hover:border-red-400 text-zinc-400 hover:text-white rounded-full transition-all"
              >
                <X size={16} />
              </button>

              {/* Header Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] to-transparent z-10" />
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Information Deck */}
              <div className="p-8">
                <span className="font-mono text-[10px] tracking-widest uppercase text-red-500 bg-red-950/20 px-3 py-1 border border-red-500/20 rounded-md">
                  {activeModalProject.category}
                </span>

                <h3 className="text-2xl font-display font-extrabold text-white mt-4 mb-3">
                  {activeModalProject.title}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {activeModalProject.description}
                </p>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeModalProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 border-t border-zinc-900 pt-6">
                  <a
                    href={activeModalProject.demoUrl}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (activeModalProject.category === 'Video Editing') {
                        alert("Cinematic video playback is simulated. In production, this plays your high-resolution video file or opens your YouTube/Vimeo project link.");
                      } else {
                        alert("Interactive project demo is ready! In production, this link takes you to the live website."); 
                      }
                    }}
                    className="flex-1 py-3 px-4 rounded-lg bg-red-600 hover:bg-neutral-900 border border-red-500 text-white font-mono text-xs tracking-widest uppercase font-semibold text-center flex items-center justify-center gap-2 glow-red transition-all"
                  >
                    <ExternalLink size={14} />
                    {activeModalProject.category === 'Video Editing' ? 'WATCH VIDEO' : 'LAUNCH DEMO'}
                  </a>
                  
                  <a
                    href={activeModalProject.githubUrl}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (activeModalProject.category === 'Video Editing') {
                        alert("Project timeline session is simulated. In production, this links to your video project assets, stock plates, or XML timelines.");
                      } else {
                        alert("GitHub lookup is simulated. In production, this would direct you to Jonix Tech's private source code repository."); 
                      }
                    }}
                    className="flex-1 py-3 px-4 rounded-lg bg-transparent hover:bg-zinc-950 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-white font-mono text-xs tracking-widest uppercase text-center flex items-center justify-center gap-2 transition-all"
                  >
                    <Github size={14} />
                    {activeModalProject.category === 'Video Editing' ? 'SOURCE ASSETS' : 'GET SOURCE'}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
