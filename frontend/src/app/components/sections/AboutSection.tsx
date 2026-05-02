import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

interface AboutSectionProps {
  bio: string;
  location: string;
  email: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const AboutSection = ({ bio, location, email, phone, social }: AboutSectionProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-card text-foreground overflow-hidden">
      <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-8%] bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              <div className="flex items-center gap-3 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Location</span>
              </div>
              <p className="mt-4 text-muted-foreground">{location}</p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              <div className="flex items-center gap-3 text-primary">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </div>
              <a href={`mailto:${email}`} className="mt-4 block text-muted-foreground hover:text-primary break-all">
                {email}
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              <div className="flex items-center gap-3 text-primary">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Phone</span>
              </div>
              <p className="mt-4 text-muted-foreground">{phone}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-border bg-card p-10 shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-foreground mb-6">Quick Facts</h3>
          <div className="space-y-5">
            <div className="rounded-3xl bg-background p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Academic Focus</p>
              <p className="mt-3 text-lg text-foreground">Artificial Intelligence, NLP, backend architecture, and real-time web systems.</p>
            </div>
            <div className="rounded-3xl bg-background p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Technical Strengths</p>
              <p className="mt-3 text-lg text-foreground">React, Node.js, MongoDB, Docker, AWS, JWT, WebSockets, and collaborative apps.</p>
            </div>
            <div className="rounded-3xl bg-background p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">What I Build</p>
              <p className="mt-3 text-lg text-foreground">Gen-AI and MERN-powered systems, real-time collaboration platforms, and developer tools with in-browser execution and intelligent automation.</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <motion.a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex flex-1 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
            >
              GitHub
            </motion.a>
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex flex-1 items-center justify-center rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
