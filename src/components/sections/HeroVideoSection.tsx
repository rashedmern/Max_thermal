"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { HERO_VIDEO_CONFIG } from "@/config/videoConfig";

export default function HeroVideoSection() {
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
      className="relative w-full pt-4 sm:pt-8 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 flex flex-col items-center select-none scroll-mt-24"
    >
      {/* 1. Hero Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Crisp, Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#182337] tracking-tight leading-[1.08] font-sans"
        >
          Precision Cork &amp; EPS{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF3E1D] to-[#E02600]">
            Thermal Sheet Manufacturing
          </span>
        </motion.h1>

        {/* Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mt-3.5 sm:mt-4"
        >
          Watch how raw sustainable materials are engineered into
          high-performance thermal insulation and acoustic barriers.
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
        <div className="relative w-full aspect-[16/9] min-h-[320px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
          {/* Ambient Video Background Blur (Fills widescreen container with live atmospheric light) */}
          <video
            ref={ambientVideoRef}
            src={HERO_VIDEO_CONFIG.sources[0]?.src}
            muted
            autoPlay={HERO_VIDEO_CONFIG.autoplay}
            loop={HERO_VIDEO_CONFIG.loop}
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-125 filter blur-3xl opacity-40 pointer-events-none"
          />

          {/* Warm Center Radiance Glow */}
          <div className="absolute inset-0 bg-radial from-[#FF5A00]/15 via-transparent to-black/60 pointer-events-none" />

          {/* Primary Video Player */}
          <video
            ref={videoRef}
            playsInline
            autoPlay={HERO_VIDEO_CONFIG.autoplay}
            loop={HERO_VIDEO_CONFIG.loop}
            muted={isMuted}
            className="relative z-10 h-full max-h-full w-auto max-w-full object-contain shadow-2xl rounded-2xl"
          >
            {HERO_VIDEO_CONFIG.sources.map((src, index) => (
              <source key={index} src={src.src} type={src.type} />
            ))}
            Your browser does not support the video tag.
          </video>

          {/* Top-Left Facility Tag */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-pulse" />
              <span>MAX THERMAL • PRODUCTION FACILITY</span>
            </div>
          </div>

          {/* Floating Sound/Volume Capsule Pill (Bottom-Right Only) */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-slate-300" />
                  <span>Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#FF5A00]" />
                  {/* Animated sound equalizer bars */}
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#FF5A00] animate-bounce" />
                    <span className="w-0.5 h-3 bg-[#FF5A00] animate-bounce delay-75" />
                    <span className="w-0.5 h-1.5 bg-[#FF5A00] animate-bounce delay-150" />
                  </div>
                  <span>Mute</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
