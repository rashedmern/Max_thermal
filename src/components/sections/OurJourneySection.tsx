"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  JOURNEY_BENTO_DATA,
  type BentoCardData,
} from "@/data/journeyData";
import { useLanguage } from "@/context/LanguageContext";

interface ClientLogo {
  name: string;
  subText?: string;
  icon: React.ReactNode;
}

const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "CHARU",
    subText: "STYLISH LIVING",
    icon: (
      <svg
        className="w-8 h-8 shrink-0 text-[#C5A059]"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="26"
          height="26"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10.5 16C10.5 12.9624 12.9624 10.5 16 10.5H21V14.5H16C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5H21V21.5H16C12.9624 21.5 10.5 19.0376 10.5 16Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "EXCELLENT",
    subText: "CERAMICS",
    icon: (
      <svg
        className="w-8 h-8 shrink-0 text-[#0F4C81]"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 11.5L22 15V21.5L16 25L10 21.5V15L16 11.5Z"
          fill="#FF5A00"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    name: "GENERAL",
    subText: "Pharmaceuticals Ltd.",
    icon: (
      <svg
        className="w-8 h-8 shrink-0 text-[#0284C7]"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="24" height="24" rx="7" fill="#E0F2FE" />
        <path
          d="M16 9V23M9 16H23"
          stroke="#0284C7"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="21" cy="11" r="2.5" fill="#FF5A00" />
      </svg>
    ),
  },
  {
    name: "SINAMM",
    subText: "ENGINEERING LIMITED",
    icon: (
      <svg
        className="w-8 h-8 shrink-0 text-[#1E293B]"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 26L16 6L27 26H5Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M11 20H21M16 6V26" stroke="#FF5A00" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "RAK CERAMICS",
    subText: "World-Class Ceramics",
    icon: (
      <svg
        className="w-8 h-8 shrink-0 text-[#DC2626]"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M16 3L27 16L16 29L5 16L16 3Z" fill="#DC2626" />
        <path d="M16 10L21 16L16 22L11 16L16 10Z" fill="#FFFFFF" />
      </svg>
    ),
  },
];

const MARQUEE_CLIENTS = [
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
];

/**
 * Clean, Full-Bleed Product Bento Card
 * Smooth Apple-style elevation, 700ms image zoom, and unobtrusive typography
 */
function BentoProductCard({
  card,
  chip,
  title,
  subtitle,
  viewSpecsText,
  className,
  priority = false,
}: {
  card: BentoCardData;
  chip?: string;
  title?: string;
  subtitle?: string;
  viewSpecsText?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white/80 border border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(255,90,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer select-none ${className}`}
    >
      {/* 1. Full-Bleed Product Image */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={card.imageSrc}
          alt={card.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* 2. Top Minimalist Floating Glass Tag */}
      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-slate-800 text-xs font-semibold shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />
          {chip || card.chip}
        </span>
      </div>

      {/* 3. Subtle Bottom Shadow Gradient & Clean Typography (Unobstructed View) */}
      <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 sm:pb-6 px-5 sm:px-7 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-end justify-between gap-4 z-10 pointer-events-none">
        <div className="max-w-xl">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
            {title || card.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/90 font-normal mt-1 leading-snug line-clamp-2">
            {subtitle || card.subtitle}
          </p>
        </div>

        {/* Interactive Action Pill Button */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-md group-hover:bg-[#FF5A00] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
          <span>{viewSpecsText || "View Specs"}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default function OurJourneySection() {
  const { language, t } = useLanguage();
  const { mainCard, topRightCard, bottomRightCard } = JOURNEY_BENTO_DATA;

  return (
    <section
      id="our-journey"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 select-none scroll-mt-24 overflow-hidden"
      aria-label="Our Journey"
    >
      {/* Anchor alias for backwards compatibility */}
      <span id="journey" className="sr-only" aria-hidden="true" />

      {/* 1. Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-10 sm:mb-14"
      >
        {/* Headline */}
        <h2
          className={`text-3xl sm:text-5xl lg:text-6xl font-black text-[#182337] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.08] font-sans"
          }`}
        >
          {t.journey.title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-3.5 sm:mt-4 max-w-2xl mx-auto">
          {t.journey.subtitle}
        </p>
      </motion.div>

      {/* 2. Bento Showcase Grid (Full-Bleed Product Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Main Card: Precision EPS Sheets */}
        <div className="lg:col-span-7">
          <BentoProductCard
            card={mainCard}
            chip={t.journey.mainCard.chip}
            title={t.journey.mainCard.title}
            subtitle={t.journey.mainCard.subtitle}
            viewSpecsText={t.journey.viewSpecs}
            priority={true}
            className="h-[280px] sm:h-[380px] md:h-[460px] lg:h-[500px]"
          />
        </div>

        {/* Right Stacked Column: MuriBall + Protective Packaging */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <BentoProductCard
            card={topRightCard}
            chip={t.journey.topRightCard.chip}
            title={t.journey.topRightCard.title}
            subtitle={t.journey.topRightCard.subtitle}
            viewSpecsText={t.journey.viewSpecs}
            className="h-[200px] sm:h-[238px]"
          />
          <BentoProductCard
            card={bottomRightCard}
            chip={t.journey.bottomRightCard.chip}
            title={t.journey.bottomRightCard.title}
            subtitle={t.journey.bottomRightCard.subtitle}
            viewSpecsText={t.journey.viewSpecs}
            className="h-[200px] sm:h-[238px]"
          />
        </div>
      </div>

      {/* 3. Our Gratified Clients (Infinite Sliding Marquee) */}
      <div className="relative mt-20 sm:mt-24">
        {/* Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] ${
              language === "bn"
                ? "tracking-normal leading-snug font-bengali"
                : "tracking-tight leading-[1.1] font-sans"
            }`}
          >
            {t.journey.clientsTitle}
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-3 sm:mt-4 max-w-2xl mx-auto">
            {t.journey.clientsSubtitle}
          </p>
        </div>

        {/* Infinite Seamless Marquee Slider with Soft Left & Right Edge Gradient Masks */}
        <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
          <div className="animate-marquee flex items-center">
            {MARQUEE_CLIENTS.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="bg-white/80 hover:bg-white backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-white/90 hover:border-[#FF5A00]/40 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center min-w-[210px] sm:min-w-[240px] h-20 mx-3 sm:mx-4 shrink-0 group/client cursor-default select-none"
              >
                {/* Logo with grayscale to full-color hover transition */}
                <div className="flex items-center gap-3.5 grayscale opacity-70 group-hover/client:grayscale-0 group-hover/client:opacity-100 transition-all duration-300">
                  {client.icon}
                  <div className="flex flex-col text-left">
                    <span className="font-extrabold text-[13px] sm:text-[14px] text-slate-900 tracking-tight leading-none group-hover/client:text-[#FF5A00] transition-colors">
                      {client.name}
                    </span>
                    {client.subText && (
                      <span className="text-[9.5px] uppercase font-semibold text-slate-500 tracking-wider mt-1">
                        {client.subText}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
