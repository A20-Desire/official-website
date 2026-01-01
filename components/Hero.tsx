import React, { useEffect, useState } from 'react'

const scrollToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Hero() {
  const [activeSegment, setActiveSegment] = useState<'contact' | 'services'>('contact')
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      src: '/assets/hero/home-heroimg.jpg',
      alt: 'Ungozu & Sons consultant collaborating with a client'
    },
    {
      src: '/assets/hero/home-heroimg.jpg',
      alt: 'Ungozu & Sons specialist presenting a technology roadmap'
    },
    {
      src: '/assets/hero/home-heroimg.jpg',
      alt: 'Project kick-off workshop with Ungozu & Sons partners'
    }
  ]

  const handleSegmentClick = (sectionId: 'contact' | 'services') => {
    setActiveSegment(sectionId)
    scrollToSection(sectionId)
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length)
  }

  const handlePrev = () => goToSlide(currentSlide - 1)
  const handleNext = () => goToSlide(currentSlide + 1)

  const trackTranslateClass =
    currentSlide === 0 ? 'translate-x-0' : currentSlide === 1 ? '-translate-x-full' : '-translate-x-[200%]'

  return (
    <section className="bg-gradient-to-r from-primary via-primary-300 to-primary-400 text-white pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16 min-h-[60vh]">
          <div className="text-center md:text-left md:w-1/2">
            <div className="inline-flex items-center justify-center md:justify-start rounded-full bg-white/15 p-1 mb-10 reveal-up">
              <button
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  activeSegment === 'contact'
                    ? 'bg-white text-primary shadow'
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => handleSegmentClick('contact')}
                type="button"
              >
                Bring your ideas to life
              </button>
              <button
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  activeSegment === 'services'
                    ? 'bg-white text-primary shadow'
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => handleSegmentClick('services')}
                type="button"
              >
                Explore our services
              </button>
            </div>
            <h1 className="heading-hero text-white mb-6 md:mb-8">
              <span className="block reveal-up reveal-up-delay-1 text-gradient-hero">Empowering Innovation</span>
              <span className="block reveal-up reveal-up-delay-2 text-gradient-hero">Through Technology</span>
            </h1>
            <p className="body-lead text-white/90 max-w-2xl md:max-w-xl mx-auto md:mx-0 mb-8">
              <span className="block reveal-up reveal-up-delay-3">
                At Ungozu, we partner with forward-thinking businesses to design, develop, and deliver innovative
                technology solutions that drive growth and create lasting impact.
              </span>
            </p>
            <div className="mt-6 md:mt-8 reveal-up reveal-up-delay-4">
              <button className="btn-cta" onClick={() => scrollToSection('contact')}>
                Get a Free Quote
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative w-full max-w-2xl md:max-w-xl lg:max-w-2xl reveal-up reveal-up-delay-5">
              <div className="overflow-hidden rounded-3xl shadow-lg bg-white/10 backdrop-blur">
                <div className={`flex transition-transform duration-700 ease-out will-change-transform ${trackTranslateClass}`}>
                  {slides.map((slide, index) => (
                    <img
                      key={`${slide.src}-${index}`}
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-[22rem] md:h-[24rem] lg:h-[26rem] object-cover flex-shrink-0"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white/70 text-primary hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white/70 text-primary hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      currentSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentSlide === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
