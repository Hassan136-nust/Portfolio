import { motion } from 'motion/react';
import { Scene3D } from '../3d/Scene3D';

interface SkillsSectionProps {
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const allSkills = [
    { category: 'Frontend', items: skills.frontend, color: '#4a90e2' },
    { category: 'Backend', items: skills.backend, color: '#6b7280' },
    { category: 'Tools', items: skills.tools, color: '#9ca3af' }
  ];

  const shapes = [
    { type: 'octahedron' as const, position: [-4, 2, 0] as [number, number, number], speed: 1.2, color: '#4a90e2' },
    { type: 'sphere' as const, position: [4, -2, -1] as [number, number, number], speed: 0.9, color: '#6b7280' },
    { type: 'torus' as const, position: [0, 0, -2] as [number, number, number], speed: 1.1, color: '#9ca3af' },
    { type: 'box' as const, position: [-2, -3, 1] as [number, number, number], speed: 0.8, color: '#4a90e2' },
    { type: 'octahedron' as const, position: [3, 3, -3] as [number, number, number], speed: 1.3, color: '#6b7280' }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-neutral-800 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Scene3D shapes={shapes} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allSkills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: `${skillGroup.color}15`,
                      color: skillGroup.color
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
