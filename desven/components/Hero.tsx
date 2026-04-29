import React from 'react'
import { motion, Variants } from 'framer-motion'

const Hero: React.FC = () => {
  const viewport = { once: true, amount: 0.35 }
  const stackVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }

  return (
    <motion.header
      id="hero"
      className="relative pt-48 pb-32 px-8 overflow-hidden min-h-screen flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[128px]" />

      <motion.div className="max-w-6xl mx-auto relative z-10" variants={stackVariants}>
        <motion.span
          className="inline-block text-[var(--color-secondary)] font-bold tracking-[0.3em] uppercase text-xs mb-6 px-4 py-1 border border-[var(--color-secondary)]/20 rounded-full bg-[var(--color-secondary)]/5"
          variants={fadeUp}
        >
          The Digital Architect
        </motion.span>
        <motion.h1
          className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-8 max-w-4xl"
          variants={fadeUp}
        >
          Desven builds reliable digital{' '}
          <span className="text-[var(--color-primary)]">ecosystems</span> for modern organizations
        </motion.h1>
        <motion.p
          className="text-[var(--color-text-muted)] text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
          variants={fadeUp}
        >
          We unite strategy, design, and engineering to launch experiences that feel intuitive, perform
          flawlessly, and evolve with your ambitions.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-6" variants={fadeUp}>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] font-bold px-8 py-4 rounded-lg ambient-glow-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center"
          >
            Start a Project
          </a>
          <a
            href="#contact"
            className="border border-[var(--color-outline-variant)]/30 hover:border-[var(--color-secondary)]/50 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Schedule a Strategy Call
            <span className="material-symbols-outlined text-[var(--color-secondary)] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}

export default Hero
