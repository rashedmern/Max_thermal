import React from "react";
import Link from "next/link";

interface MaxThermalLogoProps {
  className?: string;
  inverted?: boolean;
}

export default function MaxThermalLogo({
  className = "",
  inverted = false,
}: MaxThermalLogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Max Thermal Homepage"
    >
      {/* 3D Stacked Thermal Sheets Isometric Icon matching Image 1 */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
        >
          {/* Bottom Sheet (Orange Thermal Barrier Layer) */}
          <g id="bottom-slab">
            {/* Left face */}
            <path
              d="M7 21.5L20 28V31.5L7 25V21.5Z"
              fill="#FF5A00"
            />
            {/* Right face */}
            <path
              d="M20 28L33 21.5V25L20 31.5V28Z"
              fill="#E04600"
            />
            {/* Top face */}
            <path
              d="M20 15L33 21.5L20 28L7 21.5L20 15Z"
              fill="#FFF0E6"
              stroke="#FF8A4D"
              strokeWidth="0.8"
            />
          </g>

          {/* Middle Sheet (White EPS / Cork Core Layer) */}
          <g id="middle-slab">
            {/* Left face */}
            <path
              d="M7 16.5L20 23V25.5L7 19V16.5Z"
              fill="#CBD5E1"
            />
            {/* Right face */}
            <path
              d="M20 23L33 16.5V19L20 25.5V23Z"
              fill="#94A3B8"
            />
            {/* Top face */}
            <path
              d="M20 10L33 16.5L20 23L7 16.5L20 10Z"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="0.8"
            />
          </g>

          {/* Top Sheet Frame (Navy Slate Structural Cap matching reference) */}
          <g id="top-frame">
            {/* Left face */}
            <path
              d="M7 11.5L20 18V20L7 13.5V11.5Z"
              fill="#334155"
            />
            {/* Right face */}
            <path
              d="M20 18L33 11.5V13.5L20 20V18Z"
              fill="#1E293B"
            />
            {/* Top open isometric frame */}
            <path
              d="M20 5L33 11.5L20 18L7 11.5L20 5Z"
              fill="#FFFFFF"
              stroke="#1E293B"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            {/* Inner accent recess */}
            <path
              d="M20 8.5L28.5 12.75L20 17L11.5 12.75L20 8.5Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="0.6"
            />
          </g>
        </svg>
      </div>

      {/* Typography matching reference */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-extrabold tracking-tight text-[15px] sm:text-[16px] leading-[1.15] font-sans ${
            inverted ? "text-white" : "text-[#182337]"
          }`}
        >
          MAX THERMAL
        </span>
        <span
          className={`text-[8px] sm:text-[8.5px] uppercase tracking-[0.16em] font-semibold leading-tight mt-0.5 ${
            inverted ? "text-slate-400" : "text-slate-500"
          }`}
        >
          EPS & CORK SHEET SOLUTIONS
        </span>
      </div>
    </Link>
  );
}
