import type { Metadata } from 'next';
import { BUSINESS, DELIVERY } from '@/lib/constants';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Reveal from '@/components/Reveal';
import { TruckIcon, MailIcon, CheckIcon, WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Delivery',
  description: 'Free same-day delivery within Lagos, and 30% off standard delivery rates outside Lagos. See how ordering from Kingschoice Med & More works.',
};

const steps = [
  {
    icon: WhatsAppIcon,
    title: 'Message us',
    body: 'Reach out on WhatsApp or email with the products you need.',
  },
  {
    icon: CheckIcon,
    title: 'Confirm your order',
    body: 'We confirm availability, pricing and your delivery address with you.',
  },
  {
    icon: TruckIcon,
    title: 'Receive delivery',
    body: 'Your order is delivered — same day within Lagos, or 2–3 days elsewhere.',
  },
];

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Delivery</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">How Delivery Works</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          We deliver laboratory equipment, consumables and pharmaceutical supplies across Nigeria
          from our Lagos and Enugu locations, arranged directly with you after your order is
          confirmed.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-brand/20 bg-brand-light p-7">
            <TruckIcon className="h-8 w-8 text-brand" />
            <h2 className="mt-4 text-lg font-semibold text-ink">{DELIVERY.lagos.heading}</h2>
            <p className="mt-3 text-3xl font-bold text-brand">{DELIVERY.lagos.price}</p>
            <p className="mt-2 text-sm font-medium text-ink/70">{DELIVERY.lagos.time}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Every order delivered within Lagos State is delivered free of charge, same day or
              within 24 hours of confirmation.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl border-2 border-accent/20 bg-white p-7 shadow-sm">
            <TruckIcon className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-lg font-semibold text-ink">{DELIVERY.outsideLagos.heading}</h2>
            <p className="mt-3 text-3xl font-bold text-accent">{DELIVERY.outsideLagos.price}</p>
            <p className="mt-2 text-sm font-medium text-ink/70">{DELIVERY.outsideLagos.time}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Orders delivered outside Lagos State receive a 30% discount on the standard
              delivery rate, confirmed with you before dispatch.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h2 className="mt-16 text-xl font-bold text-ink sm:text-2xl">Placing an Order</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 100}>
            <div className="h-full rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <step.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex flex-col items-start gap-4 rounded-xl bg-brand-dark p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">
            Ready to order? Message us on WhatsApp and we&apos;ll take it from there.
          </p>
          <WhatsAppCTA />
        </div>
      </Reveal>
    </div>
  );
}
