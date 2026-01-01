import React from 'react'
import { motion, Variants } from 'framer-motion'
import { stats } from '../data'

interface HeroProps {
  portraitSrc?: string
}

const Hero: React.FC<HeroProps> = ({ portraitSrc = '/desven-hero.png' }) => {
  const viewport = { once: true, amount: 0.35 }
  const stackVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }
  const imageWrapper: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
        delay: 0.05
      }
    }
  }
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.1
      }
    }
  }
  const statsList: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const statsItem: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.section
      id="hero"
      className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-24 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div className="space-y-6" variants={stackVariants}>
          <motion.p className="badge-pill text-[var(--color-primary-soft)]" variants={fadeUp}>
            Digital Product Studio
          </motion.p>
          <motion.h1
            className="font-bold leading-[1.05] text-[color:var(--color-text)]"
            style={{ fontSize: 'var(--size-display)' }}
            variants={fadeUp}
          >
            Desven builds <span className="text-[var(--color-primary)]">reliable digital ecosystems</span> for modern organizations
          </motion.h1>
          <motion.p className="max-w-xl text-lg text-[var(--color-text-muted)]" variants={fadeUp}>
            We unite strategy, design, and engineering to launch experiences that feel intuitive, perform flawlessly, and evolve with your ambitions.
          </motion.p>
          <motion.div className="flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-[var(--color-text-on-light)] shadow-[0_15px_40px_var(--color-shadow)] transition hover:scale-[1.02]"
            >
              Start a Project
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-3 text-base font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/10"
            >
              Schedule a Strategy Call
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="relative flex items-center justify-center" variants={fadeUp}>
          <motion.div
            className="relative rounded-[var(--radius-xl)] bg-[var(--color-card)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            variants={imageWrapper}
          >
            <motion.img
              src={portraitSrc}
              alt="Desven leadership portrait"
              className="h-full w-full rounded-[var(--radius-lg)] object-cover"
              variants={imageVariants}
              viewport={viewport}
            />
            <motion.div
              className="absolute -left-8 top-6 grid gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={statsList}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-[var(--radius-md)] bg-[var(--color-card)] px-5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                  variants={statsItem}
                  viewport={viewport}
                  whileInView={{
                    y: [0, -14, 0],
                    transition: {
                      duration: 4.2,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: 0.6 + index * 0.35
                    }
                  }}
                >
                  <p className="text-xl font-bold text-[var(--color-primary-soft)]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--color-primary-soft)]/20 blur-3xl" />
      </div>
    </motion.section>
  )
}

export default Hero
