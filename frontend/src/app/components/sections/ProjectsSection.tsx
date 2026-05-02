import { motion } from 'motion/react';
import { ExternalLink, Github, Play, Code2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-card text-foreground">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    imageRendering: 'high-quality',
                    WebkitFontSmoothing: 'antialiased',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0) scale(1.001)',
                    willChange: 'transform',
                    filter: 'contrast(1.05) saturate(1.1)',
                  }}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-card border border-border px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    <Play className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
