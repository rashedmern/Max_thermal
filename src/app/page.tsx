import React from "react";
import Link from "next/link";
import HeroVideoSection from "@/components/sections/HeroVideoSection";
import OurJourneySection from "@/components/sections/OurJourneySection";
import {
  Layers,
  Box,
  Thermometer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Full-Width High-Impact Video Hero Section */}
      <HeroVideoSection />

      {/* 2. Our Journey Section */}
      <OurJourneySection />

      {/* 3. Featured Sheet Products Section */}
      <section
        id="products"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#FF5A00]/20 shadow-xs mb-3">
            <span className="text-xs uppercase tracking-widest text-[#FF5A00] font-bold">
              Engineered Product Catalog
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182337] tracking-tight">
            High-Performance Thermal &amp; Acoustic Sheets
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Custom-calibrated sheets manufactured under ISO 9001:2015 standards
            for commercial envelopes, cold storage chambers, and industrial acoustics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Product 1: EPS Insulation Sheets */}
          <div className="group rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(255,90,0,0.12)] transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFEADB] text-[#FF5A00] flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#182337] tracking-tight">
                Expanded Polystyrene (EPS)
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Closed-cell thermoplastic foam sheets offering permanent R-value
                stability, zero thermal degradation over time, and moisture resistance.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Available in Standard &amp; Flame Retardant (FR)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Precision CNC wire-cut sizing down to 5mm</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Ideal for cold rooms, roof decks, and precast walls</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Density: 15 – 35 kg/m³
              </span>
              <span className="text-xs font-bold text-[#FF5A00] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                View Specs &rarr;
              </span>
            </div>
          </div>

          {/* Product 2: High-Density Natural Cork */}
          <div className="group rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(255,90,0,0.12)] transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFEADB] text-[#FF5A00] flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#182337] tracking-tight">
                High-Density Natural Cork
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Sustainably harvested natural cork agglomerate sheets delivering
                unrivaled impact sound reduction (IIC rating) and vibration isolation under heavy machinery.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Naturally hypoallergenic, anti-fungal, zero rot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Sound decoupling under hardwood &amp; tile floors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>High recovery rate (&gt;90%) upon compression</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                100% Eco Agglomerate
              </span>
              <span className="text-xs font-bold text-[#FF5A00] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                View Specs &rarr;
              </span>
            </div>
          </div>

          {/* Product 3: MaxTherm Hybrid Composite */}
          <div className="group rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(255,90,0,0.12)] transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFEADB] text-[#FF5A00] flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform">
                <Thermometer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#182337] tracking-tight">
                MaxTherm Dual Composite
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Proprietary laminated hybrid sandwich integrating high-efficiency EPS core with resilient cork skin, offering both thermal envelope perfection and acoustic dampening.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Dual thermal + acoustic decoupling in single panel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Pre-bonded for rapid construction site installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span>Custom thickness laminations: 20mm – 150mm</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Hybrid Composite
              </span>
              <span className="text-xs font-bold text-[#FF5A00] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                View Specs &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical Performance Matrix */}
      <section
        id="technical"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="rounded-3xl bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-6 sm:p-10">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#FF5A00] font-bold">
              Engineering Benchmark
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182337] tracking-tight mt-1.5">
              Material Specification Comparison
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Verified ASTM &amp; ISO lab metrics for thermal conductivity, acoustic absorption, and structural load.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200/80 text-slate-500 font-semibold">
                  <th className="py-3 px-4">Performance Metric</th>
                  <th className="py-3 px-4 text-[#FF5A00]">Max Thermal Cork Sheet</th>
                  <th className="py-3 px-4">Max Thermal EPS Sheet</th>
                  <th className="py-3 px-4">Standard Mineral Wool</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    Thermal Conductivity (λ)
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#182337] bg-[#FFEADB]/40 rounded-lg">
                    0.036 W/m·K
                  </td>
                  <td className="py-3.5 px-4">0.033 W/m·K</td>
                  <td className="py-3.5 px-4 text-slate-500">0.044 W/m·K</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    Acoustic Absorption (NRC)
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#182337] bg-[#FFEADB]/40 rounded-lg">
                    0.85 (Supreme)
                  </td>
                  <td className="py-3.5 px-4">0.35 (Standard)</td>
                  <td className="py-3.5 px-4 text-slate-500">0.70</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    Moisture Resistance
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#182337] bg-[#FFEADB]/40 rounded-lg">
                    Suberin Waterproofing
                  </td>
                  <td className="py-3.5 px-4">&lt; 1.5% Volumetric</td>
                  <td className="py-3.5 px-4 text-slate-500">High Sag Under Humidity</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    Environmental Impact
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-[#FFEADB]/40 rounded-lg">
                    100% Carbon Negative
                  </td>
                  <td className="py-3.5 px-4">100% Recyclable</td>
                  <td className="py-3.5 px-4 text-slate-500">High Embodied Energy</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    Compressive Yield
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#182337] bg-[#FFEADB]/40 rounded-lg">
                    High Elastic Memory
                  </td>
                  <td className="py-3.5 px-4">Up to 350 kPa</td>
                  <td className="py-3.5 px-4 text-slate-500">&lt; 50 kPa (Collapsible)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Direct Supply & Quotation CTA Banner */}
      <section
        id="quote"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-28 scroll-mt-24 relative"
      >
        <span id="contact" className="sr-only" aria-hidden="true" />
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#182337] via-[#1E293B] to-[#0F172A] text-white p-8 sm:p-14 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF5A00]/25 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#FF8540]">
              Direct Factory Supply &amp; Custom Slicing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Request Your Custom Sizing &amp; Material Quotation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Connect directly with our engineering team for bulk wholesale pricing,
              custom CNC profile cutting, project thermal calculations, or certified test samples.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="#contact"
                className="rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white px-8 py-3.5 text-sm font-semibold shadow-[0_6px_20px_rgba(255,90,0,0.4)] transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Request Instant Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-400">
                Container loads &amp; nationwide project dispatch
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
