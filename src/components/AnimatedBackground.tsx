import { motion } from 'motion/react';

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'triangle' | 'plus' | 'diamond';
  size: number;
  initialX: string;
  initialY: string;
  animateX: string[];
  animateY: string[];
  rotate: number[];
  duration: number;
  delay: number;
}

const SHAPES_DATA: Shape[] = [
  {
    id: 1,
    type: 'circle',
    size: 150,
    initialX: '10%',
    initialY: '15%',
    animateX: ['10%', '13%', '8%', '10%'],
    animateY: ['15%', '18%', '12%', '15%'],
    rotate: [0, 120, 240, 360],
    duration: 25,
    delay: 0,
  },
  {
    id: 2,
    type: 'square',
    size: 120,
    initialX: '80%',
    initialY: '20%',
    animateX: ['80%', '83%', '78%', '80%'],
    animateY: ['20%', '25%', '18%', '20%'],
    rotate: [45, 135, 225, 45],
    duration: 30,
    delay: 1,
  },
  {
    id: 3,
    type: 'diamond',
    size: 80,
    initialX: '70%',
    initialY: '70%',
    animateX: ['70%', '67%', '73%', '70%'],
    animateY: ['70%', '74%', '66%', '70%'],
    rotate: [0, 90, 180, 0],
    duration: 22,
    delay: 2,
  },
  {
    id: 4,
    type: 'circle',
    size: 200,
    initialX: '20%',
    initialY: '60%',
    animateX: ['20%', '17%', '23%', '20%'],
    animateY: ['60%', '65%', '57%', '60%'],
    rotate: [360, 240, 120, 0],
    duration: 35,
    delay: 0.5,
  },
  {
    id: 5,
    type: 'plus',
    size: 40,
    initialX: '45%',
    initialY: '35%',
    animateX: ['45%', '48%', '42%', '45%'],
    animateY: ['35%', '38%', '32%', '35%'],
    rotate: [0, 180, 360],
    duration: 18,
    delay: 3,
  },
  {
    id: 6,
    type: 'plus',
    size: 50,
    initialX: '85%',
    initialY: '45%',
    animateX: ['85%', '82%', '87%', '85%'],
    animateY: ['45%', '42%', '48%', '45%'],
    rotate: [90, 270, 90],
    duration: 20,
    delay: 1.5,
  }
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
      {/* Dynamic ambient color gradients in background to reinforce depth */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[180px] mix-blend-screen pointer-events-none" />

      {/* Cybernetic horizontal grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '100% 60px'
        }}
      />

      {/* Elegant animated vector shapes */}
      {SHAPES_DATA.map((shape) => {
        return (
          <motion.div
            key={shape.id}
            initial={{ 
              x: shape.initialX, 
              y: shape.initialY, 
              rotate: shape.rotate[0],
              opacity: 0 
            }}
            animate={{
              x: shape.animateX,
              y: shape.animateY,
              rotate: shape.rotate,
              opacity: [0.08, 0.18, 0.12, 0.08]
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              width: shape.size,
              height: shape.size,
              transformOrigin: 'center',
            }}
          >
            {shape.type === 'circle' && (
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/20 fill-none stroke-current" strokeWidth="1">
                <circle cx="50" cy="50" r="45" className="stroke-red-500/10" />
                <circle cx="50" cy="50" r="45" className="stroke-red-500/40" strokeDasharray="10 5" />
              </svg>
            )}

            {shape.type === 'square' && (
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/20 fill-none stroke-current" strokeWidth="1">
                <rect x="15" y="15" width="70" height="70" rx="4" className="stroke-red-500/15" />
                <rect x="15" y="15" width="70" height="70" rx="4" className="stroke-red-500/30" strokeDasharray="15 8" />
              </svg>
            )}

            {shape.type === 'diamond' && (
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/20 fill-none stroke-current animate-pulse" strokeWidth="1">
                <path d="M 50 10 L 90 50 L 50 90 L 10 50 Z" className="stroke-red-500/15" />
                <path d="M 50 20 L 80 50 L 50 80 L 20 50 Z" className="stroke-red-500/30" strokeDasharray="8 4" />
              </svg>
            )}

            {shape.type === 'plus' && (
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/40 fill-none stroke-current" strokeWidth="2">
                <line x1="50" y1="20" x2="50" y2="80" className="stroke-red-500/30" />
                <line x1="20" y1="50" x2="80" y2="50" className="stroke-red-500/30" />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
