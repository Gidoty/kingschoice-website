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
    slug: 'diagnostic-equipment',
    name: 'Diagnostic Equipment',
    description: 'Imaging, monitoring and point-of-care diagnostic devices for clinics and hospitals.',
  },
  {
    slug: 'laboratory-equipment',
    name: 'Laboratory Equipment',
    description: 'Analyzers, microscopes and processing equipment for clinical and research labs.',
  },
  {
    slug: 'hospital-furniture',
    name: 'Hospital Furniture & Mobility',
    description: 'Beds, tables and mobility aids for wards, theatres and consulting rooms.',
  },
  {
    slug: 'consumables-ppe',
    name: 'Consumables & PPE',
    description: 'Single-use supplies, protective gear and general theatre consumables.',
  },
  {
    slug: 'reagents-test-kits',
    name: 'Reagents & Test Kits',
    description: 'Rapid diagnostic kits and reagents for chemistry and haematology analyzers.',
  },
];

export const products: Product[] = [
  {
    slug: 'portable-ultrasound-scanner',
    name: 'Portable Ultrasound Scanner',
    category: 'diagnostic-equipment',
    description: 'Compact B/W ultrasound system with convex and linear probes, suited for OB/GYN and general imaging.',
  },
  {
    slug: 'ecg-machine-3-channel',
    name: '3-Channel ECG Machine',
    category: 'diagnostic-equipment',
    description: 'Digital electrocardiograph with automatic interpretation and thermal printer.',
  },
  {
    slug: 'patient-monitor-5-parameter',
    name: '5-Parameter Patient Monitor',
    category: 'diagnostic-equipment',
    description: 'Bedside monitor tracking ECG, SpO2, NIBP, respiration and temperature.',
  },
  {
    slug: 'pulse-oximeter',
    name: 'Fingertip Pulse Oximeter',
    category: 'diagnostic-equipment',
    description: 'Handheld SpO2 and pulse rate monitor with OLED display.',
  },
  {
    slug: 'digital-infrared-thermometer',
    name: 'Digital Infrared Thermometer',
    category: 'diagnostic-equipment',
    description: 'Non-contact forehead thermometer for fast, hygienic temperature checks.',
  },
  {
    slug: 'binocular-microscope',
    name: 'Binocular Compound Microscope',
    category: 'laboratory-equipment',
    description: 'LED-illuminated microscope with 4x-100x objectives for routine lab work.',
  },
  {
    slug: 'centrifuge-8-place',
    name: '8-Place Tabletop Centrifuge',
    category: 'laboratory-equipment',
    description: 'Digital centrifuge for serum and plasma separation, up to 4000 rpm.',
  },
  {
    slug: 'autoclave-18l',
    name: '18L Autoclave Steriliser',
    category: 'laboratory-equipment',
    description: 'Vertical steam steriliser for lab glassware and instruments.',
  },
  {
    slug: 'hematology-analyzer-3-part',
    name: '3-Part Differential Hematology Analyzer',
    category: 'laboratory-equipment',
    description: 'Automated full blood count analyzer with printer and touchscreen interface.',
  },
  {
    slug: 'incubator-laboratory',
    name: 'Laboratory Incubator',
    category: 'laboratory-equipment',
    description: 'Digital incubator with adjustable temperature control for culture work.',
  },
  {
    slug: 'hospital-bed-manual-2-crank',
    name: 'Manual 2-Crank Hospital Bed',
    category: 'hospital-furniture',
    description: 'Adjustable ward bed with backrest and knee-rest positioning, includes side rails.',
  },
  {
    slug: 'examination-table',
    name: 'Examination Couch',
    category: 'hospital-furniture',
    description: 'Padded consulting-room examination table with paper-roll holder.',
  },
  {
    slug: 'wheelchair-foldable',
    name: 'Foldable Wheelchair',
    category: 'hospital-furniture',
    description: 'Lightweight steel-frame wheelchair with footrests and locking brakes.',
  },
  {
    slug: 'surgical-instrument-set',
    name: 'Minor Surgery Instrument Set',
    category: 'consumables-ppe',
    description: 'Stainless steel instrument kit for suturing and minor procedures.',
  },
  {
    slug: 'nitrile-examination-gloves',
    name: 'Nitrile Examination Gloves (Box)',
    category: 'consumables-ppe',
    description: 'Powder-free nitrile gloves, box of 100, available in S/M/L.',
  },
  {
    slug: 'disposable-syringes',
    name: 'Disposable Syringes (Carton)',
    category: 'consumables-ppe',
    description: 'Sterile single-use syringes in assorted sizes, sold per carton.',
  },
  {
    slug: 'surgical-face-masks',
    name: '3-Ply Surgical Face Masks (Box)',
    category: 'consumables-ppe',
    description: 'Fluid-resistant surgical masks, box of 50.',
  },
  {
    slug: 'malaria-rdt-kit',
    name: 'Malaria Rapid Diagnostic Test Kit',
    category: 'reagents-test-kits',
    description: 'CE-marked rapid test cassette kit for malaria antigen detection.',
  },
  {
    slug: 'pregnancy-test-strips',
    name: 'Pregnancy Test Strips (Box)',
    category: 'reagents-test-kits',
    description: 'hCG urine test strips, box of 50, for clinic and pharmacy use.',
  },
  {
    slug: 'chemistry-analyzer-reagent-kit',
    name: 'Clinical Chemistry Reagent Kit',
    category: 'reagents-test-kits',
    description: 'Reagent set compatible with common semi-automated chemistry analyzers.',
  },
];

export function productsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}
