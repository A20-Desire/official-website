import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesGrid from '../components/ServicesGrid'
import ProjectsGrid from '../components/ProjectsGrid'
import BlogTeasers from '../components/BlogTeasers'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
  <div className="font-brand bg-decor text-primary-900">
      <header className="bg-gradient-to-r from-primary via-primary-300 to-primary-400 text-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="sm:flex items-start">
              <img src="/logo_1.svg" alt="Ungozu & Sons" className="w-40 h-auto" />
            </div>
            <div className="space-x-8 hidden md:flex items-center text-white">
              <button onClick={() => scrollToSection('hero')} className="transition-colors font-medium hover:text-accent">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="transition-colors font-medium hover:text-accent">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="transition-colors font-medium hover:text-accent">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="transition-colors font-medium hover:text-accent">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('blog')} className="transition-colors font-medium hover:text-accent">
                Blog
              </button>
              <button onClick={() => scrollToSection('career')} className="transition-colors font-medium hover:text-accent">
                Career
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-accent text-white font-semibold px-5 py-2 rounded-pill shadow-sm hover:bg-primary-300 transition">
                Contact Us
              </button>
            </div>
            <button
              className="md:hidden text-white hover:text-accent transition-colors"
              aria-label="Open navigation menu"
              title="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="container mx-auto px-6 py-20">
          <About />
        </section>
        <section id="services" className="bg-primary text-white py-20">
          <div className="container mx-auto px-6">
            <ServicesGrid />
          </div>
        </section>
        <section id="portfolio" className="container mx-auto px-6 py-20">
          <ProjectsGrid />
        </section>
        <section id="career" className="bg-card py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              We are always looking for passionate innovators and problem solvers to help us build the future of technology services.
            </p>
            <button className="btn-primary px-8 py-3">Explore Careers</button>
          </div>
        </section>
        <section id="blog" className="bg-decor py-20">
          <div className="container mx-auto px-6">
            <BlogTeasers />
          </div>
        </section>
        <section className="bg-primary-50 py-20">
          <QuoteForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}
