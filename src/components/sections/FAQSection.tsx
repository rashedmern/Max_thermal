"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faqData";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("export");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 select-none overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-[#FFEADB]/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#FF5A00]/10 blur-3xl pointer-events-none -z-10" />

      {/* 1. Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.1] font-sans"
          }`}
        >
          {t.faq.sectionTitle}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
          {t.faq.sectionSubtitle}
        </p>
      </div>

      {/* 2. Interactive Accordion Container */}
      <div className="w-full max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          const faqTrans = t.faq.items[item.id];
          const question = faqTrans?.question || item.question;
          const answer = faqTrans?.answer || item.answer;

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleItem(item.id);
                }
              }}
              aria-expanded={isOpen}
              className={`group w-full rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border transition-all duration-300 cursor-pointer ${
                isOpen
                  ? "bg-white border-[#FFEADB] shadow-[0_8px_28px_rgba(255,90,0,0.08)]"
                  : "bg-white/95 backdrop-blur-md border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200"
              }`}
            >
              {/* Trigger Row */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#FF5A00] transition-colors leading-snug">
                  {question}
                </h3>

                {/* Circular Toggle Button with 45° Smooth Rotation */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FF5A00] text-white rotate-45 shadow-sm"
                      : "bg-slate-100 text-slate-700 group-hover:bg-[#FFEADB] group-hover:text-[#FF5A00]"
                  }`}
                >
                  <Plus className="w-4 h-4 transition-transform duration-300" />
                </div>
              </div>

              {/* Smooth Expansion Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3.5 mt-3.5 border-t border-slate-100 text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
