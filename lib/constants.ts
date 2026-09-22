export const BUSINESS = {
  name: 'Kingschoice Med & More',
  motto: 'Excellence Redefined',
  phoneDisplay: '0813 239 9423',
  phoneIntl: '2348132399423',
  email: 'kingschoicemedicals@gmail.com',
  bn: '3211826',
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
  lagos: 'Free delivery within Lagos',
  outsideLagos: '30% discount on delivery outside Lagos',
};

export const VISION =
  "To become one of the world's leading supply companies in quality medicals & laboratory equipment with excellent service delivery.";

export const MISSION = [
  'To improve the health & wellness of people by providing professional partners with the best quality products & general services.',
  'To collaborate with healthcare & academic professionals in organizing & participating in social activities relating to health care support & laboratory practice.',
  'To redefine and manage the allied supply chain with all integrity, ethical standards and a high level of commitment.',
  'To ensure availability & prompt delivery of all laboratory equipment, clinical support equipment & training.',
  'To build strong, formidable professional partnerships within the health care & educational sector.',
];

export const SOCIAL = {
  instagram: 'kingschoice',
  facebook: 'kingschoice',
};

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function waOrderLink(productName: string): string {
  return waLink(`Hello Kingschoice Med & More, I'd like to order: ${productName}. Please share availability and price.`);
}

export const generalWaLink = waLink("Hello Kingschoice Med & More, I'd like to make an enquiry.");
export const mailtoLink = `mailto:${BUSINESS.email}`;
