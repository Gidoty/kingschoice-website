'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BUSINESS, generalWaLink } from '@/lib/constants';
import { MenuIcon, CloseIcon, WhatsAppIcon } from './icons';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/delivery', label: 'Delivery' },
  { href: '/contact', label: 'Locations & Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-tight text-navy">Kingschoice</span>
          <span className="hidden text-sm font-medium text-teal sm:inline">Med &amp; More</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={generalWaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1fb958] md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {BUSINESS.phoneDisplay}
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-ink hover:bg-offwhite"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={generalWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
