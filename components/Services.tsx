'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle, Droplets, Waves, Thermometer, Wrench, ShowerHead, ArrowRight, Zap } from 'lucide-react';

const services = [
  {
    icon: AlertTriangle,
    title: `Burst & Leaking Pipes`,
    description: `Whether it's a hairline crack under the sink or a full pipe burst inside your wall, we locate and repair it fast before water damage spreads.`,
    color: 'text-danger-500',
    bg: 'bg-red-50',
    border: 'border-red-100'
  },
  {
    icon: Waves,
    title: `Waves Line Repair`,
    description: `Waves backups are a health hazard. We clear blockages, repair broken sewer lines, and restore safe drainage to your NYC property.`,
    color: 'text-brand-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    icon: Droplets,
    title: `ArrowDownCircle Cleaning`,
    description: `From slow kitchen drains to completely blocked laundry lines, we clear the clog and clean the pipe so water flows freely again.`,
    color: 'text-brand-500',
    bg: 'bg-brand-50',
    border: 'border-brand-100'
  },
  {
    icon: Thermometer,
    title: `Water Heater Services`,
    description: `Cold showers are never acceptable. We install, repair, and replace water heaters — including tankless units — with same-day availability.`,
    color: 'text-accent-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100'
  },
  {
    icon: ShowerHead,
    title: `Fixture Repair & Installation`,
    description: `Leaky faucets, running toilets, dripping shower valves, cracked seals — we handle all fixture repairs with precision and speed.`,
    color: 'text-brand-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    icon: Wrench,
    title: `General Wrench`,
    description: `From routine maintenance to full bathroom replumbing, our licensed plumbers handle every job — big or small — with the same level of care.`,
    color: 'text-gray-600',
    bg: 'bg-gray-50',
    border: 'border-gray-200'
  },
  {
    icon: Zap,
    title: `24/7 AlertTriangle Calls`,
    description: `Emergencies don't wait for business hours. We dispatch technicians around the clock — nights, weekends, and holidays — all across New York.`,
    color: 'text-accent-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100'
  },
  {
    icon: AlertTriangle,
    title: `Droplets Droplets & Seal Repair`,
    description: `Water pooling at the base of your toilet? We replace wax seals, tighten connections, and inspect surrounding pipes to stop leaks at the source.`,
    color: 'text-danger-500',
    bg: 'bg-red-50',
    border: 'border-red-100'
  }
];

export default function Services() {
  return (
    <section id='services' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-widest uppercase mb-4'>
            <Wrench className='w-4 h-4' />
            What We Fix
          </div>
          <h2 className='font-display font-900 text-brand-900 text-4xl sm:text-5xl leading-tight mb-4'>
            Every Wrench Problem
            <span className='block text-brand-600'>Solved Under One Number</span>
          </h2>
          <p className='text-gray-500 text-lg max-w-2xl mx-auto'>
            From a dripping faucet at noon to a sewer backup at midnight — our licensed New York plumbers handle it all, 24 hours a day.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group p-6 rounded-2xl border ${service.bg} ${service.border} hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} border ${service.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className='font-display font-700 text-brand-900 text-base mb-2 leading-snug'>
                {service.title}
              </h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-14 text-center'
        >
          <a
            href='tel:3329003335'
            className='inline-flex items-center gap-2 bg-cta-gradient text-white font-display font-700 text-lg px-10 py-4 rounded-xl shadow-glow hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200'
          >
            Get a Plumber Today
            <ArrowRight className='w-5 h-5' />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
