'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MapPin, Clock, Send, AlertTriangle, CheckCircle } from 'lucide-react';

const issueTypes = [
  'Burst or Leaking Wrench',
  'Clogged / Slow ArrowDownCircle',
  'Waves Backup',
  'No Hot Water / Water Heater',
  'Droplets Droplets or Overflow',
  'Droplets or Fixture Issue',
  'Shower / Tub ArrowDownCircle Problem',
  'Gas Line Concern',
  'Other AlertTriangle'
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: ``,
    phone: '',
    email: '',
    address: '',
    issueType: '',
    description: ``,
    urgency: 'emergency'
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id='contact' className='py-24 bg-brand-900 relative overflow-hidden'>
      {/* Background Orbs */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-brand-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 text-accent-400 font-semibold text-sm tracking-widest uppercase mb-4'>
            <AlertTriangle className='w-4 h-4' />
            Wrench AlertTriangle? Contact Us Now
          </div>
          <h2 className='font-display font-900 text-white text-4xl sm:text-5xl leading-tight mb-4'>
            Describe Your Problem.
            <span className='block text-brand-300'>We&apos;ll Handle the Rest.</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-xl mx-auto'>
            Fill out the form below or call us directly. A real plumber responds — not a chatbot.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-5 gap-12'>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-3'
          >
            {submitted ? (
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center'>
                <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <CheckCircle className='w-8 h-8 text-white' />
                </div>
                <h3 className='font-display font-800 text-white text-2xl mb-3'>Request Received!</h3>
                <p className='text-gray-300 text-base mb-6'>
                  Thank you for reaching out. A member of our team will contact you shortly.
                  For immediate emergencies, please call us directly.
                </p>
                <a
                  href='tel:3329003335'
                  className='inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-display font-700 px-8 py-3.5 rounded-xl transition-colors'
                >
                  <Phone className='w-4 h-4' />
                  (332) 900-3335
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 space-y-5'
              >
                {/* Urgency Toggle */}
                <div>
                  <label className='block text-gray-300 text-sm font-semibold mb-2'>How urgent is this?</label>
                  <div className='grid grid-cols-2 gap-3'>
                    {['emergency', 'scheduled'].map((val) => (
                      <button
                        key={val}
                        type='button'
                        onClick={() => setFormData((prev) => ({ ...prev, urgency: val }))}
                        className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          formData.urgency === val
                            ? 'bg-accent-500 text-white shadow-card'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {val === 'emergency' ? '🚨 AlertTriangle Now' : '📅 Schedule Service'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-gray-300 text-sm font-semibold mb-1.5'>Your Name *</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder='John Smith'
                      className='w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all'
                    />
                  </div>
                  <div>
                    <label className='block text-gray-300 text-sm font-semibold mb-1.5'>Phone Number *</label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder='(212) 555-0100'
                      className='w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all'
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className='block text-gray-300 text-sm font-semibold mb-1.5'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@email.com'
                    className='w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all'
                  />
                </div>

                {/* Service Address */}
                <div>
                  <label className='block text-gray-300 text-sm font-semibold mb-1.5'>Service Address in NYC *</label>
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder='123 Broadway, New York, NY 10001'
                    className='w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all'
                  />
                </div>

                {/* Issue Type */}
                <div>
                  <label className='block text-gray-300 text-sm font-semibold mb-1.5'>Type of Wrench Issue *</label>
                  <select
                    name='issueType'
                    value={formData.issueType}
                    onChange={handleChange}
                    required
                    className='w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all appearance-none'
                  >
                    <option value='' disabled className='bg-brand-900'>Select issue type...</option>
                    {issueTypes.map((issue) => (
                      <option key={issue} value={issue} className='bg-brand-900'>{issue}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className='block text-gray-300 text-sm font-semibold mb-1.5'>Describe the Problem</label>
                  <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder='Tell us what you see, hear, or smell. The more detail, the better we can help...'
                    className='w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all resize-none'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-display font-700 text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-card hover:-translate-y-0.5'
                >
                  <Send className='w-4 h-4' />
                  Send Service Request
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-2 space-y-6'
          >
            {/* Call Card */}
            <div className='bg-accent-500 rounded-2xl p-6 shadow-deep'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center'>
                  <Phone className='w-5 h-5 text-white' />
                </div>
                <div>
                  <div className='text-white/80 text-xs font-semibold uppercase tracking-wide'>Call Anytime</div>
                  <div className='text-white font-display font-800 text-lg'>(332) 900-3335</div>
                </div>
              </div>
              <p className='text-white/80 text-sm'>Available 24 hours a day, 7 days a week — including all NYC holidays.</p>
              <a
                href='tel:3329003335'
                className='mt-4 flex items-center justify-center gap-2 bg-white text-accent-600 font-display font-700 text-sm px-6 py-3 rounded-xl w-full hover:bg-gray-100 transition-colors'
              >
                <Phone className='w-4 h-4' />
                Tap to Call Now
              </a>
            </div>

            {/* Location Card */}
            <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center'>
                  <MapPin className='w-5 h-5 text-brand-300' />
                </div>
                <div>
                  <div className='text-gray-400 text-xs font-semibold uppercase tracking-wide'>Our Location</div>
                  <div className='text-white font-semibold text-sm'>17 Cleveland Pl, New York, NY</div>
                </div>
              </div>
              <p className='text-gray-400 text-sm mb-4'>Serving all five boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.</p>
              <a
                href='https://www.google.com/maps/search/?api=1&query=NYC%20Emergency%20Plumber%20%26%20Sewer&query_place_id=ChIJbez8ourN-YgRmxGE5TvNCe8'
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors w-full'
              >
                <MapPin className='w-4 h-4' />
                View on Google Maps
              </a>
            </div>

            {/* Hours Card */}
            <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center'>
                  <Clock className='w-5 h-5 text-brand-300' />
                </div>
                <div>
                  <div className='text-gray-400 text-xs font-semibold uppercase tracking-wide'>Hours</div>
                  <div className='text-white font-semibold text-sm'>Always Open</div>
                </div>
              </div>
              <div className='space-y-1.5'>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className='flex justify-between items-center'>
                    <span className='text-gray-400 text-xs'>{day}</span>
                    <span className='text-green-400 text-xs font-semibold'>Open 24 Hours</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
