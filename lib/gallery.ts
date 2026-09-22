export type GalleryImage = {
  src: string;
  alt: string;
};

export type GallerySection = {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

export const gallerySections: GallerySection[] = [
  {
    id: 'business-registration',
    title: 'Business Registration',
    description: "Kingschoice Med & More is registered in Nigeria under BN 3211826.",
    images: [{ src: '/images/gallery/bn-certificate.jpg', alt: 'Kingschoice Med & More business registration certificate, BN 3211826' }],
  },
  {
    id: 'offices-warehouse',
    title: 'Our Offices & Warehouse',
    description: 'Our three locations across Lagos and Enugu, and where stock is held and prepared for delivery.',
    images: [
      { src: '/images/gallery/office-lagos-island.jpg', alt: 'Kingschoice Med & More Lagos Island office' },
      { src: '/images/gallery/office-lagos-mainland.jpg', alt: 'Kingschoice Med & More Lagos Mainland office' },
      { src: '/images/gallery/office-enugu.jpg', alt: 'Kingschoice Med & More Enugu office' },
      { src: '/images/gallery/warehouse.jpg', alt: 'Kingschoice Med & More warehouse and stock area' },
    ],
  },
  {
    id: 'team-operations',
    title: 'Team & Operations',
    description: 'The people and processes behind every order, from stock checks to dispatch.',
    images: [
      { src: '/images/gallery/team-1.jpg', alt: 'Kingschoice Med & More team' },
      { src: '/images/gallery/team-2.jpg', alt: 'Kingschoice Med & More order fulfilment and operations' },
    ],
  },
];
