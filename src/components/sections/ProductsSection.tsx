"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  CheckCircle2,
  Maximize2,
  Flame,
  ArrowRight,
  Check,
} from "lucide-react";
import { PRODUCTS_DATA, ProductId } from "@/data/productsData";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsSection() {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState<ProductId>("eps-blocks");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const { products } = PRODUCTS_DATA;

  const activeProduct =
    products.find((p) => p.id === activeId) || products[0];

  const currentImage = imgErrors[activeProduct.id]
    ? activeProduct.fallbackImage
    : activeProduct.image;

  const getTabLabel = (id: ProductId) => {
    switch (id) {
      case "eps-blocks":
        return t.products.tabs.blocks;
      case "eps-sheets":
        return t.products.tabs.sheets;
      case "muriball":
        return t.products.tabs.muriball;
      case "raw-beads":
        return t.products.tabs.rawBeads;
      default:
        return "";
    }
  };

  const productTrans = t.products.items[activeProduct.id];
  const productTitle =
    productTrans?.title || activeProduct.shortTitle || activeProduct.name;
  const bulletPoints = productTrans?.bullets || activeProduct.bulletPoints;

  const getProductBadge = () => {
    switch (activeProduct.id) {
      case "eps-blocks":
        return language === "bn"
          ? "কারখানা থেকে সরাসরি • ১০০% ভার্জিন ইপিএস"
          : "Factory Direct • 100% Virgin EPS";
      case "eps-sheets":
        return language === "bn"
          ? "প্রিসিশন কাট • কাস্টম পুরুত্ব"
          : "Precision Cut • Custom Thickness";
      case "muriball":
        return language === "bn"
          ? "১০০% ভার্জিন • ফুড-গ্রেড বিশুদ্ধতা"
          : "100% Virgin • Food-Grade Purity";
      case "raw-beads":
        return language === "bn"
          ? "উচ্চ সম্প্রসারণ • ৫০ গুণ ফলন"
          : "High Expansion • Up to 50x Yield";
      default:
        return "";
    }
  };

  const getVisualSpecPills = () => {
    switch (activeProduct.id) {
      case "eps-blocks":
        return [
          {
            icon: Maximize2,
            label: language === "bn" ? "পরিমাপ" : "Size",
            val: language === "bn" ? "২০০০ × ১০০০ × ৫০০ মিমি" : "2000 × 1000 × 500 mm",
          },
          {
            icon: Package,
            label: language === "bn" ? "ঘনত্ব" : "Density",
            val: language === "bn" ? "১২ – ৩৫ কেজি/মি³" : "12 – 35 kg/m³",
          },
          {
            icon: CheckCircle2,
            label: language === "bn" ? "মান" : "Standard",
            val: "ASTM C578",
          },
        ];
      case "eps-sheets":
        return [
          {
            icon: Maximize2,
            label: language === "bn" ? "পুরুত্ব" : "Thickness",
            val: language === "bn" ? "১০ – ৫০০ মিমি" : "10 – 500 mm",
          },
          {
            icon: Package,
            label: language === "bn" ? "ঘনত্ব" : "Density",
            val: language === "bn" ? "১২ – ৩৫ কেজি/মি³" : "12 – 35 kg/m³",
          },
          {
            icon: Flame,
            label: language === "bn" ? "থার্মাল" : "Thermal",
            val: "λ = 0.033 W/m·K",
          },
        ];
      case "muriball":
        return [
          {
            icon: Maximize2,
            label: language === "bn" ? "ক্যালিবার" : "Caliber",
            val: language === "bn" ? "২ – ১৪ মিমি" : "2 – 14 mm",
          },
          {
            icon: Package,
            label: language === "bn" ? "গ্রেড" : "Grade",
            val: language === "bn" ? "১০০% ভার্জিন" : "100% Virgin",
          },
          {
            icon: CheckCircle2,
            label: language === "bn" ? "উৎপাদন" : "Capacity",
            val: language === "bn" ? "২,০০০+ কেজি/দিন" : "2,000+ kg/day",
          },
        ];
      case "raw-beads":
        return [
          {
            icon: Maximize2,
            label: language === "bn" ? "দানা সাইজ" : "Particle",
            val: language === "bn" ? "০.৬ – ১.৬ মিমি" : "0.6 – 1.6 mm",
          },
          {
            icon: Package,
            label: language === "bn" ? "ব্লোয়িং" : "Blowing",
            val: language === "bn" ? "পেন্টেন ৫.৫% – ৬.৫%" : "5.5% – 6.5% Pentane",
          },
          {
            icon: CheckCircle2,
            label: language === "bn" ? "সম্প্রসারণ" : "Expansion",
            val: language === "bn" ? "৫০ গুণ (50x)" : "Up to 50x Yield",
          },
        ];
      default:
        return [];
    }
  };

  return (
    <section
      id="products"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-8 sm:pb-10 select-none scroll-mt-18 overflow-hidden"
      aria-label="Engineered Products and Technical Specifications"
    >
      {/* 1. Compact Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.1] font-sans"
          }`}
        >
          {t.products.sectionTitle}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-1 sm:mt-1.5 max-w-2xl mx-auto">
          {t.products.sectionSubtitle}
        </p>
      </div>

      {/* 2. Floating Product Tab Selector */}
      <div
        data-lenis-prevent
        className="w-full max-w-full overflow-x-auto overscroll-contain no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1 mb-3 sm:mb-4 px-4 sm:px-0"
        style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
      >
        <div className="flex sm:justify-center w-max min-w-full sm:min-w-0 mx-auto">
          <div
            className="inline-flex items-center p-1 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex-nowrap shrink-0"
            role="tablist"
            aria-label="Product Showcase Tabs"
          >
            {products.map((product) => {
              const isSelected = product.id === activeId;
              return (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(product.id)}
                  className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 select-none whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? "text-[#182337] font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="product-tab"
                      className="absolute inset-0 bg-[#FFEADB] rounded-full shadow-[0_2px_8px_rgba(255,90,0,0.12)] border border-[#FFD0B0]/60 -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{getTabLabel(product.id)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. ONE Unified Single Screen-Fitting Visual Hero Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 items-center"
          >
            {/* Left: Visual Hero Photo with High-Contrast Floating Badge */}
            <div className="md:col-span-5 relative w-full h-[240px] sm:h-[280px] lg:h-[310px] rounded-2xl overflow-hidden bg-slate-100 shadow-xs group">
              <Image
                src={currentImage}
                alt={productTitle}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() =>
                  setImgErrors((prev) => ({ ...prev, [activeProduct.id]: true }))
                }
              />

              {/* Floating High-Contrast Badge */}
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-lg pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
                <span>{getProductBadge()}</span>
              </div>
            </div>

            {/* Right: At-a-Glance Visual Specs & Punchy Checkmarks */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-3.5">
              {/* Product Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#182337] tracking-tight">
                {productTitle}
              </h3>

              {/* Quick Visual Spec Badges for Industrial Buyers */}
              <div className="flex flex-wrap items-center gap-2">
                {getVisualSpecPills().map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF5EE] border border-[#FFD0B0]/70 text-[#182337] text-xs font-semibold shadow-2xs"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                      <span className="text-slate-500 text-[11px]">{pill.label}:</span>
                      <span className="font-bold text-slate-900">{pill.val}</span>
                    </div>
                  );
                })}
              </div>

              {/* 3 Short, Punchy Checkmark Points */}
              <div className="space-y-2 pt-1">
                {bulletPoints.slice(0, 3).map((bp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-slate-700 leading-snug"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#FFEADB] text-[#FF5A00] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs select-none">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>
                      <strong className="font-bold text-slate-900">
                        {bp.title}
                      </strong>
                      <span className="text-slate-300 mx-1.5 font-normal">&mdash;</span>
                      <span className="text-slate-600">{bp.detail}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Instant CTA Button inside Card */}
              <div className="pt-2">
                <Link
                  href={`/quote?product=${activeProduct.id}`}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(255,90,0,0.3)] hover:shadow-[0_6px_22px_rgba(255,90,0,0.45)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>
                    {language === "bn"
                      ? "সরাসরি অর্ডার / কোটেশন নিন"
                      : "Get Direct Factory Quote"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

