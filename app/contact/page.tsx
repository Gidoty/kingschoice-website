import type { Metadata } from 'next';
import { BUSINESS, LOCATIONS, generalWaLink, mailtoLink } from '@/lib/constants';
import { WhatsAppIcon, PhoneIcon, MailIcon, PinIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: `Locations & Contact | ${BUSINESS.name}`,
  description: `Find ${BUSINESS.name} on Lagos Island, Lagos Mainland and in Enugu. Reach us on WhatsApp, phone or email.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">Contact</p>
      <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Locations &amp; Contact</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Reach us directly on WhatsApp for the fastest response, or visit one of our three
        locations across Lagos and Enugu.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <a
          href={generalWaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#25D366] hover:shadow-md"
        >
          <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
          <h2 className="text-base font-semibold text-ink">WhatsApp</h2>
          <p className="text-sm text-slate-600">{BUSINESS.phoneDisplay}</p>
        </a>
        <a
          href={`tel:+${BUSINESS.phoneIntl}`}
          className="flex flex-col items-start gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue hover:shadow-md"
        >
          <PhoneIcon className="h-6 w-6 text-blue" />
          <h2 className="text-base font-semibold text-ink">Call Us</h2>
          <p className="text-sm text-slate-600">{BUSINESS.phoneDisplay}</p>
        </a>
        <a
          href={mailtoLink}
          className="flex flex-col items-start gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue hover:shadow-md"
        >
          <MailIcon className="h-6 w-6 text-blue" />
          <h2 className="text-base font-semibold text-ink">Email</h2>
          <p className="text-sm text-slate-600">{BUSINESS.email}</p>
        </a>
      </div>

      <h2 className="mt-14 text-xl font-bold text-navy sm:text-2xl">Our Locations</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <PinIcon className="h-6 w-6 text-blue" />
            <h3 className="mt-3 text-base font-semibold text-ink">{loc.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{loc.address}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-offwhite p-6 text-sm text-slate-600">
        Business registration: BN {BUSINESS.bn}
      </div>
    </div>
  );
}
