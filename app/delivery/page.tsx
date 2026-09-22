import type { Metadata } from 'next';
import { BUSINESS, generalWaLink } from '@/lib/constants';
import { WhatsAppIcon, TruckIcon, CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: `Delivery | ${BUSINESS.name}`,
  description: 'Delivery within Lagos is free. Delivery outside Lagos comes with a 30% discount. Learn how orders are delivered.',
};

const steps = [
  {
    title: 'Message us on WhatsApp',
    body: 'Send the product you need, or tap "Order on WhatsApp" on any product card to pre-fill the message.',
  },
  {
    title: 'We confirm price & availability',
    body: 'Our team replies with pricing, stock status and an estimated delivery time for your location.',
  },
  {
    title: 'We deliver to you',
    body: 'Delivery within Lagos is free. Outside Lagos, delivery is arranged at a 30% discount off the standard rate.',
  },
];

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">Delivery</p>
      <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">How Delivery Works</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        We deliver medical and laboratory equipment across Nigeria from our Lagos and Enugu
        locations. Delivery is arranged directly with you after your order is confirmed on
        WhatsApp.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <TruckIcon className="h-7 w-7 text-blue" />
          <h2 className="mt-3 text-lg font-semibold text-ink">Within Lagos</h2>
          <p className="mt-2 flex items-center gap-2 text-2xl font-bold text-teal">
            <CheckIcon className="h-5 w-5" />
            Free delivery
          </p>
          <p className="mt-2 text-sm text-slate-600">
            All orders delivered within Lagos State are delivered free of charge.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <TruckIcon className="h-7 w-7 text-blue" />
          <h2 className="mt-3 text-lg font-semibold text-ink">Outside Lagos</h2>
          <p className="mt-2 text-2xl font-bold text-teal">30% off delivery</p>
          <p className="mt-2 text-sm text-slate-600">
            Orders delivered outside Lagos State receive a 30% discount on the standard delivery
            rate, confirmed with you before dispatch.
          </p>
        </div>
      </div>

      <h2 className="mt-14 text-xl font-bold text-navy sm:text-2xl">Placing an Order</h2>
      <div className="mt-6 space-y-5">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
              {i + 1}
            </div>
            <div>
              <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-navy p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/80">Ready to order? Message us and we&apos;ll take it from there.</p>
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
