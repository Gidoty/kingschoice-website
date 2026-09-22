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
    address: '154 Folbol Plaza, beside AP Filling Station, Ago Palace, Okota, Lagos',
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

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function waOrderLink(productName: string): string {
  return waLink(`Hello Kingschoice Med & More, I'd like to order: ${productName}. Please share availability and price.`);
}

export const generalWaLink = waLink("Hello Kingschoice Med & More, I'd like to make an enquiry.");
export const mailtoLink = `mailto:${BUSINESS.email}`;
