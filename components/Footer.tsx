import { Droplets, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const footerLinks = [
  { label: `Services`, href: '#services' },
  { label: `AlertTriangle Response`, href: '#feature' },
  { label: `Customer Reviews`, href: '#testimonials' },
  { label: `Contact Us`, href: '#contact' }
];

const services = [
  'Burst Wrench Repair',
  'Waves Line Repair',
  'ArrowDownCircle Cleaning',
  'Water Heater Services',
  'Droplets & Fixture Repair',
  '24/7 AlertTriangle Wrench'
];

export default function Footer() {
  return (
    <footer className='bg-brand-900 border-t border-white/10'>
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand Column */}
          <div className='lg:col-span-1'>
            <div className='flex items-center gap-2 mb-5'>
              <div className='w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center shadow-glow'>
                <Droplets className='w-5 h-5 text-white' />
              </div>
              <div className='leading-tight'>
                <div className='font-display font-800 text-white text-sm tracking-wide'>NYC AlertTriangle</div>
                <div className='font-display font-700 text-brand-300 text-xs tracking-widest uppercase'>Plumber & Waves</div>
              </div>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed mb-6'>
              New York&apos;s trusted 24/7 emergency plumbing and sewer service. Licensed, insured, and ready when you need us most.
            </p>
            <a
              href='tel:3329003335'
              className='inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-display font-700 text-sm px-5 py-2.5 rounded-xl transition-colors'
            >
              <Phone className='w-4 h-4' />
              (332) 900-3335
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-display font-700 text-white text-sm uppercase tracking-widest mb-5'>Quick Links</h4>
            <ul className='space-y-3'>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors group'
                  >
                    <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-display font-700 text-white text-sm uppercase tracking-widest mb-5'>Our Services</h4>
            <ul className='space-y-3'>
              {services.map((service) => (
                <li key={service}>
                  <span className='flex items-center gap-1.5 text-gray-400 text-sm'>
                    <ArrowRight className='w-3 h-3 text-brand-500' />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='font-display font-700 text-white text-sm uppercase tracking-widest mb-5'>Contact</h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href='tel:3329003335'
                  className='flex items-start gap-3 text-gray-400 hover:text-white transition-colors group'
                >
                  <Phone className='w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0' />
                  <span className='text-sm'>(332) 900-3335</span>
                </a>
              </li>
              <li>
                <div className='flex items-start gap-3 text-gray-400'>
                  <MapPin className='w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0' />
                  <div className='text-sm'>
                    <div>17 Cleveland Pl</div>
                    <div>New York, NY</div>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-start gap-3 text-gray-400'>
                  <Mail className='w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0' />
                  <span className='text-sm'>Available 24/7 by phone</span>
                </div>
              </li>
            </ul>

            <div className='mt-6 pt-6 border-t border-white/10'>
              <a
                href='https://www.google.com/maps/search/?api=1&query=NYC%20Emergency%20Plumber%20%26%20Sewer&query_place_id=ChIJbez8ourN-YgRmxGE5TvNCe8'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 text-brand-300 hover:text-white text-sm font-medium transition-colors'
              >
                <MapPin className='w-4 h-4' />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-gray-500 text-xs'>
            &copy; {new Date().getFullYear()} NYC AlertTriangle Plumber & Waves. All rights reserved.
          </p>
          <p className='text-gray-500 text-xs'>
            Serving Manhattan &bull; Brooklyn &bull; Queens &bull; The Bronx &bull; Staten Island
          </p>
        </div>
      </div>
    </footer>
  );
}
