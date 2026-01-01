import React from 'react'

const services = [
  { 
    title: 'Web Development', 
    desc: 'Build responsive, scalable web applications tailored to your business needs using modern frameworks and best practices.',
    icon: '🌐'
  },
  { 
    title: 'Software Development', 
    desc: 'End-to-end custom software solutions—from concept to deployment—designed to solve your unique challenges.',
    icon: '💻'
  },
  { 
    title: 'IT Training & Consulting', 
    desc: 'Upskill your workforce with hands-on training programs and strategic IT consulting to maximize your technology investments.',
    icon: '📚'
  },
  { 
    title: 'Hardware Supply & Integration', 
    desc: 'Reliable sourcing and seamless integration of hardware solutions to power your infrastructure and operations.',
    icon: '🖥️'
  }
]

export default function ServicesGrid() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Comprehensive technology solutions designed to accelerate your business growth
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card text-primary-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform border border-border/50">
            <div className="text-2xl mb-4 text-accent">{s.icon}</div>
            <h3 className="font-bold text-xl mb-3">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            <button className="mt-4 text-primary font-semibold text-sm hover:underline">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
