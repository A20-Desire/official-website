import React from 'react'
import { motion, Variants } from 'framer-motion'

const ContactSection: React.FC = () => {
  const viewport = { once: true, amount: 0.2 }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }
  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <motion.section
      id="contact"
      className="py-48 px-8 bg-[var(--color-surface-container-low)] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-12"
          variants={fadeUp}
        >
          Let's launch your next{' '}
          <span className="text-[var(--color-secondary)] italic">digital initiative</span>
        </motion.h2>

        <motion.div
          className="glass-card p-8 md:p-12 rounded-2xl text-left border border-white/5"
          variants={fadeUp}
        >
          <motion.form className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={stagger}>
            <motion.div className="space-y-2" variants={fadeUp}>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-text-muted)]">
                Name
              </label>
              <input
                className="w-full bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]/30 focus:border-[var(--color-secondary)] px-0 py-4 text-white placeholder:text-[var(--color-outline-variant)]/50 transition-all outline-none"
                placeholder="John Doe"
                type="text"
              />
            </motion.div>
            <motion.div className="space-y-2" variants={fadeUp}>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-text-muted)]">
                Email
              </label>
              <input
                className="w-full bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]/30 focus:border-[var(--color-secondary)] px-0 py-4 text-white placeholder:text-[var(--color-outline-variant)]/50 transition-all outline-none"
                placeholder="john@company.com"
                type="email"
              />
            </motion.div>
            <motion.div className="md:col-span-2 space-y-2" variants={fadeUp}>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-text-muted)]">
                Project Scope
              </label>
              <textarea
                className="w-full bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]/30 focus:border-[var(--color-secondary)] px-0 py-4 text-white placeholder:text-[var(--color-outline-variant)]/50 transition-all outline-none resize-none"
                placeholder="Tell us about your project..."
                rows={3}
              />
            </motion.div>
            <motion.div
              className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 pt-8"
              variants={fadeUp}
            >
              <p className="text-[var(--color-text-muted)] text-sm font-light">
                By submitting this form, you agree to our Privacy Policy.
              </p>
              <button
                type="submit"
                className="w-full md:w-auto bg-[var(--color-primary)] text-[var(--color-on-primary)] font-bold px-12 py-4 rounded-lg hover:bg-[var(--color-primary-dim)] transition-all flex items-center justify-center gap-3"
              >
                Book a Call
                <span className="material-symbols-outlined">call</span>
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactSection
