export interface BentoCardData {
  id: string;
  category: string;
  chip: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  alt: string;
  specPill: string;
}

export interface MilestoneData {
  id: string;
  period: string;
  title: string;
  description: string;
  highlight: string;
}

export const JOURNEY_BENTO_DATA: {
  mainCard: BentoCardData;
  topRightCard: BentoCardData;
  bottomRightCard: BentoCardData;
} = {
  mainCard: {
    id: "eps-sheets",
    category: "CORE THERMAL PRODUCT",
    chip: "CNC Wire-Cut",
    title: "Precision EPS Sheets",
    subtitle: "Custom size, thickness and density for industrial and construction usage.",
    imageSrc: "/images/Sheets.png",
    alt: "Precision EPS Sheets in custom sizes and densities",
    specPill: "Density 15 - 35 kg/m³",
  },
  topRightCard: {
    id: "muriball",
    category: "TEXTILE TECH",
    chip: "2,000 kg/Day",
    title: "MuriBall / Thermocol Balls",
    subtitle: "For denim garment abrasion & bio-stone washing recipes.",
    imageSrc: "/images/Beads.png",
    alt: "MuriBall thermocol beads for garment and denim processing",
    specPill: "100% Virgin Grade",
  },
  bottomRightCard: {
    id: "packaging",
    category: "PROTECTIVE PACKAGING",
    chip: "Shock-Absorbing",
    title: "Molded EPS Packaging",
    subtitle: "Engineered lightweight cushioning for fragile electronics and exports.",
    imageSrc: "/images/Packaging.png",
    alt: "Protective molded EPS packaging solutions for fragile goods",
    specPill: "Custom Tooling",
  },
};

export const JOURNEY_MILESTONES: MilestoneData[] = [
  {
    id: "2010",
    period: "2010",
    title: "Foundation",
    description:
      "Started operations in Demra, Dhaka pioneering automated EPS blocks & sheets for industrial packaging and construction.",
    highlight: "Demra Factory Launch",
  },
  {
    id: "2012-2016",
    period: "2012–2016",
    title: "Process Mastery",
    description:
      "Invested in automated hot-wire precision cutting, steam pressure conditioning, and rigorous batch-wise density checks.",
    highlight: "±0.1mm Calibrated Slicing",
  },
  {
    id: "2017",
    period: "2017",
    title: "Customization at Scale",
    description:
      "Scaled high-volume sheet production pipelines, optimizing nesting algorithms for zero-scrap thermal barrier delivery.",
    highlight: "High-Volume Programs",
  },
  {
    id: "2018",
    period: "2018",
    title: "Garment Solutions",
    description:
      "Engineered specialized expanded thermocol beads (MuriBall) for denim processing; scaled capacity to 2,000 kg/day.",
    highlight: "2,000 kg/Day Washing Beads",
  },
  {
    id: "2019-present",
    period: "2019–Present",
    title: "Multi-Line Partner",
    description:
      "Expanded with separate raw virgin bead distribution, cold-chain solutions, and turnkey equipment procurement support.",
    highlight: "Nationwide Supply Chain",
  },
];
