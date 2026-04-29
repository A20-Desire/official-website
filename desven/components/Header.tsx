import React from 'react'
import { navItems } from '../data'

interface HeaderProps {
  onNavigate?: (id: string) => void
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0e0e0e]/60 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="text-2xl font-black tracking-tighter text-white font-headline">Desven</div>
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              className={`uppercase tracking-widest text-xs font-medium transition-colors duration-300 ${
                idx === 0
                  ? 'text-[var(--color-primary)] font-bold border-b-2 border-[var(--color-primary)] pb-1'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]'
              }`}
              onClick={() => onNavigate?.(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-6 py-2.5 font-bold rounded hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
          onClick={() => onNavigate?.('contact')}
        >
          Start a Project
        </button>
      </div>
    </nav>
  )
}

export default Header
