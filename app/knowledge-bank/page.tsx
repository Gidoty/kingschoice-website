import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { categories } from '@/lib/products';
import { knowledgeBank } from '@/lib/knowledgeBank';
import Reveal from '@/components/Reveal';
import { ChevronRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Knowledge Bank',
  description: `Plain-language explanations of the laboratory equipment, diagnostic devices and medical consumables ${BUSINESS.name} supplies.`,
};

export default function KnowledgeBankPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Knowledge Bank</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">What Each Product Is, and Why It Matters</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Plain-language explanations of the equipment and supplies we distribute &mdash; written for
          anyone buying for the first time, not just lab staff.
        </p>
      </Reveal>

      <nav aria-label="Jump to category" className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="rounded-full border border-black/10 px-4 py-1.5 text-sm font-medium text-ink/70 transition hover:border-brand hover:text-brand"
          >
            {cat.shortName}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-16">
        {knowledgeBank.map((section, sIdx) => {
          const cat = categories.find((c) => c.slug === section.categorySlug);
          if (!cat) return null;
          return (
            <section key={section.categorySlug} id={section.categorySlug} className="scroll-mt-28">
              <Reveal delay={sIdx * 40}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-ink sm:text-2xl">{cat.name}</h2>
                    <p className="mt-1.5 max-w-2xl text-sm text-ink/60">{section.intro}</p>
                  </div>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    View in catalogue
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <div className="mt-6 space-y-4">
                {section.entries.map((entry, i) => (
                  <Reveal key={entry.name} delay={i * 60}>
                    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md">
                      <h3 className="text-base font-semibold text-ink">{entry.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{entry.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
