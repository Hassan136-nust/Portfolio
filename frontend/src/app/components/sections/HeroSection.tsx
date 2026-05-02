import { motion } from 'motion/react';
import { Github } from "lucide-react";
import { Scene3D } from '../3d/Scene3D';
import { ChevronDown, Download } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  profileImage: string;
}

export const HeroSection = ({ name, title, profileImage }: HeroSectionProps) => {
  const shapes = [
    { type: 'octahedron' as const, position: [-3, 1, -1], speed: 0.9, color: '#A67C52' },
    { type: 'sphere' as const, position: [2.5, -1.5, -2], speed: 1.2, color: '#C4A57B' },
    { type: 'torus' as const, position: [0, 2, -3], speed: 1, color: '#8B6F47' },
    { type: 'box' as const, position: [-2.5, -2, 0.5], speed: 0.7, color: '#D4B896' }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-card text-foreground">
      <div className="absolute inset-0 opacity-40">
        <Scene3D shapes={shapes} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--primary)_0.08,_transparent_20%),radial-gradient(circle_at_80%_30%,_var(--primary)_0.06,_transparent_20%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24">
        <div className="grid gap-10 xl:grid-cols-[1.35fr_0.9fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <p className="mb-6 text-md uppercase tracking-[0.35em] text-primary/100">
                NUST · Computer Science
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground">
                {name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
                {title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['React.js', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'AI','Gen-AI','WebContainer'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row flex-wrap"
            >
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 5, behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Contact Me
              </button>
       
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:border-primary hover:bg-primary/90"
              >
                View Projects
              </button>
   <button
  onClick={() => window.open("https://github.com/Hassan136-nust", "_blank")}
  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 gap-2"
>
  <Github className="w-4 h-4" />
  GitHub
</button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-border bg-card p-6 shadow-2xl"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute left-4 bottom-4 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border">
              <img
                src={profileImage}
                alt="Hassan Jamal"
                className="h-72 w-full object-cover object-top"
              />
            </div>
            <div className="mt-6 space-y-4 text-center">
             
              <h2 className="text-2xl font-semibold text-foreground">NUST Computer Science</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                4th semester student specializing in full-stack development, AI-assisted tooling, and immersive 3D web UI.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-4 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
                <p className="mt-2 text-sm font-medium text-foreground">NUST · BSCS</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
                <p className="mt-2 text-sm font-medium text-foreground">Engineering Gen-AI systems, scalable MERN applications and real-time collaboration platforms.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="mx-auto h-10 w-10 text-muted-foreground" />
      </motion.div>
    </section>
  );
};
