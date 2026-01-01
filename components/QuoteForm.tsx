import React, { useRef, useState } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: '',
    budget: '',
    message: '',
    attachment: null as File | null
  })

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setFormData((prev) => ({ ...prev, attachment: file }))
  }

  const triggerFileDialog = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with backend or email service
    console.log('Form submitted:', {
      ...formData,
      attachment: formData.attachment ? formData.attachment.name : null
    })
    alert('Thank you for your request! We will get back to you within 24 hours.')
  }

  const selectedFileName = formData.attachment ? formData.attachment.name : 'No file chosen yet'

  return (
    <section id="contact" className="request-quote-section relative overflow-hidden py-24 md:py-[7rem]">
      <img
        src="/assets/request-quote-art/leftquoteasset.png"
        alt=""
        className="request-quote-art request-quote-art--left"
        aria-hidden="true"
      />
      <img
        src="/assets/request-quote-art/rightquoteasset.png"
        alt=""
        className="request-quote-art request-quote-art--right"
        aria-hidden="true"
      />

      {/* top-right decorative cluster (four shapes) */}
      <div className="request-quote-top-decor" aria-hidden="true">
        <span className="request-quote-decor decor-1" />
        <span className="request-quote-decor decor-2" />
        <span className="request-quote-decor decor-3" />
        <span className="request-quote-decor decor-4" />
      </div>

      {/* white convex SVG wave at bottom of section */}
      <svg
        className="request-quote-wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* push the white curve further up: shallower bottom white, assets can sit on its edge */}
        <path
          d="M0,120 C240,0 480,180 720,120 C960,60 1200,180 1440,100 L1440,320 L0,320 Z"
          fill="#fff"
        />
      </svg>

      <div className="container relative z-10 mx-auto px-6">
        <div className="request-quote-inner">
          <div className="space-y-4 max-w-3xl">
            <h2 className="heading-section request-quote-heading">Request for a quote</h2>
            <p className="request-quote-subheading">
              Tell us about your project and we will craft a tailored proposal that fits your goals, timeline, and budget.
            </p>
          </div>

          <div className="request-quote-card w-full max-w-3xl px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="request-quote-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="request-quote-input"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="request-quote-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="request-quote-input"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="request-quote-label">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Brand/Company/Product Name"
                  className="request-quote-input"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="services" className="request-quote-label">
                    Services
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="request-quote-input request-quote-select"
                    required
                  >
                    <option value="" disabled>
                      What are you looking for?
                    </option>
                    <option value="brand-identity">Brand Identity Design</option>
                    <option value="website-design">Website Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="product-design">Product Design</option>
                    <option value="marketing">Marketing Strategy</option>
                    <option value="other">Other / Not Listed</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="request-quote-label">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="request-quote-input request-quote-select"
                    required
                  >
                    <option value="" disabled>
                      What is your budget
                    </option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value="10k-25k">$10,000 – $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="request-quote-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="request-quote-input h-40 resize-none"
                  required
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="attachment" className="request-quote-label">
                  Attach file
                </label>
                <div className="request-quote-attachment">
                  <input
                    ref={fileInputRef}
                    id="attachment"
                    name="attachment"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label="Upload attachment"
                  />
                  <button
                    type="button"
                    onClick={triggerFileDialog}
                    className="request-quote-upload"
                  >
                    Upload File
                  </button>
                  <span className="request-quote-file-name" aria-live="polite">
                    {selectedFileName}
                  </span>
                </div>
              </div>

              <button type="submit" className="request-quote-btn">
                Request for Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
