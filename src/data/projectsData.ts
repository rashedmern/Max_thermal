export interface MegaProject {
  id: string;
  title: string;
  image: string;
  supplyTag: string;
  location: string;
  status: string;
}

export interface CommercialProject {
  id: string;
  title: string;
  image: string;
  location: string;
  tag: string;
  description?: string;
}

export const MEGA_PROJECTS: MegaProject[] = [
  {
    id: "rooppur",
    title: "Rooppur Nuclear Plant",
    image: "/images/project-rooppur.jpg",
    supplyTag: "❄ Roof Cooling Insulation",
    location: "Ishwardi, Pabna",
    status: "National Project",
  },
  {
    id: "rampal",
    title: "Rampal Power Plant",
    image: "/images/project-rampal.jpg",
    supplyTag: "⚡ Thermal Cooling Slabs",
    location: "Rampal, Bagerhat",
    status: "National Project",
  },
  {
    id: "padma",
    title: "Padma Bridge",
    image: "/images/project-padma.jpg",
    supplyTag: "🌉 Bridge Expansion Joints",
    location: "Mawa – Janjira",
    status: "National Project",
  },
];

export const COMMERCIAL_PROJECTS: CommercialProject[] = [
  {
    id: "coldstorage",
    title: "Agro & Cold Storage Facilities",
    image: "/images/project-coldstorage.jpg",
    location: "📍 Munshiganj & Rajshahi",
    tag: "❄ Potato & Seed Cold Storage",
    description:
      "Engineered thermal insulation envelope slabs maintaining strict sub-zero preservation environments for regional agro-produce.",
  },
  {
    id: "pharma",
    title: "Pharmaceutical Cleanroom Insulation",
    image: "/images/project-pharma.jpg",
    location: "📍 Gazipur Industrial Zone",
    tag: "🧪 HVAC Thermal Barrier",
    description:
      "Airtight HVAC insulation barriers and sanitary cleanroom wall cores certified for GMP pharmaceutical manufacturing standards.",
  },
  {
    id: "commercial-roof",
    title: "High-Rise Commercial Roof Insulation",
    image: "/images/project-commercial.jpg",
    location: "📍 Dhaka Metropolitan",
    tag: "🏢 Architectural Envelope",
    description:
      "High-density EPS roof insulation slabs dramatically cutting solar heat absorption and HVAC electrical loads in corporate towers.",
  },
  {
    id: "denim-plant",
    title: "Commercial Denim Washing Facilities",
    image: "/images/project-denim-plant.jpg",
    location: "📍 Narayanganj & Savar",
    tag: "👖 Textile Washing Lines",
    description:
      "High-volume MuriBall expanded thermocol bead distribution and boiler steam pipe thermal jacketing for export garment laundries.",
  },
];
