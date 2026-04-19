import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company?: string;
  institution?: string;
  position?: string;
  degree?: string;
  duration: string;
  description: string;
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  education: ExperienceItem[];
}

export const ExperienceSection = ({ experience, education }: ExperienceSectionProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-[#E8DFD0] text-[#111111] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(166,124,82,0.08),_transparent_28%),radial-gradient(circle_at_80%_40%,_rgba(196,165,123,0.06),_transparent_24%)]" />
      <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-[#A67C52]/10 blur-3xl" />
      <div className="absolute right-[-8%] bottom-10 h-56 w-56 rounded-full bg-[#C4A57B]/10 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#111111] mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8 text-[#A67C52]">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-[#111111]">Experience</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#D4C4B0]" />

              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <motion.div
                    className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#A67C52] border-4 border-[#E8DFD0]"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="rounded-[1.75rem] border border-[#D4C4B0] bg-[#F5EFE6] p-6 shadow-lg transition-shadow hover:shadow-xl">
                    <h4 className="text-lg font-semibold text-[#111111] mb-1">{item.position}</h4>
                    <p className="text-[#A67C52] font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-[#666666] mb-3">{item.duration}</p>
                    <p className="text-[#666666]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8 text-[#A67C52]">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-[#111111]">Education</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#D4C4B0]" />

              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <motion.div
                    className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#A67C52] border-4 border-[#E8DFD0]"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="rounded-[1.75rem] border border-[#D4C4B0] bg-[#F5EFE6] p-6 shadow-lg transition-shadow hover:shadow-xl">
                    <h4 className="text-lg font-semibold text-[#111111] mb-1">{item.degree}</h4>
                    <p className="text-[#A67C52] font-medium mb-2">{item.institution}</p>
                    <p className="text-sm text-[#666666] mb-3">{item.duration}</p>
                    <p className="text-[#666666]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
