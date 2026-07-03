import { Project, Service, Skill } from './types';
// @ts-expect-error - Vite handles jpg imports natively, but ts requires custom typings
import brandLogo from '/src/assets/images/logo_1781647974505.jpg';

export const LOGO_URL = brandLogo;

export const BIO_DATA = {
  name: "Jonix Tech",
  title: "Front-End Developer, Website Designer & Video Editor",
  bio: "I design, build, and animate high-fidelity websites while editing high-energy premium videos. Focused on crafting highly responsive, visually stunning web experiences and captivating, fast-paced video edits embedded with dark cybernetic atmospheres and high-impact visual design.",
  location: "Helsinki, Finland",
  email: "isaacjoachim432@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  },
  stats: [
    { label: "Completed Projects", value: "32+" },
    { label: "Happy Clients", value: "18+" },
    { label: "Years of Experience", value: "4+" },
    { label: "Coffee Consumed", value: "850+" }
  ]
};

export const SKILLS_DATA: Skill[] = [
  { name: "HTML5", level: 98, category: "frontend", description: "Semantic markup, SEO optimization, and rich data structuring." },
  { name: "CSS3 / Tailwind css", level: 95, category: "frontend", description: "Modern responsive web styling, layout grids, keyframe animations, and custom glowing styling layers." },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend", description: "DOM manipulations, functional programming, asynchronous pipelines, and high-performance interactive controls." },
  { name: "Responsive Design", level: 96, category: "design", description: "Mobile-first layouts, multi-screen fluid adaptation, and touch-target layout controls." },
  { name: "UI/UX Design", level: 88, category: "design", description: "Black & neon high-end interface mapping, smooth layouts, micro-interactions, and visual focus zones." },
  { name: "Video Editing", level: 92, category: "design", description: "Pro-level timeline edits, color grading, visual rhythm matching, sound design sync, and seamless transition triggers." },
  { name: "Motion Design", level: 85, category: "design", description: "VFX integration, custom kinetic typography, high-impact neon overlay transitions, and vector animation pipelines." }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "cinematic-reel",
    title: "Cyberpunk Cinematic Showcase",
    category: "Video Editing",
    description: "A fast-paced, highly synchronized aesthetic promotion reel with custom light streaks, neon vector glow overlays, visual pacing alignment, and pristine spatial bass sound design.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Premiere Pro", "After Effects", "Rhythm Sync", "Motion Graphics"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "aetheria",
    title: "Aetheria Cyber-Commerce",
    category: "Web Design",
    description: "Multi-dimension cybernetic fashion store layout designed for ultra-premium collections, featuring full dark backgrounds, glowing red accents, and smooth horizontal scrolling.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "HTML5", "CSS3", "Vite"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "zenith",
    title: "Zenith Space Explorer",
    category: "Front-End Development",
    description: "A cosmic tracking interface depicting solar orbits and real-time deep telemetry grids with fluid web dashboard layouts.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "Tailwind CSS", "Canvas API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "synapse",
    title: "Synapse AI Playground",
    category: "Landing Pages",
    description: "Vibrant high-conversion landing suite built for a developer AI coding orchestrator. Features glowing command consoles, scroll-controlled timelines, and micro-dialogs.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind", "CSS Grid"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "vortex",
    title: "Vortex Gaming Network",
    category: "Portfolio Websites",
    description: "An immersive esport portal designed for competitive clans, featuring cascading video streams, custom player profiles, and red neon leaderboard panels.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML", "CSS", "Vanilla JS", "Vite"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "srv1",
    title: "Web Design",
    description: "Aesthetic-first interface craft. I compile wireframes, dark-mode cyber designs, and premium typography systems into polished design visions.",
    iconName: "Palette",
    features: ["Bespoke layout mapping", "Black & neon active moodboards", "WordPress-style smooth scroll rhythms", "Fully interactive wireframes"]
  },
  {
    id: "srv2",
    title: "Front-End Development",
    description: "Turn static ideas into pixel-perfect interactive runtimes. Clean layouts, modern frameworks, and optimized asset delivery.",
    iconName: "Code",
    features: ["Clean scalable code", "No-bloat lightweight layouts", "Lightning-fast navigation load", "React, TypeScript, & modern DOM build"]
  },
  {
    id: "srv3",
    title: "Landing Pages",
    description: "High-energy single-view layouts engineered for conversions. Features dynamic call-to-actions and scrolling animations.",
    iconName: "Rocket",
    features: ["Conversion-focused architecture", "High-contrast glowing actions", "Staggered text reveal effects", "Instant contact hooks & newsletter grids"]
  },
  {
    id: "srv4",
    title: "Portfolio Websites",
    description: "Elite visual card layouts for developers, creators, or agencies wishing to establish authority through premium styles.",
    iconName: "Sparkles",
    features: ["Distinctive developer style", "Interactive experience grids", "Smooth loading preloader mechanics", "Elegant responsive layout structure"]
  },
  {
    id: "srv5",
    title: "Video Editing",
    description: "Pro-timeline storytelling, visual rhythm pacing, sound layout mastering, and high-impact motion graphic overlays. Built to engage and retain viewer focus.",
    iconName: "Video",
    features: ["Dynamic beat & sound effects synchronization", "Cinematic color grading & LUT profiles", "Kinetic typography & subtitle rendering", "High-retention social reel and promo cut editing"]
  }
];
