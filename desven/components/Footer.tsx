import React from 'react'
import { motion, Variants } from 'framer-motion'

const Footer: React.FC = () => {
  const viewport = { once: true, amount: 0.2 }
  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.footer
      className="bg-[var(--color-bg)] py-10 text-[var(--color-text-muted)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={footerVariants}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center text-sm">
        <div className="flex justify-center gap-6 text-[color:var(--color-text)]">
          <a href="#hero" className="hover:text-[var(--color-primary)]">Home</a>
          <a href="#services" className="hover:text-[var(--color-primary)]">Services</a>
          <a href="#projects" className="hover:text-[var(--color-primary)]">Projects</a>
          <a href="#contact" className="hover:text-[var(--color-primary)]">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} Desven Technologies. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
