import React from 'react'
import { motion, Variants } from 'framer-motion'
import { projects } from '../data'

const ProjectsSection: React.FC = () => {
  const viewport = { once: true, amount: 0.2 }
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.section
      id="projects"
      className="bg-[var(--color-section)] py-20 text-[var(--color-text)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div className="mb-10 space-y-4 text-center" variants={headerVariants}>
          <p className="badge-pill text-[var(--color-primary-soft)]">Recent Initiatives</p>
          <h2 className="text-[var(--size-h1)] font-bold leading-tight">Selected Desven Launches</h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
            Explore how Desven pairs thoughtful experience design with resilient engineering to deliver measurable impact across sectors.
          </p>
        </motion.div>
        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={gridVariants}>
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-card-border)]/50 bg-[var(--color-card)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1"
              variants={cardVariants}
            >
              <motion.img
                src={project.thumbnail}
                alt={project.title}
                className="h-44 w-full object-cover"
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[color:var(--color-text)]">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
