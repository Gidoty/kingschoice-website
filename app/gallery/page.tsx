import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import { gallerySections } from '@/lib/gallery';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import { BadgeCheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photos of ${BUSINESS.name}'s offices, warehouse and business registration.`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Gallery</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">See Where We Operate</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Real photos of our registration, offices, warehouse and team &mdash; click any image to
          enlarge.
        </p>
      </Reveal>

      <div className="mt-12 space-y-16">
        {gallerySections.map((section, i) => (
          <Reveal key={section.id} delay={i * 60}>
            <section id={section.id} className="scroll-mt-28">
              <div className="flex items-center gap-2">
                {section.id === 'business-registration' && <BadgeCheckIcon className="h-6 w-6 text-brand" />}
                <h2 className="text-xl font-bold text-ink sm:text-2xl">{section.title}</h2>
              </div>
              <p className="mt-1.5 max-w-2xl text-sm text-ink/60">{section.description}</p>
              <div className="mt-6">
                <Lightbox images={section.images} />
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
