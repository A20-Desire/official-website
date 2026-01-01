import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/60 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <img src="/logo_1-on-white.svg" alt="Ungozu & Sons" className="w-28 h-auto mb-4" />
            <p className="text-sm text-muted">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">IT Training</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hardware Supply</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
          <div className="mb-4 md:mb-0 text-muted">
            © {new Date().getFullYear()} Ungozu & Sons. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
