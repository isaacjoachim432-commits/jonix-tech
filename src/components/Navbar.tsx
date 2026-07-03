import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { LOGO_URL, BIO_DATA } from '../data';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact' },
  ];

  // Track scrolling to toggle navbar highlight & watch sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple implementation of ScrollSpy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-red-500/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 rounded-full border border-red-500/30 group-hover:border-red-500 group-hover:glow-red transition-all duration-300 animate-float" />
                <img
                  src={LOGO_URL}
                  alt="Jonix Tech Logo"
                  className="w-8 h-8 rounded-full object-cover relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-widest text-white transition-all duration-300">
                JONIX TECH
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-sans text-xs tracking-widest uppercase relative py-2 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-red-500 font-semibold text-shadow-glow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 glow-red"
                        layoutId="activeUnderline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Hire Me CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-5 py-2 overflow-hidden rounded-md border border-red-500/40 text-xs tracking-widest uppercase font-medium text-white transition-all duration-300 hover:border-red-500 hover:glow-red"
              >
                Let&apos;s Connect
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-400 hover:text-white p-2 border border-zinc-800 rounded-md bg-zinc-950/50"
              >
                {isMobileMenuOpen ? <X size={20} className="text-red-500 animate-pulse" /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-black/98"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full pt-28 px-6 pb-12 justify-between">
              <div className="flex flex-col gap-6 text-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg font-display tracking-widest uppercase py-2 border-b border-zinc-900/40 transition-all ${
                      activeSection === item.id
                        ? 'text-red-500 text-glow-red font-bold'
                        : 'text-zinc-400'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Bottom Socials Drawer */}
              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full max-w-xs py-3 border border-red-500 text-center uppercase tracking-widest text-xs font-semibold text-white glow-red hover:bg-red-600 rounded-lg transition-all"
                >
                  Message Jonix Tech
                </button>
                <div className="flex gap-6 mt-4">
                  <a
                    href={BIO_DATA.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-zinc-900/40 rounded-full border border-zinc-800 text-zinc-400 hover:text-red-500 hover:border-red-500/40 transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={BIO_DATA.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-zinc-900/40 rounded-full border border-zinc-800 text-zinc-400 hover:text-red-500 hover:border-red-500/40 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${BIO_DATA.email}`}
                    className="p-3 bg-zinc-900/40 rounded-full border border-zinc-800 text-zinc-400 hover:text-red-500 hover:border-red-500/40 transition-all"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
