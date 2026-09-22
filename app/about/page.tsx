import type { Metadata } from 'next';
import { BUSINESS, VISION, MISSION, generalWaLink } from '@/lib/constants';
import { WhatsAppIcon, CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.name}`,
  description: `Learn about ${BUSINESS.name}, a Nigerian distributor of medical and laboratory equipment operating out of Lagos and Enugu.`,
};

const values = [
  {
    title: 'Genuine equipment',
    body: 'We source directly from trusted manufacturers and distributors, so every item we supply is genuine and fit for clinical use.',
  },
  {
    title: 'Straightforward ordering',
    body: 'No online checkout to navigate. You message us on WhatsApp, we confirm price and availability, and delivery is arranged from there.',
  },
  {
    title: 'Nationwide reach',
    body: 'From our Lagos and Enugu locations, we deliver across Nigeria, with free delivery within Lagos and a 30% discount on delivery outside Lagos.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">About Us</p>
      <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{BUSINESS.name}</h1>
      <p className="mt-2 text-base italic text-slate-500">{BUSINESS.motto}</p>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
        <p>
          {BUSINESS.name} is a Nigerian distributor of laboratory equipment, pharmaceutical and
          health consumables, and allied medical supplies &mdash; supplying hospitals, clinics,
          diagnostic centres and laboratories with the tools they need to run their facilities,
          from lab analyzers and microscopes to test kits, gloves and general consumables.
        </p>
        <p>
          We operate from three locations &mdash; two in Lagos and one in Enugu &mdash; and deliver
          equipment across Nigeria. Rather than a traditional online store, every product on this
          site routes straight to a WhatsApp conversation with our team, which is how our
          customers have always preferred to order: a direct message, a quick confirmation, and
          delivery arranged from there.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <CheckIcon className="h-5 w-5 text-teal" />
            <h3 className="mt-3 text-base font-semibold text-ink">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-navy">Our Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{VISION}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-navy">Our Mission</h2>
          <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-600">
            {MISSION.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="font-semibold text-teal">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-offwhite p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Business Registration</h2>
        <p className="mt-2 text-sm text-slate-700">
          {BUSINESS.name} is registered in Nigeria under BN: {BUSINESS.bn}.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-navy p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/80">Have a question about a product or an order?</p>
        <a
          href={generalWaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb958]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
