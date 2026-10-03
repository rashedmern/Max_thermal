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

  // Guaranteed Autoplay on Initial Mount
  useEffect(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;

    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, will play on canplay or first scroll
        });
      }
    }

    if (ambient) {
      ambient.muted = true;
      ambient.defaultMuted = true;
      ambient.load();
      ambient.play().catch(() => {});
    }
  }, []);

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
            // Safely pause when scrolled out of view (prevent interrupting freshly loading video)
            if (videoRef.current && !videoRef.current.paused && videoRef.current.readyState >= 2) {
              videoRef.current.pause();
            }
            if (ambientVideoRef.current && !ambientVideoRef.current.paused && ambientVideoRef.current.readyState >= 2) {
              ambientVideoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: HERO_VIDEO_CONFIG.intersectionThreshold ?? 0.1,
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
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-14 lg:pt-18 pb-8 sm:pb-14 lg:pb-18 select-none overflow-hidden"
    >
      {/* 1. Hero Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Crisp, Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-[#182337] ${
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
          className={`text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal mt-2 sm:mt-3 ${
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
        className="relative w-full max-w-7xl h-[68vh] sm:h-[78vh] md:h-[82vh] lg:h-[86vh] min-h-[460px] sm:min-h-[540px] mt-5 sm:mt-7 mx-auto rounded-3xl sm:rounded-[36px] overflow-hidden bg-[#182337] border-2 border-white/80 shadow-[0_24px_70px_rgba(255,90,0,0.16),0_12px_28px_rgba(0,0,0,0.08)] group"
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
          {/* Ambient Video Background Blur (Fills widescreen container with live atmospheric light) */}
          <video
            ref={ambientVideoRef}
            src="/videos/ugc_video.mp4"
            poster={HERO_VIDEO_CONFIG.poster}
            autoPlay
            muted
            defaultMuted
            loop
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
            src="/videos/ugc_video.mp4"
            poster={HERO_VIDEO_CONFIG.poster}
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            onCanPlay={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.play().catch(() => {});
            }}
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

