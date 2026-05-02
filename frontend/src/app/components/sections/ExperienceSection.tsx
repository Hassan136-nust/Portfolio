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
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--primary)_0.08,_transparent_28%),radial-gradient(circle_at_80%_40%,_var(--primary)_0.06,_transparent_24%)]" />
      <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-8%] bottom-10 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8 text-primary">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

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
                    className="absolute left-2 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{item.position}</h4>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.duration}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8 text-primary">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

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
                    className="absolute left-2 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{item.degree}</h4>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.duration}</p>
                    <p className="text-muted-foreground">{item.description}</p>
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
