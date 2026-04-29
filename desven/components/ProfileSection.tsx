import React from 'react'
import { motion, Variants } from 'framer-motion'

const ProfileSection: React.FC = () => {
  const viewport = { once: true, amount: 0.2 }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }
  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }

  return (
    <motion.section
      id="about"
      className="py-32 bg-[var(--color-surface-container-low)] border-y border-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <motion.div className="relative" variants={fadeUp}>
          <div className="aspect-square bg-[var(--color-surface-container)] rounded-lg overflow-hidden border border-[var(--color-outline-variant)]/10">
            <img
              alt="Modern collaborative workspace"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9tlqSdTVKQBDT6Rs4TpXOqe5L5hQ5d8h7RMdb1eWkYfySWf65tdUha48bUmYV4Po9zO863yBhge7ES4ILGW7EENjWKlGRKcQU_ZFNDtb8RNP88AE6lrzj_Pma4e8TuRzCoI915Bo0OVpCSg_BsQ8ziZ2LoClKEKJf1dttxWq4OYPlrzCp8RYo9F2l-tqqTGz4aLTTyI5gdLurYIiov8YDJwtW_klnHhp9Dx64TgNz56UZih2qvyp33SNmDX_91z7sx9pvFti1j3s"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[var(--color-primary)]/20 rounded-lg p-8 glass-card">
            <span className="text-5xl font-black text-[var(--color-primary)] font-headline">120+</span>
            <p className="text-xs uppercase tracking-widest font-bold mt-2">Global Launches Delivered</p>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div variants={stagger}>
          <motion.h2
            className="text-[var(--color-tertiary)] font-bold tracking-widest uppercase text-xs mb-6"
            variants={fadeUp}
          >
            Who is Desven?
          </motion.h2>
          <motion.h3
            className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight"
            variants={fadeUp}
          >
            A collective of strategists and engineers operating at the intersection of craft and technology.
          </motion.h3>
          <motion.div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed text-lg font-light" variants={fadeUp}>
            <p>
              Desven wasn't born from a template. We were founded on the belief that digital products should be
              built with the same precision as physical architecture. Every pixel and line of code is an
              intentional brick in your brand's digital home.
            </p>
            <p>
              We operate as a high-density team. No account managers, just direct collaboration between your
              vision and our execution. This ensures that the momentum of a project is never lost in
              translation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProfileSection
