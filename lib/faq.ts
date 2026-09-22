export type FaqItem = {
  question: string;
  answer: string;
  whatsappCta?: boolean;
};

export const faqs: FaqItem[] = [
  {
    question: 'What products does Kingschoice Med & More supply?',
    answer:
      'Laboratory equipment, diagnostic devices, pharmaceutical and health consumables, PPE, reagents and test kits, and general merchandise. Browse our full range on the Products page.',
  },
  {
    question: 'Do you sell to individuals, or only to hospitals and institutions?',
    answer:
      'Both. We supply institutions at scale and also fulfill orders for individuals and independent practitioners.',
  },
  {
    question: 'Are your products genuine and quality-assured?',
    answer:
      'Yes. We source directly from trusted manufacturers and distributors, and every item we supply is genuine and fit for clinical use.',
  },
  {
    question: 'How do I place an order?',
    answer: 'Message us on WhatsApp with what you need. We confirm availability and pricing, and arrange delivery from there.',
    whatsappCta: true,
  },
  {
    question: "Why don't you show prices on the website?",
    answer:
      'Prices for medical and laboratory supplies shift with availability and exchange rates, so we confirm current pricing directly when you reach out. Message us on WhatsApp for accurate pricing on anything you need.',
  },
  {
    question: 'What are your delivery timelines?',
    answer:
      'Free delivery within Lagos, same day or within 24 hours. Outside Lagos, delivery is available at 30% off standard rates, arriving within 2-3 days.',
  },
  {
    question: 'Do you deliver to states outside Lagos and Enugu?',
    answer: 'Yes, we deliver nationwide. Message us with your location to confirm delivery timing and cost.',
  },
  {
    question: 'Is there a minimum order quantity?',
    answer:
      "This varies by product. Most items can be ordered in any quantity, while a few specialized products may have supplier-set minimums. Message us on WhatsApp with what you need and we'll confirm right away.",
  },
  {
    question: 'Do you offer bulk or wholesale pricing for institutions?',
    answer: 'Yes. Institutions ordering at volume should reach out directly for wholesale pricing.',
  },
  {
    question: 'Can you provide installation, demonstration, or training on equipment like microscopes or analyzers?',
    answer: "Yes. Message us about the specific equipment and we'll arrange the right support.",
  },
  {
    question: "What happens if the product I need isn't listed on the site?",
    answer: "It may still be available in our warehouse or office even if it isn't listed online. Contact us to check.",
    whatsappCta: true,
  },
  {
    question: 'Do you offer warranty or after-sales support on lab equipment?',
    answer: 'Yes. Message us about the specific equipment for warranty and support details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all legal payment methods, including bank transfer.',
  },
  {
    question: 'Can I visit one of your offices to view products before buying?',
    answer:
      'Yes. We operate from three locations, Lagos Island, Lagos Mainland, and Enugu. See our Contact page for addresses and directions.',
  },
  {
    question: "How do I confirm you're a registered, legitimate business?",
    answer:
      'Kingschoice Med & More is registered in Nigeria under BN 3211826. You can also view our registration certificate and facilities on our Gallery page.',
  },
];
