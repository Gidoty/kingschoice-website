import type { Metadata } from 'next';
import { BUSINESS, LOCATIONS, generalWaLink, generalWaLinkSecondary, mailtoLink, telLink, telLinkSecondary, mapsEmbedSrc, mapsLink } from '@/lib/constants';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { WhatsAppIcon, PhoneIcon, MailIcon, PinIcon, ExternalLinkIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Locations & Contact',
  description: `Find ${BUSINESS.name} on Lagos Island, Lagos Mainland and in Enugu. Reach us on WhatsApp, phone or email.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Contact</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Locations &amp; Contact</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Reach us directly on WhatsApp for the fastest response, or visit one of our three
          locations across Lagos and Enugu.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:border-whatsapp hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                </div>
                <div className="mt-2.5 flex flex-col gap-1 pl-[52px] text-sm text-ink/60">
                  <a href={generalWaLink} target="_blank" rel="noopener noreferrer" className="hover:text-whatsapp">
                    {BUSINESS.phoneDisplay}
                  </a>
                  <a href={generalWaLinkSecondary} target="_blank" rel="noopener noreferrer" className="hover:text-whatsapp">
                    {BUSINESS.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:border-brand hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold text-ink">Call Us</p>
                </div>
                <div className="mt-2.5 flex flex-col gap-1 pl-[52px] text-sm text-ink/60">
                  <a href={telLink} className="hover:text-brand">{BUSINESS.phoneDisplay}</a>
                  <a href={telLinkSecondary} className="hover:text-brand">{BUSINESS.phoneSecondaryDisplay}</a>
                </div>
              </div>
              <a
                href={mailtoLink}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-sm text-ink/60">{BUSINESS.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <span className="text-xs font-bold">BN</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Business Registration</p>
                  <p className="text-sm text-ink/60">BN {BUSINESS.bn}</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-ink">Send us a message</h2>
            <p className="mt-1.5 text-sm text-ink/60">
              Fill this in and it opens as a WhatsApp message to us &mdash; no data leaves your device otherwise.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h2 className="mt-16 text-xl font-bold text-ink sm:text-2xl">Our Locations</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((loc, i) => (
          <Reveal key={loc.name} delay={i * 100}>
            <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="h-44 w-full bg-offwhite">
                <iframe
                  title={`Map to ${loc.name}`}
                  src={mapsEmbedSrc(loc.address)}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="text-base font-semibold text-ink">{loc.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{loc.address}</p>
                  </div>
                </div>
                <a
                  href={mapsLink(loc.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                >
                  Get Directions
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
