import React from 'react'
import { motion, Variants } from 'framer-motion'
import { projects } from '../data'

const hoverColors = ['text-[var(--color-primary)]', 'text-[var(--color-secondary)]']

const ProjectsSection: React.FC = () => {
  const viewport = { once: true, amount: 0.15 }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }
  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeInOut' } }
  }

  return (
    <motion.section
      id="projects"
      className="py-32 px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="text-center mb-24" variants={fadeUp}>
        <h2 className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-xs mb-4">
          Portfolio
        </h2>
        <h3 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter">
          Selected Desven Launches
        </h3>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16" variants={gridVariants}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className={`group cursor-pointer ${idx % 2 === 1 ? 'pt-12' : ''}`}
            variants={cardVariants}
          >
            <div className="aspect-[16/10] bg-[var(--color-surface-container)] rounded-xl overflow-hidden mb-8 border border-white/5 relative">
              <img
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                src={project.thumbnail}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <button className="bg-white text-black px-6 py-2 rounded font-bold">View Case Study</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold font-headline mb-2">{project.title}</h4>
                <p className="text-[var(--color-text-muted)] font-light">{project.category}</p>
              </div>
              <span
                className={`material-symbols-outlined text-[var(--color-outline-variant)] group-hover:${hoverColors[idx % 2]} transition-colors`}
              >
                north_east
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ProjectsSection
