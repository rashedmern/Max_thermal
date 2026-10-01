export type ProductId = "eps-blocks" | "eps-sheets" | "muriball" | "raw-beads";

export interface BulletPoint {
  title: string;
  detail: string;
}

export interface ProductHighlight {
  title: string;
  description: string;
}

export interface ProductSummary {
  id: ProductId;
  name: string;
  tabLabel: string;
  shortTitle: string;
  category: string;
  badgeColor: string;
  imageBadge: string;
  image: string;
  fallbackImage: string;
  featuredTitle: string;
  overview: string;
  description: string;
  leadTime: string;
  primaryMetric: {
    value: string;
    label: string;
  };
  highlights: ProductHighlight[];
  bulletPoints: BulletPoint[];
  compactTags: string[];
  applications: string[];
}

export interface BlockDimension {
  unit: string;
  dimensions: string;
  detail: string;
}

export interface BlockSpecsData {
  dimensions: BlockDimension[];
  volume: string;
  densityRange: string;
  tolerance: string;
  callout: string;
  coreUses: string[];
}

export interface SheetSpecsData {
  thicknessRange: string;
  maxPlanSize: string;
  densityRange: string;
  surfaceFinish: string;
  thermalConductivity: string;
  fireRating: string;
  popularThicknesses: {
    thickness: string;
    application: string;
    isPopular?: boolean;
  }[];
  specPoints: string[];
}

export interface BeadSizeGrade {
  code: string;
  diameter: string;
  washRecipe: string;
  abrasionLevel: string;
  recommendedFor: string;
}

export interface MuriBallSpecsData {
  grades: BeadSizeGrade[];
  packaging: string;
  composition: string;
  durability: string;
  rinsePerformance: string;
  keyBenefits: string[];
}

export interface RawBeadGradeItem {
  code: string;
  particleSize: string;
  expandedDensity: string;
  expansionFactor: string;
  primaryApplications: string;
}

export interface RawBeadsSpecsData {
  packagingTiers: string[];
  pentaneGasContent: string;
  shelfLife: string;
  grades: RawBeadGradeItem[];
  processingTemp: string;
}

export interface ProductsDataSchema {
  products: ProductSummary[];
  blockSpecs: BlockSpecsData;
  sheetSpecs: SheetSpecsData;
  muriBallSpecs: MuriBallSpecsData;
  rawBeadsSpecs: RawBeadsSpecsData;
}

