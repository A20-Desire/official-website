import React from 'react'
import Header from '../desven/components/Header'
import Hero from '../desven/components/Hero'
import ValuesRibbon from '../desven/components/ValuesRibbon'
import ServicesSection from '../desven/components/ServicesSection'
import ProfileSection from '../desven/components/ProfileSection'
import TeamSection from '../desven/components/TeamSection'
import ProjectsSection from '../desven/components/ProjectsSection'
import ContactSection from '../desven/components/ContactSection'
import Footer from '../desven/components/Footer'

const DesvenLanding: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)]">
      <Header onNavigate={handleScroll} />
      <main>
        <Hero />
        <ValuesRibbon />
        <ServicesSection />
        <ProfileSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default DesvenLanding
