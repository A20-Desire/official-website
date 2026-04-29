import React from 'react'
import { motion, Variants } from 'framer-motion'
import { services } from '../data'

const colorMap: Record<string, string> = {
  primary: 'text-[var(--color-primary)]',
  secondary: 'text-[var(--color-secondary)]',
  tertiary: 'text-[var(--color-tertiary)]'
}

const ServicesSection: React.FC = () => {
  const viewport = { once: true, amount: 0.2 }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }
  const cardsWrapper: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
  }

  return (
    <motion.section
      id="services"
      className="py-32 px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div className="max-w-2xl" variants={fadeUp}>
          <h2 className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-xs mb-4">
            Core Expertise
          </h2>
          <h3 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">
            What Desven Delivers
          </h3>
        </motion.div>
        <motion.p className="text-[var(--color-text-muted)] max-w-md text-lg" variants={fadeUp}>
          Comprehensive solutions from conceptualization to global-scale deployment, bridging the gap between
          imagination and execution.
        </motion.p>
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={cardsWrapper}>
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="glass-card p-12 rounded-xl group hover:bg-[var(--color-surface-bright)] transition-all duration-500 border border-transparent hover:border-[var(--color-outline-variant)]/20"
            variants={cardVariants}
          >
            <span
              className={`material-symbols-outlined text-4xl ${colorMap[service.color]} mb-8`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {service.icon}
            </span>
            <h4 className="text-2xl font-bold mb-4 font-headline">{service.title}</h4>
            <p className="text-[var(--color-text-muted)] mb-8 font-light">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--color-surface-container-highest)] rounded text-[10px] uppercase font-bold tracking-widest text-[var(--color-outline)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ServicesSection
