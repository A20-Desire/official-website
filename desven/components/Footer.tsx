import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131313] w-full border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-xl font-bold text-white font-headline">Desven</div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs">
            Building the next generation of digital infrastructure. Based in the void, delivering globally.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-secondary)] cursor-pointer hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </div>
          </div>
        </div>

        {/* Navigation + Legal */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Navigation</h5>
            <a className="block text-[var(--color-text-muted)] hover:text-white transition-opacity duration-200 text-sm" href="#hero">Home</a>
            <a className="block text-[var(--color-text-muted)] hover:text-white transition-opacity duration-200 text-sm" href="#services">Services</a>
            <a className="block text-[var(--color-text-muted)] hover:text-white transition-opacity duration-200 text-sm" href="#projects">Projects</a>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal</h5>
            <a className="block text-[var(--color-text-muted)] hover:text-white transition-opacity duration-200 text-sm" href="#">Privacy Policy</a>
            <a className="block text-[var(--color-text-muted)] hover:text-white transition-opacity duration-200 text-sm" href="#">Terms of Service</a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contact</h5>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
            <span className="text-sm text-[var(--color-text-muted)]">Ready for deployment</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">hello@desven.studio</p>
          <p className="text-sm text-[var(--color-text-muted)]">+1 (555) 000-DESVEN</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-white/5 text-center md:text-left">
        <p className="text-[var(--color-text-muted)] text-xs">
          © {new Date().getFullYear()} Desven Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