export const PRODUCTS_DATA: ProductsDataSchema = {
  products: [
    {
      id: "eps-blocks",
      name: "EPS Blocks",
      tabLabel: "EPS Blocks",
      shortTitle: "EPS Monolithic Blocks",
      category: "● Core Monolithic Block",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
      imageBadge: "● In-Stock / Factory Direct",
      image: "/images/eps-blocks-showcase.jpg",
      fallbackImage: "/images/Packaging.png",
      featuredTitle: "Full-Scale EPS Monolithic Blocks",
      overview:
        "Engineered from 100% virgin-grade polystyrene beads expanded under computerized steam pressure to produce dense, homogeneous monolithic billets. Delivers exceptional compressive yield strength, high thermal insulation, and complete dimensional stability for geotechnical void filling, civil embankments, and custom CNC cold chain profiling.",
      description:
        "Full-scale virgin EPS monolithic blocks engineered for structural construction voids, road fill, and architectural profiling.",
      leadTime: "Immediate Dispatch",
      primaryMetric: {
        value: "~1.0 m³",
        label: "Volume per Block",
      },
      highlights: [
        {
          title: "Custom Density Calibration",
          description: "15 – 35 kg/m³ density range certified per ASTM C578 standards.",
        },
        {
          title: "Uniform Steam Expansion",
          description: "Homogeneous cellular matrix with zero internal voids or weak spots.",
        },
        {
          title: "Moisture Conditioned",
          description: "Cured in humidity-controlled bays for zero post-cure warping.",
        },
        {
          title: "Automated Wire Precision",
          description: "Cut to ±1 mm tolerance for seamless geotechnical interlocking.",
        },
      ],
      bulletPoints: [
        {
          title: "Density Range 15 – 35 kg/m³",
          detail: "Custom calibrated per ASTM C578 construction void standards.",
        },
        {
          title: "Uniform Steam Expansion",
          detail: "Zero internal voids, cracks, or density drop-offs.",
        },
        {
          title: "Moisture Stabilized Curing",
          detail: "Zero post-installation shrinkage or warping in structural fills.",
        },
        {
          title: "±1mm Automated CNC Wire Cutting",
          detail: "Factory-sliced to exact site geometry and angles.",
        },
      ],
      compactTags: ["Bridge Embankments", "Geotechnical Void Fill", "Sandwich Panels"],
      applications: [
        "Bridge Embankments",
        "Geotechnical Void Fill",
        "Cold Room Enclosures",
        "Architectural 3D Carving",
        "Heavy Equipment Packaging",
      ],
    },
    {
      id: "eps-sheets",
      name: "EPS Sheets",
      tabLabel: "EPS Sheets",
      shortTitle: "Precision EPS Sheets",
      category: "● CNC Hot-Wire Slicing",
      badgeColor: "bg-orange-50 text-[#FF5A00] border-orange-200/60",
      imageBadge: "● CNC Sliced on Order",
      image: "/images/Sheets.png",
      fallbackImage: "/images/eps_insulation_boards.jpg",
      featuredTitle: "High-Precision Thermal & Acoustic EPS Sheets",
      overview:
        "High-tolerance expanded polystyrene sheets precision-sliced on multi-wire CNC cutting machines to exact millimeter dimensions from 10mm to 500mm. Built with a closed-cell thermoplastic cellular matrix that guarantees permanent thermal resistance (R-value) with zero thermal aging or moisture absorption in high-humidity building envelopes.",
      description:
        "High-tolerance sheets CNC hot-wire sliced down to custom thickness from 10mm to 500mm for cold chain and roofing envelopes.",
      leadTime: "1–2 Days Slicing",
      primaryMetric: {
        value: "10–500mm",
        label: "Custom Slicing Range",
      },
      highlights: [
        {
          title: "Custom Millimeter Slicing",
          description: "Precision CNC hot-wire cut from 10mm to 500mm in 1mm increments.",
        },
        {
          title: "Permanent Thermal Barrier",
          description: "Thermal conductivity λ = 0.033 – 0.036 W/m·K with zero degradation.",
        },
        {
          title: "Closed-Cell Waterproofing",
          description: "Suberin-level moisture resistance with <1.5% volumetric water absorption.",
        },
        {
          title: "Fire Safety Compliance",
          description: "Standard Commercial & Class B1 Self-Extinguishing Flame Retardant (FR).",
        },
      ],
      bulletPoints: [
        {
          title: "Custom Thickness 10–500mm",
          detail: "Precision CNC hot-wire sliced down to 1mm increments.",
        },
        {
          title: "Thermal Barrier (λ 0.033)",
          detail: "Permanent R-value with zero aging degradation over lifetime.",
        },
        {
          title: "Closed-Cell Waterproofing",
          detail: "Suberin moisture barrier with <1.5% volumetric absorption.",
        },
        {
          title: "Fire Retardant FR Option",
          detail: "Available in Class B1 self-extinguishing grade.",
        },
      ],
      compactTags: ["Cold Storage", "Roof Insulation", "Acoustic Walls"],
      applications: [
        "Cold Storage & Freezers",
        "Roof & Ceiling Thermal Barriers",
        "Refrigerated Truck Bodies",
        "Garment Embroidery Backing",
        "Acoustic Wall Tiles",
      ],
    },
    {
      id: "muriball",
      name: "MuriBall (Garment Wash)",
      tabLabel: "MuriBall Beads",
      shortTitle: "MuriBall Commercial Beads",
      category: "● Virgin Textile Beads",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      imageBadge: "● In-Stock / Immediate Dispatch",
      image: "/images/muriball-showcase.jpg",
      fallbackImage: "/images/thermo_balls.jpg",
      featuredTitle: "MuriBall Commercial Garment & Denim Washing Beads",
      overview:
        "Calibrated virgin expanded thermocol beads engineered specifically for high-efficiency denim wash recipes, bio-stone enzyme abrasion, and commercial apparel softening. Designed as an eco-conscious, non-destructive replacement for heavy volcanic pumice stones, completely protecting commercial washing drums from ceramic impact damage.",
      description:
        "Virgin expanded thermocol beads calibrated specifically for commercial denim abrasion, bio-stone washing, and soft garment softening.",
      leadTime: "In-Stock / Same Day",
      primaryMetric: {
        value: "S to XXXL",
        label: "6 Screened Sizes",
      },
      highlights: [
        {
          title: "100% Virgin Food-Grade Core",
          description: "Closed spherical cell matrix with zero chemical or colorant dye pickup.",
        },
        {
          title: "6 Screened Caliber Sizes",
          description: "Calibrated from S (3–5mm) to XXXL (16–22mm) for target denim wear.",
        },
        {
          title: "Zero Micro-Powder Residue",
          description: "Leaves wash drums and apparel seams completely free of white powder.",
        },
        {
          title: "Multi-Cycle Wash Resilience",
          description: "Maintains elasticity across high-shear industrial laundry cycles.",
        },
      ],
      bulletPoints: [
        {
          title: "100% Virgin Food-Grade Core",
          detail: "Zero dye pickup, color transfer, or chemical contamination.",
        },
        {
          title: "6 Calibrated Sizing Bands",
          detail: "From S (3–5mm) to XXXL (16–22mm) for target denim wear recipes.",
        },
        {
          title: "Zero Micro-Powder Residue",
          detail: "Keeps garment wash drums and apparel seams completely clean.",
        },
        {
          title: "High Impact Resilience",
          detail: "Built for commercial high-shear industrial laundry cycles.",
        },
      ],
      compactTags: ["Denim Washing", "Apparel Finishing", "Bio-Stone Wash"],
      applications: [
        "Denim Bio-Stone Washing",
        "Enzyme Vintage Fading",
        "Knitwear & Twill Softening",
        "Drum Protective Cushioning",
        "Apparel Finishing Trade",
      ],
    },
    {
      id: "raw-beads",
      name: "Raw Unexpanded EPS Beads",
      tabLabel: "Raw EPS Beads",
      shortTitle: "Raw Unexpanded EPS Beads",
      category: "● Pentane Resin Beads",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
      imageBadge: "● Bulk Container Supply",
      image: "/images/Beads.png",
      fallbackImage: "/images/Beads.png",
      featuredTitle: "Premium Spherical Unexpanded Virgin EPS Beads",
      overview:
        "High-performance spherical virgin polystyrene expandable beads homogeneously infused with hydrocarbon blowing agent (5.5% – 7.0% pentane). Calibrated for rapid, uniform steam pre-expansion with extraordinary expansion ratios (50× to 95×) to manufacture everything from ultra-delicate packaging to dense civil engineering blocks.",
      description:
        "Premium spherical unexpanded virgin polystyrene beads infused with hydrocarbon blowing agent (pentane) in sealed industrial containers.",
      leadTime: "Container Supply",
      primaryMetric: {
        value: "25kg / 850kg",
        label: "Bulk Container Options",
      },
      highlights: [
        {
          title: "Homogeneous Pentane Infusion",
          description: "Optimal 5.5% – 7.0% blowing agent distribution for uniform expansion.",
        },
        {
          title: "Extraordinary Expansion Yield",
          description: "Achieves 50× to 95× expansion ratios with consistent cellular density.",
        },
        {
          title: "4 Calibrated Particle Grades",
          description: "Grades F-100 to B-400 (0.4mm to 1.8mm) for diverse molding setups.",
        },
        {
          title: "Multi-Tier Sealed Packaging",
          description: "25kg Kraft paper bags, 750kg octabins, and 850kg FIBC bulk bags.",
        },
      ],
      bulletPoints: [
        {
          title: "5.5% – 7.0% Pentane Gas",
          detail: "Homogeneous blowing agent distribution for uniform steam expansion.",
        },
        {
          title: "50× – 95× Expansion Yield",
          detail: "High volume output with consistent cellular density.",
        },
        {
          title: "4 Screened Particle Grades",
          detail: "From 0.4mm (F-100) to 1.8mm (B-400) for diverse molding setups.",
        },
        {
          title: "Multi-Tier Sealed Packing",
          detail: "25kg Kraft bags, 750kg octabins, and 850kg bulk FIBC sacks.",
        },
      ],
      compactTags: ["Block Molding", "Protective Packaging", "Lightweight Concrete"],
      applications: [
        "Block & Sheet Pre-Expanders",
        "Precision Molded Packaging",
        "Lightweight Concrete Aggregate",
        "Fish & Produce Boxes",
        "Industrial Geofoam Billets",
      ],
    },
  ],

  blockSpecs: {
    dimensions: [
      {
        unit: "Inches",
        dimensions: "78 × 39 × 20 in",
        detail: "Standard rectangular imperial block dimensions",
      },
      {
        unit: "Feet",
        dimensions: "6.5 × 3.25 × 1.66 ft",
        detail: "Architectural & geotechnical reference measurement",
      },
      {
        unit: "Millimetres",
        dimensions: "1981 × 991 × 508 mm",
        detail: "Metric fabrication baseline for CNC hot-wire cutting",
      },
      {
        unit: "Total Volume",
        dimensions: "~0.997 m³",
        detail: "Equivalent to 35.2 cubic feet per whole block",
      },
    ],
    volume: "~0.997 m³ (35.2 cu.ft)",
    densityRange: "15 – 35 kg/m³ (Custom calibrated per ASTM C578 standards)",
    tolerance: "±1 mm precision under automated computerized cutting",
    callout: "Cut to custom tolerances and sectional angles upon direct request.",
    coreUses: [
      "Sub-slab lightweight geofoam embankment & void fill",
      "Architectural 3D CNC carving, props & decorative molding",
      "Cold room thermal sandwich panel core insulation",
      "Heavy equipment protective packaging cradles",
    ],
  },

  sheetSpecs: {
    thicknessRange: "10 mm – 500 mm (Any custom gauge in 1mm increments)",
    maxPlanSize: "1980 × 990 mm (78 × 39 in)",
    densityRange: "12 – 35 kg/m³ (Commercial to Heavy Industrial Grade)",
    surfaceFinish: "Smooth hot-wire precision cut (zero crumble edges)",
    thermalConductivity: "λ = 0.033 – 0.036 W/m·K (Zero thermal degradation)",
    fireRating: "Standard Commercial & Self-Extinguishing Flame Retardant (FR)",
    popularThicknesses: [
      { thickness: "12 mm (½ in)", application: "Garment embroidery backing & light packaging" },
      { thickness: "25 mm (1 in)", application: "Ceiling insulation & acoustic wall tiles", isPopular: true },
      { thickness: "50 mm (2 in)", application: "Cold storage rooms & roof thermal barrier", isPopular: true },
      { thickness: "75 mm (3 in)", application: "Refrigerated transport container insulation" },
      { thickness: "100 mm (4 in)", application: "Heavy industrial walk-in deep freezers (-20°C)" },
      { thickness: "150 mm (6 in)", application: "Cryogenic enclosures & specialized cold chains" },
    ],
    specPoints: [
      "Closed-cell thermoplastic cellular structure with permanent moisture resistance (<1.5% vol)",
      "Compatible with water-based adhesives, hot polyurethane, and mechanical pin fasteners",
      "Zero ozone depletion potential (ODP) and 100% recyclable virgin material",
    ],
  },

  muriBallSpecs: {
    packaging: "Standard 4–6 kg high-strength double-layer breathable woven sacks",
    composition: "100% virgin expanded polystyrene with closed spherical cell matrix",
    durability: "Multi-cycle high-shear resilience without crushing or chemical dye pickup",
    rinsePerformance: "Leaves zero micro-powder residue on denim garments or wash drums",
    keyBenefits: [
      "Eliminates heavy hazardous pumice stone damage to industrial laundry machines",
      "Produces uniform vintage fades, whiskering, and soft hand-feel on denim",
      "Fully buoyant in wash baths, allowing effortless recovery and multiple cycles",
    ],
    grades: [
      {
        code: "Size S",
        diameter: "3 – 5 mm",
        washRecipe: "Fine Enzyme Wash",
        abrasionLevel: "Delicate & Micro Fading",
        recommendedFor: "Light chambray, shirts, and delicate twill cotton",
      },
      {
        code: "Size M",
        diameter: "5 – 8 mm",
        washRecipe: "Standard Bio-Stone",
        abrasionLevel: "Medium Softening",
        recommendedFor: "Regular denim pants, jackets, and twill apparel",
      },
      {
        code: "Size L",
        diameter: "8 – 10 mm",
        washRecipe: "Heavy Abrasion",
        abrasionLevel: "High Contrast Seam Wear",
        recommendedFor: "Heavyweight 12–14oz indigo workwear & raw jeans",
      },
      {
        code: "Size XL",
        diameter: "12 – 14 mm",
        washRecipe: "Vintage Distressed",
        abrasionLevel: "Pronounced Puckering",
        recommendedFor: "Raw denim distressing, jackets, and cargo utility wear",
      },
      {
        code: "Size XXL",
        diameter: "10 – 16 mm",
        washRecipe: "Acid / Moon Wash",
        abrasionLevel: "Marble High-Contrast Bleach",
        recommendedFor: "Fast chemical carrier wash without fiber destruction",
      },
      {
        code: "Size XXXL",
        diameter: "16 – 22 mm",
        washRecipe: "Ultra Softening & Bulking",
        abrasionLevel: "Rapid Mechanical Impact",
        recommendedFor: "Heavy canvas, outerwear, and bean bag filler trade",
      },
    ],
  },

  rawBeadsSpecs: {
    packagingTiers: [
      "25 kg Heavy-Duty Multi-Wall Kraft Paper Bags with PE Inliner",
      "750 kg Reinforced Cardboard Octabins on Pallets",
      "850 kg Polypropylene Bulk FIBC Container Bags",
    ],
    pentaneGasContent: "5.5% – 7.0% wt (Homogeneous pentane distribution for optimal expansion)",
    shelfLife: "6 months from manufacturing when kept in cool (<20°C) sealed conditions",
    processingTemp: "Pre-expansion steam temperature: 98°C – 102°C",
    grades: [
      {
        code: "Grade F-100",
        particleSize: "0.4 – 0.7 mm",
        expandedDensity: "14 – 20 g/L",
        expansionFactor: "50 – 70×",
        primaryApplications: "Thin-wall delicate packaging, cups, and high-detail technical shapes",
      },
      {
        code: "Grade F-200",
        particleSize: "0.6 – 1.0 mm",
        expandedDensity: "12 – 18 g/L",
        expansionFactor: "55 – 80×",
        primaryApplications: "Standard commercial packaging, protective corner pads, fish boxes",
      },
      {
        code: "Grade B-300",
        particleSize: "0.8 – 1.2 mm",
        expandedDensity: "11 – 16 g/L",
        expansionFactor: "60 – 90×",
        primaryApplications: "Construction insulation blocks, CNC slicing billets, and geofoam",
      },
      {
        code: "Grade B-400",
        particleSize: "1.0 – 1.8 mm",
        expandedDensity: "10 – 15 g/L",
        expansionFactor: "65 – 95×",
        primaryApplications: "Lightweight thermal concrete aggregate, void filling & bean bags",
      },
    ],
  },
};
