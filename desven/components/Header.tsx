import React from 'react'
import { navItems } from '../data'

interface HeaderProps {
  onNavigate?: (id: string) => void
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(17,11,6,0.8)] text-[color:var(--color-text)] border-b border-[var(--color-card-border)]/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="text-xl font-semibold tracking-tight" href="#hero">
          Desven
        </a>
        <nav className="hidden gap-8 text-sm uppercase tracking-[0.24em] text-[var(--color-text-muted)] md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="transition-colors hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary-soft)]"
              onClick={() => onNavigate?.(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a
          className="hidden rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-on-light)] shadow-[0_10px_30px_var(--color-shadow)] transition hover:scale-[1.02] hover:shadow-[0_12px_36px_var(--color-shadow)] md:inline-flex"
          href="#contact"
        >
          Book a Call
        </a>
      </div>
    </header>
  )
}

export default Header
