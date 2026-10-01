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
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 select-none scroll-mt-24 overflow-hidden"
      aria-label="Leadership and Executive Team"
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
          {t.team.sectionTitle}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
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

      {/* 3. Spacious Large-Width Bio Modal Dialog */}
      <AnimatePresence>
        {selectedMember && (
          <div data-lenis-prevent className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overscroll-contain" style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}>
            {/* Modal Backdrop (Soft dark frosted glass) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card Container: Large & Generous Width (max-w-4xl lg:max-w-5xl) */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-white/80 shadow-2xl overflow-hidden z-10 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label={language === "bn" ? "সদস্য বিবরণ বন্ধ করুন" : "Close team member details"}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Internal 2-Column Spacious Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Left Column (5 of 12 cols): Large Clean Photo + Experience */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div
                    className="relative w-full aspect-[4/5] min-h-[240px] sm:min-h-[340px] lg:min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF5EE] via-[#FFEADB]/40 to-[#FFF7F2] border border-slate-100 shadow-md"
                  >
                    <Image
                      src={selectedMember.image}
                      alt={modalName || ""}
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Clean Experience Line Below Photo */}
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-4 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/70">
                    {t.team.experienceLabel}:{" "}
                    <span className="text-slate-900 font-bold">
                      {modalExperience}
                    </span>
                  </p>
                </div>

                {/* Right Column (7 of 12 cols): Spacious Leadership Bio */}
                <div className="md:col-span-7 flex flex-col justify-center py-2">
                  {/* Full Name */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    {modalName}
                  </h3>

                  {/* Designation */}
                  <p className="text-base sm:text-lg font-semibold text-[#FF5A00] mt-1.5">
                    {modalDesignation}
                  </p>

                  {/* Clean Brand Orange Accent Underline */}
                  <div className="w-14 h-1 bg-[#FF5A00] rounded-full mt-3 mb-6" />

                  {/* Concise Realistic Bio Text */}
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
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
