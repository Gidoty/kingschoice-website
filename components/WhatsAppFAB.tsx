import { generalWaLink } from '@/lib/constants';
import { WhatsAppIcon } from './icons';

export default function WhatsAppFAB() {
  return (
    <a
      href={generalWaLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kingschoice Med & More on WhatsApp"
      className="group fixed bottom-5 right-5 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-105 active:scale-95 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}
