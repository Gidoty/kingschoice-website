import { generalWaLink } from '@/lib/constants';
import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href={generalWaLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1fb958] sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
