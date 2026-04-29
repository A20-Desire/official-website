import React from 'react'
import { marqueeItems } from '../data'

const colorMap: Record<string, string> = {
  primary: 'text-[var(--color-primary)]',
  secondary: 'text-[var(--color-secondary)]',
  tertiary: 'text-[var(--color-tertiary)]'
}

const MarqueeContent: React.FC = () => (
  <div className="flex gap-12 shrink-0 animate-marquee items-center">
    {marqueeItems.map((item, idx) => {
      if ('icon' in item && item.icon) {
        return (
          <span
            key={idx}
            className={`text-2xl material-symbols-outlined ${colorMap[item.color as string] ?? ''}`}
          >
            {item.icon}
          </span>
        )
      }
      return (
        <span
          key={idx}
          className={`text-3xl md:text-5xl font-headline font-black uppercase tracking-tighter ${
            item.dim ? 'text-[var(--color-outline-variant)]/20' : 'text-white'
          }`}
        >
          {item.text}
        </span>
      )
    })}
  </div>
)

const ValuesRibbon: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[var(--color-surface-container-low)] overflow-hidden">
      <div className="flex whitespace-nowrap gap-12 items-center">
        <MarqueeContent />
        <div aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </section>
  )
}

export default ValuesRibbon
