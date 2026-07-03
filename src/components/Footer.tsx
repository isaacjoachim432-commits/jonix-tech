import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { BIO_DATA, LOGO_URL } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-transparent border-t border-zinc-950 py-16 overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Core Branding Container */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center mb-4 cursor-pointer group" onClick={scrollToTop}>
            <div className="absolute inset-0 rounded-full border border-red-500/30 group-hover:border-red-500 group-hover:glow-red transition-all duration-300 animate-float" />
            <img
              src={LOGO_URL}
              alt="Jonix Tech Logo"
              className="w-10 h-10 rounded-full object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h3 className="text-xl font-display font-extrabold tracking-widest text-white uppercase">
            JONIX TECH
          </h3>
          <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mt-1">
            Front-End Developer & Website Designer
          </p>
        </div>

        {/* Social Icons Strip */}
        <div className="flex gap-4 mb-8">
          <a
            href={BIO_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-red-500/40 rounded-full text-zinc-400 hover:text-red-500 hover:glow-red/25 transition-all duration-350"
          >
            <Github size={18} />
          </a>
          <a
            href={BIO_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-red-500/40 rounded-full text-zinc-400 hover:text-red-500 hover:glow-red/25 transition-all duration-350"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={BIO_DATA.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
            className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-red-500/40 rounded-full text-zinc-400 hover:text-red-500 hover:glow-red/25 transition-all duration-350"
          >
            <Twitter size={18} />
          </a>
          <a
            href={BIO_DATA.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
            className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-red-500/40 rounded-full text-zinc-400 hover:text-red-500 hover:glow-red/25 transition-all duration-350"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Info & Legal and Credits */}
        <div className="text-center space-y-3 font-mono text-[10px] text-zinc-600 border-t border-zinc-900/60 pt-8 w-full max-w-lg">
          <p className="tracking-widest">
            &copy; {currentYear} JONIX TECH. ALL RIGHTS RESERVED.
          </p>
          <p className="text-zinc-700 font-sans tracking-wide">
            Designed & Developed in React with Vite + Framer Motion. Built to endure under the red glow.
          </p>
        </div>

        {/* Scroll To Top float indicator */}
        <button
          onClick={scrollToTop}
          aria-label="Jump to top of page"
          className="mt-8 p-3 rounded-full border border-zinc-900 hover:border-red-500 text-zinc-500 hover:text-red-500 hover:glow-red transition-all bg-zinc-950 flex items-center justify-center cursor-pointer group"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
