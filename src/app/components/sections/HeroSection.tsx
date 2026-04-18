import { motion } from 'motion/react';
import { Scene3D } from '../3d/Scene3D';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
}

export const HeroSection = ({ name, title }: HeroSectionProps) => {
  const shapes = [
    { type: 'octahedron' as const, position: [-3, 1, 0] as [number, number, number], speed: 0.8, color: '#4a90e2' },
    { type: 'sphere' as const, position: [3, -1, -2] as [number, number, number], speed: 1.2, color: '#6b7280' },
    { type: 'torus' as const, position: [0, 2, -3] as [number, number, number], speed: 1, color: '#9ca3af' },
    { type: 'box' as const, position: [-2, -2, -1] as [number, number, number], speed: 0.9, color: '#4a90e2' }
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D shapes={shapes} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {name}
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight * 5, behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-900 dark:text-white rounded-lg transition-colors"
          >
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-neutral-400 dark:text-neutral-500" />
      </motion.div>
    </section>
  );
};
