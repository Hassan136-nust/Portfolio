import { useState } from 'react';
import { Github } from "lucide-react";
import { motion } from 'motion/react';
import { Send, Download, CheckCircle, Mail, MessageCircle } from 'lucide-react';
import { api } from '../../../services/api';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);

    try {
      const result = await api.submitContact(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error opening email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    try {
      await api.sendWhatsApp(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending WhatsApp:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    // Download the existing resume PDF from public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hassan_Jamal_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-background text-foreground overflow-hidden">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-0 bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out and let's create something immersive.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-[2rem] border border-border bg-card p-8 shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-2xl border border-border bg-input-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full rounded-2xl border border-border bg-input-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full rounded-2xl border border-border bg-input-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

           <div className="space-y-3">
  <motion.button
    type="submit"
    disabled={isSubmitting || isSuccess}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground flex items-center justify-center gap-2"
  >
    {isSuccess ? (
      <>
        <CheckCircle className="w-5 h-5" /> Message Sent!
      </>
    ) : (
      <>
        <Mail className="w-5 h-5" /> {isSubmitting ? 'Sending...' : 'Send via Email'}
      </>
    )}
  </motion.button>

  <motion.button
    type="button"
    onClick={handleWhatsApp}
    disabled={isSubmitting || isSuccess}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20BA5A] disabled:bg-muted disabled:text-muted-foreground flex items-center justify-center gap-2"
  >
    <MessageCircle className="w-5 h-5" />
    {isSubmitting ? 'Opening...' : 'Send via WhatsApp'}
  </motion.button>

  {/* ✅ GitHub Button (added below WhatsApp) */}
  <motion.button
    type="button"
    onClick={() =>
      window.open(
        "https://github.com/Hassan136-nust",
        "_blank",
        "noopener,noreferrer"
      )
    }
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full rounded-2xl bg-[#24292e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b1f23] flex items-center justify-center gap-2"
  >
    <Github className="w-5 h-5" />
    Visit GitHub
  </motion.button>
</div>
          </motion.form>
          

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Download Resume</h3>
              <p className="text-muted-foreground mb-6">
                Grab a structured PDF version of this resume with all experience, projects, and skills.
              </p>
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                <Download className="w-5 h-5 mr-2" /> Download PDF
              </motion.button>
            </div>

            <div className="rounded-[2rem] border border-border bg-gradient-to-br from-card to-background p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground">
                Whether it's a web app, a research system, or a deployment pipeline, I'm ready to help build it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
