export interface IndustrySector {
  id: string;
  tabLabel: string;
  title: string;
  image: string;
  keyHighlights: string[];
}

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "construction",
    tabLabel: "Construction",
    title: "Construction & Civil Engineering",
    image: "/images/industry-construction.jpg",
    keyHighlights: [
      "Lightweight geofoam blocks and void fillers reducing structural deadload.",
      "High-density thermal barriers for roof decks, exterior envelopes & cold joints.",
      "Moisture-impermeable core preventing humidity sag and reinforcement corrosion.",
    ],
  },
  {
    id: "cold-storage",
    tabLabel: "Cold Storage",
    title: "Cold Storage & Agro-Preservation",
    image: "/images/industry-coldstorage.jpg",
    keyHighlights: [
      "High-density interlocking slabs eliminating thermal leakage across wall seams.",
      "Under-floor sub-zero freeze protection preventing soil frost-heave damage.",
      "Ultra-low thermal conductivity rating (λ = 0.033 W/m·K) slashing refrigeration power costs.",
    ],
  },
  {
    id: "garments",
    tabLabel: "Garments & Washing",
    title: "Garment & Commercial Washing",
    image: "/images/industry-garments.jpg",
    keyHighlights: [
      "Calibrated bead diameter delivering uniform denim abrasion and vintage fading.",
      "100% virgin polymer formulation ensuring zero dye bleed or fabric discoloration.",
      "Steam and water wash resilience engineered for multiple continuous wash cycles.",
    ],
  },
  {
    id: "pharma",
    tabLabel: "Pharmaceuticals",
    title: "Pharmaceuticals & Healthcare Cold-Chain",
    image: "/images/industry-pharma.jpg",
    keyHighlights: [
      "Strict 2°C to 8°C validated thermal hold envelopes for temperature-critical medicines.",
      "GMP-compliant sanitary insulation cores resistant to bacteria, mold, and humidity.",
      "High kinetic damping shielding delicate glass ampoules and diagnostic vials.",
    ],
  },
  {
    id: "packaging",
    tabLabel: "Packaging",
    title: "Electronics, Ceramics & Protective Packaging",
    image: "/images/industry-packaging.jpg",
    keyHighlights: [
      "Multi-axis corner guards and contoured end-caps engineered for exact product fit.",
      "High energy-absorption cellular structure preventing shock transmission.",
      "Non-abrasive surface finish preventing cosmetic scratches during handling.",
    ],
  },
  {
    id: "creative",
    tabLabel: "Creative & Events",
    title: "Event Management, Props & Luxury Furniture",
    image: "/images/industry-creative.jpg",
    keyHighlights: [
      "High-density blocks tailored for 5-axis CNC hot-wire router carving.",
      "Stage backdrops, 3D letters, sculptures & architectural decor.",
      "Lightweight core cushioning for furniture & mattress manufacturing.",
    ],
  },
];
