export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: 'laboratory-equipment',
    name: 'Laboratory Equipment',
    shortName: 'Lab Equipment',
    description: 'Core instruments for clinical and research laboratories.',
  },
  {
    slug: 'diagnostic-devices',
    name: 'Diagnostic Devices',
    shortName: 'Diagnostics',
    description: 'Point-of-care devices for everyday clinical diagnostics.',
  },
  {
    slug: 'consumables-supplies',
    name: 'Consumables & Supplies',
    shortName: 'Consumables',
    description: 'Sample collection and general laboratory consumables.',
  },
  {
    slug: 'reagents-test-kits',
    name: 'Reagents & Test Kits',
    shortName: 'Reagents',
    description: 'Rapid tests and reagent kits for diagnostic screening.',
  },
  {
    slug: 'ppe-safety',
    name: 'PPE & Safety',
    shortName: 'PPE & Safety',
    description: 'Protective equipment and safety consumables for clinical settings.',
  },
  {
    slug: 'pharmaceuticals-general',
    name: 'Pharmaceuticals & General Merchandise',
    shortName: 'Pharma & General',
    description: 'General pharmaceutical supplies and allied merchandise.',
  },
];

export const products: Product[] = [
  // Laboratory Equipment
  {
    slug: 'microscope',
    name: 'Microscope',
    category: 'laboratory-equipment',
    description: 'Compound microscope for routine specimen examination in clinical and research labs.',
    image: '/images/products/microscope.jpg',
  },
  {
    slug: 'centrifuge',
    name: 'Centrifuge',
    category: 'laboratory-equipment',
    description: 'Tabletop centrifuge for separating blood, serum and other laboratory samples.',
    image: '/images/products/centrifuge.jpg',
  },
  {
    slug: 'autoclave',
    name: 'Autoclave',
    category: 'laboratory-equipment',
    description: 'Steam steriliser for lab glassware, instruments and consumables.',
    image: '/images/products/autoclave.jpg',
  },
  {
    slug: 'hematology-analyzer',
    name: 'Hematology Analyzer',
    category: 'laboratory-equipment',
    description: 'Automated full blood count analyzer for clinical and diagnostic laboratories.',
    image: '/images/products/hematology-analyzer.jpg',
  },
  {
    slug: 'lab-incubator',
    name: 'Lab Incubator',
    category: 'laboratory-equipment',
    description: 'Temperature-controlled incubator for culture and sample processing.',
    image: '/images/products/lab-incubator.jpg',
  },
  // Diagnostic Devices
  {
    slug: 'glucometer',
    name: 'Glucometer',
    category: 'diagnostic-devices',
    description: 'Blood glucose monitor with test strips for point-of-care diabetes screening.',
    image: '/images/products/glucometer.jpg',
  },
  {
    slug: 'thermometer',
    name: 'Thermometer',
    category: 'diagnostic-devices',
    description: 'Clinical thermometer for fast, accurate temperature checks.',
    image: '/images/products/thermometer.jpg',
  },
  // Consumables & Supplies
  {
    slug: 'edta-bottles',
    name: 'EDTA Bottles',
    category: 'consumables-supplies',
    description: 'Anticoagulant sample bottles for blood collection and haematology testing.',
    image: '/images/products/edta-bottles.jpg',
  },
  {
    slug: 'syringe-needles',
    name: 'Syringe & Needles',
    category: 'consumables-supplies',
    description: 'Sterile single-use syringes and needles in assorted sizes.',
    image: '/images/products/syringe-needles.jpg',
  },
  {
    slug: 'test-tubes-pipettes',
    name: 'Test Tubes & Pipettes',
    category: 'consumables-supplies',
    description: 'Laboratory glassware and pipettes for sample handling and measurement.',
    image: '/images/products/test-tubes-pipettes.jpg',
  },
  {
    slug: 'conical-flasks',
    name: 'Conical Flasks',
    category: 'consumables-supplies',
    description: 'Standard laboratory conical flasks for mixing, measuring and general lab use.',
    image: '/images/products/conical-flasks.jpg',
  },
  {
    slug: 'urine-sample-bottles',
    name: 'Urine Sample Bottles',
    category: 'consumables-supplies',
    description: 'Sterile containers for urine sample collection and laboratory analysis.',
    image: '/images/products/urine-sample-bottles.jpg',
  },
  // Reagents & Test Kits
  {
    slug: 'test-strips',
    name: 'Test Strips',
    category: 'reagents-test-kits',
    description: 'Rapid diagnostic test strips for point-of-care screening.',
    image: '/images/products/test-strips.jpg',
  },
  {
    slug: 'reagent-kits',
    name: 'Reagent Kits',
    category: 'reagents-test-kits',
    description: 'Reagent kits compatible with common clinical chemistry and haematology analyzers.',
    image: '/images/products/reagent-kits.jpg',
  },
  {
    slug: 'sensitivity-disc',
    name: 'Sensitivity Disc',
    category: 'reagents-test-kits',
    description: 'Antibiotic sensitivity discs for microbiology and culture testing.',
    image: '/images/products/sensitivity-disc.jpg',
  },
  // PPE & Safety
  {
    slug: 'face-masks',
    name: 'Face Masks',
    category: 'ppe-safety',
    description: 'Fluid-resistant surgical face masks for everyday clinical hygiene.',
    image: '/images/products/face-masks.jpg',
  },
  {
    slug: 'surgical-hand-gloves',
    name: 'Surgical Hand Gloves',
    category: 'ppe-safety',
    description: 'Sterile and examination-grade surgical gloves in assorted sizes.',
    image: '/images/products/surgical-hand-gloves.jpg',
  },
  {
    slug: 'tourniquet',
    name: 'Tourniquet',
    category: 'ppe-safety',
    description: 'Elastic tourniquet for venipuncture and blood draw procedures.',
    image: '/images/products/tourniquet.jpg',
  },
  {
    slug: 'ab-wipes',
    name: 'AB Wipes',
    category: 'ppe-safety',
    description: 'Antibacterial wipes for everyday clinical surface and hand hygiene.',
    image: '/images/products/ab-wipes.jpg',
  },
  // Pharmaceuticals & General
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    category: 'pharmaceuticals-general',
    description: 'General pharmaceutical supplies for clinics, pharmacies and hospitals.',
    image: '/images/products/pharmaceuticals.jpg',
  },
  {
    slug: 'mentholated-spirits',
    name: 'Mentholated Spirits',
    category: 'pharmaceuticals-general',
    description: 'General-purpose mentholated spirits for clinical and household use.',
    image: '/images/products/mentholated-spirits.jpg',
  },
];

export function productsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}
