"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { TEAM_MEMBERS, TeamMember } from "@/data/teamData";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamSection() {
  const { language, t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  const selectedMemTrans = selectedMember
    ? t.team.members[selectedMember.id]
    : null;
  const modalName = selectedMemTrans?.name || selectedMember?.name;
  const modalDesignation =
    selectedMemTrans?.designation || selectedMember?.designation;
  const modalExperience =
    selectedMemTrans?.experience || selectedMember?.experience;
  const modalBio = selectedMemTrans?.bio || selectedMember?.bio;

  return (
    <section
      id="team"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-20 pb-8 sm:pb-14 lg:pb-18 select-none overflow-hidden"
      aria-label="Leadership and Executive Team"
    >

      {/* 1. Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.2] font-bengali"
              : "tracking-tight leading-[1.1] font-sans"
          }`}
        >
          {t.team.sectionTitle}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-1 sm:mt-1.5 max-w-2xl mx-auto">
          {t.team.sectionSubtitle}
        </p>
      </div>

      {/* 2. Team Member Cards Grid (Responsive 4-Column Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {TEAM_MEMBERS.map((member) => {
          const memTrans = t.team.members[member.id];
          const name = memTrans?.name || member.name;
          const designation = memTrans?.designation || member.designation;

          return (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
              className="group relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/90 p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,90,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Photo Container: 100% Clean Image */}
              <div
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF5EE] via-[#FFEADB]/40 to-[#FFF7F2] border border-white/80 shadow-xs"
              >
                <Image
                  src={member.image}
                  alt={name}
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Typography & Details with Arrow Button on the Right Side of the Name */}
              <div className="w-full mt-4 flex items-center justify-between gap-3 text-left">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#FF5A00] transition-colors duration-300 tracking-tight truncate">
                    {name}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5 truncate">
                    {designation}
                  </p>

                  {/* Glowing Brand Orange Accent Line */}
                  <div className="w-8 h-0.5 bg-[#FF5A00] rounded-full mt-2 group-hover:w-14 transition-all duration-300" />
                </div>

                {/* Arrow Button Beside the Name on the Right */}
                <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#FF5A00] border border-black/[0.04] text-slate-700 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Compact & Screen-Fitting Bio Modal Dialog */}
      <AnimatePresence>
        {selectedMember && (
          <div
            data-lenis-prevent
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5 md:p-6 overscroll-contain"
            style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
          >
            {/* Modal Backdrop (Soft dark frosted glass) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card Container: Compact & Scaled for small laptop displays */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative max-w-xl sm:max-w-2xl lg:max-w-3xl w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-white/80 shadow-2xl overflow-hidden z-10 max-h-[min(540px,calc(100dvh-2rem))] overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
            >
              {/* Close Button - Always visible with prominent positioning */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#FFEADB] text-slate-600 hover:text-[#FF5A00] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label={language === "bn" ? "সদস্য বিবরণ বন্ধ করুন" : "Close team member details"}
              >
                <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Internal 2-Column Balanced Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 md:gap-7 items-center">
                {/* Left Column (sm:5 of 12 cols, md:4 of 12 cols): Clean Compact Photo + Experience */}
                <div className="sm:col-span-5 md:col-span-4 flex flex-col items-center">
                  <div className="relative w-full max-w-[170px] sm:max-w-[200px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF5EE] via-[#FFEADB]/40 to-[#FFF7F2] border border-slate-100 shadow-sm">
                    <Image
                      src={selectedMember.image}
                      alt={modalName || ""}
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 640px) 170px, 200px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Clean Experience Line Below Photo */}
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-2.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-center">
                    {t.team.experienceLabel}{" "}
                    <span className="text-slate-900 font-bold">
                      {modalExperience}
                    </span>
                  </p>
                </div>

                {/* Right Column (sm:7 of 12 cols, md:8 of 12 cols): Concise Leadership Bio */}
                <div className="sm:col-span-7 md:col-span-8 flex flex-col justify-center">
                  {/* Full Name */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug sm:leading-tight pr-8 sm:pr-0 ${
                      language === "bn" ? "font-bengali" : ""
                    }`}
                  >
                    {modalName}
                  </h3>

                  {/* Designation */}
                  <p className="text-xs sm:text-sm font-semibold text-[#FF5A00] mt-0.5 sm:mt-1">
                    {modalDesignation}
                  </p>

                  {/* Clean Brand Orange Accent Underline */}
                  <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-[#FF5A00] rounded-full mt-2 sm:mt-2.5 mb-2.5 sm:mb-3.5" />

                  {/* Concise Realistic Bio Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {modalBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

