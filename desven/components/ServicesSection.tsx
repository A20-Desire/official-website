import React from 'react'
import { motion, Variants } from 'framer-motion'
import { services } from '../data'

const ServicesSection: React.FC = () => {
  const viewport = { once: true, amount: 0.25 }
  const columnVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }
  const cardsWrapper: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.section
      id="services"
      className="bg-[var(--color-section)] py-20 text-[var(--color-text)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr,1.2fr]">
        <motion.div className="space-y-6" variants={columnVariants}>
          <motion.p className="badge-pill text-[var(--color-primary-soft)]" variants={fadeUp}>
            What Desven Delivers
          </motion.p>
          <motion.h2 className="text-[var(--size-h1)] font-bold leading-tight" variants={fadeUp}>
            End-to-end product strategy and engineering
          </motion.h2>
          <motion.p className="text-lg text-[var(--color-text-muted)]" variants={fadeUp}>
            Desven partners with teams to transform ambitious ideas into resilient digital platforms that inspire confidence and scale with demand.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-text-on-light)] shadow-[0_12px_30px_var(--color-shadow)]"
            variants={fadeUp}
          >
            View All Services
          </motion.a>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={cardsWrapper}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="col-span-1 rounded-[var(--radius-lg)] border border-[var(--color-card-border)]/60 bg-[var(--color-card)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              variants={cardVariants}
            >
              <h3 className="mb-3 text-lg font-semibold text-[color:var(--color-text)]">{service.title}</h3>
              <p className="mb-4 text-sm text-[var(--color-text-muted)]">{service.description}</p>
              <a className="text-sm font-semibold text-[var(--color-primary-soft)]" href="#contact">
                {service.cta} →
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServicesSection
