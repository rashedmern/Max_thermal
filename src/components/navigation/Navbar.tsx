"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MaxThermalLogo from "./MaxThermalLogo";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Our Journey", href: "#our-journey", id: "our-journey" },
  { name: "Products", href: "#products", id: "products" },
  { name: "Industries", href: "#industries", id: "industries" },
  { name: "Technical & Quality", href: "#technical", id: "technical" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const { getLenis } = useSmoothScroll();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll handler integrated with Lenis
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      e.preventDefault();
      setActiveSection(item.id);
      isManualScrollRef.current = true;

      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }

      const lenis = getLenis();
      const offset = item.id === "home" ? 0 : -80;

      const unlock = () => {
        isManualScrollRef.current = false;
      };

      if (item.id === "home") {
        if (lenis) {
          lenis.scrollTo(0, {
            duration: 1.2,
            onComplete: unlock,
          });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
          manualScrollTimeoutRef.current = setTimeout(unlock, 1200);
        }
      } else {
        const targetEl =
          (document.querySelector(item.href) as HTMLElement | null) ||
          (item.id === "contact" ? document.getElementById("quote") : null) ||
          (item.id === "industries" ? document.getElementById("products") : null);

        if (targetEl) {
          if (lenis) {
            lenis.scrollTo(targetEl, {
              offset,
              duration: 1.2,
              onComplete: unlock,
            });
          } else {
            const top =
              targetEl.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top, behavior: "smooth" });
            manualScrollTimeoutRef.current = setTimeout(unlock, 1200);
          }
        } else {
          unlock();
        }
      }

      // Safety timeout to guarantee unlock
      manualScrollTimeoutRef.current = setTimeout(unlock, 1300);

      // Clean URL hash update without instant jump or full page reload
      if (window.history.pushState) {
        window.history.pushState(null, "", item.href);
      }
    },
    [getLenis]
  );

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle initial page load with hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    const initialHash = window.location.hash.replace("#", "");
    if (!initialHash) return;

    const timer = setTimeout(() => {
      if (initialHash === "our-journey" || initialHash === "journey") {
        setActiveSection("our-journey");
        const lenis = getLenis();
        const el =
          document.getElementById("our-journey") ||
          document.getElementById("journey");
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80, duration: 1 });
          } else {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      } else if (initialHash === "home") {
        setActiveSection("home");
      } else {
        const match = NAV_ITEMS.find((n) => n.id === initialHash);
        if (match) setActiveSection(match.id);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [getLenis]);

  // Dynamic ScrollSpy tracking active section in viewport
  useEffect(() => {
    let rafId: number | null = null;

    const evaluateActiveSection = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (isManualScrollRef.current) return;

      // 1. If at the top or hero section
      if (scrollY < 180) {
        setActiveSection((prev) => {
          if (prev !== "home") {
            if (window.history.replaceState && window.location.hash !== "#home") {
              window.history.replaceState(null, "", "#home");
            }
            return "home";
          }
          return prev;
        });
        return;
      }

      // 2. If scrolled near the bottom of page
      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection((prev) => {
          if (prev !== "contact") {
            if (
              window.history.replaceState &&
              window.location.hash !== "#contact"
            ) {
              window.history.replaceState(null, "", "#contact");
            }
            return "contact";
          }
          return prev;
        });
        return;
      }

      // 3. Section bounding check with navbar trigger line
      const triggerY = 160;
      const trackedSections: { id: string; el: HTMLElement | null }[] = [
        { id: "home", el: document.getElementById("home") },
        {
          id: "our-journey",
          el:
            document.getElementById("our-journey") ||
            document.getElementById("journey"),
        },
        { id: "products", el: document.getElementById("products") },
        { id: "technical", el: document.getElementById("technical") },
        {
          id: "contact",
          el:
            document.getElementById("contact") ||
            document.getElementById("quote"),
        },
      ];

      let matchedId = "home";

      for (const sec of trackedSections) {
        if (!sec.el) continue;
        const rect = sec.el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          matchedId = sec.id;
          break;
        }
      }

      setActiveSection((prev) => {
        if (prev !== matchedId) {
          if (window.history.replaceState) {
            const newHash = matchedId === "home" ? "#home" : `#${matchedId}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, "", newHash);
            }
          }
          return matchedId;
        }
        return prev;
      });
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        evaluateActiveSection();
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check on mount
    evaluateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 sm:py-3 bg-white/40 backdrop-blur-md border-b border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "py-3 sm:py-4.5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* 1. Left - Brand Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, {
                name: "Home",
                href: "#home",
                id: "home",
              });
            }}
          >
            <MaxThermalLogo />
          </div>

          {/* 2. Center - Floating Pill Navigation (Desktop >= 1024px) */}
          <nav
            className="hidden lg:flex items-center rounded-full bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-black/[0.06] p-1.5"
            onMouseLeave={() => setHoveredTab(null)}
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredTab === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  className={`relative px-4 py-1.5 text-[13.5px] tracking-normal font-medium transition-colors duration-200 select-none ${
                    isActive
                      ? "text-[#182337] font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Active Peach-Tinted Pill Highlight */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-[#FFEADB] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}

                  {/* Subtle Hover Indicator for inactive items */}
                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-slate-100/70 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* 3. Right - Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher Capsule */}
            <div
              className="flex items-center rounded-full bg-white/95 backdrop-blur-md border border-black/[0.06] p-1 shadow-sm select-none"
              role="radiogroup"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`relative px-2.5 py-1 text-xs rounded-full font-medium transition-colors ${
                  language === "en"
                    ? "text-slate-900 font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                aria-checked={language === "en"}
                role="radio"
              >
                {language === "en" && (
                  <motion.span
                    layoutId="lang-active-pill"
                    className="absolute inset-0 bg-slate-100 rounded-full shadow-xs -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
                English
              </button>

              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={`relative px-2.5 py-1 text-xs rounded-full font-medium transition-colors ${
                  language === "bn"
                    ? "text-slate-900 font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                aria-checked={language === "bn"}
                role="radio"
              >
                {language === "bn" && (
                  <motion.span
                    layoutId="lang-active-pill"
                    className="absolute inset-0 bg-slate-100 rounded-full shadow-xs -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
                বাংলা
              </button>
            </div>

            {/* Solid Vibrant Orange CTA Button */}
            <Link
              href="#quote"
              onClick={(e) =>
                handleNavClick(e, {
                  name: "Quote",
                  href: "#quote",
                  id: "contact",
                })
              }
              className="relative inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(255,90,0,0.32)] hover:shadow-[0_6px_22px_rgba(255,90,0,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90 hidden sm:inline-block" />
            </Link>

            {/* Mobile Hamburger Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.06] text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden px-4 pt-3 pb-6 max-w-lg mx-auto"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.08)] p-5 space-y-4">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#FFEADB] text-[#182337] font-semibold shadow-xs"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-[#FF5A00]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Language / ভাষা
                </span>
                <div className="flex items-center bg-slate-100 p-0.5 rounded-full text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded-full font-medium transition-colors ${
                      language === "en"
                        ? "bg-white text-slate-900 shadow-xs font-semibold"
                        : "text-slate-500"
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("bn")}
                    className={`px-3 py-1 rounded-full font-medium transition-colors ${
                      language === "bn"
                        ? "bg-white text-slate-900 shadow-xs font-semibold"
                        : "text-slate-500"
                    }`}
                  >
                    বাংলা
                  </button>
                </div>
              </div>

              {/* Full-width CTA in Mobile Drawer */}
              <Link
                href="#quote"
                onClick={(e) => {
                  handleNavClick(e, {
                    name: "Quote",
                    href: "#quote",
                    id: "contact",
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#FF5A00] hover:bg-[#FF4500] text-white py-3 text-sm font-semibold shadow-[0_4px_16px_rgba(255,90,0,0.3)] transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
