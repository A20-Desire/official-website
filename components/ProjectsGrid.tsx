import React from 'react'

const projects = [
  { 
    id: 1, 
    title: 'E-Commerce Platform Redesign', 
    desc: 'Complete platform overhaul with modern UI/UX and payment integration',
    category: 'Web Development',
    tech: 'React, Node.js, Stripe'
  },
  { 
    id: 2, 
    title: 'Healthcare Management System', 
    desc: 'Custom patient management and appointment scheduling solution',
    category: 'Software Development',
    tech: 'Python, Django, PostgreSQL'
  },
  { 
    id: 3, 
    title: 'Corporate IT Training Program', 
    desc: 'Comprehensive cybersecurity and cloud computing training for 50+ employees',
    category: 'IT Training',
    tech: 'AWS, Azure, Security+'
  },
  { 
    id: 4, 
    title: 'Inventory Management Dashboard', 
    desc: 'Real-time inventory tracking and analytics for retail chain',
    category: 'Software Development',
    tech: 'Vue.js, Laravel, MySQL'
  },
  { 
    id: 5, 
    title: 'Network Infrastructure Upgrade', 
    desc: 'Complete hardware supply and network setup for growing startup',
    category: 'Hardware Integration',
    tech: 'Cisco, HP, Ubiquiti'
  },
  { 
    id: 6, 
    title: 'Mobile Banking App', 
    desc: 'Secure mobile banking application with biometric authentication',
    category: 'Mobile Development',
    tech: 'React Native, Firebase'
  }
]

export default function ProjectsGrid() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted max-w-2xl">
          Explore our portfolio of successful projects delivered across various industries and technologies
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-border/50">
            <div className="h-48 bg-gradient-to-br from-primary via-primary-300 to-primary-400 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span className="text-white text-6xl opacity-20 group-hover:scale-110 transition-transform">
                {p.id}
              </span>
            </div>
            <div className="p-6">
              <div className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                {p.category}
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">{p.desc}</p>
              <div className="text-xs text-muted-light mb-4">
                <span className="font-semibold">Tech:</span> {p.tech}
              </div>
              <button className="text-primary font-semibold text-sm hover:underline">
                View Case Study →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
