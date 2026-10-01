export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "export",
    question: "Do you export?",
    answer:
      "Yes. While we actively serve major infrastructure, commercial, and garment industries across Bangladesh, we also support regional cross-border exports and supply global supply-chain partners with certified packaging and insulation grades.",
  },
  {
    id: "custom-cutting",
    question: "Can you cut sheets to my exact size?",
    answer:
      "Absolutely. With our computerized oscillating CNC hot-wire slicing systems, we can calibrate sheet thickness from 10mm up to 500mm with tight micrometer tolerances (±0.5mm) according to your architectural or cold-storage specifications.",
  },
  {
    id: "denim-ball-size",
    question: "Which thermocol ball size for denim?",
    answer:
      "For standard denim abrasion and enzyme wash recipes, sizes L (8–10mm) and XL (12–14mm) are the industry favorites. For lighter knitwear or delicate fabrics, S (3–5mm) or M (5–8mm) provide gentle, even action without damaging fibers.",
  },
  {
    id: "raw-beads-vs-muriball",
    question: "Are raw beads and thermocol balls the same line?",
    answer:
      "No. Raw EPS beads are unexpanded virgin polystyrene beads containing pentane blowing agent, shipped in airtight 25kg/750kg bags for manufacturers who own pre-expanders. Thermocol balls (MuriBall) are fully expanded, screened, and conditioned beads ready for immediate use in garment washing or cushion filling.",
  },
  {
    id: "turnkey-machinery",
    question: "Do you supply machinery or turnkey plant equipment?",
    answer:
      "Yes. We support industrial clients with complete EPS plant setups, automated multi-wire block cutters, pre-expanders, and steam distribution systems, backed by in-house engineering consultation and calibration.",
  },
];
