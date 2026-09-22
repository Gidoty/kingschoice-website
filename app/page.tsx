import Link from 'next/link';
import { BUSINESS, VISION, MISSION, DELIVERY, LOCATIONS, mapsLink } from '@/lib/constants';
import { categories } from '@/lib/products';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Reveal from '@/components/Reveal';
import { categoryIcons } from '@/components/categoryIcons';
import { TruckIcon, PinIcon, ExternalLinkIcon, CheckIcon } from '@/components/icons';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {BUSINESS.motto}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Laboratory Equipment &amp; Medical Consumables, Delivered Across Nigeria
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {BUSINESS.name} supplies hospitals, clinics, laboratories and pharmacies with
              genuine equipment, consumables and general merchandise &mdash; backed by prompt,
              professional delivery.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA size="lg" label="Chat on WhatsApp" />
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Browse Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Delivery banner */}
      <section className="border-b border-black/5 bg-brand-light">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <TruckIcon className="h-5 w-5" />
            </span>
            <p className="text-sm text-ink">
              <span className="font-semibold text-brand">{DELIVERY.lagos.price}</span> within
              Lagos &mdash; {DELIVERY.lagos.time.toLowerCase()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <TruckIcon className="h-5 w-5" />
            </span>
            <p className="text-sm text-ink">
              <span className="font-semibold text-accent">{DELIVERY.outsideLagos.price}</span>{' '}
              outside Lagos &mdash; {DELIVERY.outsideLagos.time.toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Catalogue</p>
              <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">What We Supply</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-brand hover:underline">
              View all products &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat.slug];
            return (
              <Reveal key={cat.slug} delay={i * 60}>
                <Link
                  href={`/products#${cat.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink group-hover:text-brand">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{cat.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">Our Vision</p>
                <p className="mt-4 text-lg leading-relaxed text-ink">{VISION}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">Our Mission</p>
                <ul className="mt-4 space-y-3">
                  {MISSION.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
                  Read our full mission &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Where We Are</p>
          <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">Our Locations</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-xl border border-black/5 bg-white p-6 shadow-sm">
                <PinIcon className="h-6 w-6 text-brand" />
                <h3 className="mt-3 text-base font-semibold text-ink">{loc.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{loc.address}</p>
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Need equipment or supplies?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xl text-sm text-white/70">
              Tell us what you need and we&apos;ll confirm availability on WhatsApp &mdash;
              usually within minutes.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <WhatsAppCTA size="lg" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
