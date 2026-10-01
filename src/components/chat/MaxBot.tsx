"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useSyncExternalStore,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  Phone,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

const emptySubscribe = () => () => {};

interface MessageAction {
  label: string;
  href?: string;
  type: "facebook" | "call" | "scroll";
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  isWelcome?: boolean;
  actions?: MessageAction[];
}

interface SuggestionChip {
  id: string;
  labelEn: string;
  labelBn: string;
  queryEn: string;
  queryBn: string;
}

const SUGGESTIONS: SuggestionChip[] = [
  {
    id: "location",
    labelEn: "📍 Factory & Office Location",
    labelBn: "📍 ফ্যাক্টরি ও অফিসের ঠিকানা",
    queryEn: "Where is your factory and office located in Dhaka?",
    queryBn: "আপনাদের ফ্যাক্টরি ও অফিসের ঠিকানা কোথায়?",
  },
  {
    id: "contact",
    labelEn: "📞 Hotlines & Contacts",
    labelBn: "📞 হটলাইন ও যোগাযোগের তথ্য",
    queryEn: "What are your official phone numbers and contact emails?",
    queryBn: "যোগাযোগের ফোন নম্বর এবং ইমেইল কী কী?",
  },
  {
    id: "blocks",
    labelEn: "🧱 EPS Block Sizes & Density",
    labelBn: "🧱 ইপিএস ব্লকের সাইজ ও ঘনত্ব",
    queryEn: "What are your standard EPS block sizes and densities?",
    queryBn: "ইপিএস ব্লকের সাইজ ও ঘনত্ব কত পাওয়া যায়?",
  },
  {
    id: "sheets",
    labelEn: "📏 Custom Sheet Cutting",
    labelBn: "📏 কাস্টম শিট কাটিং",
    queryEn: "What sheet thicknesses and insulation solutions are available?",
    queryBn: "ছাদ তাপরোধ ও কোল্ড স্টোরেজের জন্য কাস্টম শিট কাটিং ও পুরুত্ব কেমন?",
  },
  {
    id: "denim",
    labelEn: "👖 Thermocol Balls for Denim",
    labelBn: "👖 ডেনিম ওয়াশিং থার্মোকল বল",
    queryEn: "What sizes of MuriBall thermocol balls are available for denim washing?",
    queryBn: "ডেনিম ওয়াশিং থার্মোকল বল ও মুড়িবলের কী কী সাইজ আছে?",
  },
  {
    id: "pricing",
    labelEn: "💰 Price & Quotation",
    labelBn: "💰 দরদাম ও কোটেশন",
    queryEn: "How is EPS pricing calculated and how can I get a quotation?",
    queryBn: "ইপিএস পণ্যের দরদাম ও কোটেশন কীভাবে পাওয়া যাবে?",
  },
  {
    id: "profile",
    labelEn: "🏭 About Max Thermal",
    labelBn: "🏭 ম্যাক্স থার্মাল পরিচিতি",
    queryEn: "Tell me about Max Thermal manufacturing company.",
    queryBn: "ম্যাক্স থার্মাল কারখানা ও কোম্পানি সম্পর্কে জানতে চাই।",
  },
  {
    id: "delivery",
    labelEn: "🚚 Delivery & Supply",
    labelBn: "🚚 ডেলিভারি ও পরিবহন",
    queryEn: "What are your delivery areas and logistics capabilities?",
    queryBn: "সারা দেশে ডেলিভারি এবং সরবরাহ ব্যবস্থা কেমন?",
  },
];

const WELCOME_EN =
  "Hello! 👋 I'm **MAX Bot**, your 24/7 technical AI assistant at **Max Thermal** (Demra, Dhaka).\n\n" +
  "I have complete knowledge of our factory operations and Expanded Polystyrene (EPS) solutions:\n\n" +
  "• **Factory Location:** 91/1 Mirpara (Paity Link Road), Demra, Dhaka\n" +
  "• **EPS Blocks:** Monolithic Mold Size 2000 × 1000 × 500 mm (12 to 35 kg/m³)\n" +
  "• **EPS Sheets:** 10mm to 500mm precision CNC cut for roofs, cold storage & packaging\n" +
  "• **MuriBall:** 100% virgin polymer thermocol balls for denim & garment washing (S, M, L, XL)\n" +
  "• **Factory Direct Quotes:** Transparent volume/density pricing & nationwide dispatch\n\n" +
  "How may I assist your project today?";

const WELCOME_BN =
  "আসসালামু আলাইকুম! 👋 আমি **ম্যাক্স বট (MAX Bot)**, **ম্যাক্স থার্মাল** (ডেমরা, ঢাকা)-এর সার্বক্ষণিক টেকনিক্যাল এআই সহকারী।\n\n" +
  "আমাদের কারখানা ও ইপিএস (Expanded Polystyrene) সংক্রান্ত যেকোনো তথ্য আমি নিমেষেই দিতে পারি:\n\n" +
  "• **ফ্যাক্টরি ও অফিস:** ৯১/১ মিরপাড়া (পাইটি লিংক রোড), ডেমরা, ঢাকা\n" +
  "• **ইপিএস ব্লক:** ২০০০ × ১০০০ × ৫০০ মিমি মনোলিথিক মোল্ড (১২ থেকে ৩৫ কেজি/মি³)\n" +
  "• **ইপিএস শিট:** ১০ মিমি থেকে ৫০০ মিমি নির্ভুল সিএনসি কাটিং (ছাদ তাপরোধ ও কোল্ড স্টোরেজ)\n" +
  "• **মুড়িবল:** ডেনিম ও গার্মেন্ট ওয়াশিংয়ের জন্য ১০০% ভার্জিন থার্মোকল বল (S, M, L, XL গ্রেড)\n" +
  "• **ফ্যাক্টরি রেট ও কোটেশন:** ঘনফুট ও ডেনসিটি অনুযায়ী সাশ্রয়ী দাম এবং ৬৪ জেলায় দ্রুত ডেলিভারি\n\n" +
  "আজ আপনার প্রকল্পের জন্য কী জানতে চান?";

function createInitialActions(isBn: boolean): MessageAction[] {
  return [
    {
      label: isBn ? "📞 সরাসরি হটলাইন" : "📞 Call Hotline",
      type: "call",
      href: "tel:+8801913349641",
    },
    {
      label: isBn ? "ফেসবুক পেজ" : "Facebook Page",
      type: "facebook",
      href: "https://facebook.com",
    },
  ];
}

/**
 * Text normalizer for fuzzy/stem keyword matching with typo tolerance
 */
