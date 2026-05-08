'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ThumbsUp, Users } from 'lucide-react';

const reviews = [
  {
    author: 'Mia Clark',
    text: `I was impressed by how smoothly their team handled water heater installation. The plumber ensured everything was set up correctly and tested before leaving. The system runs perfectly now. Great experience overall.`,
    date: 'a month ago'
  },
  {
    author: 'Felix Anderson',
    text: `Noticed a small puddle forming under the kitchen sink every morning. I contacted this service and they found a worn out seal causing the issue. They fixed it quickly and now everything stays completely dry.`,
    date: 'a month ago'
  },
  {
    author: 'Ryan Lamar',
    text: `Our toilet base began leaking slightly, leaving water on the floor. I contacted their team immediately. The technician replaced the wax seal and secured the toilet. He also checked all surrounding pipes. The leak is gone and everything is dry. Excellent professional service.`,
    date: 'a month ago'
  },
  {
    author: 'Jamie Guillory',
    text: `As soon as we noticed inconsistent hot water in the shower, I contacted their specialists. They replaced the mixing valve and tested it carefully. The temperature now stays steady.`,
    date: '2 months ago'
  },
  {
    author: 'Benjamin Brooks',
    text: `A few days ago, our laundry room drain started overflowing. I contacted a plumbing expert to inspect it. They cleared the clog and cleaned the line thoroughly. The drain now works smoothly.`,
    date: 'a month ago'
  },
  {
    author: 'Delilah Cassie',
    text: `Their crew showed up on time and got straight to work on my leaking laundry line. The pipe had a small crack that could have turned into a bigger issue. They replaced it and tested for pressure leaks. Very dependable service.`,
    date: '2 months ago'
  },
  {
    author: 'Chase Rivera',
    text: `The sink pipe developed a small crack and started leaking. Their experts replaced the damaged section right away. The repair was neat and secure. Very satisfied with the result.`,
    date: 'a month ago'
  },
  {
    author: 'Brenda Samuel',
    text: `I noticed a slow leak under the guest bathroom vanity. I called their team for help. They replaced the corroded pipe and sealed the joint. I'm very satisfied with their careful and reliable work.`,
    date: '2 months ago'
  }
];

function StarRow() {
  return (
    <div className='flex gap-0.5'>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className='w-4 h-4 fill-amber-400 text-amber-400' />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = [
  'bg-brand-600',
  'bg-accent-500',
  'bg-emerald-600',
  'bg-purple-600',
  'bg-rose-600',
  'bg-teal-600',
  'bg-indigo-600',
  'bg-amber-600'
];

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-widest uppercase mb-4'>
            <Users className='w-4 h-4' />
            What New Yorkers Say
          </div>
          <h2 className='font-display font-900 text-brand-900 text-4xl sm:text-5xl leading-tight mb-4'>
            Trusted by Homeowners &
            <span className='block text-brand-600'>Businesses Across NYC</span>
          </h2>
          <p className='text-gray-500 text-lg max-w-xl mx-auto'>
            Real customers. Real emergencies. Read how we showed up when it mattered most.
          </p>

          {/* Trust Stats */}
          <div className='flex flex-wrap justify-center gap-8 mt-8'>
            <div className='flex items-center gap-2'>
              <ThumbsUp className='w-5 h-5 text-brand-500' />
              <span className='text-gray-700 font-semibold text-sm'>Highly reviewed by local customers</span>
            </div>
            <div className='flex items-center gap-2'>
              <StarRow />
              <span className='text-gray-700 font-semibold text-sm'>Consistently 5-star service</span>
            </div>
          </div>
        </motion.div>

        {/* Gallery Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto'
        >
          <div className='relative rounded-2xl overflow-hidden aspect-video shadow-card'>
            <Image
              src='/images/gallery-1.jpg'
              alt='Wrench work completed by NYC AlertTriangle Plumber'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 50vw, 400px'
            />
          </div>
          <div className='relative rounded-2xl overflow-hidden aspect-video shadow-card'>
            <Image
              src='/images/gallery-2.jpg'
              alt='Professional plumber servicing NYC property'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 50vw, 400px'
            />
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className='bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-card hover:-translate-y-1 transition-all duration-300'
            >
              <StarRow />
              <p className='text-gray-600 text-sm leading-relaxed flex-1'>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className='flex items-center gap-3 pt-2 border-t border-gray-200'>
                <div className={`w-9 h-9 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
                  <span className='text-white text-xs font-bold'>{getInitials(review.author)}</span>
                </div>
                <div>
                  <div className='font-semibold text-brand-900 text-sm'>{review.author}</div>
                  <div className='text-gray-400 text-xs'>{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
