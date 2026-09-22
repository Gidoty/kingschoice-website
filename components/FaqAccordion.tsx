'use client';

import { useState } from 'react';
import { faqs } from '@/lib/faq';
import { generalWaLink } from '@/lib/constants';
import { ChevronDownIcon, WhatsAppIcon } from './icons';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white shadow-sm">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-offwhite sm:px-6"
            >
              <span className="text-sm font-semibold text-ink sm:text-base">{item.question}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6">
                <p className="text-sm leading-relaxed text-ink/70">{item.answer}</p>
                {item.whatsappCta && (
                  <a
                    href={generalWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1fb958]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Message us on WhatsApp
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
