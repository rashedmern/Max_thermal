"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { HERO_VIDEO_CONFIG } from "@/config/videoConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroVideoSection() {
  const { language, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(HERO_VIDEO_CONFIG.muted);

  // Viewport-based Auto Play / Pause (IntersectionObserver)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play safely on enter viewport
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(() => {});
            }
            if (ambientVideoRef.current && ambientVideoRef.current.paused) {
              ambientVideoRef.current.play().catch(() => {});
            }
          } else {
            // Pause immediately on leave viewport
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
            if (ambientVideoRef.current && !ambientVideoRef.current.paused) {
              ambientVideoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: HERO_VIDEO_CONFIG.intersectionThreshold,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-full overflow-hidden pt-4 sm:pt-8 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 flex flex-col items-center select-none scroll-mt-24"
    >
      {/* 1. Hero Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Crisp, Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`text-3xl sm:text-5xl lg:text-6xl font-black text-[#182337] ${
            language === "bn"
              ? "tracking-normal leading-snug sm:leading-[1.22] py-1 font-bengali"
              : "tracking-tight leading-[1.08] font-sans"
          }`}
        >
          {t.hero.titleStart}{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF3E1D] to-[#E02600] pb-1">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        {/* Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={`text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal mt-3.5 sm:mt-4 ${
            language === "bn"
              ? "leading-relaxed tracking-normal font-bengali"
              : "leading-relaxed"
          }`}
        >
          {t.hero.subtitle}
        </motion.p>
      </div>

      {/* 2. Main Featured Video Player Frame */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl lg:max-w-6xl mt-8 sm:mt-10 rounded-3xl sm:rounded-[36px] overflow-hidden bg-[#182337] border-2 border-white/80 shadow-[0_24px_70px_rgba(255,90,0,0.16),0_12px_28px_rgba(0,0,0,0.08)] group"
      >
        <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
          {/* Ambient Video Background Blur (Fills widescreen container with live atmospheric light) */}
          <video
            ref={ambientVideoRef}
            src={HERO_VIDEO_CONFIG.sources[0]?.src}
            autoPlay={HERO_VIDEO_CONFIG.autoplay}
            muted
            loop={HERO_VIDEO_CONFIG.loop}
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-125 filter blur-3xl opacity-40 pointer-events-none"
          />

          {/* Warm Center Radiance Glow */}
          <div className="absolute inset-0 bg-radial from-[#FF5A00]/15 via-transparent to-black/60 pointer-events-none" />

          {/* Primary Video Player */}
          <video
            ref={videoRef}
            autoPlay={HERO_VIDEO_CONFIG.autoplay}
            muted={isMuted}
            loop={HERO_VIDEO_CONFIG.loop}
            playsInline
            preload="auto"
            className="relative z-10 w-full h-full object-cover shadow-2xl rounded-2xl"
          >
            {HERO_VIDEO_CONFIG.sources.map((src, index) => (
              <source key={index} src={src.src} type={src.type} />
            ))}
            Your browser does not support the video tag.
          </video>

          {/* Top-Left Facility Tag */}
          <div className="absolute top-3 sm:top-6 left-3 sm:left-6 z-20 flex items-center pointer-events-none">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold shadow-lg">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FF5A00] animate-pulse" />
              <span>{t.hero.facilityTag}</span>
            </div>
          </div>

          {/* Floating Sound/Volume Capsule Pill (Bottom-Right Only) */}
          <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 z-20">
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-300" />
                  <span>{t.hero.unmute}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FF5A00]" />
                  {/* Animated sound equalizer bars */}
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#FF5A00] animate-bounce" />
                    <span className="w-0.5 h-3 bg-[#FF5A00] animate-bounce delay-75" />
                    <span className="w-0.5 h-1.5 bg-[#FF5A00] animate-bounce delay-150" />
                  </div>
                  <span>{t.hero.mute}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
