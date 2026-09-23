import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS, BRAND_WORDMARK, LOCATIONS, mailtoLink, telLink, telLinkSecondary } from '@/lib/constants';
import { PhoneIcon, MailIcon, PinIcon, RodOfAsclepiusIcon } from './icons';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="" width={38} height={38} className="h-9 w-9" />
            <span aria-label={BUSINESS.name}>
              <span aria-hidden="true" className="block text-lg font-bold leading-tight">{BRAND_WORDMARK.line1}</span>
              <span aria-hidden="true" className="flex items-center gap-1 text-sm font-semibold leading-tight text-white/80">
                {BRAND_WORDMARK.line2Before}
                <RodOfAsclepiusIcon className="h-3.5 w-3.5 text-accent" />
                {BRAND_WORDMARK.line2After}
              </span>
            </span>
          </div>
          <p className="mt-3 text-sm italic text-white/60">{BUSINESS.motto}</p>
          <p className="mt-4 text-xs text-white/40">BN: {BUSINESS.bn}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/delivery" className="hover:text-white">Delivery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/knowledge-bank" className="hover:text-white">Knowledge Bank</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <a href={telLink} className="hover:text-white">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <a href={telLinkSecondary} className="hover:text-white">{BUSINESS.phoneSecondaryDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0" />
              <a href={mailtoLink} className="hover:text-white">{BUSINESS.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Our Locations</h3>
          <ul className="mt-3 space-y-3 text-sm text-white/60">
            {LOCATIONS.map((loc) => (
              <li key={loc.name} className="flex gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium text-white/85">{loc.name}:</span> {loc.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/40 sm:px-6">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
