import Link from 'next/link';
import { BUSINESS, LOCATIONS, mailtoLink } from '@/lib/constants';
import { PhoneIcon, MailIcon, PinIcon } from './icons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <h2 className="text-lg font-bold">{BUSINESS.name}</h2>
          <p className="mt-2 text-sm italic text-white/70">{BUSINESS.motto}</p>
          <p className="mt-4 text-xs text-white/50">BN: {BUSINESS.bn}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/delivery" className="hover:text-white">Delivery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Locations &amp; Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <a href={`tel:+${BUSINESS.phoneIntl}`} className="hover:text-white">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0" />
              <a href={mailtoLink} className="hover:text-white">{BUSINESS.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Our Locations</h3>
          <ul className="mt-3 space-y-3 text-sm text-white/70">
            {LOCATIONS.map((loc) => (
              <li key={loc.name} className="flex gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium text-white/90">{loc.name}:</span> {loc.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 sm:px-6">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
