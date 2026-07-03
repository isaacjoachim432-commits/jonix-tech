import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-red-500/30 selection:text-red-400">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div id="portfolio-root" className="flex flex-col min-h-screen relative">
          {/* Professional Animated Background Shapes */}
          <AnimatedBackground />

          {/* Sticky Navbar */}
          <Navbar />

          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Services Section */}
          <Services />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}
