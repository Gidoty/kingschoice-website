'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { MenuIcon, CloseIcon, ChevronDownIcon } from './icons';
import WhatsAppCTA from './WhatsAppCTA';
import { BUSINESS, BRAND_WORDMARK } from '@/lib/constants';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/delivery', label: 'Delivery' },
  { href: '/contact', label: 'Contact' },
];

const resourceLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/knowledge-bank', label: 'Knowledge Bank' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const resourcesRef = useRef<HTMLDivElement>(null);
  const resourcesActive = resourceLinks.some((link) => link.href === pathname);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={BUSINESS.name}
        >
          <Image src="/logo-icon.png" alt="" width={42} height={42} className="h-10 w-10" priority />
          <span className="flex flex-col gap-0.5" aria-hidden="true">
            <span className="text-base font-bold leading-none tracking-tight text-brand">{BRAND_WORDMARK.line1}</span>
            <span className="text-xs font-semibold leading-none tracking-wide text-ink/60">{BRAND_WORDMARK.line2}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active ? 'text-brand' : 'text-ink/70 hover:text-brand'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div ref={resourcesRef} className="relative">
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              className={`flex items-center gap-1 text-sm font-medium transition ${
                resourcesActive ? 'text-brand' : 'text-ink/70 hover:text-brand'
              }`}
            >
              Resources
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-black/10 bg-white py-1.5 shadow-lg">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setResourcesOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition ${
                      pathname === link.href ? 'text-brand' : 'text-ink/70 hover:bg-offwhite hover:text-brand'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:block">
          <WhatsAppCTA size="sm" />
        </div>

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
        <nav className="border-t border-black/5 bg-white px-4 pb-4 md:hidden">
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
            <li className="my-1 border-t border-black/5 pt-2">
              <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-ink/40">Resources</p>
            </li>
            {resourceLinks.map((link) => (
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
              <WhatsAppCTA className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
