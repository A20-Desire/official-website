import React from 'react'

const featurePoints = [
  'End-to-end software teams embedded in your workflow',
  'Hands-on training that keeps your organisation ahead',
  'Strategic consulting aligned with measurable outcomes',
  'Reliable hardware sourcing and on-site integration'
]

const stats = [
  { value: '50+', label: 'Successful Projects' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Technical Support' }
]

export default function About() {
  const imageBaseClass =
    'w-full max-w-[240px] mx-auto rounded-lg object-cover shadow-md shadow-primary/10 brightness-95 saturate-[0.85]'

  return (
    <div className="grid gap-12 items-center md:grid-cols-[1fr_1.1fr]">
      <div className="relative order-1 md:order-1 md:justify-self-center">
        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary-100/30 blur-2xl" aria-hidden />
        <div className="absolute -bottom-12 -right-8 h-28 w-28 rounded-full bg-primary/20 blur-xl" aria-hidden />
        <div className="relative grid grid-cols-2 gap-4 sm:gap-5 max-w-xl">
          <div className="space-y-4 sm:space-y-5">
            <img
              src="/assets/about/img2.png"
              alt="Ungozu & Sons team collaborating in the studio"
              className={`${imageBaseClass} h-44 sm:h-52`}
              loading="lazy"
            />
            <img
              src="/assets/about/img3.jpg"
              alt="Innovation session with prototypes and devices"
              className={`${imageBaseClass} h-36 sm:h-40`}
              loading="lazy"
            />
          </div>
          <div className="space-y-4 sm:space-y-5 pt-6 sm:pt-10">
            <img
              src="/assets/about/img4.jpg"
              alt="Modern workspace showing technology infrastructure"
              className={`${imageBaseClass} h-36 sm:h-40`}
              loading="lazy"
            />
            <img
              src="/assets/about/img5.jpg"
              alt="Client success celebration after project delivery"
              className={`${imageBaseClass} h-44 sm:h-52`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="order-2 md:order-2">
        <div className="eyebrow mb-4">About Ungozu</div>
        <h2 className="heading-section text-primary-900 mb-6">
          Building Reliable Partnerships That Accelerate Growth
        </h2>
        <p className="body-lead mb-4">
          Ungozu & Sons helps organisations turn ambitious ideas into dependable digital products. From
          custom software and IT enablement to infrastructure deployment, we combine strategy, design, and
          engineering expertise under one collaborative team.
        </p>
        <p className="body-base text-muted mb-6">
          We stay with you through every stage—discovery, delivery, and optimisation—making sure your
          technology investments keep pace with evolving business goals.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 mb-8">
          {featurePoints.map((point) => (
            <li key={point} className="flex items-start gap-3 body-base text-primary-900/90">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8.5l3.5 3.5L13 5" />
                </svg>
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-8 mb-8">
          {stats.map((item) => (
            <div key={item.label} className="min-w-[120px]">
              <div className="stat-value mb-1">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
        <button className="btn-cta">Learn About Our Approach</button>
      </div>
    </div>
  )
}
