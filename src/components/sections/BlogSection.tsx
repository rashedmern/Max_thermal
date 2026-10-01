"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  X,
  MessageSquareQuote,
  Sparkles,
  Clock,
} from "lucide-react";
import { BLOG_STORIES, BlogStory } from "@/data/blogData";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogSection() {
  const { language, t } = useLanguage();
  const [selectedStory, setSelectedStory] = useState<BlogStory | null>(null);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedStory(null);
      }
    };
    if (selectedStory) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedStory]);

  const selectedStoryTrans = selectedStory
    ? t.blog.stories[selectedStory.id]
    : null;
  const modalTitle = selectedStoryTrans?.title || selectedStory?.title;
  const modalTypeLabel =
    selectedStoryTrans?.typeLabel || selectedStory?.typeLabel;
  const modalExcerpt = selectedStoryTrans?.excerpt || selectedStory?.excerpt;

  return (
    <section
      id="learn"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 select-none overflow-hidden"
      aria-label="Learn About Insulation"
    >

      {/* 1. Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.1] font-sans"
          }`}
        >
          {t.blog.sectionTitle}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
          {t.blog.sectionSubtitle}
        </p>
      </div>

      {/* 2. Responsive 4-Column Story Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {BLOG_STORIES.map((story) => {
          const storyTrans = t.blog.stories[story.id];
          const title = storyTrans?.title || story.title;
          const excerpt = storyTrans?.excerpt || story.excerpt;
          const readTime = storyTrans?.readTime || story.readTime;

          return (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedStory(story);
                }
              }}
              className="group relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/90 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,90,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Thumbnail Container */}
                <div
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-xs mb-4"
                >
                  <Image
                    src={story.thumbnail}
                    alt={title}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#FF5A00] transition-colors duration-300 tracking-tight line-clamp-2 leading-snug">
                  {title}
                </h3>

                {/* Snippet */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 my-2.5 leading-relaxed font-normal">
                  {excerpt}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {readTime}
                </span>

                <span className="inline-flex items-center gap-1 font-bold text-[#FF5A00] group-hover:translate-x-1 transition-transform">
                  {t.blog.readStory}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Interactive Comic-Style Story Reader Dialog */}
      <AnimatePresence>
        {selectedStory && (
          <div data-lenis-prevent className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overscroll-contain" style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}>
            {/* Modal Backdrop (Soft dark frosted glass) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black/65 backdrop-blur-md"
            />

            {/* Modal Container: Large & Generous Width (max-w-4xl lg:max-w-5xl) */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/80 shadow-2xl overflow-hidden z-10 max-h-[calc(100dvh-2rem)] flex flex-col overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100 shrink-0">
                <div className="max-w-2xl pr-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEADB]/70 text-[#FF5A00] text-xs font-bold mb-2 border border-[#FF5A00]/25">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Visual Illustrated Story • {modalTypeLabel}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
                    {modalTitle}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedStory(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs"
                  aria-label="Close story reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Scrollable Comic Story Panels */}
              <div
                data-lenis-prevent
                className="overflow-y-auto overscroll-contain mt-6 pr-1 space-y-6 sm:space-y-8"
                style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
              >
                {/* Intro Excerpt Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F5] border border-[#FFEADB] text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="font-bold text-[#182337]">Story Premise: </span>
                  {modalExcerpt}
                </div>

                {/* Stack of Multi-Panel Illustrated Scenes */}
                {selectedStory.panels.map((panel, pIdx) => {
                  const panelTrans = selectedStoryTrans?.panels?.[pIdx];
                  const pTitle = panelTrans?.title || panel.title;
                  const pDialogueBn =
                    panelTrans?.dialogueBn || panel.dialogueBn;
                  const pDialogueEn =
                    panelTrans?.dialogueEn || panel.dialogueEn;
                  const pExplanation =
                    panelTrans?.explanation || panel.explanation;
                  const pKeyTakeaway =
                    panelTrans?.keyTakeaway || panel.keyTakeaway;

                  return (
                    <div
                      key={panel.panelNumber}
                      className="rounded-3xl border border-slate-200/80 overflow-hidden bg-slate-50/60 p-5 sm:p-7 shadow-xs"
                    >
                      {/* Scene Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#182337] text-white text-xs font-bold tracking-wide">
                          {t.blog.panelPrefix} #{panel.panelNumber}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                          {pTitle}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Left Side (5 of 12 cols): Comic Artwork Illustration */}
                        <div className="md:col-span-6">
                          <div
                            className="relative w-full aspect-[4/3] min-h-[220px] rounded-2xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200/60"
                            style={{ minHeight: "220px" }}
                          >
                            <Image
                              src={panel.image}
                              alt={pTitle}
                              fill
                              unoptimized
                              priority
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Right Side (6 of 12 cols): Narrative & Dialogue */}
                        <div className="md:col-span-6 flex flex-col justify-between space-y-3.5">
                          {/* Bengali Dialogue Balloon */}
                          <div className="bg-white p-4 rounded-2xl border border-[#FFEADB] shadow-2xs">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A00] flex items-center gap-1.5 mb-1.5">
                              <MessageSquareQuote className="w-3.5 h-3.5" />
                              {t.blog.dialogueBnLabel}
                            </span>
                            <p className="text-sm font-semibold text-[#182337] leading-relaxed italic">
                              &ldquo;{pDialogueBn}&rdquo;
                            </p>
                            <p className="text-xs text-slate-500 mt-2 font-normal">
                              <strong className="text-slate-700">
                                {t.blog.dialogueEnLabel}:
                              </strong>{" "}
                              &ldquo;{pDialogueEn}&rdquo;
                            </p>
                          </div>

                          {/* Narrative Engineering Explanation */}
                          <div>
                            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                              {t.blog.explanationLabel}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {pExplanation}
                            </p>
                          </div>

                          {/* Key Takeaway Chip */}
                          <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100">
                            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{pKeyTakeaway}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
