"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { INDUSTRY_SECTORS, IndustrySector } from "@/data/industryData";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustrySection() {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("construction");

  const activeSector: IndustrySector =
    INDUSTRY_SECTORS.find((s) => s.id === activeId) || INDUSTRY_SECTORS[0];

  const sectorTrans = t.industry.sectors[activeSector.id];
  const sectorTitle = sectorTrans?.title || activeSector.title;
  const sectorHighlights = sectorTrans?.highlights || activeSector.keyHighlights;

  return (
    <section
      id="industry"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 select-none scroll-mt-24 overflow-hidden"
      aria-label="Industries We Power"
    >

      {/* 1. Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.1] font-sans"
          }`}
        >
          {t.industry.sectionTitle}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
          {t.industry.sectionSubtitle}
        </p>
      </div>

      {/* 2. Spacious Card-Style Sector Switcher Hub */}
      <div className="w-full max-w-4xl mx-auto mb-10 sm:mb-12 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-md p-3 sm:p-4 md:p-5">
        <div
          role="tablist"
          aria-label="Industry Sector Switcher"
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3"
        >
          {INDUSTRY_SECTORS.map((sector) => {
            const isSelected = activeId === sector.id;
            const tabTrans = t.industry.sectors[sector.id];
            const tabLabel = tabTrans?.tabLabel || sector.tabLabel;

            return (
              <button
                key={sector.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(sector.id)}
                className={`relative px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base rounded-xl font-medium transition-all duration-200 cursor-pointer select-none text-center ${
                  isSelected
                    ? "bg-[#FF5A00] text-white shadow-sm scale-[1.02] border border-[#FF5A00]"
                    : "bg-neutral-100/80 hover:bg-neutral-200/70 text-neutral-700 border border-neutral-200/40"
                }`}
              >
                <span>{tabLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Clean Full-Width Showcase Card (Balanced 50/50 2-Column Split) */}
      <div className="w-full max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Side — 100% Clean Image (No text overlay, no tags) */}
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden shadow-xs bg-slate-100 group min-h-[220px] sm:min-h-[300px]"
            >
              <Image
                src={activeSector.image}
                alt={sectorTitle}
                fill
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right Side — Clean & Minimal (Headline + 3 Bullet Points) */}
            <div className="flex flex-col justify-center py-2 lg:py-4">
              {/* Bold Dark Slate Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                {sectorTitle}
              </h3>

              {/* 3 Clean, Informative Bullet Points */}
              <div className="space-y-4 sm:space-y-5 mt-6 sm:mt-7">
                {sectorHighlights.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-3.5 text-sm sm:text-base text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
