'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '@/lib/products';
import ProductCard from './ProductCard';
import { SearchIcon, CloseIcon } from './icons';

export default function ProductsExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    const cats = activeCategory === 'all' ? categories : categories.filter((c) => c.slug === activeCategory);

    return cats
      .map((cat) => {
        const items = products.filter((p) => {
          if (p.category !== cat.slug) return false;
          if (!normalizedQuery) return true;
          return (
            p.name.toLowerCase().includes(normalizedQuery) ||
            p.description.toLowerCase().includes(normalizedQuery)
          );
        });
        return { cat, items };
      })
      .filter((group) => group.items.length > 0);
  }, [activeCategory, normalizedQuery]);

  const noResults = visibleCategories.length === 0;

  return (
    <div>
      <div className="sticky top-[64px] z-30 -mx-4 border-b border-black/5 bg-white/95 px-4 py-4 backdrop-blur sm:top-[68px] sm:mx-0 sm:rounded-xl sm:border sm:px-4 sm:shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === 'all'
                  ? 'bg-brand text-white'
                  : 'border border-black/10 text-ink/70 hover:border-brand hover:text-brand'
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  activeCategory === cat.slug
                    ? 'bg-brand text-white'
                    : 'border border-black/10 text-ink/70 hover:border-brand hover:text-brand'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-lg border border-black/10 bg-offwhite py-2 pl-9 pr-8 text-sm text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-16">
        {noResults && (
          <p className="rounded-xl border border-black/5 bg-offwhite p-8 text-center text-sm text-ink/60">
            No products match &ldquo;{query}&rdquo;. Try a different search, or{' '}
            <button type="button" onClick={() => setQuery('')} className="font-semibold text-brand hover:underline">
              clear the search
            </button>
            .
          </p>
        )}

        {visibleCategories.map(({ cat, items }) => (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-32">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">{cat.name}</h2>
            <p className="mt-1.5 max-w-2xl text-sm text-ink/60">{cat.description}</p>
            <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
