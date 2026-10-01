"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, Clock } from "lucide-react";
import MaxThermalLogo from "./MaxThermalLogo";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const { getLenis } = useSmoothScroll();

  const companyLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.ourJourney, href: "#our-journey" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.industry, href: "#industry" },
    { name: t.nav.team, href: "#team" },
  ];

  const productLinks = [
    { name: t.products.tabs.blocks, href: "#products" },
    { name: t.products.tabs.sheets, href: "#products" },
    { name: t.products.tabs.muriball, href: "#products" },
    { name: t.products.tabs.rawBeads, href: "#products" },
    {
      name: language === "bn" ? "মেশিনারি সাপোর্ট" : "Machinery Support",
      href: "#quote",
    },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const lenis = getLenis();

    if (href === "#home") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const targetEl = document.querySelector(href) as HTMLElement | null;
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
      } else {
        const top =
          targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#0B132B] text-slate-300 border-t-2 border-[#FF5A00] relative z-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 1. Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1 — Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-block">
                <MaxThermalLogo inverted />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-4 max-w-sm">
                {t.footer.description}
              </p>
            </div>

            {/* Social Media Icons Row */}
            <div className="flex items-center gap-2.5 mt-6 sm:mt-8">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A00] hover:bg-[#FF5A00] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A00] hover:bg-[#FF5A00] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A00] hover:bg-[#FF5A00] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A00] hover:bg-[#FF5A00] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A00] hover:bg-[#FF5A00] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              {t.footer.companyHeading}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-slate-400 hover:text-[#FF5A00] transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Products & Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              {t.footer.productsHeading}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-slate-400 hover:text-[#FF5A00] transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Factory Location (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              {t.footer.contactHeading}
            </h4>

            {/* Operating Schedule */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.footer.schedule}</span>
            </div>

            {/* Direct Hotlines */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+8801913349641"
                    className="text-white font-bold hover:text-[#FF5A00] transition-colors"
                  >
                    +88 01913-349641
                  </a>
                  <span className="text-slate-400 text-xs block">
                    {t.footer.hotline1Label}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+8801716327329"
                    className="text-white font-bold hover:text-[#FF5A00] transition-colors"
                  >
                    +88 01716-327329
                  </a>
                  <span className="text-slate-400 text-xs block">
                    {t.footer.hotline2Label}
                  </span>
                </div>
              </div>

              {/* Office & Factory Address */}
              <div className="flex items-start gap-2.5 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {t.footer.address}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#FF5A00] shrink-0" />
                <a
                  href="mailto:info@maxthermal.com"
                  className="text-slate-300 hover:text-[#FF5A00] transition-colors"
                >
                  info@maxthermal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sub-Bar & Scroll-To-Top Button */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          {/* Copyright */}
          <div>
            {t.footer.copyright}
          </div>

          {/* Minimal Links */}
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="#privacy"
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <span>&bull;</span>
            <Link
              href="#terms"
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>

          {/* Floating Circular Scroll-To-Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.footer.backToTop}
            className="w-11 h-11 rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(255,90,0,0.45)] transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
