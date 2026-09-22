import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import ProductsExplorer from '@/components/ProductsExplorer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Products & Catalogue',
  description:
    'Browse laboratory equipment, diagnostic devices, consumables, reagents & test kits, PPE and pharmaceuticals from Kingschoice Med & More.',
};

export default function ProductsPage() {
  return (
    <div>
      <div className="border-b border-black/5 bg-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Catalogue</p>
            <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Products</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Browse our full range below. For pricing, availability, or anything you don&apos;t
              see listed, chat with us on WhatsApp &mdash; we reply fast.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ProductsExplorer />
      </div>

      <section className="border-t border-black/5 bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Don&apos;t see what you need, or want pricing?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xl text-sm text-white/70">
              Chat with us on WhatsApp and we&apos;ll help you find it, confirm availability and
              get you a price &mdash; usually within minutes.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <WhatsAppCTA size="lg" label={`Chat with ${BUSINESS.name}`} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
