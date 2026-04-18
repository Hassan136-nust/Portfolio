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
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
            {bio}
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-neutral-700 dark:text-neutral-300">{location}</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <a href={`mailto:${email}`} className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">
                {email}
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-neutral-700 dark:text-neutral-300">{phone}</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </motion.a>

            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </motion.a>

            <motion.a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
