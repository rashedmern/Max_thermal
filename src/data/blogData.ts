export interface ComicPanel {
  panelNumber: number;
  title: string;
  image: string;
  dialogueBn: string;
  dialogueEn: string;
  explanation: string;
  keyTakeaway: string;
}

export interface BlogStory {
  id: string;
  title: string;
  type: "comic" | "guide" | "industrial";
  typeLabel: string;
  thumbnail: string;
  excerpt: string;
  readTime: string;
  panels: ComicPanel[];
}

export const BLOG_STORIES: BlogStory[] = [
  {
    id: "story-of-scope",
    title: "The Story of Scope — The 2050 Robot",
    type: "comic",
    typeLabel: "Illustrated Comic",
    thumbnail: "/images/blog-comic-scope.jpg",
    excerpt:
      "Scope is a smart robot child from 2050 teaching everyday folks about modern heat and sound insulation.",
    readTime: "3 min read",
    panels: [
      {
        panelNumber: 1,
        title: "The Mystery Material in the Hardware Market",
        image: "/images/blog-comic-scope.jpg",
        dialogueBn:
          "স্কোপ গিয়েছিল ইঞ্জিনিয়ারের বলা Styrofoam আনতে। দোকানদার বলল, 'এটা আবার কি জিনিস?' স্কোপ হেসে বলল, 'আসলে Styrofoam, Cork Sheet, Thermocol—সবই এক জিনিস: EPS Insulation!'",
        dialogueEn:
          "Scope visited the local hardware hub asking for 'Styrofoam'. The confused shopkeeper asked, 'What is that?' Scope chuckled: 'Styrofoam, Cork Sheet, and Thermocol are simply different commercial names for the same wonder material: Expanded Polystyrene (EPS)!'",
        explanation:
          "Expanded Polystyrene (EPS) consists of 98% trapped micro-cellular air. This unique cellular structure makes it one of the lightest, most efficient thermal and acoustic barriers known in modern engineering.",
        keyTakeaway: "Styrofoam = Cork Sheet = Thermocol = High-efficiency EPS Insulation.",
      },
      {
        panelNumber: 2,
        title: "How 98% Air Stops 100% of Thermal Heat",
        image: "/images/blog-comic-scope.jpg",
        dialogueBn:
          "'বাতাস যখন ক্ষুদ্র কোটি কোটি কোষে আটকে থাকে, তখন তাপ প্রবাহিত হতে পারে না!'—স্কোপ চকবোর্ডে এঁকে সবাইকে বুঝিয়ে দিল。",
        dialogueEn:
          "'When air is trapped inside microscopic sealed beads, heat convection completely stalls!' Scope demonstrated on his holographic classroom display.",
        explanation:
          "With an ultra-low thermal conductivity rating (λ = 0.033 W/m·K), Max Thermal EPS blocks solar radiant energy from heating rooftop slabs and exterior concrete walls.",
        keyTakeaway: "Zero convection currents mean dramatic interior temperature drops.",
      },
    ],
  },
  {
    id: "hot-roof-solution",
    title: "Top Floor Gets Too Hot? Fix It With Proper Insulation!",
    type: "guide",
    typeLabel: "Practical Guide",
    thumbnail: "/images/blog-hot-roof.jpg",
    excerpt:
      "Is your top floor overheating and driving tenants away? Learn how roof slabs slash cooling costs.",
    readTime: "4 min read",
    panels: [
      {
        panelNumber: 1,
        title: "The Top-Floor Oven Effect",
        image: "/images/blog-hot-roof.jpg",
        dialogueBn:
          "গ্রীষ্মকালে ছাদের আরসিসি ঢালাই সারাদিন প্রখর রোদ শোষণ করে। রাত নামলেও ছাদ থেকে তাপ নামতে থাকে—এসি চালালেও রুম ঠান্ডা হয় না!",
        dialogueEn:
          "During scorching summers, uninsulated concrete roof slabs act like giant thermal batteries, storing extreme solar heat and radiating it into bedrooms all night.",
        explanation:
          "Bare reinforced concrete has a high thermal mass. Without a thermal break, temperatures inside top-floor apartments can surge 6°C to 10°C above ambient shade temperatures.",
        keyTakeaway: "Uninsulated roofs turn living quarters into suffocating ovens and skyrocket electricity bills.",
      },
      {
        panelNumber: 2,
        title: "The EPS Thermal Shield Solution",
        image: "/images/blog-hot-roof.jpg",
        dialogueBn:
          "ছাদের উপর হাই-ডেনসিটি ইপিএস শিট বসিয়ে তার ওপর টাইলস বা প্রটেক্টিভ লেয়ার দিলে ৯০% পর্যন্ত সরাসরি তাপ আটকে যায়।",
        dialogueEn:
          "Installing high-density Max Thermal EPS roof slabs beneath weathering tiles creates an impenetrable barrier, dropping indoor ceiling temperatures by up to 8°C.",
        explanation:
          "Our ASTM-rated high compressive EPS boards withstand regular foot traffic and moisture while cutting air-conditioning electrical consumption by 30% to 45%.",
        keyTakeaway: "Payback in electricity savings within a single summer season.",
      },
    ],
  },
  {
    id: "soundproofing-noise",
    title: "Soundproofing Against Noise: DJ Party Next Door",
    type: "comic",
    typeLabel: "Acoustic Comic",
    thumbnail: "/images/blog-comic-noise.jpg",
    excerpt:
      "Why suffer from deafening outside noise? Discover how EPS acoustic dampening creates peaceful bedrooms.",
    readTime: "3 min read",
    panels: [
      {
        panelNumber: 1,
        title: "The Midnight Bass Nightmare",
        image: "/images/blog-comic-noise.jpg",
        dialogueBn:
          "পাশের ঘরে বা রাস্তায় তীব্র ডিজে সাউন্ড? সাধারণ ইটের দেয়াল দিয়ে লো-ফ্রিকোয়েন্সি শব্দ ও ভাইব্রেশন সরাসরি ঘরে ঢুকে পড়ে—ঘুমানো অসম্ভব!",
        dialogueEn:
          "Loud party bass vibrations and highway traffic rumble penetrate right through conventional brick walls, turning peaceful bedtime into sleepless misery!",
        explanation:
          "Sound waves travel through solid building structures via mechanical vibration. Hard surfaces reflect sound waves and amplify reverberation.",
        keyTakeaway: "Hard walls without cavity damping act as acoustic transmitters.",
      },
      {
        panelNumber: 2,
        title: "Acoustic Decoupling with EPS Core Cavities",
        image: "/images/blog-comic-noise.jpg",
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
  {
    id: "fish-export-preservation",
    title: "Boosting Fresh Fish Exports with Insulated Boxes",
    type: "industrial",
    typeLabel: "Industrial Case",
    thumbnail: "/images/blog-fish-export.jpg",
    excerpt:
      "Preserving catch freshness from coastal fisheries to global international markets.",
    readTime: "4 min read",
    panels: [
      {
        panelNumber: 1,
        title: "The Coastal Cold-Chain Challenge",
        image: "/images/blog-fish-export.jpg",
        dialogueBn:
          "কক্সবাজার ও খুলনা থেকে আন্তর্জাতিক বাজারে ইলিশ, চিংড়ি ও রুই পাঠানোর সময় সাধারণ বাক্সে বরফ গলে মাছের মান নষ্ট হয়ে যায়।",
        dialogueEn:
          "Transporting premium Hilsa, Black Tiger shrimp, and Rui from coastal fishing ports to international airports requires zero temperature fluctuation.",
        explanation:
          "Uninsulated or weak shipping containers experience rapid thermal exchange under tropical sun, melting cooling ice and spoiling lucrative export consignments.",
        keyTakeaway: "Every degree of temperature spike degrades export market grade and value.",
      },
      {
        panelNumber: 2,
        title: "Max Thermal Molded EPS Export Shippers",
        image: "/images/blog-fish-export.jpg",
        dialogueBn:
          "ম্যাক্স থার্মালের এয়ারটাইট মোল্ডেড ইপিএস বক্সে বরফ গলে না, ৪°-র নিচে তাপমাত্রা থাকে ৪৮ ঘণ্টার বেশি—নিশ্চিত করে প্রিমিয়াম এক্সপোর্ট কোয়ালিটি।",
        dialogueEn:
          "Max Thermal high-density molded EPS boxes preserve ice and keep internal temperatures safely below 4°C for over 48 hours throughout long-haul transit.",
        explanation:
          "Engineered with interlocking tight-fitting lids and leak-resistant base channels, our export containers meet stringent EU and USFDA perishables compliance.",
        keyTakeaway: "Ensuring 100% catch freshness from Bangladeshi estuaries to Tokyo and London.",
      },
    ],
  },
];
