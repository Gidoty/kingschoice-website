import Link from 'next/link';
import { BUSINESS, DELIVERY, generalWaLink } from '@/lib/constants';
import { categories } from '@/lib/products';
import { WhatsAppIcon, TruckIcon, CheckIcon, PinIcon } from '@/components/icons';

const highlights = [
  'Genuine medical & laboratory equipment',
  'Free delivery within Lagos',
  '3 locations across Lagos & Enugu',
  'Order directly on WhatsApp, no forms',
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-offwhite to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">{BUSINESS.motto}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
              Medical &amp; Laboratory Equipment, Delivered Across Nigeria
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              {BUSINESS.name} supplies hospitals, clinics and laboratories with lab equipment,
              diagnostics, test kits and pharmaceutical consumables. No cart, no checkout
              &mdash; message us on WhatsApp and we&apos;ll sort out the rest.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={generalWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb958]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Browse Products
              </Link>
            </div>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckIcon className="h-4 w-4 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Why buyers choose us
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex gap-3 rounded-xl bg-offwhite p-4">
                <TruckIcon className="h-6 w-6 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-semibold text-ink">{DELIVERY.lagos}</p>
                  <p className="text-sm text-slate-600">{DELIVERY.outsideLagos}</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-offwhite p-4">
                <PinIcon className="h-6 w-6 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-semibold text-ink">Three locations</p>
                  <p className="text-sm text-slate-600">Lagos Island, Lagos Mainland &amp; Enugu.</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-offwhite p-4">
                <WhatsAppIcon className="h-6 w-6 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-semibold text-ink">Order in seconds</p>
                  <p className="text-sm text-slate-600">Tap a product, send the pre-filled WhatsApp message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">What We Supply</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Laboratory equipment, diagnostics, test kits and pharmaceutical consumables
              &mdash; browse the full catalogue and order any item on WhatsApp.
            </p>
          </div>
          <Link href="/products" className="text-sm font-semibold text-blue hover:underline">
            View all products &rarr;
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products#${cat.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-ink group-hover:text-blue">{cat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Need equipment for your facility?</h2>
          <p className="max-w-xl text-sm text-white/70">
            Tell us what you need and we&apos;ll confirm pricing and availability on WhatsApp &mdash;
            usually within minutes.
          </p>
          <a
            href={generalWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb958]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Message Us Now
          </a>
        </div>
      </section>
    </>
  );
}
