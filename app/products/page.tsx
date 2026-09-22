import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import { categories, productsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: `Products & Catalogue | ${BUSINESS.name}`,
  description:
    'Browse diagnostic equipment, laboratory equipment, hospital furniture, consumables and reagents from Kingschoice Med & More. Order any item directly on WhatsApp.',
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">Catalogue</p>
      <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Products</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Every product below can be ordered directly on WhatsApp &mdash; tap &ldquo;Order on
        WhatsApp&rdquo; and we&apos;ll open a chat with the item already filled in. Don&apos;t see
        what you need? Message us and we&apos;ll help you find it.
      </p>

      <nav aria-label="Jump to category" className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-ink transition hover:border-blue hover:text-blue"
          >
            {cat.name}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-16">
        {categories.map((cat) => {
          const items = productsByCategory(cat.slug);
          return (
            <section key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">{cat.name}</h2>
              <p className="mt-1.5 max-w-2xl text-sm text-slate-600">{cat.description}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
