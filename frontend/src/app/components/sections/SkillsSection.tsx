import { motion } from 'motion/react';
import { Scene3D } from '../3d/Scene3D';

interface SkillsSectionProps {
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const allSkills = [
    { category: 'Languages', items: skills.languages, color: '#A67C52' },
    { category: 'Frontend', items: skills.frontend, color: '#8B6F47' },
    { category: 'Backend', items: skills.backend, color: '#C4A57B' },
    { category: 'Tools', items: skills.tools, color: '#D4B896' }
  ];

  const shapes = [
    { type: 'octahedron' as const, position: [-4, 2, 0] as [number, number, number], speed: 1.2, color: '#A67C52' },
    { type: 'sphere' as const, position: [4, -2, -1] as [number, number, number], speed: 0.9, color: '#C4A57B' },
    { type: 'torus' as const, position: [0, 0, -2] as [number, number, number], speed: 1.1, color: '#8B6F47' },
    { type: 'box' as const, position: [-2, -3, 1] as [number, number, number], speed: 0.8, color: '#D4B896' },
    { type: 'octahedron' as const, position: [3, 3, -3] as [number, number, number], speed: 1.3, color: '#A67C52' }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--primary)_0.08,_transparent_28%),radial-gradient(circle_at_80%_35%,_var(--primary)_0.06,_transparent_24%)]" />
      <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-10%] bottom-20 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allSkills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border bg-card p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
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
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="rounded-2xl border border-border bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm"
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
