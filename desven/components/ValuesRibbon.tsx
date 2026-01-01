import React from 'react'
import { motion, Variants } from 'framer-motion'
import { values } from '../data'

const ValuesRibbon: React.FC = () => {
  const viewport = { once: true, amount: 0.3 }
  const ribbon: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.08
      }
    }
  }
  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.section
      className="border-y border-[var(--color-card-border)]/40 bg-[var(--color-card)]/60 py-4 text-[var(--color-text-muted)] backdrop-blur"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-6 text-xs uppercase tracking-[0.35em]"
        variants={ribbon}
      >
        {values.map((value) => (
          <motion.div key={value} className="flex items-center gap-3 text-[var(--color-text-muted)]" variants={item}>
            <span>{value}</span>
            <span className="text-[var(--color-primary-soft)]">✦</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ValuesRibbon
