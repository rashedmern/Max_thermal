"use client";

import React from "react";
import Link from "next/link";
import HeroVideoSection from "@/components/sections/HeroVideoSection";
import OurJourneySection from "@/components/sections/OurJourneySection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IndustrySection from "@/components/sections/IndustrySection";
import TeamSection from "@/components/sections/TeamSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <div className="w-full max-w-full overflow-x-clip flex flex-col items-center">
      {/* 1. Full-Width High-Impact Video Hero Section */}
      <HeroVideoSection />

      {/* 2. Our Journey Section */}
      <OurJourneySection />

      {/* 3. Engineered Products & Technical Specifications Section */}
      <ProductsSection />

      {/* 4. Featured Projects & Landmark Infrastructure Section */}
      <ProjectsSection />

      {/* 5. Industries We Power (Industry Applications Hub) */}
      <IndustrySection />

      {/* 6. Leadership & Executive Team Section */}
      <TeamSection />

      {/* 7. Learn About Insulation / Comic Blog Section */}
      <BlogSection />

      {/* 8. Frequently Asked Questions (FAQ) Section */}
      <FAQSection />

      {/* 9. Direct Supply & Quotation CTA Banner */}
      <section
        id="quote"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14 sm:pb-20 scroll-mt-18 relative overflow-hidden"
      >
        <span id="contact" className="sr-only" aria-hidden="true" />
        <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-xl border border-white/90 text-[#0F172A] p-8 sm:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#FF5A00]">
              {t.quote.badge}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-[#0F172A] ${
                language === "bn"
                  ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
                  : "tracking-tight"
              }`}
            >
              {t.quote.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              {t.quote.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/quote"
                className="rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white px-8 py-3.5 text-sm font-semibold shadow-[0_6px_20px_rgba(255,90,0,0.35)] transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>{t.quote.button}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
