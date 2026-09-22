import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import { faqs } from '@/lib/faq';
import FaqAccordion from '@/components/FaqAccordion';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: `Answers to common questions about ordering, delivery, pricing and legitimacy for ${BUSINESS.name}.`,
};

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Answers to the questions we hear most from hospitals, clinics, labs and individual buyers.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-brand-dark p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">Didn&apos;t find what you were looking for?</p>
          <WhatsAppCTA label="Ask us on WhatsApp" />
        </div>
      </Reveal>
    </div>
  );
}
