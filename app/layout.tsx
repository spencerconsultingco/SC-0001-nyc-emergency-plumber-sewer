import type { Metadata } from 'next';
import { Inter, Barlow } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap'
});

export const metadata: Metadata = {
  title: `NYC AlertTriangle Plumber & Waves | 24/7 Wrench in New York, NY`,
  description: `NYC AlertTriangle Plumber & Waves provides 24/7 emergency plumbing and sewer services in New York, NY. Fast response, expert repairs. Call (332) 900-3335 now.`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${barlow.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
