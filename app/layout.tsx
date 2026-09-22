import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import { BUSINESS, LOCATIONS } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const SITE_URL = 'https://kingschoice-website.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Laboratory Equipment & Medical Consumables Nigeria`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'Kingschoice Med & More distributes laboratory equipment, pharmaceutical and health consumables, and general merchandise across Nigeria. Free delivery within Lagos. Chat with us on WhatsApp.',
  keywords: [
    'laboratory equipment Nigeria',
    'medical consumables Lagos',
    'medical equipment distributor Nigeria',
    'lab equipment supplier Lagos',
    'pharmaceutical consumables Nigeria',
    'PPE supplier Nigeria',
    'Kingschoice Med & More',
  ],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Laboratory Equipment & Medical Consumables Nigeria`,
    description:
      'Distributors of laboratory equipment, pharmaceutical & health consumables and general merchandise. Free delivery within Lagos.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Laboratory Equipment & Medical Consumables Nigeria`,
    description:
      'Distributors of laboratory equipment, pharmaceutical & health consumables and general merchandise across Nigeria.',
    images: ['/og-image.png'],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': LOCATIONS.map((loc) => ({
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#${loc.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: `${BUSINESS.name} — ${loc.name}`,
    parentOrganization: BUSINESS.name,
    telephone: `+${BUSINESS.phoneIntl}`,
    email: BUSINESS.email,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressCountry: 'NG',
    },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-ink font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