function normalizeQuery(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,;:_\-'"/\\#@$%^&*()+=[\]{}|~`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Friendly Modern Robot SVG with Continuous Eye Blinking Animation
 */
function RobotAvatar({
  className = "w-7 h-7 text-white",
  isBlinking = true,
}: {
  className?: string;
  isBlinking?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 36 36"
      width="36"
      height="36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top Antenna with Glowing Tip */}
      <line
        x1="18"
        y1="2.5"
        x2="18"
        y2="7.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="2.5" r="2.2" fill="#FFA066" stroke="currentColor" strokeWidth="0.8" />

      {/* Side Ear Bolts */}
      <rect x="2.5" y="14" width="2.5" height="6.5" rx="1.2" fill="currentColor" opacity="0.85" />
      <rect x="31" y="14" width="2.5" height="6.5" rx="1.2" fill="currentColor" opacity="0.85" />

      {/* Main Robot Head Shell */}
      <rect
        x="5"
        y="7.5"
        width="26"
        height="22"
        rx="7"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* Dark Digital Visor Screen */}
      <rect x="8.5" y="11" width="19" height="11" rx="4" fill="#0B132B" />

      {/* Glowing Blinking Digital Eyes */}
      <g className={isBlinking ? "robot-eyes-blink" : ""}>
        {/* Left Eye */}
        <circle cx="14" cy="16.5" r="2.4" fill="#00FFD1" />
        <circle cx="14.6" cy="15.8" r="0.8" fill="#FFFFFF" />

        {/* Right Eye */}
        <circle cx="22" cy="16.5" r="2.4" fill="#00FFD1" />
        <circle cx="22.6" cy="15.8" r="0.8" fill="#FFFFFF" />
      </g>

      {/* Digital Smile / Status Line */}
      <path
        d="M14 24.5C15.2 25.8 20.8 25.8 22 24.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MaxBot() {
  const { language } = useLanguage();
  const { getLenis } = useSmoothScroll();
  const isBn = language === "bn";

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "welcome-init",
      sender: "bot",
      text: "",
      time: "Just now",
      isWelcome: true,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounterRef = useRef(1);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSmoothScroll = (hash: string) => {
    const lenis = getLenis();
    const target = document.querySelector(hash) as HTMLElement | null;
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 1.2 });
      } else {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  /**
   * Exact Intent & Knowledge Engine with Typo Tolerance and Bilingual Precision
   */
  const getBotResponse = useCallback(
    (userQuery: string): { text: string; actions?: MessageAction[] } => {
      const norm = normalizeQuery(userQuery);

      // =========================================================================
      // 1. LOCATION / ADDRESS INTENT (Typo-tolerant: loation, locaton, addres, where, etc.)
      // =========================================================================
      const isLocation =
        /\b(loation|locaton|locatin|lacation|location|locations|locat|address|addres|adress|adrs|adres|factory|factry|office|offce|where|wher|were|ware|place|demra|mirpara|paity)\b/i.test(
          norm
        ) ||
        /(ঠিকানা|লোকেশন|কোথায়|কোথায়|অফিস|ফ্যাক্টরি|কারখানা|প্ল্যান্ট|ডেমরা|মিরপাড়া|মিরপাড়া|পাইটি)/i.test(
          norm
        ) ||
        norm.includes("loation") ||
        norm.includes("locat") ||
        norm.includes("address") ||
        norm.includes("addres") ||
        norm.includes("factory") ||
        norm.includes("office") ||
        norm.includes("where") ||
        norm.includes("demra") ||
        norm.includes("mirpara") ||
        norm.includes("ঠিকানা") ||
        norm.includes("লোকেশন") ||
        norm.includes("কোথায়") ||
        norm.includes("কারখানা") ||
        norm.includes("অফিস");

      if (isLocation) {
        if (isBn) {
          return {
            text:
              "📍 **আমাদের অফিস ও ফ্যাক্টরির ঠিকানা:**\n" +
              "৯১/১ মিরপাড়া (পাইটি লিংক রোড), ডেমরা, ঢাকা, বাংলাদেশ।\n\n" +
              "ডেমরা ফ্যাক্টরি থেকে আমরা সারা বাংলাদেশে সরাসরি নিজস্ব পরিবহনে ও কুরিয়ারে ইপিএস পণ্য সরবরাহ করি। আপনি সরাসরি আমাদের ফ্যাক্টরি পরিদর্শনে সাদরে আমন্ত্রিত!",
            actions: [
              { label: "📞 ফ্যাক্টরিতে কল দিন", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুক পেজ",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "📍 **Factory & Office Location:**\n" +
            "91/1 Mirpara (Paity Link Road), Demra, Dhaka, Bangladesh.\n\n" +
            "From Demra, Dhaka, we supply factory-direct EPS products across Bangladesh. You are welcome to visit our factory or order direct delivery!",
          actions: [
            { label: "📞 Call Plant Direct", type: "call", href: "tel:+8801913349641" },
            {
              label: "Facebook Page",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 2. CONTACT & PHONE INTENT
      // =========================================================================
      const isContact =
        /\b(phone|phon|fone|call|calling|contact|contct|cntact|number|numbr|hotline|hotlin|email|mail|telephone|telephon|cell)\b/i.test(
          norm
        ) ||
        /(যোগাযোগ|ফোন|নাম্বার|নম্বর|কল|হটলাইন|ইমেইল)/i.test(norm) ||
        norm.includes("phone") ||
        norm.includes("call") ||
        norm.includes("contact") ||
        norm.includes("number") ||
        norm.includes("hotline") ||
        norm.includes("email") ||
        norm.includes("যোগাযোগ") ||
        norm.includes("ফোন") ||
        norm.includes("নাম্বার") ||
        norm.includes("নম্বর") ||
        norm.includes("কল");

      if (isContact) {
        if (isBn) {
          return {
            text:
              "📞 **যোগাযোগের তথ্য:**\n" +
              "• টেকনিক্যাল ও সাইজিং পরামর্শ: +88 01913-349641\n" +
              "• সেলস ও পাইকারি কোটেশন: +88 01716-327329\n" +
              "• ইমেইল: info@maxthermal.com\n" +
              "• ফ্যাক্টরি: ৯১/১ মিরপাড়া (পাইটি লিংক রোড), ডেমরা, ঢাকা\n" +
              "• সময়সূচি: শনি থেকে বৃহস্পতি (সকাল ৯:০০ - সন্ধ্যা ৬:০০)",
            actions: [
              { label: "📞 টেকনিক্যাল হটলাইন", type: "call", href: "tel:+8801913349641" },
              { label: "📞 সেলস হটলাইন", type: "call", href: "tel:+8801716327329" },
              {
                label: "ফেসবুকে বার্তা পাঠান",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "📞 **Contact Max Thermal:**\n" +
            "• Technical & Sizing: +88 01913-349641\n" +
            "• Sales & Wholesale: +88 01716-327329\n" +
            "• Email: info@maxthermal.com\n" +
            "• Address: Demra, Dhaka, Bangladesh\n" +
            "• Plant Hours: Open 6 Days a Week (Sat–Thu, 9:00 AM – 6:00 PM BST)",
          actions: [
            { label: "📞 Technical Hotline", type: "call", href: "tel:+8801913349641" },
            { label: "📞 Sales Hotline", type: "call", href: "tel:+8801716327329" },
            {
              label: "Message on Facebook",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 3. EPS BLOCK & SIZE INTENT
      // =========================================================================
      const isBlock =
        /\b(block|blocks|blok|dimension|dimensions|density|densiti|geofoam|2000|78)\b/i.test(
          norm
        ) ||
        /(ব্লক|সাইজ|মাপ|ঘনত্ব|জিওফোম)/i.test(norm) ||
        norm.includes("block") ||
        norm.includes("density") ||
        norm.includes("geofoam") ||
        norm.includes("ব্লক") ||
        norm.includes("ঘনত্ব") ||
        ((norm.includes("size") ||
          norm.includes("dimension") ||
          norm.includes("সাইজ") ||
          norm.includes("মাপ")) &&
          !norm.includes("sheet") &&
          !norm.includes("শিট") &&
          !norm.includes("ball") &&
          !norm.includes("বল"));

      if (isBlock) {
        if (isBn) {
          return {
            text:
              "🧱 **ইপিএস ব্লক ও জিওফোম স্পেসিফিকেশন:**\n" +
              "• **মোনোলিথিক মোল্ড সাইজ:** ২০০০ × ১০০০ × ৫০০ মিমি (৭৮.৭\" × ৩৯.৪\" × ১৯.৭\")।\n" +
              "• **কাঠামোগত ঘনত্ব (Density):** ১২ কেজি/মি³ থেকে ৩৫ কেজি/মি³ পর্যন্ত কাস্টমাইজড।\n" +
              "• **সিভিল কনস্ট্রাকশন জিওফোম:** সাধারণ মাটির চেয়ে ৯৮% হালকা; সেতু ও হাইওয়ে অ্যাপ্রোচে মাটির ভার লাঘব করে এবং বসা রোধ করে।\n" +
              "• **কাস্টম স্লাইসিং:** মাল্টি-ওয়্যার সিএনসি টেবিলের মাধ্যমে যেকোনো পুরুত্ব ও সাইজে কাটা সম্ভব।",
            actions: [
              { label: "📐 ব্লক স্পেসিফিকেশন", type: "scroll", href: "#products" },
              { label: "📞 ব্লকের রেট জানতে কল", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুক পেজ",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "🧱 **EPS Block & Geofoam Specifications:**\n" +
            "• **Monolithic Mold Size:** 2000 × 1000 × 500 mm (78.7\" × 39.4\" × 19.7\").\n" +
            "• **Structural Density:** 12 kg/m³ to 35 kg/m³ (custom engineered to ASTM standards).\n" +
            "• **Civil Construction Geofoam:** 98% lighter than traditional soil, reducing highway & bridge embankment deadload and settlement.\n" +
            "• **Custom Slicing:** Multi-wire CNC tables can precision-slice any block into custom slabs, angles, and dimensions.",
          actions: [
            { label: "📐 View Block Specs", type: "scroll", href: "#products" },
            { label: "📞 Call for Block Rates", type: "call", href: "tel:+8801913349641" },
            {
              label: "Facebook Page",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 4. EPS SHEETS & INSULATION INTENT
      // =========================================================================
      const isSheet =
        /\b(sheet|sheets|shet|insulation|insulate|roof|roofing|cold storage|chiller|heat|proofing|ceiling|ceilings|panel|panels|slab|slabs)\b/i.test(
          norm
        ) ||
        /(শিট|ছাদ|ইনসুলেশন|ইনস্যুলেশন|কোল্ড স্টোরেজ|হিমাগার|তাপ|সিলিং)/i.test(norm) ||
        norm.includes("sheet") ||
        norm.includes("insulat") ||
        norm.includes("roof") ||
        norm.includes("cold storage") ||
        norm.includes("heat") ||
        norm.includes("ceiling") ||
        norm.includes("শিট") ||
        norm.includes("ছাদ") ||
        norm.includes("ইনসুলেশন") ||
        norm.includes("ইনস্যুলেশন") ||
        norm.includes("কোল্ড স্টোরেজ") ||
        norm.includes("হিমাগার") ||
        norm.includes("তাপ");

      if (isSheet) {
        if (isBn) {
          return {
            text:
              "📏 **ইপিএস শিট ও থার্মাল ইনস্যুলেশন:**\n" +
              "• **নিখুঁত সিএনসি কাটিং:** ১০ মিমি থেকে ৫০০ মিমি (১/২\", ১\", ২\", ৩\", ৪\" ইত্যাদি) যেকোনো পুরুত্বে প্রস্তুত করা হয়।\n" +
              "• **ছাদ তাপরোধ (Roof Insulation):** ঘরের অভ্যন্তরীণ তাপমাত্রা ৪°C থেকে ৭°C হ্রাস করে এবং এসির বিদ্যুৎ বিল ২০%–৩৫% সাশ্রয় করে।\n" +
              "• **কোল্ড স্টোরেজ ও হিমাগার:** দেয়াল ও মেঝের সাব-জিরো (-২৫°C) তাপমাত্রা ধরে রাখে এবং ফ্রস্ট-হিভ প্রতিরোধ করে।\n" +
              "• **প্যাকেজিং ও ফলস সিলিং:** হালকা, টেকসই, আর্দ্রতারোধী এবং ভাঙনপ্রতিরোধী সুরক্ষা।",
            actions: [
              { label: "📐 শিটের তথ্য দেখুন", type: "scroll", href: "#products" },
              { label: "📞 শিটের রেট জানতে কল", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুকে কোটেশন",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "📏 **EPS Sheets & Thermal Insulation:**\n" +
            "• **Precision Slicing:** Thickness from 10mm to 500mm (0.5\", 1\", 2\", 3\", 4\", etc.) custom sliced via oscillating CNC wire tables.\n" +
            "• **Roof Heat-Proofing:** Lowers indoor ambient temperatures by 4°C–7°C and cuts AC electricity consumption by 20%–35%.\n" +
            "• **Cold Storage & HVAC:** High-density interlocking insulation panels maintaining sub-zero chambers down to -25°C without thermal bridge leaks.\n" +
            "• **Fragile Packaging & Ceilings:** Lightweight, moisture-impermeable, mold-resistant, and acoustic dampening.",
          actions: [
            { label: "📐 View Sheet Specifications", type: "scroll", href: "#products" },
            { label: "📞 Call for Sheet Rates", type: "call", href: "tel:+8801913349641" },
            {
              label: "Quote on Facebook",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 5. THERMOCOL BALLS & DENIM (MURIBALL) INTENT
      // =========================================================================
      const isBall =
        /\b(ball|balls|muriball|muri|muribal|bead|beads|denim|wash|washing|bean bag|beanbag|garment|garments)\b/i.test(
          norm
        ) ||
        /(বল|মুড়িবল|মুড়ি|ডেনিম|ওয়াশ|ওয়াশিং|দানা|গার্মেন্টস)/i.test(norm) ||
        norm.includes("ball") ||
        norm.includes("muri") ||
        norm.includes("bead") ||
        norm.includes("denim") ||
        norm.includes("wash") ||
        norm.includes("bean bag") ||
        norm.includes("বল") ||
        norm.includes("মুড়িবল") ||
        norm.includes("মুড়ি") ||
        norm.includes("ডেনিম") ||
        norm.includes("ওয়াশ");

      if (isBall) {
        if (isBn) {
          return {
            text:
              "👖 **থার্মোকল বল ও ডেনিম ওয়াশিং (মুড়িবল):**\n" +
              "• **গার্মেন্টস ও ডেনিম ওয়াশিং গ্রেড:** S (৩–৫ মিমি), M (৫–৮ মিমি), L (৮–১০ মিমি), XL (১২–১৪ মিমি) যা নিটওয়্যার ওয়াশ, এনজাইম ওয়াশ ও ভিন্টেজ লুকের জন্য আদর্শ (পিউমিস স্টোনের আধুনিক বিকল্প)।\n" +
              "• **১০০% ভার্জিন পলিমার:** কাপড়ে কোনো রং ছড়ায় না, টেক্সটাইল ফাইবার নষ্ট হয় না এবং একাধিক স্টিম/হট-ওয়াটার সাইকেলে টেকসই।\n" +
              "• **বিন ব্যাগ ও লাইটওয়েট কংক্রিট:** আরামদায়ক বিন ব্যাগ রিফিল এবং হালকা ওজনের কংক্রিট প্রস্তুতিতে ব্যবহৃত।\n" +
              "• **প্যাকেজিং:** নিঃশ্বাসযোগ্য ৫ কেজি ও ১০ কেজির বিশেষ সুরক্ষামূলক ব্যাগে ডেমরা কারখানা থেকে সরবরাহ।",
            actions: [
              { label: "📞 মুড়িবল অর্ডার করতে কল", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুকে বার্তা পাঠান",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "👖 **Thermocol Balls & Denim Washing (MuriBall):**\n" +
            "• **Garment & Denim Washing:** Graded sizes S (3–5mm), M (5–8mm), L (8–10mm), XL (12–14mm) for delicate knitwear, regular enzyme washing, and vintage fading (eco-friendly pumice stone replacement).\n" +
            "• **100% Virgin Polymer:** Zero dye bleeding, zero fiber snagging, and high mechanical resilience in continuous steam wash drums.\n" +
            "• **Bean Bags & Concrete:** Premium virgin spherical beads for luxury bean bag refills and lightweight EPS concrete aggregate.\n" +
            "• **Supply:** Available in breathable 5kg & 10kg antistatic protective bags direct from our Demra plant.",
          actions: [
            { label: "📞 Call to Order MuriBall", type: "call", href: "tel:+8801913349641" },
            {
              label: "Message on Facebook",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 6. PRICE & QUOTATION INTENT
      // =========================================================================
      const isPrice =
        /\b(price|pricing|cost|costing|rate|rates|quote|quotation|quotes|cft|cheap|expensive)\b/i.test(
          norm
        ) ||
        /(দাম|দর|দরদাম|রেট|খরচ|কোটেশন|টাকা|হিসাব)/i.test(norm) ||
        norm.includes("price") ||
        norm.includes("cost") ||
        norm.includes("rate") ||
        norm.includes("quote") ||
        norm.includes("quotation") ||
        norm.includes("দাম") ||
        norm.includes("দর") ||
        norm.includes("দরদাম") ||
        norm.includes("খরচ") ||
        norm.includes("কোটেশন");

      if (isPrice) {
        if (isBn) {
          return {
            text:
              "💰 **ফ্যাক্টরি প্রাইসিং ও ইনস্ট্যান্ট কোটেশন:**\n" +
              "ম্যাক্স থার্মাল সম্পূর্ণ সরাসরি ফ্যাক্টরি মূল্যে ইপিএস পণ্য সরবরাহ করে:\n\n" +
              "• **দাম নির্ধারণের মূল ভিত্তি:**\n" +
              "  ১. **আয়তন (CFT / m³):** দৈর্ঘ্য × প্রস্থ × উচ্চতার মোট ঘনফুট।\n" +
              "  ২. **ঘনত্ব (Density):** ১২ কেজি/মি³ থেকে ৩৫ কেজি/মি³ (ঘনত্ব বৃদ্ধির সাথে শক্তি ও কাঁচামাল বাড়ে)।\n" +
              "  ৩. **পুরুত্ব ও কাটিং স্পেসিফিকেশন:** স্ট্যান্ডার্ড শিট নাকি বিশেষ সিএনসি স্লাইস।\n" +
              "  ৪. **অর্ডার ভলিউম:** বড় প্রকল্প ও নিয়মিত বাণিজ্যিক সরবরাহে বিশেষ পাইকারি ছাড়।\n\n" +
              "আপনার সাইজ বা ড্রয়িং পাঠিয়ে ৫ মিনিটে অফিসিয়াল কোটেশন পেতে নিচে ক্লিক করুন:",
            actions: [
              { label: "📞 সেলস হটলাইনে কল দিন", type: "call", href: "tel:+8801913349641" },
              { label: "📞 টেকনিক্যাল হটলাইন", type: "call", href: "tel:+8801716327329" },
              {
                label: "ফেসবুকে কোটেশন",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "💰 **Factory Pricing & Instant Quotations:**\n" +
            "Max Thermal supplies factory-direct at transparent, volume-based rates:\n\n" +
            "• **Key Pricing Factors:**\n" +
            "  1. **Volume:** Total cubic feet (CFT) or cubic meters (m³).\n" +
            "  2. **Density:** 12 kg/m³ to 35 kg/m³ (structural density chosen for your project).\n" +
            "  3. **Thickness & Cutting Specs:** Standard block slabs or custom CNC multi-angle profile wire cuts.\n" +
            "  4. **Order Quantity:** Direct contractor wholesale tiers for bulk orders.\n\n" +
            "Click below to call our sales desk or message us on Facebook for an itemized quotation within 5 minutes:",
          actions: [
            { label: "📞 Call Sales Hotline", type: "call", href: "tel:+8801913349641" },
            { label: "📞 Technical Hotline", type: "call", href: "tel:+8801716327329" },
            {
              label: "Quote on Facebook",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 7. CUSTOM CNC CUTTING & SIZING INTENT
      // =========================================================================
      const isCutting =
        /\b(cut|cutting|custom|slicing|cnc|shape|shapes|router|decor|stage|event|props)\b/i.test(
          norm
        ) ||
        /(কাটিং|কাস্টম|সিএনসি|স্লাইস|আর্টস|ইভেন্ট|প্রপস)/i.test(norm) ||
        norm.includes("cut") ||
        norm.includes("custom") ||
        norm.includes("cnc") ||
        norm.includes("কাটিং") ||
        norm.includes("কাস্টম");

      if (isCutting) {
        if (isBn) {
          return {
            text:
              "✂ **কাস্টম সিএনসি কাটিং ও বিশেষ সাইজিং:**\n\n" +
              "• **অটোমেটেড ওয়্যার কাটিং:** আপনার আর্কিটেকচারাল ব্লুপ্রিন্ট অনুযায়ী যেকোনো দৈর্ঘ্য, প্রস্থ ও কোণে নিখুঁত কাটিং (±০.৫ মিমি টলারেন্স)।\n" +
              "• **ইভেন্ট, প্রদর্শনী ও প্রপস:** মেলা, স্টেজ ব্যাকড্রপ, থ্রিডি বর্ণমালা, ভাস্কর্য ও ব্র্যান্ডিং লোগো খোদাইয়ের জন্য উচ্চ-ঘনত্বের ইপিএস ব্লক।\n" +
              "• **ইন্ডাস্ট্রিয়াল প্যাকেজিং:** ইলেকট্রনিক্স, ওষুধ ও সিরামিক সামগ্রীর সুরক্ষায় কাস্টম মোল্ডেড প্রোটেক্টিভ কর্নার গার্ড।",
            actions: [
              { label: "📞 ইঞ্জিনিয়ারের পরামর্শ নিন", type: "call", href: "tel:+8801716327329" },
              {
                label: "ফেসবুকে ড্রয়িং পাঠান",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "✂ **Custom CNC Cutting & Precision Slicing:**\n\n" +
            "• **Automated Wire Tables:** Slices blocks to any custom thickness, taper, or angle with ±0.5mm micrometer precision according to your CAD drawings.\n" +
            "• **Event Props & Architectural Decor:** 5-axis hot-wire router carving for oversized trade show backdrops, 3D letters, and stage sets.\n" +
            "• **Industrial Protective Packaging:** Custom contoured end-caps and corner guards engineered to safeguard electronics and ceramic items.",
          actions: [
            { label: "📞 Talk with Engineer", type: "call", href: "tel:+8801716327329" },
            {
              label: "Send Drawing on Facebook",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 8. DELIVERY & LOGISTICS INTENT
      // =========================================================================
      const isDelivery =
        /\b(deliver|delivery|supply|transport|shipping|courier|district|truck|dispatch)\b/i.test(
          norm
        ) ||
        /(ডেলিভারি|সাপ্লাই|সরবরাহ|পরিবহন|কুরিয়ার|ট্রান্সপোর্ট|জেলা)/i.test(norm) ||
        norm.includes("deliver") ||
        norm.includes("supply") ||
        norm.includes("transport") ||
        norm.includes("ডেলিভারি") ||
        norm.includes("সাপ্লাই") ||
        norm.includes("সরবরাহ") ||
        norm.includes("পরিবহন");

      if (isDelivery) {
        if (isBn) {
          return {
            text:
              "🚚 **দেশব্যাপী দ্রুত ডেলিভারি ও পরিবহন:**\n\n" +
              "• **সারাদেশে ডেলিভারি:** ঢাকা, চট্টগ্রাম, সিলেট, খুলনা, রাজশাহী, বরিশাল, রংপুর ও ময়মনসিংহসহ দেশের ৬৪টি জেলায় ডেমরা ফ্যাক্টরি থেকে সরাসরি সরবরাহ।\n" +
              "• **দ্রুত ডিসপ্যাচ:** নিয়মিত পণ্যসমূহ ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ফ্যাক্টরি থেকে সরাসরি সাইটে পৌঁছে দেওয়া হয়।\n" +
              "• **নিরাপদ প্যাকেজিং:** আর্দ্রতা ও পথিমধ্যে ভাঙন রোধে প্রতিটি পণ্য ওয়াটারপ্রুফ র্যাপিং এবং বেল্টিং সুরক্ষায় প্রেরণ করা হয়।",
            actions: [
              { label: "📞 ট্রান্সপোর্ট ডেস্কে কল", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুক পেজ",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "🚚 **Nationwide Delivery & Logistics Capabilities:**\n\n" +
            "• **Coverage Across 64 Districts:** Reliable daily fleet transport servicing Dhaka, Chattogram, Sylhet, Khulna, Rajshahi, Barishal, Rangpur, and nationwide industrial EPZ belts from Demra, Dhaka.\n" +
            "• **Fast Site Dispatch:** Standard stock orders dispatched factory-direct within 24 to 48 hours.\n" +
            "• **Transit Protection:** Waterproof shrink-wrapping and specialized edge protection prevent site transit damage.",
          actions: [
            { label: "📞 Call Logistics Hotline", type: "call", href: "tel:+8801913349641" },
            {
              label: "Facebook Page",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 9. FIRE SAFETY & TECHNICAL CERTIFICATIONS INTENT
      // =========================================================================
      const isSafety =
        /\b(fire|flame|safety|certificate|certification|astm|test|report|b1)\b/i.test(norm) ||
        /(আগুন|নিরাপত্তা|সার্টিফিকেট|টেস্ট|রিপোর্ট)/i.test(norm) ||
        norm.includes("fire") ||
        norm.includes("safety") ||
        norm.includes("astm") ||
        norm.includes("certificate") ||
        norm.includes("আগুন") ||
        norm.includes("নিরাপত্তা");

      if (isSafety) {
        if (isBn) {
          return {
            text:
              "🔥 **ফায়ার সেফটি ও টেকনিক্যাল সার্টিফিকেশন:**\n\n" +
              "• **সেলফ-এক্সটিংগুইশিং গ্রেড (Class B1):** ম্যাক্স থার্মালের ফায়ার-রেটার্ডেন্ট ইপিএস উন্মুক্ত শিখা সরিয়ে নিলে নিজে নিজেই নিভে যায়, আগুন ছড়ায় না।\n" +
              "• **থার্মাল কন্ডাক্টিভিটি (K-Value):** 0.033 – 0.038 W/(m·K), যা আধুনিক গ্রিন বিল্ডিং ও এনার্জি স্টার গাইডলাইনের সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ।\n" +
              "• **পরিবেশবান্ধব:** ১০০% সিএফসি (CFC), এইচসিএফসি (HCFC) এবং ওজোন-ক্ষয়কারী উপাদানমুক্ত। পুনর্ব্যবহারযোগ্য পলিমার।",
            actions: [
              { label: "📞 ল্যাব টেস্টের জন্য কল", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুকে রিপোর্ট চান",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "🔥 **Fire Safety & Certified Thermal Performance:**\n\n" +
            "• **Flame Retardant Grade (Class B1):** Engineered with self-extinguishing flame-retardant polymers that cease combustion immediately once external flame source is removed.\n" +
            "• **Thermal Conductivity (K-Value):** 0.033 – 0.038 W/(m·K) according to ASTM C518 standard test methods.\n" +
            "• **Eco-Compliance:** 100% CFC, HCFC, and HBCD free. Fully recyclable closed-cell polymer matrices.",
          actions: [
            { label: "📞 Call for Lab Reports", type: "call", href: "tel:+8801913349641" },
            {
              label: "Request on Facebook",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 10. ABOUT COMPANY PROFILE INTENT
      // =========================================================================
      const isProfile =
        /\b(about|company|who are you|who is max|profile|history|journey|max thermal)\b/i.test(
          norm
        ) ||
        /(ম্যাক্স থার্মাল|কোম্পানি|পরিচিতি|ইতিহাস)/i.test(norm) ||
        norm.includes("about") ||
        norm.includes("company") ||
        norm.includes("who are you") ||
        norm.includes("who is max") ||
        norm.includes("max thermal") ||
        norm.includes("পরিচিতি") ||
        norm.includes("কোম্পানি");

      if (isProfile) {
        if (isBn) {
          return {
            text:
              "🏭 **ম্যাক্স থার্মাল (Max Thermal) পরিচিতি:**\n\n" +
              "ম্যাক্স থার্মাল বাংলাদেশের শীর্ষস্থানীয় ও নির্ভরযোগ্য এক্সপ্যান্ডেড পলিস্টাইরিন (EPS) এবং কর্ক শিট প্রস্তুতকারক।\n\n" +
              "• **উৎপাদন কেন্দ্র:** ৯১/১ মিরপাড়া (পাইটি লিংক রোড), ডেমরা, ঢাকা।\n" +
              "• **উৎপাদন সক্ষমতা:** বিশ্বমানের ভ্যাকুয়াম ব্লক মোল্ডিং এবং আধুনিক কম্পিউটারাইজড সিএনসি ওয়্যার কাটিং প্রযুক্তি।\n" +
              "• **মান নিয়ন্ত্রণ:** কঠোর এএসটিএম (ASTM) আন্তর্জাতিক মান অনুযায়ী নিয়ন্ত্রিত ঘনত্ব ও ফায়ার-রেটার্ডেন্ট গ্রেড।\n" +
              "• **ল্যান্ডমার্ক প্রকল্প:** রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র, রামপাল পাওয়ার প্ল্যান্ট ও পদ্মা সেতু সংযোগ প্রকল্পের মতো জাতীয় মেগা অবকাঠামোয় সফল ইনস্যুলেশন সরবরাহকারী।",
            actions: [
              { label: "🏭 আমাদের অর্জন দেখুন", type: "scroll", href: "#our-journey" },
              { label: "📞 হটলাইনে কল করুন", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুক পেজ",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "🏭 **About Max Thermal:**\n\n" +
            "Max Thermal is a premier Bangladeshi manufacturer specializing in high-performance Expanded Polystyrene (EPS) and Cork Sheet solutions.\n\n" +
            "• **Plant Facility:** 91/1 Mirpara (Paity Link Road), Demra, Dhaka, Bangladesh.\n" +
            "• **Advanced Technology:** High-capacity vacuum block molding machines and multi-wire CNC slicing tables.\n" +
            "• **Quality Compliance:** Formulated strictly to international ASTM thermal conductivity and density guidelines.\n" +
            "• **National Landmark Portfolio:** Proud supplier to prestigious mega projects including Rooppur Nuclear Power Plant, Rampal Power Station, and Padma Bridge approaches.",
          actions: [
            { label: "🏭 View Landmark Projects", type: "scroll", href: "#projects" },
            { label: "📞 Call Hotline", type: "call", href: "tel:+8801913349641" },
            {
              label: "Facebook Page",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 11. GREETINGS INTENT
      // =========================================================================
      const isGreeting =
        /\b(hi|hello|hey|greetings|morning|afternoon|evening)\b/i.test(norm) ||
        /(সালাম|নমস্কার|হ্যালো|হাই|কেমন আছেন)/i.test(norm) ||
        norm.includes("hello") ||
        norm.includes("hey") ||
        norm.includes("সালাম") ||
        norm.includes("কেমন আছেন");

      if (isGreeting) {
        if (isBn) {
          return {
            text:
              "আসসালামু আলাইকুম! 👋 আমি ম্যাক্স থার্মালের টেকনিক্যাল এআই অ্যাসিস্ট্যান্ট।\n\n" +
              "আমাদের ডেমরা, ঢাকা ফ্যাক্টরি থেকে সরাসরি ইপিএস থার্মাল শিট, ব্লক, ডেনিম মুড়িবল ও ফ্যাক্টরি কোটেশন তৈরিতে আমি সাহায্য করতে প্রস্তুত। আপনার প্রকল্পের প্রয়োজনীয়তা জানান বা নিচের অপশনগুলোতে ক্লিক করুন:",
            actions: [
              { label: "📞 কল দিন", type: "call", href: "tel:+8801913349641" },
              {
                label: "ফেসবুক পেজ",
                type: "facebook",
                href: "https://facebook.com",
              },
            ],
          };
        }
        return {
          text:
            "Hello! 👋 I'm MAX Bot, technical AI consultant at Max Thermal (Demra, Dhaka).\n\n" +
            "I'm here to assist you with EPS Blocks, Insulation Sheets, Denim Washing MuriBall, and instant factory-direct quotations. How can I help with your project today?",
          actions: [
            { label: "📞 Call Sales", type: "call", href: "tel:+8801913349641" },
            {
              label: "Facebook Page",
              type: "facebook",
              href: "https://facebook.com",
            },
          ],
        };
      }

      // =========================================================================
      // 12. DEFAULT HELPFUL TECHNICAL FALLBACK
      // =========================================================================
      if (isBn) {
        return {
          text:
            "ধন্যবাদ আপনার প্রশ্নের জন্য। ম্যাক্স থার্মাল (ডেমরা, ঢাকা) উচ্চমানের ইপিএস ব্লক, ছাদ তাপরোধক শিট, কোল্ড স্টোরেজ স্ল্যাব এবং ডেনিম ওয়াশিং মুড়িবল তৈরি করে।\n\n" +
            "আপনার প্রকল্পের সাইজ, ঘনত্ব বা প্রয়োজনীয় পরিমাণ জানালে আমরা দ্রুত সঠিক সমাধান ও সর্বোত্তম ফ্যাক্টরি মূল্য দিতে পারব। আপনি সরাসরি আমাদের সেলস ইঞ্জিনিয়ারদের সাথেও কথা বলতে পারেন:",
          actions: [
            { label: "📞 হটলাইনে কল করুন", type: "call", href: "tel:+8801913349641" },
            {
              label: "ফেসবুক পেজ",
              type: "facebook",
              href: "https://facebook.com",
            },
            { label: "📐 পণ্য তালিকা দেখুন", type: "scroll", href: "#products" },
          ],
        };
      }

      return {
        text:
          "Thank you for reaching out! Max Thermal (Demra, Dhaka) specializes in factory-direct EPS Blocks, Heatproofing Sheets, Cold Storage Slabs, and Garment Washing MuriBall.\n\n" +
          "Could you specify your required density, thickness, or dimensions? You can also connect directly with our sales engineers for an immediate response:",
        actions: [
          { label: "📞 Call Hotline", type: "call", href: "tel:+8801913349641" },
          {
            label: "Facebook Page",
            type: "facebook",
            href: "https://facebook.com",
          },
          { label: "📐 View Product Range", type: "scroll", href: "#products" },
        ],
      };
    },
    [isBn]
  );

  const handleSendMessage = useCallback(
    (customText?: string) => {
      const rawText = customText !== undefined ? customText : inputText;
      const textToSend = rawText.trim();
      if (!textToSend) return;

      idCounterRef.current += 1;
      const currentId = idCounterRef.current;

      const userMsg: ChatMessage = {
        id: `user-${currentId}`,
        sender: "user",
        text: textToSend,
        time: "Just now",
      };

      setMessages((prev) => [...prev, userMsg]);
      if (customText === undefined) setInputText("");
      setIsTyping(true);

      // Natural typing delay
      setTimeout(() => {
        idCounterRef.current += 1;
        const botResponseData = getBotResponse(textToSend);
        const botMsg: ChatMessage = {
          id: `bot-${idCounterRef.current}`,
          sender: "bot",
          text: botResponseData.text,
          time: "Just now",
          actions: botResponseData.actions,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 500);
    },
    [inputText, getBotResponse]
  );

  const handleResetChat = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
    setTimeout(() => {
      idCounterRef.current += 1;
      const resetMsg: ChatMessage = {
        id: `welcome-reset-${idCounterRef.current}`,
        sender: "bot",
        text: "",
        time: "Just now",
        isWelcome: true,
      };
      setMessages([resetMsg]);
    }, 180);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Robot Eye Blink Animation Style */}
      <style>{`
        @keyframes eyeBlink {
          0%, 88%, 100% {
            transform: scaleY(1);
          }
          93%, 95% {
            transform: scaleY(0.1);
          }
        }
        .robot-eyes-blink {
          transform-box: fill-box;
          transform-origin: center;
          animation: eyeBlink 3.2s infinite ease-in-out;
        }
      `}</style>

      {/* 1. Bottom-Right Floating Action Stack (Facebook + Circular Robot Button with iOS Safe-Area Insets) */}
      <div
        className="fixed z-50 flex flex-col items-end gap-3 select-none pointer-events-auto"
        style={{
          bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))",
          right: "max(1rem, env(safe-area-inset-right, 1rem))",
        }}
      >
        {/* Facebook Circular Floating Button with Tooltip */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isBn ? "ম্যাক্স থার্মাল ফেসবুক পেজ ভিজিট করুন" : "Visit Max Thermal on Facebook"}
          className="group relative w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_25px_rgba(24,119,242,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {/* Facebook Icon SVG */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" width="24" height="24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>

          {/* Left Hover Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            {isBn ? "ফেসবুক পেজ" : "Facebook Page"}
          </span>
        </a>

        {/* Circular MAX Bot Trigger Button with Animated Blinking Eyes */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={
            isOpen
              ? isBn
                ? "ম্যাক্স বট চ্যাট সহকারী বন্ধ করুন"
                : "Close MAX Bot AI Assistant"
              : isBn
                ? "ম্যাক্স বট এআই সহকারী ওপেন করুন"
                : "Toggle AI Chat Assistant"
          }
          className={`group relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ${
            isOpen
              ? "bg-[#182337] text-white hover:bg-slate-900 shadow-slate-900/30"
              : "bg-gradient-to-tr from-orange-500 via-[#FF5A00] to-amber-500 text-white shadow-orange-500/35 hover:shadow-orange-500/50"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <>
              {/* Blinking Robot Face SVG */}
              <RobotAvatar className="w-8 h-8 text-white" isBlinking={true} />

              {/* Pulsating Online Green Dot */}
              <span className="absolute top-1 right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-white" />
              </span>
            </>
          )}

          {/* Left Hover Tooltip */}
          {!isOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
              {isBn ? "ম্যাক্স বট • এআই সহকারী" : "MAX Bot • AI Assistant"}
            </span>
          )}
        </button>
      </div>

      {/* 2. MAX Bot Interactive Popup Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.88, y: 25, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 25 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="fixed z-50 w-[calc(100vw-32px)] sm:w-[390px] h-[540px] max-h-[calc(100dvh-7rem)] sm:max-h-[min(540px,calc(100dvh-8rem))] bg-white rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.22)] border border-neutral-200 flex flex-col overflow-hidden select-none overscroll-contain"
            style={{
              bottom: "calc(max(1.5rem, env(safe-area-inset-bottom, 1.5rem)) + 4.5rem)",
              right: "max(1rem, env(safe-area-inset-right, 1rem))",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="MAX Bot AI Assistant Chat"
          >
            {/* Header with Blinking Robot Avatar */}
            <div className="bg-gradient-to-r from-[#182337] via-[#1E293B] to-[#0F172A] text-white px-4 py-3.5 flex items-center justify-between shadow-sm shrink-0 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-md shrink-0">
                  <RobotAvatar className="w-6 h-6 text-white" isBlinking={true} />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#182337]" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-white tracking-tight leading-none">
                      MAX Bot
                    </h3>
                    <span className="px-1.5 py-0.5 rounded-md bg-[#FF5A00]/25 text-[#FFA066] text-[9px] font-black uppercase tracking-wider border border-[#FF5A00]/40">
                      AI
                    </span>
                  </div>
                  <p className="text-[10.5px] text-slate-300 font-medium mt-1 leading-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>
                      {isBn
                        ? "ম্যাক্স থার্মাল এআই সহকারী • অনলাইন"
                        : "Max Thermal AI Assistant • Online"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title={isBn ? "চ্যাট রিসেট করুন" : "Restart Chat"}
                  aria-label={isBn ? "চ্যাট রিসেট করুন" : "Restart Chat"}
                  className="w-8 h-8 rounded-full hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title={isBn ? "বন্ধ করুন" : "Close"}
                  aria-label={isBn ? "বন্ধ করুন" : "Close"}
                  className="w-8 h-8 rounded-full hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body with data-lenis-prevent, touch momentum, and overscroll-contain */}
            <div
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3.5 text-xs sm:text-sm bg-neutral-50/60"
              style={{
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {messages.map((msg) => {
                const messageText = msg.isWelcome
                  ? isBn
                    ? WELCOME_BN
                    : WELCOME_EN
                  : msg.text;
                const messageActions = msg.isWelcome
                  ? createInitialActions(isBn)
                  : msg.actions;

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div className="flex items-end gap-2 max-w-[88%]">
                      {msg.sender === "bot" && (
                        <div className="w-6 h-6 rounded-full bg-[#182337] text-white flex items-center justify-center shrink-0 mb-1">
                          <RobotAvatar className="w-4 h-4 text-white" isBlinking={false} />
                        </div>
                      )}

                      <div
                        className={`rounded-2xl p-3.5 leading-relaxed break-words shadow-2xs ${
                          msg.sender === "user"
                            ? "bg-[#FF5A00] text-white rounded-br-xs font-medium"
                            : "bg-white text-slate-800 rounded-bl-xs border border-slate-200/80"
                        }`}
                      >
                        <div className="whitespace-pre-line space-y-1">
                          {messageText.split("\n").map((line, lIdx) => {
                            const parts = line.split(/(\*\*.*?\*\*)/g);
                            return (
                              <p key={lIdx}>
                                {parts.map((part, pIdx) => {
                                  if (part.startsWith("**") && part.endsWith("**")) {
                                    return (
                                      <strong
                                        key={pIdx}
                                        className={
                                          msg.sender === "user"
                                            ? "font-bold text-white"
                                            : "font-bold text-slate-900"
                                        }
                                      >
                                        {part.slice(2, -2)}
                                      </strong>
                                    );
                                  }
                                  return part;
                                })}
                              </p>
                            );
                          })}
                        </div>

                        {/* Attached Context Action Buttons (Hotline and Facebook Page) */}
                        {messageActions && messageActions.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2">
                            {messageActions.map((act, aIdx) => {
                              if (act.type === "scroll" && act.href) {
                                return (
                                  <button
                                    key={aIdx}
                                    type="button"
                                    onClick={() => handleSmoothScroll(act.href!)}
                                    aria-label={act.label}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#FF5A00] text-slate-700 hover:text-white text-[11px] font-bold transition-all duration-200 cursor-pointer shadow-2xs"
                                  >
                                    <span>{act.label}</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </button>
                                );
                              }

                              return (
                                <a
                                  key={aIdx}
                                  href={act.href}
                                  target={act.type === "facebook" ? "_blank" : undefined}
                                  rel={act.type === "facebook" ? "noopener noreferrer" : undefined}
                                  aria-label={act.label}
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200 shadow-2xs ${
                                    act.type === "facebook"
                                      ? "bg-[#1877F2] hover:bg-[#166fe5] text-white"
                                      : "bg-slate-900 hover:bg-[#FF5A00] text-white"
                                  }`}
                                >
                                  {act.type === "facebook" ? (
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                  ) : (
                                    <Phone className="w-3.5 h-3.5" />
                                  )}
                                  <span>{act.label}</span>
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message Timestamp */}
                    <span className="text-[9.5px] text-slate-400 mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                );
              })}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex items-end gap-2 max-w-[80%]">
                  <div className="w-6 h-6 rounded-full bg-[#182337] text-white flex items-center justify-center shrink-0 mb-1">
                    <RobotAvatar className="w-4 h-4 text-white" isBlinking={false} />
                  </div>
                  <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-xs p-3 shadow-2xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips with data-lenis-prevent and touch momentum */}
            <div
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto overscroll-contain no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 flex items-center gap-1 pl-1">
                <Sparkles className="w-3 h-3 text-[#FF5A00]" />
              </span>
              {SUGGESTIONS.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => handleSendMessage(isBn ? chip.queryBn : chip.queryEn)}
                  aria-label={isBn ? chip.labelBn : chip.labelEn}
                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#FFEADB] text-slate-700 hover:text-[#FF5A00] text-[11px] font-semibold whitespace-nowrap transition-colors shrink-0 border border-slate-200/60 cursor-pointer shadow-2xs"
                >
                  {isBn ? chip.labelBn : chip.labelEn}
                </button>
              ))}
            </div>

            {/* Chat Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  isBn
                    ? "ম্যাক্স বটকে ফ্যাক্টরি বা ইপিএস পণ্য সম্পর্কে জিজ্ঞাসা করুন..."
                    : "Ask MAX Bot about factory address or EPS products..."
                }
                className="flex-1 bg-slate-100/80 focus:bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 py-2.5 rounded-full border border-slate-200/80 focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 outline-none transition-all"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                title={isBn ? "বার্তা পাঠান" : "Send message"}
                aria-label={isBn ? "বার্তা পাঠান" : "Send message"}
                className="w-9 h-9 rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
