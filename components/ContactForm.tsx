'use client';

import { useState, type FormEvent } from 'react';
import { contactFormWaLink } from '@/lib/constants';
import { SendIcon } from './icons';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const link = contactFormWaLink(name.trim() || 'Not provided', contact.trim() || 'Not provided', message.trim() || 'Not provided');
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-lg border border-black/10 bg-offwhite px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="contact-info" className="mb-1.5 block text-sm font-medium text-ink">
          Phone or Email
        </label>
        <input
          id="contact-info"
          type="text"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="How can we reach you?"
          className="w-full rounded-lg border border-black/10 bg-offwhite px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need…"
          className="w-full resize-none rounded-lg border border-black/10 bg-offwhite px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb958] sm:w-auto"
      >
        <SendIcon className="h-4 w-4" />
        Send via WhatsApp
      </button>
      <p className="text-xs text-ink/50">
        This opens WhatsApp with your message pre-filled &mdash; nothing is stored or sent anywhere else.
      </p>
    </form>
  );
}
