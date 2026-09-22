import type { Metadata } from 'next';
import { BUSINESS, VISION, MISSION } from '@/lib/constants';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Reveal from '@/components/Reveal';
import { CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${BUSINESS.name}, a Nigerian distributor of laboratory equipment, pharmaceutical and health consumables, and general merchandise.`,
};

const values = [
  {
    title: 'Genuine products',
    body: 'We source directly from trusted manufacturers and distributors, so every item we supply is genuine and fit for clinical use.',
  },
  {
    title: 'Direct, personal service',
    body: 'No online checkout to navigate. You message us on WhatsApp, we confirm availability, and delivery is arranged from there.',
  },
  {
    title: 'Nationwide reach',
    body: 'From our Lagos and Enugu locations, we deliver across Nigeria, with free same-day delivery within Lagos and a 30% discount outside Lagos.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">About Us</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{BUSINESS.name}</h1>
        <p className="mt-2 text-base italic text-ink/50">{BUSINESS.motto}</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
          <p>
            {BUSINESS.name} is a Nigerian distributor of laboratory equipment, pharmaceutical and
            health consumables, and general merchandise &mdash; supplying hospitals, clinics,
            diagnostic centres, laboratories and pharmacies with the tools they need to run their
            facilities, from lab analyzers and microscopes to test kits, protective equipment and
            everyday consumables.
          </p>
          <p>
            We operate from three locations &mdash; two in Lagos and one in Enugu &mdash; and
            deliver equipment and supplies across Nigeria. Every order is handled directly, by
            message: you tell us what you need on WhatsApp, we confirm availability and price, and
            delivery is arranged from there. It is how our customers have always preferred to
            order, and it keeps the relationship personal.
          </p>
          <p>
            We are committed to quality in everything we distribute, and to working closely with
            the healthcare and academic institutions we serve &mdash; supporting their laboratory
            practice, training and day-to-day operations as a dependable supply partner, not just
            a vendor.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 80}>
            <div className="h-full rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <CheckIcon className="h-5 w-5 text-brand" />
              <h3 className="mt-3 text-base font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-ink">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{VISION}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-ink">Our Mission</h2>
            <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink/70">
              {MISSION.map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="font-semibold text-brand">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-12 rounded-xl border border-black/5 bg-offwhite p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">Business Registration</h2>
          <p className="mt-2 text-sm text-ink/70">
            {BUSINESS.name} is registered in Nigeria under BN: {BUSINESS.bn}.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-brand-dark p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">Have a question about a product or an order?</p>
          <WhatsAppCTA />
        </div>
      </Reveal>
    </div>
  );
}
