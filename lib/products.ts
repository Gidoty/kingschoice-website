export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: 'laboratory-equipment',
    name: 'Laboratory Equipment',
    description: 'Analyzers, microscopes, sterilisers and glassware for clinical and research labs.',
  },
  {
    slug: 'diagnostics-test-kits',
    name: 'Diagnostics & Test Kits',
    description: 'Point-of-care devices, reagent kits and rapid test strips for everyday diagnostics.',
  },
  {
    slug: 'pharmaceutical-consumables',
    name: 'Pharmaceutical & Health Consumables',
    description: 'Single-use supplies, protective gear and general clinic consumables.',
  },
];

export const products: Product[] = [
  {
    slug: 'microscope',
    name: 'Microscope',
    category: 'laboratory-equipment',
    description: 'Compound microscope for routine specimen examination in clinical and school laboratories.',
  },
  {
    slug: 'centrifuge',
    name: 'Centrifuge',
    category: 'laboratory-equipment',
    description: 'Tabletop centrifuge for separating blood, serum and other laboratory samples.',
  },
  {
    slug: 'autoclave',
    name: 'Autoclave',
    category: 'laboratory-equipment',
    description: 'Steam steriliser for lab glassware, instruments and consumables.',
  },
  {
    slug: 'hematology-analyzer',
    name: 'Hematology Analyzer',
    category: 'laboratory-equipment',
    description: 'Automated full blood count analyzer for clinical and diagnostic laboratories.',
  },
  {
    slug: 'lab-incubator',
    name: 'Lab Incubator',
    category: 'laboratory-equipment',
    description: 'Temperature-controlled incubator for culture and sample processing.',
  },
  {
    slug: 'test-tube-pipettes',
    name: 'Test Tube & Pipettes',
    category: 'laboratory-equipment',
    description: 'Laboratory glassware and pipettes for sample handling and measurement.',
  },
  {
    slug: 'conical-flasks',
    name: 'Conical Flasks',
    category: 'laboratory-equipment',
    description: 'Standard laboratory conical flasks for mixing, measuring and general lab use.',
  },
  {
    slug: 'edta-bottles',
    name: 'EDTA Bottles',
    category: 'laboratory-equipment',
    description: 'Anticoagulant sample bottles for blood collection and haematology testing.',
  },
  {
    slug: 'urine-sample-bottles',
    name: 'Urine Sample Bottles',
    category: 'laboratory-equipment',
    description: 'Sterile containers for urine sample collection and laboratory analysis.',
  },
  {
    slug: 'sensitivity-disc',
    name: 'Sensitivity Disc',
    category: 'diagnostics-test-kits',
    description: 'Antibiotic sensitivity discs for microbiology and culture testing.',
  },
  {
    slug: 'glucometer',
    name: 'Glucometer',
    category: 'diagnostics-test-kits',
    description: 'Blood glucose monitor with test strips for point-of-care diabetes screening.',
  },
  {
    slug: 'thermometer',
    name: 'Thermometer',
    category: 'diagnostics-test-kits',
    description: 'Clinical thermometer for fast, accurate temperature checks.',
  },
  {
    slug: 'test-strips',
    name: 'Test Strips',
    category: 'diagnostics-test-kits',
    description: 'Rapid diagnostic test strips for point-of-care screening.',
  },
  {
    slug: 'reagents-kits',
    name: 'Reagents Kits',
    category: 'diagnostics-test-kits',
    description: 'Reagent kits compatible with common clinical chemistry and haematology analyzers.',
  },
  {
    slug: 'syringe-needles',
    name: 'Syringe & Needles',
    category: 'pharmaceutical-consumables',
    description: 'Sterile single-use syringes and needles in assorted sizes.',
  },
  {
    slug: 'surgical-hand-gloves',
    name: 'Surgical Hand Gloves',
    category: 'pharmaceutical-consumables',
    description: 'Sterile and examination-grade surgical gloves in assorted sizes.',
  },
  {
    slug: 'face-mask-ab-wipes',
    name: 'Face Mask & Antibacterial Wipes',
    category: 'pharmaceutical-consumables',
    description: 'Surgical face masks and antibacterial wipes for everyday clinical hygiene.',
  },
  {
    slug: 'tourniquet',
    name: 'Tourniquet',
    category: 'pharmaceutical-consumables',
    description: 'Elastic tourniquet for venipuncture and blood draw procedures.',
  },
  {
    slug: 'mentholated-spirits',
    name: 'Mentholated Spirits',
    category: 'pharmaceutical-consumables',
    description: 'General-purpose mentholated spirits for clinical and household use.',
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    category: 'pharmaceutical-consumables',
    description: 'General pharmaceutical supplies for clinics, pharmacies and hospitals.',
  },
];

export function productsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}
