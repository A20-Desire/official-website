import React from 'react'
import { motion, Variants } from 'framer-motion'
import { teamMembers } from '../data'

const colorMap: Record<string, string> = {
  primary: 'text-[var(--color-primary)]',
  secondary: 'text-[var(--color-secondary)]',
  tertiary: 'text-[var(--color-tertiary)]'
}

const borderColorMap: Record<string, string> = {
  primary: 'hover:border-[var(--color-primary)]/30',
  secondary: 'hover:border-[var(--color-secondary)]/30',
  tertiary: 'hover:border-[var(--color-tertiary)]/30'
}

const TeamSection: React.FC = () => {
  const viewport = { once: true, amount: 0.15 }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }
  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeInOut' } }
  }

  return (
    <motion.section
      className="py-32 px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="text-center mb-20" variants={fadeUp}>
        <h2 className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4">
          Our Collective
        </h2>
        <h3 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
          The Minds Behind the Momentum
        </h3>
        <p className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          A multi-disciplinary team of experts dedicated to building digital excellence.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={gridVariants}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className={`glass-card rounded-xl overflow-hidden border border-white/5 ${borderColorMap[member.color]} transition-all duration-500 group`}
            variants={cardVariants}
          >
            <div className="aspect-[4/5] bg-[var(--color-surface-container-highest)] relative overflow-hidden">
              <img
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src={member.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold font-headline mb-1">{member.name}</h4>
              <p className={`${colorMap[member.color]} text-xs uppercase tracking-widest font-bold`}>
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default TeamSection
