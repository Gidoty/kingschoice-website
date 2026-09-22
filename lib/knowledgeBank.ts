export type KnowledgeEntry = {
  name: string;
  body: string;
};

export type KnowledgeSection = {
  categorySlug: string;
  intro: string;
  entries: KnowledgeEntry[];
};

export const knowledgeBank: KnowledgeSection[] = [
  {
    categorySlug: 'laboratory-equipment',
    intro: 'The core instruments found in most clinical and research laboratories, used daily for sample processing and testing.',
    entries: [
      {
        name: 'Microscope',
        body: 'A microscope uses lenses to magnify specimens far beyond what the eye can see, letting lab staff examine blood cells, tissue samples and microorganisms. It is one of the most fundamental tools in any diagnostic laboratory, used daily for routine testing and research alike.',
      },
      {
        name: 'Centrifuge',
        body: 'A centrifuge spins samples at high speed to separate their components by density, most often separating blood into plasma, serum and cellular material. This separation step comes before many chemistry and haematology tests, so a reliable centrifuge is essential to accurate results.',
      },
      {
        name: 'Autoclave',
        body: "An autoclave sterilises equipment and consumables using pressurised steam, killing bacteria, viruses and spores that ordinary cleaning can't reach. It's the standard method labs and clinics use to keep reusable instruments safe between patients.",
      },
      {
        name: 'Hematology Analyzer',
        body: 'A hematology analyzer automates the full blood count, measuring red cells, white cells and platelets far faster and more consistently than manual counting. It is a core piece of equipment for any lab running routine blood work.',
      },
      {
        name: 'Lab Incubator',
        body: "An incubator holds samples at a controlled, steady temperature, most often used to grow bacterial or cell cultures for identification and testing. Consistent temperature control is what makes culture results reliable.",
      },
    ],
  },
  {
    categorySlug: 'diagnostic-devices',
    intro: 'Point-of-care devices that give a fast reading without a full lab workup.',
    entries: [
      {
        name: 'Glucometer',
        body: "A glucometer measures blood glucose from a small finger-prick sample, giving a reading in seconds. It's the standard point-of-care tool for monitoring and managing diabetes, used in clinics and at home.",
      },
      {
        name: 'Thermometer',
        body: 'A digital thermometer gives a fast, accurate body temperature reading, one of the most basic and frequently used checks in any clinical setting.',
      },
    ],
  },
  {
    categorySlug: 'consumables-supplies',
    intro: 'The everyday sample-collection and general laboratory consumables behind almost every test.',
    entries: [
      {
        name: 'EDTA Bottles',
        body: "EDTA bottles contain an anticoagulant that stops a blood sample from clotting after collection, which is required for accurate haematology testing like full blood counts. The anticoagulant preserves the sample's cells in their natural state until it reaches the lab.",
      },
      {
        name: 'Syringe & Needles',
        body: 'Sterile, single-use syringes and needles are used for injections and blood draws. Using a fresh, sealed syringe for every patient is a basic safety standard in any clinical setting.',
      },
      {
        name: 'Test Tubes & Pipettes',
        body: 'Test tubes hold and transport samples, while pipettes measure and transfer precise volumes of liquid. Together they are the everyday glassware behind almost every lab procedure, from sample prep to reagent mixing.',
      },
      {
        name: 'Conical Flasks',
        body: "Conical (Erlenmeyer) flasks are used for mixing, heating and measuring liquids in the lab. Their narrow neck makes them easy to swirl without spilling, which is why they're a staple of general lab work.",
      },
      {
        name: 'Urine Sample Bottles',
        body: 'Sterile urine sample bottles are used to collect specimens for urinalysis, a routine test that screens for infection, kidney function and other conditions. A sterile, correctly sealed container keeps the sample uncontaminated until testing.',
      },
    ],
  },
  {
    categorySlug: 'reagents-test-kits',
    intro: 'Rapid tests and reagent kits used for diagnostic screening and automated analysis.',
    entries: [
      {
        name: 'Test Strips',
        body: 'Rapid test strips give a quick result, from glucose to malaria to pregnancy tests, without needing a full lab workup. They are widely used for point-of-care screening because results are available within minutes.',
      },
      {
        name: 'Reagent Kits',
        body: "Reagent kits contain the chemicals and materials an analyzer needs to run a specific test, matched to the machine's requirements. Using the correct, in-date reagents is what keeps automated test results accurate.",
      },
      {
        name: 'Sensitivity Disc',
        body: 'Antibiotic sensitivity discs are used in microbiology to test which antibiotics a particular bacterial infection will respond to. This guides treatment decisions toward the most effective option rather than prescribing by guesswork.',
      },
    ],
  },
  {
    categorySlug: 'ppe-safety',
    intro: 'Protective equipment and safety consumables that are part of everyday infection control.',
    entries: [
      {
        name: 'Face Masks',
        body: 'Surgical face masks form a barrier against droplets and splashes, protecting both patient and clinician during procedures and everyday clinical contact. They are one of the most basic and widely used forms of protective equipment in healthcare.',
      },
      {
        name: 'Surgical Hand Gloves',
        body: 'Sterile and examination-grade gloves protect against direct contact with blood, fluids and contaminants. Wearing the right glove type for the task is a basic infection-control standard.',
      },
      {
        name: 'Tourniquet',
        body: "A tourniquet is tied around the upper arm before a blood draw, making the vein easier to find and access. It's a small, simple tool that's part of nearly every venipuncture procedure.",
      },
      {
        name: 'AB Wipes',
        body: 'Antibacterial wipes are used to clean surfaces and hands quickly between tasks. They are a practical, everyday hygiene tool for clinics, labs and general medical use.',
      },
    ],
  },
  {
    categorySlug: 'pharmaceuticals-general',
    intro: 'General pharmaceutical supplies and allied merchandise for everyday clinic and pharmacy needs.',
    entries: [
      {
        name: 'Pharmaceuticals',
        body: 'We supply a range of general pharmaceutical products for clinics, pharmacies and hospitals as part of everyday patient care. Message us with the specific medication you need and we will confirm availability.',
      },
      {
        name: 'Mentholated Spirits',
        body: 'Mentholated spirits is a general-purpose antiseptic and cooling liquid used in clinical and household settings, commonly for minor skin cleaning and relief. It is a longstanding staple item in Nigerian pharmacies and clinics.',
      },
    ],
  },
];
