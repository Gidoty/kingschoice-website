import { waOrderLink } from '@/lib/constants';
import { WhatsAppIcon } from './icons';

export default function WhatsAppButton({
  productName,
  className = '',
  full = false,
}: {
  productName: string;
  className?: string;
  full?: boolean;
}) {
  return (
    <a
      href={waOrderLink(productName)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order ${productName} on WhatsApp`}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb958] active:bg-[#1aa34c] ${
        full ? 'w-full' : ''
      } ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      Order on WhatsApp
    </a>
  );
}
