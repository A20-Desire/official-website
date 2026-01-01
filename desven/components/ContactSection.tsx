import React from 'react'
import { motion, Variants } from 'framer-motion'

const ContactSection: React.FC = () => {
  const viewport = { once: true, amount: 0.3 }
  const wrapperVariants: Variants = {
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
  const contentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
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
      id="contact"
      className="bg-[var(--color-card)] py-20 text-[var(--color-text)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[var(--radius-xl)] border border-[var(--color-card-border)]/60 bg-[var(--color-section)] px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] lg:flex-row"
        variants={wrapperVariants}
      >
        <motion.div className="flex-1 space-y-4" variants={contentVariants}>
          <motion.p className="badge-pill text-[var(--color-primary-soft)]" variants={childVariants}>
            Partner with Desven
          </motion.p>
          <motion.h2 className="text-[var(--size-h2)] font-bold leading-tight" variants={childVariants}>
            Let's launch your next digital initiative
          </motion.h2>
          <motion.p className="text-[var(--color-text-muted)]" variants={childVariants}>
            From discovery sprints to production rollouts, Desven collaborates with your team to deliver innovative products backed by dependable engineering.
          </motion.p>
          <motion.div className="space-y-2 text-sm" variants={childVariants}>
            <p>Email: <a className="text-[var(--color-primary-soft)]" href="mailto:team@desven.com">team@desven.com</a></p>
            <p>Phone: <a className="text-[var(--color-primary-soft)]" href="tel:+14496864564">+44 968 645 64</a></p>
          </motion.div>
        </motion.div>
        <motion.form className="flex flex-1 flex-col gap-4" variants={contentVariants}>
          <motion.label className="text-sm font-semibold" htmlFor="name" variants={childVariants}>Name</motion.label>
          <motion.input
            id="name"
            type="text"
            className="rounded-[var(--radius-md)] border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-[color:var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
            placeholder="Your name"
            variants={childVariants}
          />
          <motion.label className="text-sm font-semibold" htmlFor="email" variants={childVariants}>Email</motion.label>
          <motion.input
            id="email"
            type="email"
            className="rounded-[var(--radius-md)] border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-[color:var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
            placeholder="you@company.com"
            variants={childVariants}
          />
          <motion.label className="text-sm font-semibold" htmlFor="message" variants={childVariants}>Message</motion.label>
          <motion.textarea
            id="message"
            rows={4}
            className="rounded-[var(--radius-md)] border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-[color:var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
            placeholder="Tell us about your goals"
            variants={childVariants}
          />
          <motion.button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-on-light)] shadow-[0_15px_40px_var(--color-shadow)] transition hover:scale-[1.01]"
            variants={childVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}

export default ContactSection
