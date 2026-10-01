"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  CheckCircle2,
  Maximize2,
  Flame,
  Check,
} from "lucide-react";
import {
  PRODUCTS_DATA,
  ProductId,
} from "@/data/productsData";
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
  const productTitle = productTrans?.title || activeProduct.shortTitle || activeProduct.name;
  const bulletPoints = productTrans?.bullets || activeProduct.bulletPoints;

  return (
    <section
      id="products"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 select-none scroll-mt-24 overflow-hidden"
      aria-label="Engineered Products and Technical Specifications"
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
          {t.products.sectionTitle}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
          {t.products.sectionSubtitle}
        </p>
      </div>

      {/* 2. Floating Product Tab Selector (Smooth Horizontally Scrollable on Mobile) */}
      <div
        data-lenis-prevent
        className="w-full max-w-full overflow-x-auto overscroll-contain no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2 mb-8 sm:mb-10 px-4 sm:px-0"
        style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
      >
        <div className="flex sm:justify-center w-max min-w-full sm:min-w-0 mx-auto">
          <div
            className="inline-flex items-center p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex-nowrap shrink-0"
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
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 select-none whitespace-nowrap shrink-0 cursor-pointer ${
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

      {/* 3. Clean, Compact Showcase Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/80 shadow-sm mb-10 sm:mb-12 relative overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 items-center"
          >
            {/* Left: Product Image - Clean & Compact */}
            <div className="md:col-span-5 relative w-full h-[220px] sm:h-[250px] md:h-[265px] rounded-2xl overflow-hidden bg-slate-100 shadow-2xs group">
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
            </div>

            {/* Right: Crisp Essentials & Quick Points - Vertically Centered */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              {/* Product Title: Concise, bold heading */}
              <h3 className="text-xl sm:text-2xl font-black text-[#182337] tracking-tight">
                {productTitle}
              </h3>

              {/* 3 to 4 Short, Informative Bullet Points */}
              <div className="space-y-2.5">
                {bulletPoints.map((bp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-slate-700 leading-snug"
                  >
                    <span className="text-[#FF5A00] font-bold text-xs shrink-0 mt-0.5 select-none">
                      ✔
                    </span>
                    <span>
                      <strong className="font-semibold text-slate-900">
                        {bp.title}
                      </strong>
                      <span className="text-slate-400 mx-1.5">—</span>
                      <span className="text-slate-600">{bp.detail}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Dynamic Technical Specification Showcase Hub */}
      <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.05)] p-6 sm:p-10 relative overflow-hidden">

        {/* Specifications Header */}
        <div className="pb-6 border-b border-slate-200/80">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182337] tracking-tight">
            {productTitle} {t.products.specSuffix}
          </h3>
        </div>

        {/* Dynamic Spec Content Area with AnimatePresence */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {/* TAB 1: EPS Blocks */}
            {activeId === "eps-blocks" && (
              <motion.div
                key="eps-blocks"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* 4 Dimension Cards */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-4">
                    {t.products.blocks.dimensionsHeader}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t.products.blocks.dimensions.map((dim) => (
                      <div
                        key={dim.unit}
                        className="rounded-2xl bg-[#FFF9F5] border border-[#FFEADB] p-4 flex flex-col justify-between"
                      >
                        <span className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">
                          {dim.unit}
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-[#182337] tracking-tight my-2">
                          {dim.dimensions}
                        </div>
                        <span className="text-[11px] text-slate-500 leading-snug">
                          {dim.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Properties & Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Callout */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#182337] to-[#0F172A] text-white p-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-3">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FF8540]" />
                        <span>{t.products.blocks.calloutBadge}</span>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white leading-snug">
                        &ldquo;{t.products.blocks.callout}&rdquo;
                      </p>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {t.products.blocks.calloutSub}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span>{t.products.blocks.densityRangeLabel}</span>
                      <span className="font-bold text-white">
                        {t.products.blocks.densityRangeVal}
                      </span>
                    </div>
                  </div>

                  {/* Right Core Applications */}
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                        {t.products.blocks.usesHeader}
                      </h4>
                      <ul className="space-y-2.5">
                        {t.products.blocks.uses.map((use) => (
                          <li
                            key={use}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{t.products.blocks.standardsLabel}</span>
                      <span className="font-bold text-[#182337]">
                        {t.products.blocks.standardsVal}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: EPS Sheets */}
            {activeId === "eps-sheets" && (
              <motion.div
                key="eps-sheets"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* 4 Metric Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/60 p-4">
                    <span className="text-xs uppercase font-bold text-slate-400">
                      {t.products.sheets.metric1Label}
                    </span>
                    <div className="text-lg sm:text-xl font-black text-[#182337] mt-1.5">
                      {t.products.sheets.metric1Val}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {t.products.sheets.metric1Sub}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/60 p-4">
                    <span className="text-xs uppercase font-bold text-slate-400">
                      {t.products.sheets.metric2Label}
                    </span>
                    <div className="text-lg sm:text-xl font-black text-[#182337] mt-1.5">
                      {t.products.sheets.metric2Val}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {t.products.sheets.metric2Sub}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/60 p-4">
                    <span className="text-xs uppercase font-bold text-slate-400">
                      {t.products.sheets.metric3Label}
                    </span>
                    <div className="text-lg sm:text-xl font-black text-[#182337] mt-1.5">
                      {t.products.sheets.metric3Val}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {t.products.sheets.metric3Sub}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/60 p-4">
                    <span className="text-xs uppercase font-bold text-slate-400">
                      {t.products.sheets.metric4Label}
                    </span>
                    <div className="text-lg sm:text-xl font-black text-[#182337] mt-1.5">
                      {t.products.sheets.metric4Val}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {t.products.sheets.metric4Sub}
                    </span>
                  </div>
                </div>

                {/* Popular Thickness Matrix */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                    {t.products.sheets.matrixHeader}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {t.products.sheets.popularList.map((item) => (
                      <div
                        key={item.thickness}
                        className={`rounded-2xl p-4 border transition-all ${
                          item.isPopular
                            ? "bg-[#FFF9F5] border-[#FF5A00]/40 shadow-xs"
                            : "bg-white border-slate-200/70"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-extrabold text-base text-[#182337]">
                            {item.thickness}
                          </span>
                          {item.isPopular && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FF5A00] text-white px-2 py-0.5 rounded-full">
                              {t.products.sheets.popularBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          {item.application}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thermal Specs & Compliance List */}
                <div className="rounded-2xl bg-slate-50/80 border border-slate-200/60 p-5 sm:p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#FF5A00]" />
                      <span className="text-xs font-bold text-[#182337] uppercase tracking-wider">
                        {t.products.sheets.thermalHeader}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                      {t.products.sheets.thermalText}
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 font-semibold flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{t.products.sheets.permanentRValue}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: MuriBall / Thermocol Beads */}
            {activeId === "muriball" && (
              <motion.div
                key="muriball"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* 6 Bead Size Cards */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400">
                      {t.products.muriball.header}
                    </h4>
                    <span className="text-xs font-semibold text-[#FF5A00]">
                      {t.products.muriball.badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.products.muriball.grades.map((grade) => (
                      <div
                        key={grade.code}
                        className="rounded-2xl bg-white border border-slate-200/80 p-5 hover:border-[#FF5A00]/40 transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-black text-[#182337]">
                              {grade.code}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#FFEADB] text-[#FF5A00] text-xs font-bold">
                              {grade.diameter}
                            </span>
                          </div>

                          <div className="text-xs font-bold text-slate-800">
                            {grade.washRecipe}
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-snug">
                            {grade.recommendedFor}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <span>{language === "bn" ? "ঘর্ষণ মাত্রা:" : "Abrasion Effect:"}</span>
                          <span className="font-semibold text-[#182337]">
                            {grade.abrasionLevel}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging & Benefits Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-[#FFF9F5] border border-[#FFEADB] p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="w-4 h-4 text-[#FF5A00]" />
                      <span className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">
                        {t.products.muriball.packagingTitle}
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#182337] leading-snug">
                      {t.products.muriball.packagingFormat}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {t.products.muriball.packagingDesc}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                      {t.products.muriball.benefitsTitle}
                    </h4>
                    <ul className="space-y-2">
                      {t.products.muriball.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: Raw Unexpanded EPS Beads */}
            {activeId === "raw-beads" && (
              <motion.div
                key="raw-beads"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Tech Comparison Table */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                    {t.products.rawBeads.tableHeader}
                  </h4>
                  <div className="overflow-x-auto w-full block rounded-2xl border border-slate-200/80 bg-white">
                    <table className="w-full min-w-[540px] text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-semibold">
                          <th className="py-3 px-4">{t.products.rawBeads.thGrade}</th>
                          <th className="py-3 px-4">{t.products.rawBeads.thSize}</th>
                          <th className="py-3 px-4 text-[#FF5A00]">
                            {t.products.rawBeads.thDensity}
                          </th>
                          <th className="py-3 px-4">{t.products.rawBeads.thExpansion}</th>
                          <th className="py-3 px-4">{t.products.rawBeads.thApp}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                        {t.products.rawBeads.grades.map((grade) => (
                          <tr
                            key={grade.code}
                            className="hover:bg-slate-50/50 transition-colors"
                          >
                            <td className="py-3.5 px-4 font-bold text-[#182337]">
                              {grade.code}
                            </td>
                            <td className="py-3.5 px-4">{grade.particleSize}</td>
                            <td className="py-3.5 px-4 font-bold text-[#182337] bg-[#FFEADB]/30">
                              {grade.expandedDensity}
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-900">
                              {grade.expansionFactor}
                            </td>
                            <td className="py-3.5 px-4 text-xs text-slate-600">
                              {grade.primaryApplications}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Packaging Tiers & Gas Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-3">
                      {t.products.rawBeads.packagingTitle}
                    </h4>
                    <ul className="space-y-2.5">
                      {t.products.rawBeads.packagingTiers.map((tier) => (
                        <li
                          key={tier}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <Package className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                          <span>{tier}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-400 mb-2">
                        {t.products.rawBeads.blowingAgentTitle}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t.products.rawBeads.blowingAgentDesc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-500">
                      {t.products.rawBeads.shelfLifeLabel}{" "}
                      <span className="font-bold text-[#182337]">
                        {t.products.rawBeads.shelfLifeVal}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
