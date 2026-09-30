"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import {
  JOURNEY_BENTO_DATA,
  JOURNEY_MILESTONES,
  type BentoCardData,
} from "@/data/journeyData";

/**
 * Clean, Full-Bleed Product Bento Card
 * Smooth Apple-style elevation, 700ms image zoom, and unobtrusive typography
 */
function BentoProductCard({
  card,
  className,
  priority = false,
}: {
  card: BentoCardData;
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
          {card.chip}
        </span>
      </div>

      {/* 3. Subtle Bottom Shadow Gradient & Clean Typography (Unobstructed View) */}
      <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 sm:pb-6 px-5 sm:px-7 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-end justify-between gap-4 z-10 pointer-events-none">
        <div className="max-w-xl">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
            {card.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/90 font-normal mt-1 leading-snug line-clamp-2">
            {card.subtitle}
          </p>
        </div>

        {/* Interactive Action Pill Button */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-md group-hover:bg-[#FF5A00] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
          <span>View Specs</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default function OurJourneySection() {
  const { mainCard, topRightCard, bottomRightCard } = JOURNEY_BENTO_DATA;

  return (
    <section
      id="our-journey"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 select-none scroll-mt-24"
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
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.08] font-sans">
          Our <span className="text-[#FF5A00]">Journey</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-3.5 sm:mt-4 max-w-2xl mx-auto">
          From Demra, Dhaka, we supply EPS products for construction, packaging,
          garments, industrial use and trading partners across Bangladesh.
        </p>
      </motion.div>

      {/* 2. Bento Showcase Grid (Full-Bleed Product Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Main Card: Precision EPS Sheets */}
        <div className="lg:col-span-7">
          <BentoProductCard
            card={mainCard}
            priority={true}
            className="h-[380px] sm:h-[460px] lg:h-[500px]"
          />
        </div>

        {/* Right Stacked Column: MuriBall + Protective Packaging */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <BentoProductCard
            card={topRightCard}
            className="h-[210px] sm:h-[238px]"
          />
          <BentoProductCard
            card={bottomRightCard}
            className="h-[210px] sm:h-[238px]"
          />
        </div>
      </div>

      {/* 3. Interactive Milestone Timeline Bar (Bottom Section) */}
      <div className="relative mt-14 sm:mt-20">
        {/* Section Mini Label */}
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-4 h-4 text-[#FF5A00]" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#182337]">
            Historical Growth Milestones (2010 – Present)
          </span>
        </div>

        {/* Connected Horizontal Rail (Desktop only) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[62px] left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-500/20 via-[#FF5A00]/30 to-[#FF5A00]/60 z-0 pointer-events-none"
        />

        {/* 5 Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              className="group relative bg-white/85 hover:bg-white backdrop-blur-md rounded-2xl p-5 border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,90,0,0.12)] hover:border-[#FF5A00]/40 hover:-translate-y-2 transition-all duration-400 cursor-default flex flex-col justify-between"
            >
              <div>
                {/* Active Glowing Dot + Ping Indicator */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="relative flex items-center justify-center w-3 h-3">
                    <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping" />
                    <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-[#FF5A00] transition-colors">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Period & Title */}
                <div className="text-base sm:text-lg font-black text-[#0F172A] group-hover:text-[#FF5A00] transition-colors tracking-tight font-sans">
                  {milestone.period}
                </div>
                <div className="text-xs font-bold text-slate-700 mt-0.5 tracking-tight">
                  {milestone.title}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed mt-2.5">
                  {milestone.description}
                </p>
              </div>

              {/* Bottom Highlight Tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#FF5A00] transition-colors">
                  {milestone.highlight}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#FF5A00] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
