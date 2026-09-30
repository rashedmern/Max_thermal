import React from "react";

export default function ThermalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Base Warm Porcelain Canvas */}
      <div className="absolute inset-0 bg-[#FFF5F0]" />

      {/* 2. Warm Radiant Mesh Glows matching Image 2 */}
      {/* Top-Right & Upper Right Intense Coral / Crimson Bloom */}
      <div
        className="absolute -top-[15%] -right-[10%] w-[85vw] h-[85vw] max-w-[1100px] max-h-[1100px] rounded-full blur-[90px] opacity-75"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, rgba(255, 96, 72, 0.55) 0%, rgba(255, 126, 105, 0.40) 30%, rgba(255, 175, 155, 0.22) 55%, rgba(255, 245, 240, 0) 75%)",
        }}
      />

      {/* Far Right Accentuation */}
      <div
        className="absolute top-[20%] right-[-5%] w-[60vw] h-[75vw] max-w-[800px] rounded-full blur-[100px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(255, 78, 52, 0.45) 0%, rgba(255, 140, 120, 0.25) 40%, rgba(255, 240, 235, 0) 70%)",
        }}
      />

      {/* Center & Upper Soft White Light Radiance */}
      <div
        className="absolute top-0 left-[15%] w-[70vw] h-[55vh] rounded-full blur-[80px] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 10%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 248, 244, 0.6) 45%, rgba(255, 240, 235, 0) 80%)",
        }}
      />

      {/* Lower Left Subtle Warm Glow */}
      <div
        className="absolute bottom-[-10%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] rounded-full blur-[110px] opacity-45"
        style={{
          background:
            "radial-gradient(circle at 35% 65%, rgba(255, 170, 145, 0.35) 0%, rgba(255, 215, 200, 0.2) 45%, rgba(255, 245, 240, 0) 75%)",
        }}
      />

      {/* 3. Architectural Fluted / Reeded Glass Vertical Ribbed Texture */}
      {/* Broad soft fluted ribs (24px repeat) */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.7) 0px,
            rgba(255, 255, 255, 0.35) 6px,
            rgba(255, 255, 255, 0.05) 12px,
            rgba(190, 70, 50, 0.08) 18px,
            rgba(255, 255, 255, 0.5) 24px
          )`,
          backgroundSize: "24px 100%",
        }}
      />

      {/* Fine 1px crisp vertical fluted pin-striping (8px / 24px grid) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.45) 0px,
            rgba(255, 255, 255, 0) 1px,
            transparent 1px,
            transparent 23px,
            rgba(180, 50, 30, 0.06) 23px,
            rgba(255, 255, 255, 0.45) 24px
          )`,
          backgroundSize: "24px 100%",
        }}
      />

      {/* Fine glass specular line highlights */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.8) 0px,
            rgba(255, 255, 255, 0.8) 1px,
            transparent 1px,
            transparent 12px
          )`,
          backgroundSize: "12px 100%",
        }}
      />

      {/* 4. Subtle Ambient Vignette / Edge Softener */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(255, 235, 225, 0.3) 100%)",
        }}
      />
    </div>
  );
}
