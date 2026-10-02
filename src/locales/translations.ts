export type Language = "en" | "bn";

export interface Translations {
  nav: {
    home: string;
    ourJourney: string;
    products: string;
    projects: string;
    industry: string;
    team: string;
    getQuote: string;
    quote: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    facilityTag: string;
    unmute: string;
    mute: string;
  };
  journey: {
    title: string;
    subtitle: string;
    viewSpecs: string;
    mainCard: {
      category: string;
      chip: string;
      title: string;
      subtitle: string;
    };
    topRightCard: {
      category: string;
      chip: string;
      title: string;
      subtitle: string;
    };
    bottomRightCard: {
      category: string;
      chip: string;
      title: string;
      subtitle: string;
    };
    clientsTitle: string;
    clientsSubtitle: string;
  };
  products: {
    sectionTitle: string;
    sectionSubtitle: string;
    tabs: {
      blocks: string;
      sheets: string;
      muriball: string;
      rawBeads: string;
    };
    specSuffix: string;
    items: {
      [key: string]: {
        title: string;
        bullets: { title: string; detail: string }[];
      };
    };
    blocks: {
      dimensionsHeader: string;
      dimensions: { unit: string; dimensions: string; detail: string }[];
      calloutBadge: string;
      callout: string;
      calloutSub: string;
      densityRangeLabel: string;
      densityRangeVal: string;
      usesHeader: string;
      uses: string[];
      standardsLabel: string;
      standardsVal: string;
    };
    sheets: {
      metric1Label: string;
      metric1Val: string;
      metric1Sub: string;
      metric2Label: string;
      metric2Val: string;
      metric2Sub: string;
      metric3Label: string;
      metric3Val: string;
      metric3Sub: string;
      metric4Label: string;
      metric4Val: string;
      metric4Sub: string;
      matrixHeader: string;
      popularBadge: string;
      popularList: { thickness: string; application: string; isPopular?: boolean }[];
      thermalHeader: string;
      thermalText: string;
      permanentRValue: string;
    };
    muriball: {
      header: string;
      badge: string;
      grades: {
        code: string;
        diameter: string;
        washRecipe: string;
        recommendedFor: string;
        abrasionLevel: string;
      }[];
      packagingTitle: string;
      packagingFormat: string;
      packagingDesc: string;
      benefitsTitle: string;
      benefits: string[];
    };
    rawBeads: {
      tableHeader: string;
      thGrade: string;
      thSize: string;
      thDensity: string;
      thExpansion: string;
      thApp: string;
      grades: {
        code: string;
        particleSize: string;
        expandedDensity: string;
        expansionFactor: string;
        primaryApplications: string;
      }[];
      packagingTitle: string;
      packagingTiers: string[];
      blowingAgentTitle: string;
      blowingAgentDesc: string;
      shelfLifeLabel: string;
      shelfLifeVal: string;
    };
  };
  projects: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    statusNational: string;
    supplyLabel: string;
    inspectPhoto: string;
    commercialTag: string;
    commercialTitle: string;
    commercialSubtitle: string;
    clickToViewHint: string;
    megaProjects: {
      [key: string]: {
        title: string;
        supplyTag: string;
        location: string;
        description: string;
      };
    };
    commercialProjects: {
      [key: string]: {
        title: string;
        tag: string;
        location: string;
        description: string;
      };
    };
  };
  industry: {
    sectionTitle: string;
    sectionSubtitle: string;
    sectors: {
      [key: string]: {
        tabLabel: string;
        title: string;
        highlights: string[];
      };
    };
  };
  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    experienceLabel: string;
    members: {
      [key: string]: {
        name: string;
        designation: string;
        experience: string;
        bio: string;
      };
    };
  };
  blog: {
    sectionTitle: string;
    sectionSubtitle: string;
    readStory: string;
    closeDialog: string;
    dialogueEnLabel: string;
    dialogueBnLabel: string;
    explanationLabel: string;
    keyTakeawayLabel: string;
    panelPrefix: string;
    stories: {
      [key: string]: {
        title: string;
        typeLabel: string;
        excerpt: string;
        readTime: string;
        panels: {
          title: string;
          dialogueBn: string;
          dialogueEn: string;
          explanation: string;
          keyTakeaway: string;
        }[];
      };
    };
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      [key: string]: {
        question: string;
        answer: string;
      };
    };
  };
  quote: {
    badge: string;
    title: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    companyHeading: string;
    productsHeading: string;
    contactHeading: string;
    schedule: string;
    hotline1Label: string;
    hotline2Label: string;
    address: string;
    email: string;
    copyright: string;
    privacy: string;
    terms: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      ourJourney: "Our Journey",
      products: "Products",
      projects: "Projects",
      industry: "Industry",
      team: "Team",
      getQuote: "Get a Quote",
      quote: "Quote",
      languageLabel: "Language / ভাষা",
    },
    hero: {
      badge: "PRODUCTION LINE",
      titleStart: "Precision Cork & EPS",
      titleHighlight: "Thermal Sheet Manufacturing",
      subtitle:
        "Watch how raw sustainable materials are engineered into high-performance thermal insulation and acoustic barriers.",
      facilityTag: "FACILITY • PRODUCTION LINE",
      unmute: "Unmute",
      mute: "Mute",
    },
    journey: {
      title: "Our Journey",
      subtitle:
        "From Demra, Dhaka, we supply EPS products for construction, packaging, garments, industrial use and trading partners across Bangladesh.",
      viewSpecs: "View Specs",
      mainCard: {
        category: "CORE THERMAL PRODUCT",
        chip: "CNC Wire-Cut",
        title: "Precision EPS Sheets",
        subtitle: "Custom size, thickness and density for industrial and construction usage.",
      },
      topRightCard: {
        category: "TEXTILE TECH",
        chip: "2,000 kg/Day",
        title: "MuriBall / Thermocol Balls",
        subtitle: "For denim garment abrasion & bio-stone washing recipes.",
      },
      bottomRightCard: {
        category: "PROTECTIVE PACKAGING",
        chip: "Shock-Absorbing",
        title: "Molded EPS Packaging",
        subtitle: "Engineered lightweight cushioning for fragile electronics and exports.",
      },
      clientsTitle: "Our Gratified Clients",
      clientsSubtitle:
        "We are proud to serve a diverse range of clients across industrial, commercial, residential, and agricultural sectors. Their trust reflects our commitment to quality, reliability, and innovative solutions, making Golden EPS a preferred partner in insulation and sandwich panel solutions.",
    },
    products: {
      sectionTitle: "Engineered Products & Technical Specifications",
      sectionSubtitle:
        "Factory-direct EPS products with precision density calibration and custom dimensions for construction, garment washing, packaging, and raw supply.",
      tabs: {
        blocks: "EPS Blocks",
        sheets: "EPS Sheets",
        muriball: "MuriBall / Beads",
        rawBeads: "Virgin Raw EPS Beads",
      },
      specSuffix: "Specifications",
      items: {
        "eps-blocks": {
          title: "Monolithic EPS Blocks",
          bullets: [
            { title: "Standard Dimensions", detail: "2000 × 1000 × 500 mm monolithic mold capacity" },
            { title: "Calibrated Density", detail: "Custom engineered from 12 kg/m³ to 35 kg/m³" },
            { title: "High Compressive Strength", detail: "Geofoam-grade stability for bridge abutments & structural fills" },
            { title: "Computerized Wire Slicing", detail: "Cut in-house to any custom thickness with micrometer precision" },
          ],
        },
        "eps-sheets": {
          title: "Precision Cut EPS Sheets",
          bullets: [
            { title: "Custom Slicing", detail: "10mm to 500mm thicknesses in exact 1mm increments" },
            { title: "Thermal Insulation", detail: "Low thermal conductivity λ = 0.033 W/m·K cuts HVAC electricity 35%" },
            { title: "Zero Water Absorption", detail: "Closed-cell structure prevents moisture accumulation and mold" },
            { title: "Fire Retardant (FR)", detail: "Available in ASTM E84 Class A and B1 self-extinguishing grades" },
          ],
        },
        muriball: {
          title: "MuriBall (Thermocol Balls)",
          bullets: [
            { title: "Screened Calibers", detail: "Uniform particle grading from 2mm to 14mm diameters" },
            { title: "Garment Washing", detail: "Bio-stone abrasion alternative for denim and knitwear processing" },
            { title: "Pure 100% Virgin Core", detail: "Zero dust, zero chemical residue, non-toxic food-grade purity" },
            { title: "High-Volume Supply", detail: "Over 2,000 kg/day plant output in breathable moisture-resistant bags" },
          ],
        },
        "raw-beads": {
          title: "Virgin Raw EPS Beads",
          bullets: [
            { title: "Pentane Blowing Agent", detail: "5.5% – 6.5% pentane gas content for uniform high expansion ratios" },
            { title: "Multiple Sieve Grades", detail: "Fine (0.6–0.9mm) to Coarse (1.0–1.6mm) virgin particle sizes" },
            { title: "High Pre-Expansion Yield", detail: "Up to 50x expansion volume in standard steam pre-expanders" },
            { title: "Airtight Packing", detail: "Supplied in heavy-duty 25 kg bags and 750 kg industrial bulk octabins" },
          ],
        },
      },
      blocks: {
        dimensionsHeader: "Monolithic Block Standard Dimensions",
        dimensions: [
          { unit: "Metric", dimensions: "2000 × 1000 × 500 mm", detail: "Primary standard mold cavity" },
          { unit: "Imperial", dimensions: "78.7 × 39.4 × 19.7 in", detail: "Architectural specification format" },
          { unit: "Feet", dimensions: "6.56 × 3.28 × 1.64 ft", detail: "Civil engineering field estimation" },
          { unit: "Volume", dimensions: "1.00 m³ / Block", detail: "Unit weight: 15 – 35 kg / block" },
        ],
        calloutBadge: "Custom Sectional Cutting",
        callout: "Every block is seasoned in our conditioning chambers for dimensional stability before slicing.",
        calloutSub: "Full blocks are cut in-house on computer-controlled multi-wire cutting lines with ±0.5mm precision.",
        densityRangeLabel: "Density Range:",
        densityRangeVal: "15 – 35 kg/m³",
        usesHeader: "Typical Industrial & Geotechnical Use Cases",
        uses: [
          "Civil highway embankment void fills & bridge approach ramps (Geofoam)",
          "Cold-storage room perimeter foundation thermal cutoff",
          "Architectural molding, cornices, columns & 3D prop CNC carving",
          "Acoustic isolation pads for heavy industrial rotary compressors",
        ],
        standardsLabel: "Standard Compliance:",
        standardsVal: "ASTM C578 & ISO 9001:2015",
      },
      sheets: {
        metric1Label: "Thickness Range",
        metric1Val: "10 mm – 500 mm",
        metric1Sub: "Any custom gauge in 1mm steps",
        metric2Label: "Max Plan Dimensions",
        metric2Val: "1980 × 990 mm",
        metric2Sub: "Full standard 78 × 39 in footprint",
        metric3Label: "Density Range",
        metric3Val: "12 – 35 kg/m³",
        metric3Sub: "From light packaging to high load",
        metric4Label: "Surface Quality",
        metric4Val: "Smooth Hot-Wire",
        metric4Sub: "Clean edges, zero bead crumbling",
        matrixHeader: "Standard Calibrated Slicing Matrix",
        popularBadge: "Popular",
        popularList: [
          { thickness: "12 mm (½ in)", application: "Ceiling insulation & lightweight protective cushioning", isPopular: true },
          { thickness: "25 mm (1 in)", application: "Standard residential roof & wall cavity thermal barrier", isPopular: true },
          { thickness: "50 mm (2 in)", application: "Cold storage walls, HVAC ducts & commercial chillers", isPopular: true },
          { thickness: "75 mm (3 in)", application: "Deep freeze insulation (-18°C) & structural sandwich panels" },
          { thickness: "100 mm (4 in)", application: "Industrial refrigerated warehouses & sub-zero blast chambers" },
          { thickness: "Custom Gauge", application: "CNC wire-cut to any architectural specification within ±0.5 mm" },
        ],
        thermalHeader: "Thermal Performance & Fire Rating",
        thermalText: "Thermal conductivity λ = 0.033 W/m·K. Available in Standard Commercial and Class B1 Self-Extinguishing Flame Retardant (FR).",
        permanentRValue: "Permanent R-Value (No Sag)",
      },
      muriball: {
        header: "Garment Wash Screened Caliber Sizes",
        badge: "100% Virgin Food-Grade EPS Core",
        grades: [
          { code: "Grade S", diameter: "3 – 5 mm", washRecipe: "Enzyme Micro-Wash", recommendedFor: "Lightweight denim, knitwear & soft vintage wash recipes", abrasionLevel: "Delicate Soft" },
          { code: "Grade M", diameter: "5 – 8 mm", washRecipe: "Medium Stone-Wash", recommendedFor: "Standard denim jeans, jackets & uniform abrasion", abrasionLevel: "Balanced Mid" },
          { code: "Grade L", diameter: "8 – 10 mm", washRecipe: "Heavy Abrasion Wash", recommendedFor: "Rigid heavy denim twill, distress effect washing", abrasionLevel: "High Contrast" },
          { code: "Grade XL", diameter: "10 – 14 mm", washRecipe: "Specialized Texture Wash", recommendedFor: "Heavyweight outerwear, industrial canvas, bio-wash", abrasionLevel: "Aggressive" },
          { code: "Micro-Bead", diameter: "1.5 – 2.5 mm", washRecipe: "Acoustic / Cushion Fill", recommendedFor: "Plush bean bags, nursing pillows & sensory furniture", abrasionLevel: "Non-Wash Fill" },
          { code: "Virgin Fluff", diameter: "Mixed Sieve", washRecipe: "Concrete Lightweight Fill", recommendedFor: "Lightweight screeds, floor leveling & thermal grout", abrasionLevel: "Construction" },
        ],
        packagingTitle: "Packaging & Supply Format",
        packagingFormat: "25 kg / 50 kg Heavy-Duty Breathable Woven Bags",
        packagingDesc: "Breathable bags prevent static buildup, maintain uniform density, and allow rapid drum loading during garment wash cycles.",
        benefitsTitle: "Advantages Over Natural Pumice Stones",
        benefits: [
          "Zero sludge accumulation in effluent treatment plant (ETP) filters",
          "Consistent, non-destructive fabric abrasion without fiber breakage",
          "Up to 3x reusable wash cycles compared to traditional volcanic stone",
          "100% chemically inert — will not alter garment pH balance or dye bath",
        ],
      },
      rawBeads: {
        tableHeader: "Virgin Particle Grade & Expansion Metrics",
        thGrade: "Grade Code",
        thSize: "Particle Size",
        thDensity: "Expanded Density",
        thExpansion: "Expansion Ratio",
        thApp: "Primary Application",
        grades: [
          { code: "EPS-101", particleSize: "0.6 – 0.9 mm", expandedDensity: "18 – 35 kg/m³", expansionFactor: "40 – 45x", primaryApplications: "High-density blocks, thin-wall cup molding & electronic packaging" },
          { code: "EPS-201", particleSize: "0.8 – 1.2 mm", expandedDensity: "14 – 25 kg/m³", expansionFactor: "45 – 50x", primaryApplications: "Standard commercial insulation sheets, cold boxes & ceiling panels" },
          { code: "EPS-301", particleSize: "1.0 – 1.6 mm", expandedDensity: "10 – 18 kg/m³", expansionFactor: "50 – 55x", primaryApplications: "Low-density protective packaging, void fill & lightweight geofoam" },
          { code: "EPS-FR", particleSize: "0.8 – 1.2 mm", expandedDensity: "15 – 30 kg/m³", expansionFactor: "42 – 48x", primaryApplications: "Flame-retardant (FR) architectural building insulation boards" },
        ],
        packagingTitle: "Industrial Packaging Tiers",
        packagingTiers: [
          "25 kg hermetically sealed multi-layer kraft paper bags",
          "750 kg heavy-duty industrial octabins with moisture vapor barrier",
          "Direct container-load (FCL) project dispatch nationwide",
        ],
        blowingAgentTitle: "Blowing Agent & Storage Conditions",
        blowingAgentDesc: "Infused with 5.5% – 6.5% pentane gas. Optimal steam pre-expansion window: 98°C – 102°C steam temperature.",
        shelfLifeLabel: "Shelf Life:",
        shelfLifeVal: "6 months in cool, dry warehouse below 20°C",
      },
    },
    projects: {
      sectionTag: "National Infrastructure & Commercial Supply",
      sectionTitle: "Featured Projects & Landmark Infrastructure",
      sectionSubtitle:
        "From Bangladesh's most critical mega-infrastructure to extensive local industrial and commercial supply networks nationwide.",
      statusNational: "National Project",
      supplyLabel: "Supply Scope",
      inspectPhoto: "Click any project card to view high-res site photo",
      commercialTag: "Commercial Footprint",
      commercialTitle: "Commercial & Industrial Projects Across Bangladesh",
      commercialSubtitle:
        "Supplying certified thermal insulation, cold-chain envelopes, and structural EPS to industries nationwide.",
      clickToViewHint: "Click any project card to view high-res site photo",
      megaProjects: {
        rooppur: {
          title: "Rooppur Nuclear Plant",
          supplyTag: "❄ Roof Cooling Insulation",
          location: "Ishwardi, Pabna",
          description: "Supplying precision engineered thermal insulation and structural expansion solutions for Rooppur Nuclear Power Plant.",
        },
        rampal: {
          title: "Rampal Power Plant",
          supplyTag: "⚡ Thermal Cooling Slabs",
          location: "Rampal, Bagerhat",
          description: "Supplying precision engineered thermal cooling slabs and structural thermal barrier solutions for Rampal Power Plant.",
        },
        padma: {
          title: "Padma Bridge",
          supplyTag: "🌉 Bridge Expansion Joints",
          location: "Mawa – Janjira",
          description: "Supplying precision engineered bridge expansion joints and geotechnical void fills for Padma Multipurpose Bridge.",
        },
      },
      commercialProjects: {
        coldstorage: {
          title: "Agro & Cold Storage Facilities",
          tag: "❄ Potato & Seed Cold Storage",
          location: "📍 Munshiganj & Rajshahi",
          description: "Engineered thermal insulation envelope slabs maintaining strict sub-zero preservation environments for regional agro-produce.",
        },
        pharma: {
          title: "Pharmaceutical Cleanroom Insulation",
          tag: "🧪 HVAC Thermal Barrier",
          location: "📍 Gazipur Industrial Zone",
          description: "Airtight HVAC insulation barriers and sanitary cleanroom wall cores certified for GMP pharmaceutical manufacturing standards.",
        },
        "commercial-roof": {
          title: "High-Rise Commercial Roof Insulation",
          tag: "🏢 Architectural Envelope",
          location: "📍 Dhaka Metropolitan",
          description: "High-density EPS roof insulation slabs dramatically cutting solar heat absorption and HVAC electrical loads in corporate towers.",
        },
        "denim-plant": {
          title: "Commercial Denim Washing Facilities",
          tag: "👖 Textile Washing Lines",
          location: "📍 Narayanganj & Savar",
          description: "Supplying 2,000+ kg/day calibrated expanded thermocol beads (MuriBall) to major export-oriented garment washing plants.",
        },
      },
    },
    industry: {
      sectionTitle: "Industries We Power",
      sectionSubtitle:
        "Delivering high-precision thermal insulation, protective cushioning, and specialized EPS solutions across key industrial sectors.",
      sectors: {
        construction: {
          tabLabel: "Construction",
          title: "Construction & Civil Engineering",
          highlights: [
            "Lightweight geofoam blocks and void fillers reducing structural deadload.",
            "High-density thermal barriers for roof decks, exterior envelopes & cold joints.",
            "Moisture-impermeable core preventing humidity sag and reinforcement corrosion.",
          ],
        },
        "cold-storage": {
          tabLabel: "Cold Storage",
          title: "Cold Storage & Agro-Preservation",
          highlights: [
            "High-density interlocking slabs eliminating thermal leakage across wall seams.",
            "Under-floor sub-zero freeze protection preventing soil frost-heave damage.",
            "Ultra-low thermal conductivity rating (λ = 0.033 W/m·K) slashing refrigeration power costs.",
          ],
        },
        garments: {
          tabLabel: "Garments & Washing",
          title: "Garment & Commercial Washing",
          highlights: [
            "Calibrated bead diameter delivering uniform denim abrasion and vintage fading.",
            "100% virgin polymer formulation ensuring zero dye bleed or fabric discoloration.",
            "Steam and water wash resilience engineered for multiple continuous wash cycles.",
          ],
        },
        pharma: {
          tabLabel: "Pharmaceuticals",
          title: "Pharmaceuticals & Healthcare Cold-Chain",
          highlights: [
            "Strict 2°C to 8°C validated thermal hold envelopes for temperature-critical medicines.",
            "GMP-compliant sanitary insulation cores resistant to bacteria, mold, and humidity.",
            "High kinetic damping shielding delicate glass ampoules and diagnostic vials.",
          ],
        },
        packaging: {
          tabLabel: "Packaging",
          title: "Electronics, Ceramics & Protective Packaging",
          highlights: [
            "Multi-axis corner guards and contoured end-caps engineered for exact product fit.",
            "High kinetic shock damping preventing fragile ceramic and glass shipping loss.",
            "Ultra-lightweight density profile cutting domestic and air export freight overheads.",
          ],
        },
        creative: {
          tabLabel: "Creative & Events",
          title: "Event Management, Props & Luxury Furniture",
          highlights: [
            "High-density blocks tailored for 5-axis CNC hot-wire router carving.",
            "Stage backdrops, 3D letters, sculptures & architectural decor.",
            "Lightweight core cushioning for furniture & mattress manufacturing.",
          ],
        },
        "creative-arts": {
          tabLabel: "Creative & Events",
          title: "Event Management, Props & Luxury Furniture",
          highlights: [
            "High-density blocks tailored for 5-axis CNC hot-wire router carving.",
            "Stage backdrops, 3D letters, sculptures & architectural decor.",
            "Lightweight core cushioning for furniture & mattress manufacturing.",
          ],
        },
      },
    },
    team: {
      sectionTitle: "Leadership & Executive Team",
      sectionSubtitle:
        "Guiding Max Thermal with decades of expertise in industrial manufacturing, engineering precision, and nationwide operations.",
      experienceLabel: "Experience:",
      members: {
        "md-rashed": {
          name: "MD Rashed",
          designation: "Managing Director",
          experience: "15+ Years",
          bio: "Leading business forecasting, operational planning, and manufacturing scale. Ensuring cost optimization, high productivity, and long-term partnerships across Bangladesh's industrial sector.",
        },
        "rabeya-naznin": {
          name: "Rabeya Naznin",
          designation: "Deputy Managing Director",
          experience: "12+ Years",
          bio: "Directing nationwide supply logistics, raw material inventory, and factory floor operations. Focused on streamlining delivery timelines and maintaining strict ASTM quality standards.",
        },
        "mahmudul-hasan": {
          name: "Mahmudul Hasan",
          designation: "Vice Chairman",
          experience: "18+ Years",
          bio: "Overseeing corporate finance, capital investment planning, and corporate governance. Guiding sustainable business expansion and infrastructure facility investments across Bangladesh.",
        },
        "kazi-sahid": {
          name: "Kazi Sahid",
          designation: "Director / Advisory Board",
          experience: "20+ Years",
          bio: "Providing high-level technical and engineering counsel for mega-infrastructure supply, thermal insulation design, and geotechnical geofoam application standards.",
        },
      },
    },
    blog: {
      sectionTitle: "Learn About Insulation",
      sectionSubtitle:
        "From EPS technology to real-world problem solving, discover how modern insulation transforms everyday living and industrial efficiency.",
      readStory: "Read Story",
      closeDialog: "Close story reader",
      dialogueEnLabel: "English Dialogue",
      dialogueBnLabel: "বাংলা সংলাপ",
      explanationLabel: "Engineering Context",
      keyTakeawayLabel: "Key Takeaway",
      panelPrefix: "Panel",
      stories: {
        "story-of-scope": {
          title: "The Story of Scope — The 2050 Robot",
          typeLabel: "Illustrated Comic",
          excerpt:
            "Scope is a smart robot child from 2050 teaching everyday folks about modern heat and sound insulation.",
          readTime: "3 min read",
          panels: [
            {
              title: "The Mystery Material in the Hardware Market",
              dialogueBn:
                "স্কোপ গিয়েছিল ইঞ্জিনিয়ারের বলা Styrofoam আনতে। দোকানদার বলল, 'এটা আবার কি জিনিস?' স্কোপ হেসে বলল, 'আসলে Styrofoam, Cork Sheet, Thermocol—সবই এক জিনিস: EPS Insulation!'",
              dialogueEn:
                "Scope visited the local hardware hub asking for 'Styrofoam'. The confused shopkeeper asked, 'What is that?' Scope chuckled: 'Styrofoam, Cork Sheet, and Thermocol are simply different commercial names for the same wonder material: Expanded Polystyrene (EPS)!'",
              explanation:
                "Expanded Polystyrene (EPS) consists of 98% trapped micro-cellular air. This unique cellular structure makes it one of the lightest, most efficient thermal and acoustic barriers known in modern engineering.",
              keyTakeaway: "Styrofoam = Cork Sheet = Thermocol = High-efficiency EPS Insulation.",
            },
            {
              title: "How 98% Air Stops 100% of Thermal Heat",
              dialogueBn:
                "'বাতাস যখন ক্ষুদ্র কোটি কোটি কোষে আটকে থাকে, তখন তাপ প্রবাহিত হতে পারে না!'—স্কোপ চকবোর্ডে এঁকে সবাইকে বুঝিয়ে দিল।",
              dialogueEn:
                "'When air is trapped inside microscopic sealed beads, heat convection completely stalls!' Scope demonstrated on his holographic classroom display.",
              explanation:
                "With an ultra-low thermal conductivity rating (λ = 0.033 W/m·K), Max Thermal EPS blocks solar radiant energy from heating rooftop slabs and exterior concrete walls.",
              keyTakeaway: "Zero convection currents mean dramatic interior temperature drops.",
            },
          ],
        },
        "hot-roof-solution": {
          title: "Why Is the Top Floor Like a Furnace?",
          typeLabel: "Homeowner Guide",
          excerpt:
            "Why do top-floor residents suffer unbearable room temperatures, and how does a simple EPS roof slab drop room temperatures by 6°C to 8°C?",
          readTime: "4 min read",
          panels: [
            {
              title: "Concrete Acts Like a Giant Thermal Battery",
              dialogueBn:
                "'ভাই, সারাদিন রোদ খেয়ে ছাদ তো ফুটন্ত তাওয়া হয়ে যায়! রাত ১২টাতেও সিলিং থেকে আগুন ঝরে!'—বাড়িওয়ালার মাথায় হাত।",
              dialogueEn:
                "'Our rooftop absorbs heat all day like an oven! Even at midnight, heat radiates downward into our bedroom!' exclaimed the frustrated top-floor homeowner.",
              explanation:
                "Standard concrete slabs have high thermal mass and conduct heat inward. Without an insulation barrier, the ceiling continuously radiates thermal waves into living spaces throughout the night.",
              keyTakeaway: "Uninsulated concrete turns ceilings into persistent radiating radiators.",
            },
            {
              title: "The EPS Thermal Shield Solution",
              dialogueBn:
                "'ছাদের ওপর শুধু ২৫ মিমি বা ৫০ মিমি ম্যাক্স থার্মাল ইপিএস শিট আর হালকা প্রটেকশন দিলেই ঘরের তাপমাত্রা ৬° থেকে ৮° সে. কমে যায়!'",
              dialogueEn:
                "'Installing a 25mm or 50mm Max Thermal EPS sheet on the roof slab creates an impassable thermal shield, dropping interior temperatures by 6°C to 8°C instantly!'",
              explanation:
                "EPS insulation acts as a thermal barrier between the sun and the concrete deck, cutting AC power consumption by up to 35% every summer month.",
              keyTakeaway: "Save thousands on monthly electricity while enjoying cool living spaces.",
            },
          ],
        },
        "fish-export-secret": {
          title: "The 36-Hour Ice Shield for Fresh Fish Exports",
          typeLabel: "Cold-Chain Secret",
          excerpt:
            "How coastal shrimp and Hilsa exporters keep catch frozen rock-solid across 500km highway transit without electrical refrigeration.",
          readTime: "3 min read",
          panels: [
            {
              title: "The 500km Transit Challenge",
              dialogueBn:
                "'কক্সবাজার থেকে মাছ ঢাকায় পৌঁছাতে ১২ ঘণ্টা ট্রাফিক জ্যাম! বরফ গলে গেলে সব মাছ নষ্ট!'—রপ্তানিকারকের চোখে দুশ্চিন্তা।",
              dialogueEn:
                "'Transporting premium Hilsa and shrimp 500km through highway delays without refrigeration causes ice to melt and catch to spoil!' worried the sea export team.",
              explanation:
                "Traditional wooden crates and thin boxes leak cold air rapidly. Ambient temperatures above 35°C melt ice within hours, spoiling fresh seafood before reaching city terminals.",
              keyTakeaway: "Perishable cargo demands zero thermal bridge packaging.",
            },
            {
              title: "High-Density EPS Cold Boxes Keep Ice Frozen for 36+ Hours",
              dialogueBn:
                "'ম্যাক্স থার্মালের মোল্ডেড ইপিএস বক্সে আইস প্যাকসহ রাখলে ৩৬ ঘণ্টাতেও বরফ গলে না! মাছ পৌঁছায় সাগর থেকে সদ্য তোলার মতো তাজা!'",
              dialogueEn:
                "'With Max Thermal high-density molded EPS cold boxes, ice remains solid for over 36 hours! The catch arrives fresh as the moment it left the ocean.'",
              explanation:
                "Molded EPS boxes have high insulating air volume, interlocking hermetic lids, and impact resistance that prevents temperature spikes and cargo crushing.",
              keyTakeaway: "Reliable cold-chain protection without costly active refrigeration.",
            },
          ],
        },
        "silence-generators": {
          title: "Muting the Concrete Noise Dragon",
          typeLabel: "Acoustic Engineering",
          excerpt:
            "From rattling industrial diesel generators to apartment noise: how EPS dampens structural vibration and decibels.",
          readTime: "4 min read",
          panels: [
            {
              title: "The Headache of Industrial Noise and Vibration",
              dialogueBn:
                "'জেনারেটরের বিকট শব্দ আর মেঝে কাঁপানো কম্পনে কারখানার অফিসরুমে কোনো কাজই করা যাচ্ছিল না!'",
              dialogueEn:
                "'The deafening drone and floor vibrations from heavy diesel generators made focus impossible in the adjoining factory management offices.'",
              explanation:
                "Sound travels not just through air, but as kinetic vibrational waves through concrete slabs and masonry walls.",
              keyTakeaway: "Structural vibration transmits sound 4x faster than airborne sound.",
            },
            {
              title: "Damping Decibels with Acoustic EPS Sandwich Walls",
              dialogueBn:
                "'মেঝে ও দেয়ালের খাঁজে ম্যাক্স থার্মাল শিট বসাতেই কম্পন শুষে নিল! শব্দ কমে এল সহনীয় শান্ত পর্যায়ে!'",
              dialogueEn:
                "'Installing Max Thermal EPS isolation pads beneath equipment and inside gypsum partition walls immediately decoupled structural vibration, reducing noise by up to 28 dB.'",
              explanation:
                "EPS cells absorb vibration and break acoustic bridges between machines and building frames, providing peaceful work and home environments.",
              keyTakeaway: "Decouple sound waves and create quiet, productive spaces.",
            },
          ],
        },
        "soundproofing-noise": {
          title: "Soundproofing Against Noise: DJ Party Next Door",
          typeLabel: "Acoustic Comic",
          excerpt:
            "Why suffer from deafening outside noise? Discover how EPS acoustic dampening creates peaceful bedrooms.",
          readTime: "3 min read",
          panels: [
            {
              title: "The Midnight Bass Nightmare",
              dialogueBn:
                "পাশের ঘরে বা রাস্তায় তীব্র ডিজে সাউন্ড? সাধারণ ইটের দেয়াল দিয়ে লো-ফ্রিকোয়েন্সি শব্দ ও ভাইব্রেশন সরাসরি ঘরে ঢুকে পড়ে—ঘুমানো অসম্ভব!",
              dialogueEn:
                "Loud party bass vibrations and highway traffic rumble penetrate right through conventional brick walls, turning peaceful bedtime into sleepless misery!",
              explanation:
                "Sound waves travel through solid building structures via mechanical vibration. Hard surfaces reflect sound waves and amplify reverberation.",
              keyTakeaway: "Hard walls without cavity damping act as acoustic transmitters.",
            },
            {
              title: "Acoustic Decoupling with EPS Core Cavities",
              dialogueBn:
                "দেয়ালের ভেতরে বা ফলস সিলিংয়ে ডেনসিটি-ক্যালিব্রেটেড ইপিএস শিট সাউন্ডের ভাইব্রেশন শোষণ করে রুমকে করে তোলে শান্ত ও কোলাহলমুক্ত।",
              dialogueEn:
                "Dense Max Thermal EPS boards installed inside double-stud drywall cavities absorb mechanical vibrations and break acoustic bridges, restoring pin-drop tranquility.",
              explanation:
                "By decoupling the wall partitions, sound transmission class (STC) ratings climb dramatically, reducing both airborne speech noise and low-frequency bass rumble.",
              keyTakeaway: "Enjoy uninterrupted sleep regardless of neighborhood party noise.",
            },
          ],
        },
        "fish-export-preservation": {
          title: "Boosting Fresh Fish Exports with Insulated Boxes",
          typeLabel: "Industrial Case",
          excerpt:
            "Preserving catch freshness from coastal fisheries to global international markets.",
          readTime: "4 min read",
          panels: [
            {
              title: "The Coastal Cold-Chain Challenge",
              dialogueBn:
                "কক্সবাজার ও খুলনা থেকে আন্তর্জাতিক বাজারে ইলিশ, চিংড়ি ও রুই পাঠানোর সময় সাধারণ বাক্সে বরফ গলে মাছের মান নষ্ট হয়ে যায়।",
              dialogueEn:
                "Transporting premium Hilsa, Black Tiger shrimp, and Rui from coastal fishing ports to international airports requires zero temperature fluctuation.",
              explanation:
                "Uninsulated or weak shipping containers experience rapid thermal exchange under tropical sun, melting cooling ice and spoiling lucrative export consignments.",
              keyTakeaway: "Every degree of temperature spike degrades export market grade and value.",
            },
            {
              title: "Max Thermal Molded EPS Export Shippers",
              dialogueBn:
                "ম্যাক্স থার্মালের এয়ারটাইট মোল্ডেড ইপিএস বক্সে বরফ গলে না, ৪°-র নিচে তাপমাত্রা থাকে ৪৮ ঘণ্টার বেশি—নিশ্চিত করে প্রিমিয়াম এক্সপোর্ট কোয়ালিটি।",
              dialogueEn:
                "Max Thermal high-density molded EPS boxes preserve ice and keep internal temperatures safely below 4°C for over 48 hours throughout long-haul transit.",
              explanation:
                "Molded interlocking EPS boxes provide superior insulation without thermal leaks, preserving ice firmness and keeping seafood at export-grade peak condition.",
              keyTakeaway: "Ensuring zero-spoilage exports with 48+ hour temperature retention.",
            },
          ],
        },
      },
    },
    faq: {
      sectionTitle: "Frequently Asked Questions",
      sectionSubtitle:
        "Common inquiries regarding our factory-direct EPS products, custom dimensions, shipping, and industrial machinery.",
      items: {
        export: {
          question: "Do you export?",
          answer:
            "Yes. While we actively serve major infrastructure, commercial, and garment industries across Bangladesh, we also support regional cross-border exports and supply global supply-chain partners with certified packaging and insulation grades.",
        },
        "custom-cutting": {
          question: "Can you cut sheets to my exact size?",
          answer:
            "Absolutely. With our computerized oscillating CNC hot-wire slicing systems, we can calibrate sheet thickness from 10mm up to 500mm with tight micrometer tolerances (±0.5mm) according to your architectural or cold-storage specifications.",
        },
        "denim-ball-size": {
          question: "Which thermocol ball size for denim?",
          answer:
            "For standard denim abrasion and enzyme wash recipes, sizes L (8–10mm) and XL (12–14mm) are the industry favorites. For lighter knitwear or delicate fabrics, S (3–5mm) or M (5–8mm) provide gentle, even action without damaging fibers.",
        },
        "raw-beads-vs-muriball": {
          question: "Are raw beads and thermocol balls the same line?",
          answer:
            "No. Raw EPS beads are unexpanded virgin polystyrene beads containing pentane blowing agent, shipped in airtight 25kg/750kg bags for manufacturers who own pre-expanders. Thermocol balls (MuriBall) are fully expanded, screened, and conditioned beads ready for immediate use in garment washing or cushion filling.",
        },
        "turnkey-machinery": {
          question: "Do you supply machinery or turnkey plant equipment?",
          answer:
            "Yes. We support industrial clients with complete EPS plant setups, automated multi-wire block cutters, pre-expanders, and steam distribution systems, backed by in-house engineering consultation and calibration.",
        },
      },
    },
    quote: {
      badge: "Direct Factory Supply & Custom Slicing",
      title: "Request Your Custom Sizing & Material Quotation",
      description:
        "Connect directly with our engineering team for bulk wholesale pricing, custom CNC profile cutting, project thermal calculations, or certified test samples.",
      button: "Request Instant Quotation",
    },
    footer: {
      description:
        "A leading manufacturer of Expanded Polystyrene (EPS) products, serving the Bangladeshi market with high-density insulation boards, thermo balls, packaging boxes, and customized thermal solutions.",
      companyHeading: "Company",
      productsHeading: "Products & Supply",
      contactHeading: "Factory & Operations",
      schedule: "Operations & Plant: Open 6 Days a Week",
      hotline1Label: "Technical & Sizing Consultation",
      hotline2Label: "Sales & Wholesale Quotation",
      address: "91/1 Mirpara (Paity Link Road), Demra, Dhaka, Bangladesh.",
      email: "info@maxthermal.com",
      copyright: "© 2025 - All Rights Reserved by Max Thermal.",
      privacy: "Privacy Policy",
      terms: "Terms of Supply",
      backToTop: "Scroll to top of page",
    },
  },
  bn: {
    nav: {
      home: "হোম",
      ourJourney: "আমাদের যাত্রা",
      products: "পণ্যসমূহ",
      projects: "প্রকল্পসমূহ",
      industry: "শিল্প খাত",
      team: "নেতৃত্ব",
      getQuote: "কোটেশন নিন",
      quote: "কোটেশন",
      languageLabel: "ভাষা / Language",
    },
    hero: {
      badge: "প্রোডাকশন লাইন",
      titleStart: "উন্নত থার্মাল ইনস্যুলেশন ও",
      titleHighlight: "প্রিসিশন ইপিএস শিট সলিউশন",
      subtitle:
        "টেকসই কাঁচামাল থেকে আধুনিক প্রযুক্তিতে তৈরি উচ্চমানের তাপ ও শব্দরোধী ইনস্যুলেশন শিট ও প্যাকেজিং ব্যবস্থা।",
      facilityTag: "কারখানা • স্বয়ংক্রিয় প্রোডাকশন লাইন",
      unmute: "শব্দ শুনুন",
      mute: "নিঃশব্দ করুন",
    },
    journey: {
      title: "আমাদের যাত্রা",
      subtitle:
        "ডেমরা, ঢাকা থেকে সমগ্র বাংলাদেশে নির্মাণ, প্যাকেজিং, গার্মেন্টস ও ভারী শিল্পে আধুনিক ইপিএস সরবরাহ করে আসছি নির্ভরযোগ্যতার সাথে।",
      viewSpecs: "বিবরণী দেখুন",
      mainCard: {
        category: "মূল ইনস্যুলেশন পণ্য",
        chip: "সিএনসি ওয়্যার-কাট",
        title: "প্রিসিশন ইপিএস শিট",
        subtitle: "নির্মাণ ও শিল্প কারখানার জন্য যেকোনো কাস্টম সাইজ, পুরুত্ব ও ডেনসিটি।",
      },
      topRightCard: {
        category: "টেক্সটাইল প্রযুক্তি",
        chip: "২,০০০ কেজি/দিন",
        title: "মুড়িবল / থার্মোকল বল",
        subtitle: "ডেনিম ওয়াশিং ও গার্মেন্টসে বায়ো-স্টোন ওয়াশের জন্য আদর্শ গোলক।",
      },
      bottomRightCard: {
        category: "প্রোটেক্টিভ প্যাকেজিং",
        chip: "শক-অ্যাবজরবিং",
        title: "মোল্ডেড ইপিএস প্যাকেজিং",
        subtitle: "ইলেকট্রনিক্স ও রপ্তানি পণ্যের জন্য টেকসই ও নিরাপদ কুশনিং ব্যবস্থা।",
      },
      clientsTitle: "আমাদের সম্মানিত গ্রাহক ও অংশীদার",
      clientsSubtitle:
        "শিল্প, বাণিজ্যিক, আবাসিক ও কৃষি খাতের শীর্ষস্থানীয় প্রতিষ্ঠানসমূহের বিশ্বস্ত অংশীদার হতে পেরে আমরা গর্বিত। গ্রাহকদের দীর্ঘদিনের আস্থাই গুণগত মান ও উদ্ভাবনে আমাদের অবিচল অঙ্গীকারের প্রমাণ।",
    },
    products: {
      sectionTitle: "ইপিএস পণ্য ও কারিগরি বিবরণী",
      sectionSubtitle:
        "কারখানা থেকে সরাসরি সঠিক ডেনসিটি ও নিখুঁত মাপে নির্মাণ, গার্মেন্টস ওয়াশিং, প্যাকেজিং ও কাঁচামাল সরবরাহ।",
      tabs: {
        blocks: "ইপিএস ব্লক",
        sheets: "ইপিএস শিট",
        muriball: "মুড়িবল বিডস",
        rawBeads: "র' ইপিএস বিডস",
      },
      specSuffix: "কারিগরি বিবরণী",
      items: {
        "eps-blocks": {
          title: "মনোলিথিক ইপিএস ব্লক",
          bullets: [
            { title: "স্ট্যান্ডার্ড সাইজ", detail: "২০০০ × ১০০০ × ৫০০ মিমি একখণ্ড ছাঁচ ক্ষমতা" },
            { title: "ক্যালিব্রেটেড ডেনসিটি", detail: "১২ কেজি/মি³ থেকে ৩৫ কেজি/মি³ পর্যন্ত কাস্টমাইজড" },
            { title: "উচ্চ ভারবহন ক্ষমতা", detail: "জিওফোম গ্রেড কাঠামো যা সেতু ও মেগা স্ট্রাকচারে উপযোগী" },
            { title: "কম্পিউটার নিয়ন্ত্রিত কাটিং", detail: "মাইক্রোমিটার সূক্ষ্মতায় যেকোনো মাপে স্লাইসিং সুবিধা" },
          ],
        },
        "eps-sheets": {
          title: "প্রিসিশন কাট ইপিএস শিট",
          bullets: [
            { title: "কাস্টম স্লাইসিং", detail: "১০ মিমি থেকে ৫০০ মিমি পর্যন্ত যেকোনো নিখুঁত পুরুত্বে তৈরি" },
            { title: "তাপরোধী ক্ষমতা", detail: "λ = ০.০৩৩ W/m·K ফলে এসি ও বিদ্যুৎ খরচ ৩৫% পর্যন্ত সাশ্রয়" },
            { title: "পানি শোষণ করে না", detail: "ক্লোজড-সেল কাঠামোর কারণে কোনো আর্দ্রতা বা স্যাঁতসেঁতে ভাব হয় না" },
            { title: "অগ্নিনির্বাপক (FR)", detail: "ASTM E84 ক্লাস এ এবং বি১ সেলফ-এক্সটিঙ্গুইশিং গ্রেডে তৈরি" },
          ],
        },
        muriball: {
          title: "মুড়িবল (থার্মোকল বল)",
          bullets: [
            { title: "স্ক্রিনড ক্যালিব্রেশন", detail: "২ মিমি থেকে ১৪ মিমি পর্যন্ত সমান ব্যাসের ক্যালিবার" },
            { title: "গার্মেন্টস ওয়াশিং", detail: "ডেনিম ও নিটওয়্যারে কেমিক্যাল-মুক্ত বায়ো-স্টোন ওয়াশের সেরা সমাধান" },
            { title: "১০০% ভার্জিন পলিমার", detail: "ধুলাবালি ও ক্ষতিকর কেমিক্যাল মুক্ত ফুড-গ্রেড বিশুদ্ধতা" },
            { title: "বিশাল উৎপাদন ক্ষমতা", detail: "প্রতিদিন ২,০০০ কেজির বেশি উন্নত মানের ওয়াশিং বিডস সরবরাহ" },
          ],
        },
        "raw-beads": {
          title: "ভার্জিন র' ইপিএস বিডস",
          bullets: [
            { title: "পেন্টেন ব্লোয়িং এজেন্ট", detail: "৫.৫% – ৬.৫% পেন্টেন গ্যাস ধারণক্ষমতায় অভিন্ন সম্প্রসারণ" },
            { title: "মাল্টিপল সিভ গ্রেড", detail: "সূক্ষ্ম (০.৬–০.৯ মিমি) থেকে মাঝারি (১.০–১.৬ মিমি) দানা" },
            { title: "উচ্চ সম্প্রসারণ ফলন", detail: "স্ট্যান্ডার্ড স্টিম প্রি-এক্সপান্ডারে ৫০ গুণ পর্যন্ত আয়তন বৃদ্ধি" },
            { title: "এয়ারটাইট প্যাকেজিং", detail: "২৫ কেজি ব্যাগ এবং ৭৫০ কেজি বাল্ক অক্টাবিনে আন্তর্জাতিক প্যাকেজিং" },
          ],
        },
      },
      blocks: {
        dimensionsHeader: "মনোলিথিক ব্লকের স্ট্যান্ডার্ড পরিমাপ",
        dimensions: [
          { unit: "মেট্রিক", dimensions: "২০০০ × ১০০০ × ৫০০ মিমি", detail: "কারখানার মূল ছাঁচ সাইজ" },
          { unit: "ইম্পেরিয়াল", dimensions: "৭৮.৭ × ৩৯.৪ × ১৯.৭ ইঞ্চি", detail: "আর্কিটেকচারাল নকশার মান" },
          { unit: "ফিট", dimensions: "৬.৫৬ × ৩.২৮ × ১.৬৪ ফিট", detail: "সিভিল ইঞ্জিনিয়ারিং সাইট পরিমাপ" },
          { unit: "আয়তন", dimensions: "১.০০ মি³ / ব্লক", detail: "ইউনিট ওজন: ১৫ – ৩৫ কেজি / ব্লক" },
        ],
        calloutBadge: "কাস্টম সেকশনাল কাটিং",
        callout: "প্রতিটি ব্লক স্লাইসিংয়ের আগে নিখুঁত স্থায়িত্বের জন্য কিউরিং চেম্বারে প্রস্তুত করা হয়।",
        calloutSub: "কম্পিউটারাইজড মাল্টি-ওয়্যার কাটিং সিস্টেমে ±০.৫ মিমি সূক্ষ্মতায় ব্লকের প্রতিটি শিট কাটা হয়।",
        densityRangeLabel: "ডেনসিটি রেঞ্জ:",
        densityRangeVal: "১৫ – ৩৫ কেজি/মি³",
        usesHeader: "শিল্প ও জিওটেকনিক্যাল মূল ব্যবহার",
        uses: [
          "মহাসড়ক, বাঁধ ও সেতুর অ্যাপ্রোচ রোডে হালকা ভয়েড ফিলার (জিওফোম)",
          "কোল্ড স্টোরেজের মেঝে ও সীমানা দেয়ালের থার্মাল কাটঅফ ইনস্যুলেশন",
          "আর্কিটেকচারাল কর্নিশ, কলাম ও ত্রিমাত্রিক সিএনসি আর্ট মডেলিং",
          "ভারী শিল্প যন্ত্রপাতির কম্পন প্রতিরোধী অ্যাকোস্টিক ফাউন্ডেশন প্যাড",
        ],
        standardsLabel: "মান নিয়ন্ত্রণ সনদ:",
        standardsVal: "ASTM C578 এবং ISO 9001:2015",
      },
      sheets: {
        metric1Label: "পুরুত্বের সীমা",
        metric1Val: "১০ মিমি – ৫০০ মিমি",
        metric1Sub: "যেকোনো মাপে ১ মিমি ধাপে কাস্টমাইজড",
        metric2Label: "প্ল্যান পরিমাপ",
        metric2Val: "১৯৮০ × ৯৯০ মিমি",
        metric2Sub: "সম্পূর্ণ স্ট্যান্ডার্ড ৭৮ × ৩৯ ইঞ্চি সাইজ",
        metric3Label: "ডেনসিটি রেঞ্জ",
        metric3Val: "১২ – ৩৫ কেজি/মি³",
        metric3Sub: "হালকা প্যাকেজিং থেকে ভারী ভারবহন",
        metric4Label: "সারফেস ফিনিশ",
        metric4Val: "স্মুথ হট-ওয়্যার",
        metric4Sub: "মসৃণ ধার, কোনো দানা খসে পড়ে না",
        matrixHeader: "জনপ্রিয় ও স্ট্যান্ডার্ড স্লাইসিং সাইজ",
        popularBadge: "জনপ্রিয়",
        popularList: [
          { thickness: "১২ মিমি (½ ইঞ্চি)", application: "ফলস সিলিং ইনস্যুলেশন ও হালকা প্রটেক্টিভ কুশনিং", isPopular: true },
          { thickness: "২৫ মিমি (১ ইঞ্চি)", application: "আবাসিক ও বাণিজ্যিক ভবনের ছাদ এবং দেয়ালের থার্মাল শিল্ড", isPopular: true },
          { thickness: "৫০ মিমি (২ ইঞ্চি)", application: "কোল্ড স্টোরেজ দেয়াল, এইচভিএসি ডাক্ট ও চিলার ইনস্যুলেশন", isPopular: true },
          { thickness: "৭৫ মিমি (৩ ইঞ্চি)", application: "ডিপ ফ্রিজ ইনস্যুলেশন (-১৮° সে.) ও স্ট্রাকচারাল স্যান্ডউইচ প্যানেল" },
          { thickness: "১০০ মিমি (৪ ইঞ্চি)", application: "শিল্প রেফ্রিজারেশন ওয়্যারহাউস ও সাব-জিরো ব্লাস্ট চেম্বার" },
          { thickness: "কাস্টম সাইজ", application: "যেকোনো আর্কিটেকচারাল স্পেসিফিকেশনে ±০.৫ মিমি নিখুঁত কাটিং" },
        ],
        thermalHeader: "থার্মাল পারফরম্যান্স ও ফায়ার রেটিং",
        thermalText: "তাপ পরিবাহিতা λ = ০.০৩৩ W/m·K। স্ট্যান্ডার্ড কমার্শিয়াল এবং ক্লাস বি১ সেলফ-এক্সটিঙ্গুইশিং ফ্লেম রিটার্ড্যান্ট (FR) গ্রেডে প্রস্তুত।",
        permanentRValue: "স্থায়ী আর-ভ্যালু (কখনও ডেবে যায় না)",
      },
      muriball: {
        header: "গার্মেন্টস ওয়াশিং স্ক্রিনড ক্যালিবার সাইজ",
        badge: "১০০% ভার্জিন ফুড-গ্রেড ইপিএস কোর",
        grades: [
          { code: "গ্রেড এস", diameter: "৩ – ৫ মিমি", washRecipe: "এনজাইম মাইক্রো-ওয়াশ", recommendedFor: "হালকা ডেনিম, নিটওয়্যার ও সফ্ট ভিন্টেজ ওয়াশ রেসিপি", abrasionLevel: "কোমল ও সূক্ষ্ম" },
          { code: "গ্রেড এম", diameter: "৫ – ৮ মিমি", washRecipe: "মিডিয়াম স্টোন-ওয়াশ", recommendedFor: "স্ট্যান্ডার্ড জিন্স, জ্যাকেট ও ইউনিফর্ম অ্যাব্রেশন", abrasionLevel: "সুষম মাঝারি" },
          { code: "গ্রেড এল", diameter: "৮ – ১০ মিমি", washRecipe: "হেভি অ্যাব্রেশন ওয়াশ", recommendedFor: "মোটা ডেনিম টুইল ও ডিসট্রেস ইফেক্ট ওয়াশিং", abrasionLevel: "উচ্চ কনট্রাস্ট" },
          { code: "গ্রেড এক্সএল", diameter: "১০ – ১৪ মিমি", washRecipe: "স্পেশালাইজড টেক্সচার", recommendedFor: "হেভিওয়েট আউটওয়্যার, ক্যানভাস ও বায়ো-ওয়াশ", abrasionLevel: "তীব্র কার্যকরী" },
          { code: "মাইক্রো-বিড", diameter: "১.৫ – ২.৫ মিমি", washRecipe: "কুশন ও বিনব্যাগ ফিল", recommendedFor: "আরামদায়ক বিনব্যাগ, কুশন ও আর্ট সোফা ফিলিং", abrasionLevel: "নন-ওয়াশ ফিল" },
          { code: "ভার্জিন ফ্লাফ", diameter: "মিশ্রিত সিভ", washRecipe: "হালকা কংক্রিট ফিলিং", recommendedFor: "মেঝে হালকা ঢালাই ও থার্মাল গ্রাউট ফিলার", abrasionLevel: "নির্মাণ সামগ্রী" },
        ],
        packagingTitle: "প্যাকেজিং ও সরবরাহ পদ্ধতি",
        packagingFormat: "২৫ কেজি / ৫০ কেজি হেভি-ডিউটি শ্বাস-প্রশ্বাসযোগ্য ওভেন ব্যাগ",
        packagingDesc: "বাতাস চলাচলের বিশেষ ব্যাগ যা স্ট্যাটিক চার্জ প্রতিরোধ করে এবং ওয়াশিং ড্রামে দ্রুত লোডিং নিশ্চিত করে।",
        benefitsTitle: "প্রাকৃতিক পিউমিস পাথরের চেয়ে সেরা সুবিধাসমূহ",
        benefits: [
          "ইটিপি (ETP) ফিল্টারে কোনো কাদা বা ক্ষতিকর অবশেষ জমতে দেয় না",
          "কাপড়ের সুতা না ভেঙে মসৃণ ও দীর্ঘস্থায়ী ওয়াশ ইফেক্ট দেয়",
          "প্রচলিত পাথরের তুলনায় তিনগুণ বেশি সময় ধরে পুনরায় ব্যবহারযোগ্য",
          "রাসায়নিকভাবে ১০০% নিষ্ক্রিয়—কাপড়ের রং বা পিএইচ (pH) পরিবর্তন করে না",
        ],
      },
      rawBeads: {
        tableHeader: "ভার্জিন পার্টিকেল গ্রেড ও সম্প্রসারণ পরিমাপ",
        thGrade: "গ্রেড কোড",
        thSize: "দানার সাইজ",
        thDensity: "প্রসারিত ডেনসিটি",
        thExpansion: "সম্প্রসারণ অনুপাত",
        thApp: "প্রধান ব্যবহার",
        grades: [
          { code: "EPS-101", particleSize: "০.৬ – ০.৯ মিমি", expandedDensity: "১৮ – ৩৫ কেজি/মি³", expansionFactor: "৪০ – ৪৫ গুণ", primaryApplications: "উচ্চ ডেনসিটির ব্লক, থিন-ওয়াল কাপ ও ইলেকট্রনিক্স প্যাকেজিং" },
          { code: "EPS-201", particleSize: "০.৮ – ১.২ মিমি", expandedDensity: "১৪ – ২৫ কেজি/মি³", expansionFactor: "৪৫ – ৫০ গুণ", primaryApplications: "স্ট্যান্ডার্ড থার্মাল শিট, কোল্ড বক্স ও সিলিং প্যানেল" },
          { code: "EPS-301", particleSize: "১.০ – ১.৬ মিমি", expandedDensity: "১০ – ১৮ কেজি/মি³", expansionFactor: "৫০ – ৫৫ গুণ", primaryApplications: "হালকা প্যাকেজিং, ভয়েড ফিলিং ও জিওফোম কাঠামো" },
          { code: "EPS-FR", particleSize: "০.৮ – ১.২ মিমি", expandedDensity: "১৫ – ৩০ কেজি/মি³", expansionFactor: "৪২ – ৪৮ গুণ", primaryApplications: "অগ্নিনিরোধক (FR) আর্কিটেকচারাল বিল্ডিং ইনস্যুলেশন বোর্ড" },
        ],
        packagingTitle: "শিল্পমানের প্যাকেজিং টিয়ার",
        packagingTiers: [
          "২৫ কেজি এয়ারটাইট মাল্টি-লেয়ার ক্রাফট পেপার ব্যাগ",
          "৭৫০ কেজি হেভি-ডিউটি ইন্ডাস্ট্রিয়াল অক্টাবিন (আর্দ্রতা প্রতিরোধী)",
          "প্রকল্পের প্রয়োজনে সরাসরি কন্টেইনার লোডে দেশব্যাপী সরবরাহ",
        ],
        blowingAgentTitle: "ব্লোয়িং এজেন্ট ও সংরক্ষণ নির্দেশিকা",
        blowingAgentDesc: "৫.৫% – ৬.৫% পেন্টেন গ্যাস যুক্ত। বাষ্পে প্রি-এক্সপানশনের আদর্শ তাপমাত্রা: ৯৮° সে. – ১০২° সে.।",
        shelfLifeLabel: "সংরক্ষণ মেয়াদ:",
        shelfLifeVal: "২০° সে.-এর নিচে শুষ্ক পরিবেশে ৬ মাস",
      },
    },
    projects: {
      sectionTag: "জাতীয় মেগা অবকাঠামো ও শিল্প সরবরাহ",
      sectionTitle: "ল্যান্ডমার্ক মেগা প্রকল্পসমূহ",
      sectionSubtitle:
        "বাংলাদেশের জাতীয় মেগা অবকাঠামো থেকে শুরু করে দেশজুড়ে নির্ভরযোগ্য বাণিজ্যিক সরবরাহ নেটওয়ার্ক।",
      statusNational: "জাতীয় প্রকল্প",
      supplyLabel: "সরবরাহকৃত উপাদান",
      inspectPhoto: "হাই-রেজোলিউশন সাইট ছবি দেখতে যেকোনো কার্ডে ক্লিক করুন",
      commercialTag: "বাণিজ্যিক পদচিহ্ন",
      commercialTitle: "দেশব্যাপী বাণিজ্যিক ও শিল্প প্রকল্পসমূহ",
      commercialSubtitle:
        "বাংলাদেশের বিভিন্ন অঞ্চলে সার্টিফাইড থার্মাল ইনস্যুলেশন, কোল্ড-চেইন এনভেলপ এবং স্ট্রাকচারাল ইপিএস সরবরাহ।",
      clickToViewHint: "হাই-রেজোলিউশন ছবি দেখতে যেকোনো কার্ডে ক্লিক করুন",
      megaProjects: {
        rooppur: {
          title: "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র",
          supplyTag: "❄ রুফ কুলিং ইনস্যুলেশন",
          location: "ঈশ্বরদী, পাবনা",
          description: "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্রের জন্য নির্ভুলভাবে তৈরি থার্মাল ইনস্যুলেশন ও স্ট্রাকচারাল এক্সপ্যানশন সলিউশন সরবরাহ।",
        },
        rampal: {
          title: "রামপাল বিদ্যুৎ কেন্দ্র",
          supplyTag: "⚡ থার্মাল কুলিং স্ল্যাব",
          location: "রামপাল, বাগেরহাট",
          description: "রামপাল মৈত্রী সুপার থার্মাল পাওয়ার প্ল্যান্টের কুলিং সিস্টেমের জন্য তাপপ্রতিরোধী বিশেষ স্ল্যাব সরবরাহ।",
        },
        padma: {
          title: "পদ্মা বহুমুখী সেতু",
          supplyTag: "🌉 ব্রিজ এক্সপ্যানশন জয়েন্ট",
          location: "মাওয়া – জাজিরা",
          description: "পদ্মা সেতুর ভায়াডাক্ট ও অ্যাপ্রোচ রোডের স্ট্রাকচারাল এক্সপ্যানশন জয়েন্ট ও হালকা ভয়েড ফিলার সরবরাহ।",
        },
      },
      commercialProjects: {
        coldstorage: {
          title: "কৃষি ও হিমাগার প্রকল্পসমূহ",
          tag: "❄ আলু ও বীজ সংরক্ষণ হিমাগার",
          location: "📍 মুন্সীগঞ্জ ও রাজশাহী",
          description: "কৃষিপণ্য ও বীজ হিমাগারে জিরো ডিগ্রির নিচে সার্বক্ষণিক তাপমাত্রা ধরে রাখতে কার্যকর ইনস্যুলেশন স্ল্যাব।",
        },
        pharma: {
          title: "ফার্মাসিউটিক্যাল ক্লিনরুম ইনস্যুলেশন",
          tag: "🧪 এইচভিএসি থার্মাল ব্যারিয়ার",
          location: "📍 গাজীপুর শিল্পাঞ্চল",
          description: "ঔষধ কারখানার জিএমপি স্ট্যান্ডার্ড ক্লিনরুম ও এয়ারটাইট ডাক্ট ব্যবস্থার জন্য বিশেষ থার্মাল কোর।",
        },
        "commercial-roof": {
          title: "বাণিজ্যিক ভবনের ছাদ ইনস্যুলেশন",
          tag: "🏢 আর্কিটেকচারাল এনভেলপ",
          location: "📍 ঢাকা মেট্রোপলিটন",
          description: "উচ্চ ডেনসিটির ইপিএস ছাদ ইনস্যুলেশন যা সূর্যের তীব্র তাপ শোষণ কমিয়ে এসির বিদ্যুৎ খরচ ব্যাপক হ্রাস করে।",
        },
        "denim-plant": {
          title: "কমার্শিয়াল ডেনিম ওয়াশিং প্ল্যান্ট",
          tag: "👖 টেক্সটাইল ওয়াশিং লাইন",
          location: "📍 নারায়ণগঞ্জ ও সাভার",
          description: "শীর্ষস্থানীয় রপ্তানিমুখী গার্মেন্টস ওয়াশিং কারখানায় প্রতিদিন ২,০০০+ কেজি থার্মোকল বিডস (মুড়িবল) সরবরাহ।",
        },
      },
    },
    industry: {
      sectionTitle: "যেসব শিল্পে আমাদের ব্যবহার",
      sectionSubtitle:
        "নির্মাণ, কোল্ড স্টোরেজ, গার্মেন্টস ওয়াশিং, ওষুধ ও প্যাকেজিং শিল্পে নির্ভরযোগ্য ও কার্যকর সমাধান।",
      sectors: {
        construction: {
          tabLabel: "নির্মাণ ও অবকাঠামো",
          title: "নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং",
          highlights: [
            "হালকা ও টেকসই জিওফোম ব্লক যা কাঠামোগত অতিরিক্ত ওজন ব্যাপকভাবে কমায়।",
            "ছাদ, বাইরের দেয়াল ও সংযোগস্থলের জন্য উচ্চ ডেনসিটির তাপনিরোধক ব্যারিয়ার।",
            "আর্দ্রতা-অভেদ্য কাঠামো যা স্যাঁতসেঁতে ভাব ও রডের মরিচা পড়া শতভাগ রোধ করে।",
          ],
        },
        "cold-storage": {
          tabLabel: "কোল্ড স্টোরেজ ও কৃষি",
          title: "কোল্ড স্টোরেজ ও কৃষিপণ্য সংরক্ষণ",
          highlights: [
            "উচ্চ ডেনসিটির ইন্টারলকিং স্ল্যাব যা দেয়ালের সংযোগ দিয়ে তাপ ঢুকতে দেয় না।",
            "মেঝের নিচে সাব-জিরো সুরক্ষা যা মাটির ফ্রস্ট-হিভ ক্ষতি সম্পূর্ণ প্রতিরোধ করে।",
            "অতি-স্বল্প তাপ পরিবাহিতা (λ = ০.০৩৩ W/m·K) যা বিদ্যুৎ বিল অনেক কমিয়ে আনে।",
          ],
        },
        garments: {
          tabLabel: "গার্মেন্টস ও টেক্সটাইল",
          title: "গার্মেন্টস ও কমার্শিয়াল ওয়াশিং",
          highlights: [
            "সঠিক মাপের দানাদার গোলক যা ডেনিম ফ্যাব্রিকে নিখুঁত ও মসৃণ শেড তৈরি করে।",
            "১০০% ভার্জিন পলিমার হওয়ায় কাপড়ে কোনো দাগ বা ক্ষতিকর রঙের ছোপ পড়ে না।",
            "গরম বাষ্প ও পানিতে টেকসই যা একটানা একাধিক ওয়াশ সাইকেলে অনায়াসে চলে।",
          ],
        },
        pharma: {
          tabLabel: "ফার্মাসিউটিক্যালস",
          title: "ফার্মাসিউটিক্যালস ও হেলথকেয়ার কোল্ড-চেইন",
          highlights: [
            "সংবেদনশীল জীবনরক্ষাকারী ওষুধের জন্য ২° থেকে ৮° সে. সার্বক্ষণিক তাপমাত্রা নিশ্চিতকরণ।",
            "জিএমপি-অনুমোদিত স্যানিটারি ইনস্যুলেশন কোর যা ব্যাকটেরিয়া ও ছত্রাক প্রতিরোধী।",
            "উচ্চ শক-শোষণ ক্ষমতা যা কাঁচের অ্যাম্পুল ও ডায়াগনস্টিক ভায়াল নিরাপদে রাখে।",
          ],
        },
        packaging: {
          tabLabel: "প্যাকেজিং ও ইলেকট্রনিক্স",
          title: "ইলেকট্রনিক্স, সিরামিক ও প্রটেক্টিভ প্যাকেজিং",
          highlights: [
            "পণ্যের সঠিক ছাঁচে তৈরি মাল্টি-অ্যাক্সিস কর্নার গার্ড ও প্রোটেক্টিভ ক্যাপ।",
            "পরিবহনে ঝাঁকুনিজনিত আঘাত থেকে কাঁচ ও সিরামিক সামগ্রীর ভাঙন প্রতিরোধ।",
            "অত্যন্ত হালকা ওজনের কারণে দেশীয় ও আন্তর্জাতিক আকাশপথে পরিবহন খরচ সাশ্রয়।",
          ],
        },
        creative: {
          tabLabel: "ক্রিয়েটিভ ও ইভেন্টস",
          title: "ইভেন্ট ম্যানেজমেন্ট, প্রপস ও লাক্সারি ফার্নিচার",
          highlights: [
            "৫-অ্যাক্সিস সিএনসি হট-ওয়্যার রাউটার কার্ভিং ও খোদাইয়ের জন্য উপযোগী হাই-ডেনসিটি ব্লক।",
            "স্টেজ ব্যাকড্রপ, এক্সপো ডিসপ্লে, থ্রিডি বর্ণমালা ও আর্কিটেকচারাল ডেকোর।",
            "ফার্নিচার, ম্যাট্রেস ও লাক্সারি সিটিংয়ে অত্যন্ত হালকা ও টেকসই কোর কুশনিং।",
          ],
        },
        "creative-arts": {
          tabLabel: "ক্রিয়েটিভ ও ইভেন্টস",
          title: "ইভেন্ট ম্যানেজমেন্ট, প্রপস ও লাক্সারি ফার্নিচার",
          highlights: [
            "৫-অ্যাক্সিস সিএনসি হট-ওয়্যার রাউটার কার্ভিং ও খোদাইয়ের জন্য উপযোগী হাই-ডেনসিটি ব্লক।",
            "স্টেজ ব্যাকড্রপ, এক্সপো ডিসপ্লে, থ্রিডি বর্ণমালা ও আর্কিটেকচারাল ডেকোর।",
            "ফার্নিচার, ম্যাট্রেস ও লাক্সারি সিটিংয়ে অত্যন্ত হালকা ও টেকসই কোর কুশনিং।",
          ],
        },
      },
    },
    team: {
      sectionTitle: "আমাদের পরিচালনা পর্ষদ ও নেতৃত্ব",
      sectionSubtitle:
        "শিল্প উৎপাদন, ইঞ্জিনিয়ারিং উৎকর্ষ ও দেশব্যাপী সফল ব্যবসায়িক পরিচালনার দীর্ঘ অভিজ্ঞতায় সমৃদ্ধ আমাদের শীর্ষ নেতৃত্ব।",
      experienceLabel: "অভিজ্ঞতা:",
      members: {
        "md-rashed": {
          name: "মো: রাশেদ",
          designation: "ব্যবস্থাপনা পরিচালক",
          experience: "১৫+ বছর",
          bio: "ব্যবসায়িক দূরদর্শিতা, উৎপাদন সম্প্রসারণ ও কারখানা ব্যবস্থাপনায় দক্ষ নেতৃত্ব। বাংলাদেশের শিল্প খাতে সাশ্রয়ী মূল্যে সর্বোচ্চ গুণগত মান ও দীর্ঘমেয়াদী অংশীদারিত্ব নিশ্চিতকরণে নিবেদিতপ্রাণ।",
        },
        "rabeya-naznin": {
          name: "রাবেয়া নাজনীন",
          designation: "উপ-ব্যবস্থাপনা পরিচালক",
          experience: "১২+ বছর",
          bio: "দেশব্যাপী লজিস্টিক সরবরাহ ব্যবস্থা, কাঁচামালের সঠিক মজুদ ও উৎপাদন লাইনের সার্বিক তদারকি। সময়মতো পণ্য পৌঁছে দেওয়া এবং কঠোর এএসটিএম (ASTM) মান বজায় রাখায় নিবেদিত।",
        },
        "mahmudul-hasan": {
          name: "মাহমুদুল হাসান",
          designation: "ভাইস চেয়ারম্যান",
          experience: "১৮+ বছর",
          bio: "কর্পোরেট অর্থায়ন, দীর্ঘমেয়াদী বিনিয়োগ পরিকল্পনা ও সুশাসনের রূপকার। দেশজুড়ে ম্যাক্স থার্মালের আধুনিক কারখানা অবকাঠামো সম্প্রসারণে মূল দিকনির্দেশনা প্রদানকারী।",
        },
        "kazi-sahid": {
          name: "কাজী সাহিদ",
          designation: "পরিচালক / উপদেষ্টা পর্ষদ",
          experience: "২০+ বছর",
          bio: "জাতীয় মেগা প্রকল্পের ইনস্যুলেশন নকশা, কারিগরি সমাধান ও জিওটেকনিক্যাল জিওফোম ইঞ্জিনিয়ারিংয়ের ক্ষেত্রে উচ্চপর্যায়ের কারিগরি উপদেষ্টা ও পরিকল্পনাবিদ।",
        },
      },
    },
    blog: {
      sectionTitle: "ইনস্যুলেশন সম্পর্কে জানুন",
      sectionSubtitle:
        "ইপিএস প্রযুক্তি থেকে শুরু করে দৈনন্দিন সমস্যা সমাধান—আধুনিক ইনস্যুলেশন কীভাবে জীবনযাত্রাকে স্বস্তিময় ও কারখানাকে কার্যকর করে তুলছে।",
      readStory: "গল্পটি পড়ুন",
      closeDialog: "বন্ধ করুন",
      dialogueEnLabel: "ইংরেজি সংলাপ",
      dialogueBnLabel: "বাংলা সংলাপ",
      explanationLabel: "কারিগরি ব্যাখ্যা",
      keyTakeawayLabel: "মূল শিক্ষা",
      panelPrefix: "দৃশ্য",
      stories: {
        "story-of-scope": {
          title: "স্কোপের গল্প — ২০৫০ সালের খুদে রোবট",
          typeLabel: "ইলাস্ট্রেটেড কমিক",
          excerpt:
            "২০৫০ সাল থেকে আসা খুদে বুদ্ধিমান রোবট স্কোপ সাধারণ মানুষকে শেখাচ্ছে আধুনিক তাপ ও শব্দরোধী ইনস্যুলেশনের জাদুকরী বিজ্ঞান।",
          readTime: "৩ মিনিট পাঠ",
          panels: [
            {
              title: "হার্ডওয়্যারের বাজারে অচেনা এক রহস্য",
              dialogueBn:
                "স্কোপ গিয়েছিল ইঞ্জিনিয়ারের বলা Styrofoam আনতে। দোকানদার বলল, 'এটা আবার কি জিনিস?' স্কোপ হেসে বলল, 'আসলে Styrofoam, Cork Sheet, Thermocol—সবই এক জিনিস: EPS Insulation!'",
              dialogueEn:
                "Scope visited the local hardware hub asking for 'Styrofoam'. The confused shopkeeper asked, 'What is that?' Scope chuckled: 'Styrofoam, Cork Sheet, and Thermocol are simply different commercial names for the same wonder material: Expanded Polystyrene (EPS)!'",
              explanation:
                "ইপিএস (Expanded Polystyrene)-এর ৯৮ ভাগ অংশই হলো কোটি কোটি ক্ষুদ্র কোষে আটকে থাকা বাতাস। এই বিশেষ গঠনের কারণেই এটি প্রকৌশল জগতের অন্যতম হালকা এবং কার্যকর তাপ ও শব্দ নিরোধক।",
              keyTakeaway: "স্টাইরোফোম = কর্ক শিট = থার্মোকল = আধুনিক উচ্চমানের ইপিএস ইনস্যুলেশন।",
            },
            {
              title: "বাতাস কীভাবে ১০০% তাপ আটকে দেয়?",
              dialogueBn:
                "'বাতাস যখন ক্ষুদ্র কোটি কোটি কোষে আটকে থাকে, তখন তাপ প্রবাহিত হতে পারে না!'—স্কোপ চকবোর্ডে এঁকে সবাইকে বুঝিয়ে দিল।",
              dialogueEn:
                "'When air is trapped inside microscopic sealed beads, heat convection completely stalls!' Scope demonstrated on his holographic classroom display.",
              explanation:
                "অতি-স্বল্প তাপ পরিবাহিতা (λ = ০.০৩৩ W/m·K) সম্পন্ন ম্যাক্স থার্মাল ইপিএস শিট সূর্যের তীব্র বিকিরণজনিত তাপ ছাদ ও দেয়াল ভেদ করে ভেতরে প্রবেশ করতে দেয় না।",
              keyTakeaway: "তাপ পরিচলন আটকে ঘরের ভেতরের তাপমাত্রা দ্রুত কমিয়ে দেয়।",
            },
          ],
        },
        "hot-roof-solution": {
          title: "উপরের তলা কেন ফুটন্ত তাওয়ার মতো গরম হয়?",
          typeLabel: "আবাসিক গাইড",
          excerpt:
            "বিল্ডিংয়ের সর্বোচ্চ তলার বাসিন্দারা কেন অসহ্য গরমে ভোগেন এবং সামান্য ইপিএস ছাদ শিট কীভাবে ঘরের তাপমাত্রা ৬° থেকে ৮° কমিয়ে আনে?",
          readTime: "৪ মিনিট পাঠ",
          panels: [
            {
              title: "কংক্রিট ছাদ যখন তাপের আধার",
              dialogueBn:
                "'ভাই, সারাদিন রোদ খেয়ে ছাদ তো ফুটন্ত তাওয়া হয়ে যায়! রাত ১২টাতেও সিলিং থেকে আগুন ঝরে!'—বাড়িওয়ালার মাথায় হাত।",
              dialogueEn:
                "'Our rooftop absorbs heat all day like an oven! Even at midnight, heat radiates downward into our bedroom!' exclaimed the frustrated top-floor homeowner.",
              explanation:
                "সাধারণ কংক্রিটের ছাদ সারাদিনের সূর্যের তাপ শোষণ করে ধরে রাখে এবং রাতভর নিচের রুমগুলোতে ইনফ্রারেড তাপ ছড়াতে থাকে। ফলে ঘর সহজে ঠান্ডা হয় না।",
              keyTakeaway: "ইনস্যুলেশন ছাড়া কংক্রিট ছাদ নিজেই একটি দীর্ঘস্থায়ী হিটারে পরিণত হয়।",
            },
            {
              title: "ম্যাক্স থার্মাল শিল্ডের সহজ সমাধান",
              dialogueBn:
                "'ছাদের ওপর শুধু ২৫ মিমি বা ৫০ মিমি ম্যাক্স থার্মাল ইপিএস শিট আর হালকা প্রটেকশন দিলেই ঘরের তাপমাত্রা ৬° থেকে ৮° সে. কমে যায়!'",
              dialogueEn:
                "'Installing a 25mm or 50mm Max Thermal EPS sheet on the roof slab creates an impassable thermal shield, dropping interior temperatures by 6°C to 8°C instantly!'",
              explanation:
                "ছাদে ইপিএস ইনস্যুলেশন বসানো হলে সূর্য ও কংক্রিটের মাঝে একটি অভেদ্য প্রাচীর তৈরি হয়, যা গরমের মাসগুলোতে এসির বিদ্যুৎ খরচ ৩৫% পর্যন্ত কমিয়ে আনে।",
              keyTakeaway: "বিদ্যুৎ বিল হাজার হাজার টাকা বাঁচান এবং সারা বছর ঘর ঠান্ডা রাখুন।",
            },
          ],
        },
        "fish-export-secret": {
          title: "তাজা মাছ রপ্তানিতে ৩৬ ঘণ্টার বরফ কবচ",
          typeLabel: "কোল্ড-চেইন রহস্য",
          excerpt:
            "উপকূলীয় চিংড়ি ও ইলিশ মাছ বিদ্যুৎচালিত রেফ্রিজারেশন ছাড়াই কীভাবে ৫০০ কিলোমিটার হাইওয়ে পাড়ি দিয়েও সম্পূর্ণ টাটকা থাকে?",
          readTime: "৩ মিনিট পাঠ",
          panels: [
            {
              title: "৫০০ কিলোমিটার পথের চ্যালেঞ্জ",
              dialogueBn:
                "'কক্সবাজার থেকে মাছ ঢাকায় পৌঁছাতে ১২ ঘণ্টা ট্রাফিক জ্যাম! বরফ গলে গেলে সব মাছ নষ্ট!'—রপ্তানিকারকের চোখে দুশ্চিন্তা।",
              dialogueEn:
                "'Transporting premium Hilsa and shrimp 500km through highway delays without refrigeration causes ice to melt and catch to spoil!' worried the sea export team.",
              explanation:
                "সাধারণ কাঠের বাক্স বা পাতলা পাত্র থেকে দ্রুত ঠান্ডা বাতাস বেরিয়ে যায় এবং বাইরের ৩৫°+ গরমে বরফ কয়েক ঘণ্টাতেই পানি হয়ে মাছ নষ্ট করে দেয়।",
              keyTakeaway: "পচনশীল পণ্য পরিবহনে সম্পূর্ণ থার্মাল-ব্রিজ মুক্ত প্যাকিং আবশ্যক।",
            },
            {
              title: "মোল্ডেড ইপিএস বক্সে ৩৬ ঘণ্টা বরফ অটুট",
              dialogueBn:
                "'ম্যাক্স থার্মালের মোল্ডেড ইপিএস বক্সে আইস প্যাকসহ রাখলে ৩৬ ঘণ্টাতেও বরফ গলে না! মাছ পৌঁছায় সাগর থেকে সদ্য তোলার মতো তাজা!'",
              dialogueEn:
                "'With Max Thermal high-density molded EPS cold boxes, ice remains solid for over 36 hours! The catch arrives fresh as the moment it left the ocean.'",
              explanation:
                "ম্যাক্স থার্মাল হাই-ডেনসিটি মোল্ডেড বক্সে থাকা বাতাস বাইরের তাপ ঢুকতে দেয় না এবং লক-ফিট ঢাকনা ভেতরের শূন্য ডিগ্রি তাপমাত্রা ধরে রাখে।",
              keyTakeaway: "ব্যয়বহুল রেফ্রিজারেটেড গাড়ি ছাড়াই নিশ্চিন্ত কোল্ড-চেইন সমাধান।",
            },
          ],
        },
        "silence-generators": {
          title: "কংক্রিটের শব্দ দানবকে শান্ত করার উপায়",
          typeLabel: "অ্যাকোস্টিক সলিউশন",
          excerpt:
            "শিল্প কারখানার ভারী ডিজেল জেনারেটর থেকে আবাসিক ভবনের কোলাহল: কীভাবে ইপিএস কম্পন ও মাত্রাতিরিক্ত ডেসিবেল শব্দ দূর করে?",
          readTime: "৪ মিনিট পাঠ",
          panels: [
            {
              title: "কারখানার তীব্র শব্দ ও কম্পনের যন্ত্রণা",
              dialogueBn:
                "'জেনারেটরের বিকট শব্দ আর মেঝে কাঁপানো কম্পনে কারখানার অফিসরুমে কোনো কাজই করা যাচ্ছিল না!'",
              dialogueEn:
                "'The deafening drone and floor vibrations from heavy diesel generators made focus impossible in the adjoining factory management offices.'",
              explanation:
                "শব্দ কেবল বাতাসের মাধ্যমেই নয়, কংক্রিটের মেঝে ও দেয়ালের মধ্য দিয়ে কম্পন তরঙ্গ হিসেবে ছড়িয়ে পড়ে পুরো ভবনে বিকট আওয়াজ সৃষ্টি করে।",
              keyTakeaway: "কংক্রিটের কাঠামোগত কম্পন বাতাসের চেয়ে চারগুণ দ্রুত শব্দ ছড়িয়ে দেয়।",
            },
            {
              title: "অ্যাকোস্টিক স্যান্ডউইচ দেয়ালে শব্দের নীরবতা",
              dialogueBn:
                "'মেঝে ও দেয়ালের খাঁজে ম্যাক্স থার্মাল শিট বসাতেই কম্পন শুষে নিল! শব্দ কমে এল সহনীয় শান্ত পর্যায়ে!'",
              dialogueEn:
                "'Installing Max Thermal EPS isolation pads beneath equipment and inside gypsum partition walls immediately decoupled structural vibration, reducing noise by up to 28 dB.'",
              explanation:
                "ম্যাক্স থার্মাল শিট যান্ত্রিক কম্পন বিচ্ছিন্ন করে এবং জিপসাম দেয়ালের ভেতরে শব্দ শোষণ করে প্রায় ২৮ ডেসিবেল পর্যন্ত কোলাহল হ্রাস করে।",
              keyTakeaway: "শব্দ তরঙ্গ বিচ্ছিন্ন করে কারখানা ও ঘরে গড়ে তুলুন শান্ত পরিবেশ।",
            },
          ],
        },
        "soundproofing-noise": {
          title: "শব্দ নিরোধক সমাধান: পাশের বাসার ডিজে পার্টি ও কোলাহল",
          typeLabel: "অ্যাকোস্টিক কমিক",
          excerpt:
            "বাইরের তীব্র শব্দ ও কম্পন কেন সহ্য করবেন? জানুন কীভাবে ইপিএস অ্যাকোস্টিক শিট বেডরুমকে শান্ত ও নীরব রাখে।",
          readTime: "৩ মিনিট পাঠ",
          panels: [
            {
              title: "মধ্যরাতের বিকট সাউন্ডের যন্ত্রণা",
              dialogueBn:
                "পাশের ঘরে বা রাস্তায় তীব্র ডিজে সাউন্ড? সাধারণ ইটের দেয়াল দিয়ে লো-ফ্রিকোয়েন্সি শব্দ ও ভাইব্রেশন সরাসরি ঘরে ঢুকে পড়ে—ঘুমানো অসম্ভব!",
              dialogueEn:
                "Loud party bass vibrations and highway traffic rumble penetrate right through conventional brick walls, turning peaceful bedtime into sleepless misery!",
              explanation:
                "শব্দ তরঙ্গ কঠিন কাঠামোর ভেতর দিয়ে যান্ত্রিক কম্পন হিসেবে ছড়িয়ে পড়ে। সাধারণ দেয়াল কোনো বাধা ছাড়া শব্দকে আরও বাড়িয়ে দেয়।",
              keyTakeaway: "সলিড দেয়ালে অ্যাকোস্টিক ড্যাম্পিং না থাকলে তা শব্দের পরিবাহক হিসেবে কাজ করে।",
            },
            {
              title: "ইপিএস কোর ক্যাভিটিতে সাউন্ড ডিকাপলিং",
              dialogueBn:
                "দেয়ালের ভেতরে বা ফলস সিলিংয়ে ডেনসিটি-ক্যালিব্রেটেড ইপিএস শিট সাউন্ডের ভাইব্রেশন শোষণ করে রুমকে করে তোলে শান্ত ও কোলাহলমুক্ত।",
              dialogueEn:
                "Dense Max Thermal EPS boards installed inside double-stud drywall cavities absorb mechanical vibrations and break acoustic bridges, restoring pin-drop tranquility.",
              explanation:
                "পার্টিশন দেয়ালে ইপিএস ব্যবহারের ফলে সাউন্ড ট্রান্সমিশন ক্লাস (STC) বহুগুণ বাড়ে, যা বাতাসের ও লো-ফ্রিকোয়েন্সি বাসের কম্পন সম্পূর্ণ শোষণ করে।",
              keyTakeaway: "বাইরের যেকোনো পার্টির বিকট শব্দের মাঝেও ঘরে উপভোগ করুন গভীর নিরবচ্ছিন্ন ঘুম।",
            },
          ],
        },
        "fish-export-preservation": {
          title: "তাজা মাছ রপ্তানিতে ইনস্যুলেটেড বক্সের ভূমিকা",
          typeLabel: "ইন্ডাস্ট্রিয়াল কেস স্টাডি",
          excerpt:
            "উপকূলীয় মৎস্য বন্দর থেকে আন্তর্জাতিক বিশ্ববাজারে মাছের টাটকা মান অক্ষুণ্ন রাখার উপায়।",
          readTime: "৪ মিনিট পাঠ",
          panels: [
            {
              title: "উপকূলীয় কোল্ড-চেইনের বড় চ্যালেঞ্জ",
              dialogueBn:
                "কক্সবাজার ও খুলনা থেকে আন্তর্জাতিক বাজারে ইলিশ, চিংড়ি ও রুই পাঠানোর সময় সাধারণ বাক্সে বরফ গলে মাছের মান নষ্ট হয়ে যায়।",
              dialogueEn:
                "Transporting premium Hilsa, Black Tiger shrimp, and Rui from coastal fishing ports to international airports requires zero temperature fluctuation.",
              explanation:
                "ইনস্যুলেশনবিহীন বা সাধারণ বাক্সে সূর্যের তীব্র তাপে বরফ দ্রুত গলে যায়, ফলে মূল্যবান রপ্তানি পণ্যের গুণগত মান নষ্ট হয়ে যায়।",
              keyTakeaway: "তাপমাত্রা সামান্য বাড়লেও আন্তর্জাতিক বাজারে পণ্যের মান ও দাম ব্যাপকভাবে কমে যায়।",
            },
            {
              title: "ম্যাক্স থার্মাল মোল্ডেড ইপিএস এক্সপোর্ট বক্স",
              dialogueBn:
                "ম্যাক্স থার্মালের এয়ারটাইট মোল্ডেড ইপিএস বক্সে বরফ গলে না, ৪°-র নিচে তাপমাত্রা থাকে ৪৮ ঘণ্টার বেশি—নিশ্চিত করে প্রিমিয়াম এক্সপোর্ট কোয়ালিটি।",
              dialogueEn:
                "Max Thermal high-density molded EPS boxes preserve ice and keep internal temperatures safely below 4°C for over 48 hours throughout long-haul transit.",
              explanation:
                "লক-ফিট মোল্ডেড ইপিএস বক্স তাপের কোনো লিকেজ হতে দেয় না, ফলে দূরপাল্লার যাতায়াতেও বরফ অটুট থাকে এবং মাছ সদ্য আহরিত অবস্থায় থাকে।",
              keyTakeaway: "৪৮ ঘণ্টার বেশি তাপমাত্রা নিয়ন্ত্রণ নিশ্চিত করে শতভাগ অপচয়মুক্ত নিরাপদ রপ্তানি।",
            },
          ],
        },
      },
    },
    faq: {
      sectionTitle: "সাধারণ জিজ্ঞাসা (FAQ)",
      sectionSubtitle:
        "আমাদের কারখানা থেকে সরাসরি ইপিএস পণ্য, কাস্টম মাপ, ডেলিভারি ও যন্ত্রপাতি সম্পর্কিত নিয়মিত প্রশ্নোত্তর।",
      items: {
        export: {
          question: "আপনারা কি বিদেশে রপ্তানি করেন?",
          answer:
            "হ্যাঁ। বাংলাদেশের জাতীয় অবকাঠামো, বাণিজ্যিক ভবন ও গার্মেন্টস শিল্পে নিয়মিত সরবরাহের পাশাপাশি আমরা আন্তর্জাতিক মানসম্পন্ন সার্টিফাইড প্যাকেজিং ও ইনস্যুলেশন আঞ্চলিক রপ্তানি এবং গ্লোবাল চেইনে সরবরাহ করে থাকি।",
        },
        "custom-cutting": {
          question: "আপনারা কি আমার পছন্দের নিখুঁত মাপে শিট কেটে দিতে পারবেন?",
          answer:
            "অবশ্যই। আমাদের স্বয়ংক্রিয় কম্পিউটারাইজড সিএনসি হট-ওয়্যার কাটিং সিস্টেমের সাহায্যে যেকোনো শিটের পুরুত্ব ১০ মিমি থেকে ৫০০ মিমি পর্যন্ত ±০.৫ মিমি নিখুঁত মাপে স্লাইস করে দিতে পারি।",
        },
        "denim-ball-size": {
          question: "ডেনিম ওয়াশিংয়ের জন্য কোন সাইজের থার্মোকল বল সেরা?",
          answer:
            "স্ট্যান্ডার্ড জিন্স ও ডেনিম অ্যাব্রেশনের জন্য গ্রেড এল (৮–১০ মিমি) এবং গ্রেড এক্সএল (১২–১৪ মিমি) সর্বাধিক জনপ্রিয়। হালকা বা সংবেদনশীল কাপড়ের জন্য গ্রেড এস (৩–৫ মিমি) বা এম (৫–৮ মিমি) সুতা অক্ষত রেখে সুন্দর শেড দেয়।",
        },
        "raw-beads-vs-muriball": {
          question: "র' বিডস এবং মুড়িবল বল কি একই পণ্য?",
          answer:
            "না। র' ইপিএস বিডস হলো অপ্রসারিত পলিস্টাইরিন দানা যাতে পেন্টেন গ্যাস থাকে—এটি নিজস্ব প্রি-এক্সপান্ডার থাকা ফ্যাক্টরিগুলোর কাঁচামাল। আর মুড়িবল হলো সম্পূর্ণ প্রসারিত, চালিত ও প্রক্রিয়াজাত প্রস্তুতকৃত বল যা সরাসরি ওয়াশিং বা কুশনে ব্যবহারযোগ্য।",
        },
        "turnkey-machinery": {
          question: "আপনারা কি ইপিএস তৈরির যন্ত্রপাতি ও টার্নকি প্ল্যান্ট সাপোর্ট দেন?",
          answer:
            "হ্যাঁ। নতুন ইপিএস ফ্যাক্টরি স্থাপন, স্বয়ংক্রিয় ব্লক কাটিং মেশিন, প্রি-এক্সপান্ডার ও বয়লার স্টিম ডিস্ট্রিবিউশন সিস্টেমে আমরা সম্পূর্ণ ইঞ্জিনিয়ারিং পরামর্শ, ইন্সটলেশন ও প্রযুক্তিগত সহায়তা প্রদান করি।",
        },
      },
    },
    quote: {
      badge: "কারখানা থেকে সরাসরি পাইকারি সরবরাহ ও কাস্টম সাইজিং",
      title: "কাস্টম সাইজিং ও উপাদানের কোটেশন পান সরাসরি কারখানা থেকে",
      description:
        "বাল্ক পাইকারি মূল্য, বিশেষ সিএনসি প্রোফাইল কাটিং, প্রজেক্ট থার্মাল ক্যালকুলেশন বা সার্টিফাইড টেস্ট স্যাম্পলের জন্য সরাসরি আমাদের অভিজ্ঞ ইঞ্জিনিয়ারিং দলের সাথে যোগাযোগ করুন।",
      button: "তাৎক্ষণিক কোটেশন অনুরোধ করুন",
    },
    footer: {
      description:
        "এক্সপান্ডেড পলিস্টাইরিন (ইপিএস) পণ্যের শীর্ষস্থানীয় প্রস্তুতকারক—বাংলাদেশের বাজারে উচ্চমানের ডেনসিটি ইনস্যুলেশন বোর্ড, থার্মোকল বল, প্যাকেজিং বক্স ও কাস্টমাইজড থার্মাল সলিউশন প্রদানকারী।",
      companyHeading: "কোম্পানি",
      productsHeading: "পণ্য ও সরবরাহ",
      contactHeading: "কারখানা ও অফিস",
      schedule: "অফিস ও প্ল্যান্ট: সপ্তাহে ৬ দিন খোলা",
      hotline1Label: "কারিগরি ও সাইজিং পরামর্শ",
      hotline2Label: "বিক্রয় ও পাইকারি কোটেশন",
      address: "৯১/১ মীরপাড়া (পাইটি লিংক রোড), ডেমরা, ঢাকা, বাংলাদেশ।",
      email: "info@maxthermal.com",
      copyright: "© ২০২৫ - ম্যাক্স থার্মাল কর্তৃক সর্বস্বত্ব সংরক্ষিত।",
      privacy: "প্রাইভেসি পলিসি",
      terms: "সরবরাহ শর্তাবলী",
      backToTop: "পৃষ্ঠার শীর্ষে ফিরে যান",
    },
  },
};
