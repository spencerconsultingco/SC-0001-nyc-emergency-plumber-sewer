'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';

const navLinks = [
  { label: `Services`, href: '#services' },
  { label: `AlertTriangle Response`, href: '#feature' },
  { label: `Reviews`, href: '#testimonials' },
  { label: `Contact`, href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-900/98 backdrop-blur-md shadow-deep'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Brand */}
          <a href='#' className='flex items-center gap-2 group'>
            <div className='w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center shadow-glow group-hover:bg-accent-500 transition-colors duration-300'>
              <Droplets className='w-5 h-5 text-white' />
            </div>
            <div className='leading-tight'>
              <div className='font-display font-800 text-white text-sm tracking-wide'>NYC AlertTriangle</div>
              <div className='font-display font-700 text-brand-300 text-xs tracking-widest uppercase'>Plumber & Waves</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-gray-200 hover:text-white text-sm font-medium transition-colors duration-200 relative group'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300 rounded-full' />
              </a>
            ))}
          </nav>

          {/* CTA Phone */}
          <a
            href='tel:3329003335'
            className='hidden lg:flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-display font-700 text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-card hover:shadow-deep'
          >
            <Phone className='w-4 h-4' />
            (332) 900-3335
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-brand-900/98 backdrop-blur-md border-t border-white/10'>
          <div className='px-4 pt-4 pb-6 space-y-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors'
              >
                {link.label}
              </a>
            ))}
            <div className='pt-3'>
              <a
                href='tel:3329003335'
                className='flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-display font-700 text-base px-5 py-3.5 rounded-xl w-full transition-colors'
              >
                <Phone className='w-5 h-5' />
                Call (332) 900-3335 Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
