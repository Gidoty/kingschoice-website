import { generalWaLink } from '@/lib/constants';
import { WhatsAppIcon } from './icons';

export default function WhatsAppCTA({
  label = 'Chat on WhatsApp',
  size = 'md',
  variant = 'solid',
  className = '',
}: {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  className?: string;
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  }[size];

  const iconSize = { sm: 'h-4 w-4', md: 'h-4 w-4', lg: 'h-5 w-5' }[size];

  const variantClasses =
    variant === 'solid'
      ? 'bg-whatsapp text-white hover:bg-[#1fb958]'
      : 'border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white';

  return (
    <a
      href={generalWaLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition active:scale-[0.98] ${sizeClasses} ${variantClasses} ${className}`}
    >
      <WhatsAppIcon className={`${iconSize} shrink-0`} />
      {label}
    </a>
  );
}
