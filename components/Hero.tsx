'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PhoneCall, ArrowRight, Clock, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero.jpg'
          alt='NYC AlertTriangle Plumber team ready to respond'
          fill
          priority
          className='object-cover object-center'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-hero-gradient' />
      </div>

      {/* Animated Background Orbs */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-slow' />
        <div className='absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40'>
        <div className='max-w-3xl'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/40 text-accent-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm'
          >
            <Clock className='w-4 h-4' />
            Open 24 Hours — 7 Days a Week
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='font-display font-900 text-white text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-6'
          >
            New York&apos;s
            <span className='block text-accent-400'>AlertTriangle</span>
            <span className='block'>Wrench Pros</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl'
          >
            Burst pipe at 2am? Waves backup before guests arrive? We dispatch fast across all five boroughs.
            Licensed plumbers. Honest pricing. No surprise charges.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col sm:flex-row gap-4 mb-12'
          >
            <a
              href='tel:3329003335'
              className='flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-display font-800 text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-deep hover:shadow-glow hover:-translate-y-0.5'
            >
              <PhoneCall className='w-5 h-5' />
              Call Now — (332) 900-3335
            </a>
            <a
              href='#contact'
              className='flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-display font-700 text-lg px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm'
            >
              Request Service
              <ArrowRight className='w-5 h-5' />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-wrap gap-6'
          >
            <div className='flex items-center gap-2 text-gray-200'>
              <ShieldCheck className='w-5 h-5 text-brand-300' />
              <span className='text-sm font-medium'>Licensed & Insured</span>
            </div>
            <div className='flex items-center gap-2 text-gray-200'>
              <BadgeCheck className='w-5 h-5 text-brand-300' />
              <span className='text-sm font-medium'>Upfront Pricing</span>
            </div>
            <div className='flex items-center gap-2 text-gray-200'>
              <Clock className='w-5 h-5 text-brand-300' />
              <span className='text-sm font-medium'>Same-Day Dispatch</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50'
      >
        <span className='text-xs tracking-widest uppercase'>Scroll</span>
        <div className='w-px h-8 bg-white/30 animate-pulse' />
      </motion.div>
    </section>
  );
}
