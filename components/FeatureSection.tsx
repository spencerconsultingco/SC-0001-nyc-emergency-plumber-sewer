'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PhoneCall, Clock, ShieldCheck, CheckCircle, Wrench, BadgeCheck } from 'lucide-react';

const responseSteps = [
  {
    step: '01',
    icon: PhoneCall,
    title: `You Call — We Answer`,
    body: `Someone picks up every single call, day or night. No voicemail, no automated systems. A real dispatcher in New York takes your information immediately.`
  },
  {
    step: '02',
    icon: Clock,
    title: `Rapid Dispatch Across NYC`,
    body: `We route the nearest available licensed plumber to your address. Our team is positioned throughout the five boroughs so response times stay tight — even at 3am.`
  },
  {
    step: '03',
    icon: Wrench,
    title: `Diagnose Before We Dig`,
    body: `We don't guess. Your technician performs a thorough inspection, explains the problem clearly, and gives you an honest upfront quote before any work begins.`
  },
  {
    step: '04',
    icon: BadgeCheck,
    title: `Fixed Right. Tested Twice.`,
    body: `Every repair is pressure-tested and visually inspected before we leave your property. We don't consider the job done until you see dry pipes and flowing drains.`
  }
];

const guarantees = [
  { icon: ShieldCheck, label: `Licensed & Insured Plumbers` },
  { icon: CheckCircle, label: `Upfront Pricing — No Hidden Fees` },
  { icon: Clock, label: `Available Every Hour of Every Day` },
  { icon: BadgeCheck, label: `Work Backed by Our Satisfaction Guarantee` }
];

export default function FeatureSection() {
  return (
    <section id='feature' className='py-24 bg-section-gradient overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <div className='inline-flex items-center gap-2 text-accent-500 font-semibold text-sm tracking-widest uppercase mb-4'>
            <Clock className='w-4 h-4' />
            AlertTriangle Response
          </div>
          <h2 className='font-display font-900 text-brand-900 text-4xl sm:text-5xl leading-tight mb-4'>
            When Every Minute Counts,
            <span className='block text-brand-600'>We Don&apos;t Make You Wait</span>
          </h2>
          <p className='text-gray-500 text-lg max-w-2xl mx-auto'>
            Water damage compounds fast. That&apos;s why our emergency response is built around speed, precision, and total transparency — from first call to final test.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Steps */}
          <div className='space-y-8'>
            {responseSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex gap-5 group'
              >
                <div className='flex-shrink-0 w-14 h-14 bg-brand-700 rounded-2xl flex items-center justify-center shadow-card group-hover:bg-accent-500 transition-colors duration-300'>
                  <item.icon className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='flex items-center gap-2 mb-1'>
                    <span className='text-xs font-bold text-brand-400 tracking-widest uppercase'>{item.step}</span>
                  </div>
                  <h3 className='font-display font-700 text-brand-900 text-lg mb-1'>{item.title}</h3>
                  <p className='text-gray-500 text-sm leading-relaxed'>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image + Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative'
          >
            <div className='relative rounded-3xl overflow-hidden shadow-deep aspect-[4/5]'>
              <Image
                src='/images/gallery-1.jpg'
                alt='NYC AlertTriangle Plumber technician at work'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent' />

              {/* Floating Badge */}
              <div className='absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-card'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse' />
                  <span className='font-display font-700 text-brand-900 text-sm'>Dispatching Now — NYC Available</span>
                </div>
                <p className='text-gray-500 text-xs leading-snug'>
                  Our technicians are on call across all five boroughs right now.
                </p>
                <a
                  href='tel:3329003335'
                  className='mt-3 flex items-center gap-2 text-accent-600 font-display font-700 text-sm hover:text-accent-500 transition-colors'
                >
                  <PhoneCall className='w-4 h-4' />
                  (332) 900-3335
                </a>
              </div>
            </div>

            {/* Decorative Element */}
            <div className='absolute -top-6 -right-6 w-40 h-40 bg-brand-100 rounded-full -z-10' />
            <div className='absolute -bottom-8 -left-8 w-56 h-56 bg-accent-500/10 rounded-full -z-10' />
          </motion.div>
        </div>

        {/* Guarantees Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-brand-900 rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {guarantees.map((item) => (
            <div key={item.label} className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center flex-shrink-0'>
                <item.icon className='w-5 h-5 text-accent-400' />
              </div>
              <span className='text-white font-semibold text-sm leading-snug'>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
