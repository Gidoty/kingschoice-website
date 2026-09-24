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
    slug: 'microscope-slides',
    name: 'Microscope Slides',
    category: 'laboratory-equipment',
    description: 'Standard glass microscope slides for routine specimen mounting and examination.',
    image: '/images/products/microscope-slides.jpg',
  },
  {
    slug: 'microscope-cover-glasses',
    name: 'Microscope Cover Glasses',
    category: 'laboratory-equipment',
    description: 'Borosilicate cover glasses, 22 x 22mm, for slide preparation and microscopy.',
    image: '/images/products/microscope-cover-glasses.jpg',
  },
  {
    slug: 'counting-chamber',
    name: 'Counting Chamber',
    category: 'laboratory-equipment',
    description: 'Laboratory counting chamber for manual cell and particle counts.',
    image: '/images/products/counting-chamber.jpg',
  },
  // Diagnostic Devices
  {
    slug: 'den-v-blood-pressure-monitor',
    name: 'Digital Blood Pressure Monitor',
    category: 'diagnostic-devices',
    description: 'Upper-arm digital blood pressure monitor with memory function and WHO display.',
    image: '/images/products/den-v-blood-pressure-monitor.jpg',
  },
  {
    slug: 'apex-blood-pressure-monitor',
    name: 'Automatic Blood Pressure Monitor',
    category: 'diagnostic-devices',
    description: 'Automatic upper-arm blood pressure monitor with adjustable cuff and Type-C charging.',
    image: '/images/products/apex-blood-pressure-monitor.jpg',
  },
  {
    slug: 'apex-blood-glucose-meter',
    name: 'Blood Glucose Meter',
    category: 'diagnostic-devices',
    description: 'Point-of-care blood glucose meter for everyday diabetes monitoring.',
    image: '/images/products/apex-blood-glucose-meter.jpg',
  },
  {
    slug: 'accu-chek-glucose-monitor',
    name: 'Blood Glucose Monitoring System',
    category: 'diagnostic-devices',
    description: 'Blood glucose monitoring system with a large, easy-to-read display and fast results.',
    image: '/images/products/accu-chek-glucose-monitor.jpg',
  },
  {
    slug: 'fine-test-glucose-strips',
    name: 'Blood Glucose Test Strips',
    category: 'diagnostic-devices',
    description: 'Auto-coding blood glucose test strips for compatible point-of-care meters.',
    image: '/images/products/fine-test-glucose-strips.jpg',
  },
  // Reagents & Test Kits
  {
    slug: 'promed-typhoid-test',
    name: 'Typhoid Rapid Test',
    category: 'reagents-test-kits',
    description: 'Rapid diagnostic test for in-vitro screening of typhoid infection.',
    image: '/images/products/promed-typhoid-test.jpg',
  },
  {
    slug: 'promed-hcv-test',
    name: 'HCV Rapid Test Kit',
    category: 'reagents-test-kits',
    description: 'Rapid diagnostic test kit for in-vitro screening of Hepatitis C.',
    image: '/images/products/promed-hcv-test.jpg',
  },
  {
    slug: 'micropoint-hcg-test',
    name: 'HCG Urine Rapid Test',
    category: 'reagents-test-kits',
    description: 'Rapid diagnostic test for in-vitro screening of HCG in urine.',
    image: '/images/products/micropoint-hcg-test.jpg',
  },
  {
    slug: 'promed-syphilis-test',
    name: 'Syphilis Rapid Test Kit',
    category: 'reagents-test-kits',
    description: 'Rapid diagnostic test kit for in-vitro screening of syphilis.',
    image: '/images/products/promed-syphilis-test.jpg',
  },
  {
    slug: 'promed-blood-grouping-sera',
    name: 'Blood Grouping Sera',
    category: 'reagents-test-kits',
    description: 'Monoclonal blood grouping sera for blood typing in clinical laboratories.',
    image: '/images/products/promed-blood-grouping-sera.jpg',
  },
  {
    slug: 'maxicare-blood-grouping-disc-positive',
    name: 'Blood Grouping Disc (+Ve)',
    category: 'reagents-test-kits',
    description: 'Modified high-profile blood grouping disc for Rh(D) positive typing.',
    image: '/images/products/maxicare-blood-grouping-disc-positive.jpg',
  },
  {
    slug: 'maxicare-blood-grouping-disc-negative',
    name: 'Blood Grouping Disc (–Ve)',
    category: 'reagents-test-kits',
    description: 'Modified high-profile blood grouping disc for Rh(D) negative typing.',
    image: '/images/products/maxicare-blood-grouping-disc-negative.jpg',
  },
  {
    slug: 'bdh-analar-methanol',
    name: 'AnalaR Methanol',
    category: 'reagents-test-kits',
    description: 'Analytical-grade methanol reagent for laboratory use.',
    image: '/images/products/bdh-analar-methanol.jpg',
  },
  {
    slug: 'urs-10a-urinalysis-strips',
    name: 'Urinalysis Reagent Strips',
    category: 'reagents-test-kits',
    description: '10-parameter urinalysis reagent strips for rapid urine screening.',
    image: '/images/products/urs-10a-urinalysis-strips.jpg',
  },
  // Consumables & Supplies
  {
    slug: 'love-sensation-condom',
    name: 'Love Sensation Condom',
    category: 'consumables-supplies',
    description: 'Perfumed premium condoms, pack of 3 x 36.',
    image: '/images/products/love-sensation-condom.jpg',
  },
  {
    slug: 'esr-pipette-tube',
    name: 'ESR Pipette Tube (Westergren)',
    category: 'consumables-supplies',
    description: 'Prefilled, capped ESR filling tube using the Westergren method.',
    image: '/images/products/esr-pipette-tube.jpg',
  },
  {
    slug: 'apex-scalp-vein-set',
    name: 'Scalp Vein Set (Butterfly Needle)',
    category: 'consumables-supplies',
    description: 'Sterile scalp vein infusion set for intravenous access.',
    image: '/images/products/apex-scalp-vein-set.jpg',
  },
  {
    slug: 'nd-unique-blood-collection-tube',
    name: 'Blood Collection Tube (EDTA)',
    category: 'consumables-supplies',
    description: 'EDTA blood collection tubes for haematology sampling.',
    image: '/images/products/nd-unique-blood-collection-tube.jpg',
  },
  {
    slug: 'agary-blood-collection-tube',
    name: 'Blood Collection Tube (Plain)',
    category: 'consumables-supplies',
    description: 'Vacuum blood collection tubes, plain glass, sterile.',
    image: '/images/products/agary-blood-collection-tube.jpg',
  },
  {
    slug: 'medifit-sterile-needles',
    name: 'Disposable Sterile Needles',
    category: 'consumables-supplies',
    description: 'Single-use sterile hypodermic needles for injections and sampling.',
    image: '/images/products/medifit-sterile-needles.jpg',
  },
  {
    slug: 'medifit-scalp-vein-set',
    name: 'Scalp Vein Set (Butterfly Needle)',
    category: 'consumables-supplies',
    description: 'Sterile scalp vein infusion set for intravenous access.',
    image: '/images/products/medifit-scalp-vein-set.jpg',
  },
  {
    slug: 'mediklin-blood-lancet',
    name: 'Blood Lancet',
    category: 'consumables-supplies',
    description: 'Sterile, single-use blood lancets for capillary blood sampling.',
    image: '/images/products/mediklin-blood-lancet.jpg',
  },
  {
    slug: 'apex-gauze-bandage',
    name: 'Cotton Gauze Bandage',
    category: 'consumables-supplies',
    description: 'Hospital-quality absorbent cotton gauze bandage.',
    image: '/images/products/apex-gauze-bandage.jpg',
  },
  {
    slug: 'den-v-gauze-bandage',
    name: 'Gauze Bandage',
    category: 'consumables-supplies',
    description: 'Absorbent gauze bandage for wound dressing and general use.',
    image: '/images/products/den-v-gauze-bandage.jpg',
  },
  {
    slug: 'medi-scan-swab-stick',
    name: 'Sterile Swab Stick',
    category: 'consumables-supplies',
    description: 'Sterile swab sticks for specimen collection and wound care.',
    image: '/images/products/medi-scan-swab-stick.jpg',
  },
  {
    slug: 'delapharma-cotton-wool',
    name: 'Absorbent Cotton Wool',
    category: 'consumables-supplies',
    description: 'Hydrophilic absorbent cotton wool, BP grade.',
    image: '/images/products/delapharma-cotton-wool.jpg',
  },
  {
    slug: 'den-v-adhesive-plaster',
    name: 'Zinc Oxide Adhesive Plaster',
    category: 'consumables-supplies',
    description: 'Zinc oxide adhesive plaster for dressing and securing bandages.',
    image: '/images/products/den-v-adhesive-plaster.jpg',
  },
  {
    slug: 'vmax-hand-wash',
    name: 'Hand Wash',
    category: 'consumables-supplies',
    description: 'Gentle, non-irritating hand wash for everyday hand hygiene.',
    image: '/images/products/vmax-hand-wash.jpg',
  },
  // PPE & Safety
  {
    slug: 'den-v-latex-gloves',
    name: 'Latex Examination Gloves',
    category: 'ppe-safety',
    description: 'Powdered, non-sterile latex examination gloves, finger textured.',
    image: '/images/products/den-v-latex-gloves.jpg',
  },
  {
    slug: 'non-woven-face-mask',
    name: 'Disposable Face Mask',
    category: 'ppe-safety',
    description: '3-ply non-woven disposable face masks with ear loops.',
    image: '/images/products/non-woven-face-mask.jpg',
  },
  {
    slug: 'uch-med-latex-gloves',
    name: 'Latex Examination Gloves',
    category: 'ppe-safety',
    description: 'Premium classic latex medical examination gloves.',
    image: '/images/products/uch-med-latex-gloves.jpg',
  },
  {
    slug: 'santaz-latex-gloves',
    name: 'Latex Examination Gloves',
    category: 'ppe-safety',
    description: 'Non-sterile latex examination gloves, lightly powdered.',
    image: '/images/products/santaz-latex-gloves.jpg',
  },
  // Pharmaceuticals & General Merchandise
  {
    slug: 'vmax-body-lotion',
    name: 'Body Lotion',
    category: 'pharmaceuticals-general',
    description: 'Fast-absorbing, nourishing post-bath body lotion.',
    image: '/images/products/vmax-body-lotion.jpg',
  },
  {
    slug: 'moko-isopropyl-alcohol',
    name: 'Isopropyl Alcohol',
    category: 'pharmaceuticals-general',
    description: 'Isopropyl alcohol BP for antiseptic and general cleaning use.',
    image: '/images/products/moko-isopropyl-alcohol.jpg',
  },
  {
    slug: 'vmax-mosquito-repellent',
    name: 'Mosquito Repellent Spray',
    category: 'pharmaceuticals-general',
    description: 'Cool, refreshing mosquito repellent spray with a fresh scent.',
    image: '/images/products/vmax-mosquito-repellent.jpg',
  },
  {
    slug: 'vmax-blood-sugar-tea',
    name: 'Blood Sugar Balance Tea',
    category: 'pharmaceuticals-general',
    description: 'Herbal tea bags formulated to support healthy blood sugar levels.',
    image: '/images/products/vmax-blood-sugar-tea.jpg',
  },
  {
    slug: 'kiss-lube-gel',
    name: 'Lube Gel',
    category: 'pharmaceuticals-general',
    description: 'Water-based, smooth and moisturising personal lubricant gel.',
    image: '/images/products/kiss-lube-gel.jpg',
  },
  {
    slug: 'robb-ointment',
    name: 'Medicated Ointment',
    category: 'pharmaceuticals-general',
    description: 'Original medicated ointment for relief from pain and nasal congestion.',
    image: '/images/products/robb-ointment.jpg',
  },
  {
    slug: 'cacatin-herbal-cream',
    name: 'Herbal Cream',
    category: 'pharmaceuticals-general',
    description: 'Herbal cream for common skin conditions.',
    image: '/images/products/cacatin-herbal-cream.jpg',
  },
  {
    slug: 'robb-dusting-powder',
    name: 'Mentholated Dusting Powder',
    category: 'pharmaceuticals-general',
    description: 'Antiseptic, cooling mentholated dusting powder.',
    image: '/images/products/robb-dusting-powder.jpg',
  },
  {
    slug: 'benchie-mentholated-balm',
    name: 'Mentholated Balm',
    category: 'pharmaceuticals-general',
    description: 'Mentholated balm for catarrh, headache and colds, for external use.',
    image: '/images/products/benchie-mentholated-balm.jpg',
  },
  {
    slug: 'sudocrem-antiseptic-cream',
    name: 'Antiseptic Healing Cream',
    category: 'pharmaceuticals-general',
    description: 'Antiseptic healing cream for nappy rash, minor burns and surface wounds.',
    image: '/images/products/sudocrem-antiseptic-cream.jpg',
  },
  {
    slug: 'vmax-detox-tea',
    name: 'Detox Tea',
    category: 'pharmaceuticals-general',
    description: 'Herbal detox tea bags for everyday wellness.',
    image: '/images/products/vmax-detox-tea.jpg',
  },
  {
    slug: 'vmax-seabuckthorn-capsules',
    name: 'Seabuckthorn Oil Capsules',
    category: 'pharmaceuticals-general',
    description: 'Seabuckthorn oil capsules to support immunity, with antioxidant properties.',
    image: '/images/products/vmax-seabuckthorn-capsules.jpg',
  },
  {
    slug: 'tribotan-cream',
    name: 'Anti-Fungal Cream',
    category: 'pharmaceuticals-general',
    description: 'Soothing anti-fungal and anti-itch cream for skin irritations.',
    image: '/images/products/tribotan-cream.jpg',
  },
  {
    slug: 'nitozol-cream',
    name: 'Ketoconazole Cream',
    category: 'pharmaceuticals-general',
    description: 'Ketoconazole cream 2% w/w for fungal skin infections.',
    image: '/images/products/nitozol-cream.jpg',
  },
  {
    slug: 'mycoten-creme',
    name: 'Clotrimazole Cream',
    category: 'pharmaceuticals-general',
    description: 'Clotrimazole 1% antifungal cream for skin infections.',
    image: '/images/products/mycoten-creme.jpg',
  },
  {
    slug: 'vmax-hair-body-wash',
    name: 'Hair & Body Wash',
    category: 'pharmaceuticals-general',
    description: '2-in-1 hair and body wash, cool and fragrant, cleans and moisturizes.',
    image: '/images/products/vmax-hair-body-wash.jpg',
  },
];

export function productsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}
