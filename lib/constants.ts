export const BUSINESS = {
  name: 'Kingschoice Med & More',
  motto: 'Excellence Redefined',
  phoneDisplay: '0813 239 9423',
  phoneIntl: '2348132399423',
  email: 'kingschoicemedicals@gmail.com',
  bn: '3211826',
  tagline: 'Distributors of laboratory equipment, pharmaceutical & health consumables and general merchandise',
};

export const LOCATIONS = [
  {
    name: 'Lagos Island',
    address: '2, Shomade Lane, off Church Street, Idumota, Lagos',
  },
  {
    name: 'Lagos Mainland',
    address: '22, Mike Maduabuchi Street, Ago Palace, Okota, Lagos',
  },
  {
    name: 'Enugu',
    address: '38 Nweke Awkuzu Street, Ugbene 2, off Trans-Ekulu, Enugu',
  },
];

export const DELIVERY = {
  lagos: {
    heading: 'Within Lagos',
    price: 'Free delivery',
    time: 'Same day or within 24 hours',
  },
  outsideLagos: {
    heading: 'Outside Lagos',
    price: '30% off standard delivery rate',
    time: 'Delivered within 2–3 days',
  },
};

export const VISION =
  'To become one of the world’s leading supply companies in quality medicals and laboratory equipment with excellent service delivery.';

export const MISSION = [
  'Improve the health and wellness of people by providing quality products and services.',
  'Collaborate with healthcare and academic professionals to support health care and laboratory practice.',
  'Redefine the supply chain with integrity and the highest ethical standards.',
  'Ensure prompt availability and delivery of equipment, clinical support and training.',
  'Build strong, professional partnerships within healthcare and education.',
];

export const SOCIAL = {
  instagram: { handle: 'kingschoice', url: 'https://instagram.com/kingschoice' },
  facebook: { handle: 'kingschoice', url: 'https://facebook.com/kingschoice' },
};

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL_MESSAGE = "Hello Kingschoice Med & More, I'd like to inquire about your products.";
export const generalWaLink = waLink(WA_GENERAL_MESSAGE);
export const mailtoLink = `mailto:${BUSINESS.email}`;
export const telLink = `tel:+${BUSINESS.phoneIntl}`;

export function contactFormWaLink(name: string, contact: string, message: string): string {
  const text = [
    'Hello Kingschoice Med & More, I’d like to get in touch.',
    `Name: ${name}`,
    `Phone/Email: ${contact}`,
    `Message: ${message}`,
  ].join('\n');
  return waLink(text);
}

export function mapsLink(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function mapsEmbedSrc(address: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
