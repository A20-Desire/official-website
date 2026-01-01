import React from 'react'
import { motion, Variants } from 'framer-motion'
import { badges } from '../data'

const ProfileSection: React.FC = () => {
  const viewport = { once: true, amount: 0.25 }
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
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
  const fadeChild: Variants = {
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
  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.section
      id="about"
      className="bg-[var(--color-bg)] py-20 text-[var(--color-text)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row" variants={contentVariants}>
        <motion.div className="relative flex-shrink-0" variants={containerVariants}>
          <motion.div
            className="relative h-72 w-72 rounded-full border-8 border-[var(--color-primary)]/60 bg-[var(--color-card)] shadow-[0_15px_45px_rgba(0,0,0,0.45)]"
            variants={containerVariants}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Desven leadership portrait"
              className="h-full w-full rounded-full object-cover"
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: 'easeInOut'
                  }
                }
              }}
            />
          </motion.div>
          <motion.ul
            className="absolute inset-0 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {badges.map((badge, idx) => (
              <motion.li
                key={badge}
                className="absolute -translate-y-1/2 rounded-full bg-[var(--color-chip)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                style={{
                  transform: `rotate(${idx * (360 / badges.length)}deg) translateY(-190px) rotate(-${idx * (360 / badges.length)}deg)`
                }}
                variants={badgeVariants}
              >
                {badge}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div className="space-y-5 text-left" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p className="badge-pill text-[var(--color-primary-soft)]" variants={fadeChild}>About Desven</motion.p>
          <motion.h2 className="text-[var(--size-h1)] font-bold leading-tight" variants={fadeChild}>Who is Desven?</motion.h2>
          <motion.p className="max-w-xl text-lg text-[var(--color-text-muted)]" variants={fadeChild}>
            Desven is a collective of strategists, designers, and engineers building dependable digital products that advance modern organizations. We combine research-driven insight with meticulous execution to create systems people trust.
          </motion.p>
          <motion.div className="space-y-2 text-sm" variants={fadeChild}>
            <p>Email: <a className="text-[var(--color-primary-soft)]" href="mailto:hello@desven.com">hello@desven.com</a></p>
            <p>Phone: <a className="text-[var(--color-primary-soft)]" href="tel:+14496864564">+44 968 645 64</a></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default ProfileSection
