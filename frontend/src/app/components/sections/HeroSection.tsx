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
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#E8DFD0] via-[#E8DFD0] to-[#F5EFE6] text-[#111111]">
      <div className="absolute inset-0 opacity-40">
        <Scene3D shapes={shapes} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(166,124,82,0.08),_transparent_20%),radial-gradient(circle_at_80%_30%,_rgba(196,165,123,0.06),_transparent_20%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24">
        <div className="grid gap-10 xl:grid-cols-[1.35fr_0.9fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <p className="mb-6 text-md uppercase tracking-[0.35em] text-[#A67C52]/100">
                NUST · Computer Science
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-[#111111]">
                {name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-[#666666] sm:text-2xl">
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
                  className="rounded-full border border-[#D4C4B0] bg-[#F5EFE6] px-4 py-2 text-sm text-[#111111] shadow-sm"
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
                className="inline-flex items-center justify-center rounded-2xl bg-[#A67C52] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#8B6F47]"
              >
                Contact Me
              </button>
       
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-2xl border border-[#D4C4B0] bg-[#A67C52] px-8 py-3 text-sm font-semibold text-white transition hover:border-[#A67C52] hover:bg-[#8B6F47]"
              >
                View Projects
              </button>
   <button
  onClick={() => window.open("https://github.com/Hassan136-nust", "_blank")}
  className="inline-flex items-center justify-center rounded-2xl bg-[#A67C52] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#8B6F47] gap-2"
>
  <Github className="w-4 h-4" />
  GitHub
</button>
              {/* <a
                href="/resume.pdf"
                download="Hassan_Jamal_Resume.pdf"
                className="inline-flex items-center gap-2 justify-center rounded-2xl border border-[#D4C4B0] bg-[#F5EFE6] px-8 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#A67C52] hover:bg-[#E8DFD0]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-[#D4C4B0] bg-[#F5EFE6] p-6 shadow-2xl"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A67C52]/20 blur-3xl" />
            <div className="absolute left-4 bottom-4 h-24 w-24 rounded-full bg-[#C4A57B]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D4C4B0]">
              <img
                src={profileImage}
                alt="Hassan Jamal"
                className="h-72 w-full object-cover object-top"
              />
            </div>
            <div className="mt-6 space-y-4 text-center">
             
              <h2 className="text-2xl font-semibold text-[#111111]">NUST Computer Science</h2>
              <p className="text-sm leading-6 text-[#666666]">
                4th semester student specializing in full-stack development, AI-assisted tooling, and immersive 3D web UI.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#D4C4B0] bg-[#E8DFD0] p-4 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-[#666666]">Education</p>
                <p className="mt-2 text-sm font-medium text-[#111111]">NUST · BSCS</p>
              </div>
              <div className="rounded-2xl border border-[#D4C4B0] bg-[#E8DFD0] p-4 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-[#666666]">Focus</p>
                <p className="mt-2 text-sm font-medium text-[#111111]">Full-Stack, AI & 3D Web</p>
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
        <ChevronDown className="mx-auto h-10 w-10 text-[#666666]" />
      </motion.div>
    </section>
  );
};
