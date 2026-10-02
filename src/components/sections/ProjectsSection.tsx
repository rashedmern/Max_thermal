"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize2, X, Building2, CheckCircle2 } from "lucide-react";
import {
  MEGA_PROJECTS,
  COMMERCIAL_PROJECTS,
  MegaProject,
  CommercialProject,
} from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";

interface LightboxItem {
  id: string;
  title: string;
  image: string;
  location: string;
  tag: string;
  status?: string;
  description?: string;
}

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<LightboxItem | null>(
    null
  );

  // Close on Escape key and lock body scroll when lightbox is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const openMegaProject = (proj: MegaProject) => {
    const trans = t.projects.megaProjects[proj.id];
    setSelectedProject({
      id: proj.id,
      title: trans?.title || proj.title,
      image: proj.image,
      location: trans?.location || proj.location,
      tag: trans?.supplyTag || proj.supplyTag,
      status: t.projects.statusNational,
      description:
        trans?.description ||
        `Supplying precision engineered thermal insulation and structural expansion solutions for ${proj.title}.`,
    });
  };

  const openCommercialProject = (proj: CommercialProject) => {
    const trans = t.projects.commercialProjects[proj.id];
    setSelectedProject({
      id: proj.id,
      title: trans?.title || proj.title,
      image: proj.image,
      location: trans?.location || proj.location,
      tag: trans?.tag || proj.tag,
      status: t.projects.supplyLabel,
      description: trans?.description || proj.description,
    });
  };

  return (
    <section
      id="projects"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-8 sm:pb-10 select-none scroll-mt-18 overflow-hidden"
      aria-label="Featured Projects and Infrastructure"
    >
      {/* 1. Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
        <span className="text-xs uppercase tracking-widest text-[#FF5A00] font-bold">
          {t.projects.sectionTag}
        </span>

        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mt-1 ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.1] font-sans"
          }`}
        >
          {t.projects.sectionTitle}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-1 sm:mt-1.5 max-w-2xl mx-auto">
          {t.projects.sectionSubtitle}
        </p>
      </div>

      {/* 2. Visual-First Full-Bleed Showcase Cards (3 Mega Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {MEGA_PROJECTS.map((proj) => {
          const trans = t.projects.megaProjects[proj.id];
          const title = trans?.title || proj.title;
          const location = trans?.location || proj.location;
          const supplyTag = trans?.supplyTag || proj.supplyTag;

          return (
            <div
              key={proj.id}
              onClick={() => openMegaProject(proj)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openMegaProject(proj);
              }}
              tabIndex={0}
              role="button"
              aria-label={`View fullscreen photo of ${title}`}
              className="group relative w-full h-[280px] sm:h-[340px] md:h-[370px] rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 bg-slate-900 border border-white/20 select-none"
            >
              {/* Full-bleed Photo with Smooth Zoom on Hover */}
              <Image
                src={proj.image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Cinematic Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/25 pointer-events-none" />

              {/* Top Floating Location & Status Chips */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between gap-2 pointer-events-none">
                {/* Left: Location Chip */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-white text-xs font-medium border border-white/15 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#FF8540]" />
                  <span>{location}</span>
                </div>

                {/* Right: Status Chip with Glowing Green Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-white text-xs font-semibold border border-white/15 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="tracking-wide text-[11px] uppercase">
                    {t.projects.statusNational}
                  </span>
                </div>
              </div>

              {/* Bottom Info: Bold Headline & Visual Supply Tag */}
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                  {title}
                </h3>

                <div className="flex items-center justify-between gap-2">
                  {/* Visual Pill Tag with Brand Orange Hover Glow */}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all duration-300 group-hover:bg-[#FF5A00]/25 group-hover:border-[#FF5A00]/60 group-hover:shadow-[0_0_20px_rgba(255,90,0,0.4)]">
                    {supplyTag}
                  </span>

                  {/* Inspect Button Indicator */}
                  <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#FF5A00] transition-all duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Additional Projects & Commercial Footprint Gallery */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200/80">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-4 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[#FF5A00] text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.projects.commercialTag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
              {t.projects.commercialTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed">
              {t.projects.commercialSubtitle}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 self-end">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>{t.projects.clickToViewHint}</span>
          </div>
        </div>

        {/* 4-Card Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {COMMERCIAL_PROJECTS.map((item) => {
            const trans = t.projects.commercialProjects[item.id];
            const title = trans?.title || item.title;
            const location = trans?.location || item.location;
            const tag = trans?.tag || item.tag;

            return (
              <div
                key={item.id}
                onClick={() => openCommercialProject(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    openCommercialProject(item);
                }}
                tabIndex={0}
                role="button"
                aria-label={`View fullscreen photo of ${title}`}
                className="group relative w-full h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-slate-900 border border-slate-200/20 select-none"
              >
                {/* Full-bleed Photo with Smooth Zoom */}
                <Image
                  src={item.image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/45 pointer-events-none" />

                {/* Top Location Chip */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-black/50 backdrop-blur-md text-white font-medium border border-white/15 shadow-sm">
                    {location}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-[#FF5A00] transition-all duration-200 shadow-sm">
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>

                {/* Bottom Details: Project Title & Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2.5 pointer-events-none">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-white transition-colors duration-200 line-clamp-2">
                    {title}
                  </h4>

                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/95 text-[11px] sm:text-xs font-semibold border border-white/20 transition-all duration-300 group-hover:bg-[#FF5A00]/30 group-hover:border-[#FF5A00]/70 group-hover:text-white shadow-sm">
                      {tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Compact & Screen-Fitting Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 overscroll-contain"
            style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              data-lenis-prevent
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative max-w-xl sm:max-w-2xl lg:max-w-3xl w-full max-h-[min(520px,86dvh)] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-white/20 shadow-2xl overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Prominent, High-Contrast & Always Visible */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/80 hover:bg-[#FF5A00] text-white border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
                aria-label="Close fullscreen view"
              >
                <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Compact Photo Frame */}
              <div className="relative w-full h-[180px] sm:h-[230px] md:h-[270px] max-h-[46dvh] bg-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Compact Modal Caption Bar */}
              <div className="p-3.5 sm:p-4 md:p-5 bg-slate-900/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                <div className="space-y-0.5 max-w-xl">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#FF8540] font-semibold">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>{selectedProject.location.replace(/^dY"?\s*/, "")}</span>
                    {selectedProject.status && (
                      <>
                        <span>•</span>
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                          {selectedProject.status}
                        </span>
                      </>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                    {selectedProject.title}
                  </h4>
                  {selectedProject.description && (
                    <p className="text-[11px] sm:text-xs text-slate-300/90 font-normal leading-relaxed line-clamp-2">
                      {selectedProject.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FF5A00] text-white text-[11px] sm:text-xs font-bold shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{selectedProject.tag}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

