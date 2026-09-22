'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { GalleryImage } from '@/lib/gallery';
import { CloseIcon, ChevronDownIcon } from './icons';

export default function Lightbox({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (index === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-offwhite shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4"
              >
                <ChevronDownIcon className="h-5 w-5 rotate-90" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4"
              >
                <ChevronDownIcon className="h-5 w-5 -rotate-90" />
              </button>
            </>
          )}

          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
