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
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-600" />

              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-neutral-50 dark:border-neutral-800"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                      {item.position}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      {item.duration}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-600" />

              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-neutral-50 dark:border-neutral-800"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      {item.duration}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
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
