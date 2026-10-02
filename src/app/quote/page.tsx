"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Truck,
  ArrowLeft,
  Send,
  Sparkles,
  Check,
  FileText,
  Calculator,
  AlertCircle,
  MessageSquare,
  Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProductId } from "@/data/productsData";

interface ProductOption {
  id: ProductId | "custom";
  nameBn: string;
  nameEn: string;
  descBn: string;
  descEn: string;
}

const PRODUCT_OPTIONS: ProductOption[] = [
  {
    id: "eps-blocks",
    nameBn: "ইপিএস মনোলিথিক ব্লক (EPS Blocks)",
    nameEn: "EPS Monolithic Blocks",
    descBn: "মোল্ড সাইজ ২০০০ × ১০০০ × ৫০০ মিমি, সিভিল ও জিওফোম",
    descEn: "Standard 2000×1000×500mm, geotechnical & void fill",
  },
  {
    id: "eps-sheets",
    nameBn: "ইপিএস ইনসুলেশন শিট (EPS Sheets)",
    nameEn: "EPS Insulation Sheets",
    descBn: "১০ মিমি থেকে ৫০০ মিমি পর্যন্ত যেকোনো পুরুত্বে স্লাইসিং",
    descEn: "10mm to 500mm precision wire cut sheets",
  },
  {
    id: "muriball",
    nameBn: "ডেনিম ওয়াশিং মুড়িবল (MuriBall)",
    nameEn: "Denim Washing MuriBall (Beads)",
    descBn: "২–১৪ মিমি বায়ো-স্টোন ওয়াশ গ্রেড পলিমার বিডস",
    descEn: "2-14mm calibrated bio-stone wash beads",
  },
  {
    id: "raw-beads",
    nameBn: "ভার্জিন র' ইপিএস বিডস (Raw Beads)",
    nameEn: "Virgin Raw EPS Beads",
    descBn: "পেন্টেন গ্যাসযুক্ত প্রসারণযোগ্য ভার্জিন কাঁচামাল",
    descEn: "Virgin expandable polystyrene with pentane gas",
  },
  {
    id: "custom",
    nameBn: "কাস্টম সিএনসি কাটিং (Custom CNC Cut)",
    nameEn: "Custom CNC Cut & Profiling",
    descBn: "বিশেষ জ্যামিতিক আকার, প্যাকেজিং ও পাইপ ইনসুলেশন",
    descEn: "Custom 3D profiles, packaging boxes, pipe sections",
  },
];

const DENSITY_OPTIONS = [
  { val: "12 kg/m³", labelBn: "১২ কেজি/মি³ (লাইটওয়েট)", labelEn: "12 kg/m³ (Lightweight)" },
  { val: "15 kg/m³", labelBn: "১৫ কেজি/মি³ (স্ট্যান্ডার্ড ইনসুলেশন)", labelEn: "15 kg/m³ (Standard Thermal)" },
  { val: "20 kg/m³", labelBn: "২০ কেজি/মি³ (হাই-ডেনসিটি ছাদ ও দেয়াল)", labelEn: "20 kg/m³ (High Density Roof/Wall)" },
  { val: "25 kg/m³", labelBn: "২৫ কেজি/মি³ (স্ট্রাকচারাল জিওফোম)", labelEn: "25 kg/m³ (Structural Geofoam)" },
  { val: "30+ kg/m³", labelBn: "৩০+ কেজি/মি³ (মেগা প্রজেক্ট হেভি ডিউটি)", labelEn: "30+ kg/m³ (Heavy Duty Civil)" },
  { val: "recommend", labelBn: "পরামর্শ প্রয়োজন (আমাদের ইঞ্জিনিয়ার জানাবেন)", labelEn: "Recommend Me (Consult Engineering)" },
];

function QuoteFormContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product") as ProductId | "custom" | null;

  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState<ProductId | "custom">("eps-blocks");
  const [density, setDensity] = useState("15 kg/m³");
  const [dimensions, setDimensions] = useState("");
  const [quantity, setQuantity] = useState("");
  const [district, setDistrict] = useState("");
  const [notes, setNotes] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselected query param on mount or URL change
  useEffect(() => {
    if (preselectedProduct && PRODUCT_OPTIONS.some((p) => p.id === preselectedProduct)) {
      setProductType(preselectedProduct);
    }
  }, [preselectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage(
        language === "bn"
          ? "অনুগ্রহ করে আপনার নাম পূরণ করুন।"
          : "Please provide your full name."
      );
      return;
    }

    if (!phone.trim() || phone.trim().length < 9) {
      setErrorMessage(
        language === "bn"
          ? "অনুগ্রহ করে একটি কার্যকর মোবাইল অথবা হোয়াটসঅ্যাপ নম্বর লিখুন।"
          : "Please provide a valid contact phone or WhatsApp number."
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable quotation processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  };

  const handleReset = () => {
    setFullName("");
    setOrganization("");
    setPhone("");
    setEmail("");
    setDimensions("");
    setQuantity("");
    setDistrict("");
    setNotes("");
    setIsSubmitted(false);
    setErrorMessage("");
  };

  const selectedProductObj = PRODUCT_OPTIONS.find((p) => p.id === productType) || PRODUCT_OPTIONS[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* 1. Top Navigation Bar: Back to Homepage */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#FF5A00] text-xs sm:text-sm font-semibold border border-black/[0.06] shadow-2xs hover:shadow-xs transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {language === "bn" ? "হোমপেজে ফিরে যান" : "Back to Homepage"}
          </span>
        </Link>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEADB]/60 border border-[#FFD0B0] text-[#182337] text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-pulse" />
          <span>
            {language === "bn"
              ? "সরাসরি কারখানা সরবরাহ • কোনো মধ্যস্বত্বভোগী নেই"
              : "Factory Direct Supply • Zero Middlemen"}
          </span>
        </span>
      </div>

      {/* 2. Hero Header */}
      <div className="max-w-3xl mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A00]/10 border border-[#FF5A00]/20 text-[#FF5A00] text-xs font-bold uppercase tracking-wider mb-3">
          <FileText className="w-3.5 h-3.5" />
          <span>
            {language === "bn"
              ? "অফিশিয়াল কোটেশন রিকোয়েস্ট"
              : "Official Quotation Request"}
          </span>
        </div>

        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-black text-[#182337] ${
            language === "bn" ? "font-bengali leading-snug" : "tracking-tight leading-tight"
          }`}
        >
          {language === "bn" ? (
            <>
              সরাসরি কারখানা থেকে{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#E02600]">
                কোটেশন ও দরপ্রস্তাব
              </span>{" "}
              নিন
            </>
          ) : (
            <>
              Request a Direct{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#E02600]">
                Factory Quotation
              </span>
            </>
          )}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-3">
          {language === "bn"
            ? "আপনার কাঙ্ক্ষিত ইপিএস পণ্য, আকার ও পরিমাণের তথ্য পূরণ করুন। আমাদের টেকনিক্যাল সেলস টিম দ্রুত প্রফর্মা ইনভয়েস ও সেরা পাইকারি দর সরবরাহ করবে।"
            : "Specify your required EPS products, dimensions, density, and delivery location. Our engineering and sales team will contact you promptly with an official factory-direct rate."}
        </p>
      </div>

      {/* 3. Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* LEFT COLUMN: Quotation Form / Success Banner (lg:col-span-8) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-[0_16px_50px_rgba(16,185,129,0.12)] text-[#182337]"
              >
                {/* Green Success Emblem */}
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h2
                  className={`text-2xl sm:text-3xl font-black text-slate-900 ${
                    language === "bn" ? "font-bengali" : "tracking-tight"
                  }`}
                >
                  {language === "bn"
                    ? "আপনার কোটেশন রিকোয়েস্ট সফলভাবে গৃহীত হয়েছে!"
                    : "Quotation Request Submitted Successfully!"}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
                  {language === "bn"
                    ? `ধন্যবাদ ${fullName}! আপনার দেওয়া তথ্যের ভিত্তিতে আমাদের কারখানা ও সেলস টিম প্রফর্মা ইনভয়েস প্রস্তুত করে দ্রুত (${phone}) নম্বরে যোগাযোগ করবে।`
                    : `Thank you, ${fullName}! Our engineering team will review your specs and contact you at ${phone} with a certified quotation.`}
                </p>

                {/* Submission Summary Pill Matrix */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-slate-200/50">
                    <span className="text-slate-500 font-medium">
                      {language === "bn" ? "নির্বাচিত পণ্য:" : "Product:"}
                    </span>
                    <span className="font-bold text-slate-900">
                      {language === "bn" ? selectedProductObj.nameBn : selectedProductObj.nameEn}
                    </span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-slate-200/50">
                    <span className="text-slate-500 font-medium">
                      {language === "bn" ? "ঘনত্ব (Density):" : "Density:"}
                    </span>
                    <span className="font-bold text-slate-900">{density}</span>
                  </div>

                  {dimensions && (
                    <div className="flex justify-between py-1 border-b border-slate-200/50">
                      <span className="text-slate-500 font-medium">
                        {language === "bn" ? "আকার / পরিমাপ:" : "Dimensions:"}
                      </span>
                      <span className="font-bold text-slate-900">{dimensions}</span>
                    </div>
                  )}

                  {quantity && (
                    <div className="flex justify-between py-1 border-b border-slate-200/50">
                      <span className="text-slate-500 font-medium">
                        {language === "bn" ? "পরিমাণ:" : "Quantity:"}
                      </span>
                      <span className="font-bold text-slate-900">{quantity}</span>
                    </div>
                  )}

                  {district && (
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500 font-medium">
                        {language === "bn" ? "ডেলিভারি গন্তব্য:" : "Destination:"}
                      </span>
                      <span className="font-bold text-slate-900">{district}</span>
                    </div>
                  )}
                </div>

                {/* Instant Urgent Action Hotlines */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+8801913349641"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5A00] hover:bg-[#FF4500] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>
                      {language === "bn" ? "জরুরি হটলাইন: ০১৭১৬-৩২৭৩২৯" : "Call Hotline: +880 1716-327329"}
                    </span>
                  </a>

                  <a
                    href="https://wa.me/8801913349641?text=Hello%20Max%20Thermal,%20I%20have%20submitted%20a%20quotation%20request"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{language === "bn" ? "হোয়াটসঅ্যাপে চ্যাট করুন" : "Chat on WhatsApp"}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 text-xs sm:text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  >
                    {language === "bn" ? "নতুন কোটেশন ফর্ম" : "Submit Another Request"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 md:p-10 border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] space-y-6"
              >
                {/* Validation Error Message */}
                {errorMessage && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* SECTION 1: Personal & Organization Details */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FFEADB] text-[#FF5A00] text-xs font-black flex items-center justify-center">
                      ১
                    </span>
                    <span>
                      {language === "bn"
                        ? "আপনার পরিচয় ও যোগাযোগের তথ্য"
                        : "Contact & Organization Information"}
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn" ? "আপনার নাম *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={
                          language === "bn"
                            ? "যেমন: ইঞ্জিনিয়ার তানভীর আহমেদ"
                            : "e.g. Engr. Tanvir Ahmed"
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all"
                      />
                    </div>

                    {/* Organization Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn"
                          ? "কোম্পানি / ফার্মের নাম"
                          : "Company / Project Name"}
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder={
                          language === "bn"
                            ? "প্রতিষ্ঠানের নাম (প্রযোজ্য ক্ষেত্রে)"
                            : "Organization or Firm (Optional)"
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all"
                      />
                    </div>

                    {/* Phone Number (Required) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn"
                          ? "মোবাইল / হোয়াটসঅ্যাপ নম্বর *"
                          : "Phone / WhatsApp Number *"}
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="017xxxxxxxx / 019xxxxxxxx"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Email (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn" ? "ইমেইল ঠিকানা" : "Email Address"}
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="procurement@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Product Type Selection */}
                <div className="pt-2 border-t border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FFEADB] text-[#FF5A00] text-xs font-black flex items-center justify-center">
                      ২
                    </span>
                    <span>
                      {language === "bn"
                        ? "প্রয়োজনীয় ইপিএস পণ্যের ধরন নির্বাচন করুন"
                        : "Select Product Category"}
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PRODUCT_OPTIONS.map((prod) => {
                      const isSelected = productType === prod.id;
                      return (
                        <div
                          key={prod.id}
                          onClick={() => setProductType(prod.id)}
                          className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-200 select-none flex items-start gap-3 ${
                            isSelected
                              ? "bg-[#FFF5EE] border-[#FF5A00] shadow-sm ring-1 ring-[#FF5A00]"
                              : "bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/80"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-[#FF5A00] bg-[#FF5A00] text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">
                              {language === "bn" ? prod.nameBn : prod.nameEn}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {language === "bn" ? prod.descBn : prod.descEn}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* SECTION 3: Density & Sizing Specifications */}
                <div className="pt-2 border-t border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FFEADB] text-[#FF5A00] text-xs font-black flex items-center justify-center">
                      ৩
                    </span>
                    <span>
                      {language === "bn"
                        ? "ঘনত্ব (Density) ও পরিমাপ স্পেসিফিকেশন"
                        : "Density & Dimension Specifications"}
                    </span>
                  </h3>

                  {/* Density Chips */}
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    {language === "bn"
                      ? "কাঙ্ক্ষিত ঘনত্ব (Density Range)"
                      : "Required Density Rating"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                    {DENSITY_OPTIONS.map((opt) => {
                      const isSelected = density === opt.val;
                      return (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setDensity(opt.val)}
                          className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-left cursor-pointer ${
                            isSelected
                              ? "bg-[#FF5A00] text-white border-[#FF5A00] shadow-2xs font-bold"
                              : "bg-slate-50 border-slate-200/90 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {language === "bn" ? opt.labelBn : opt.labelEn}
                        </button>
                      );
                    })}
                  </div>

                  {/* Dimensions & Quantity Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Target Dimensions */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn"
                          ? "নির্দিষ্ট আকার / দৈর্ঘ্য × প্রস্থ × পুরুত্ব"
                          : "Dimensions / Thickness"}
                      </label>
                      <input
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        placeholder={
                          language === "bn"
                            ? "যেমন: ২০০০ × ১০০০ × ৫০ মিমি / ৪ × ২ ফিট / ২ ইঞ্চি"
                            : "e.g. 2000 × 1000 × 50mm / 4ft × 2ft × 2inch"
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all"
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn"
                          ? "আনুমানিক পরিমাণ (Quantity)"
                          : "Estimated Quantity"}
                      </label>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={
                          language === "bn"
                            ? "যেমন: ৫০০ পিস / ১,০০০ সিএফটি / ৫০টি ব্লক"
                            : "e.g. 500 Pcs / 1,000 CFT / 50 Blocks"
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Delivery Location & Project Notes */}
                <div className="pt-2 border-t border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FFEADB] text-[#FF5A00] text-xs font-black flex items-center justify-center">
                      ৪
                    </span>
                    <span>
                      {language === "bn"
                        ? "ডেলিভারি জেলা ও অতিরিক্ত বিবরণ"
                        : "Delivery Destination & Notes"}
                    </span>
                  </h3>

                  <div className="space-y-4">
                    {/* Delivery District */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn"
                          ? "ডেলিভারি জেলা / প্রজেক্ট লোকেশন"
                          : "Delivery District / Site Location"}
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          placeholder={
                            language === "bn"
                              ? "যেমন: সাভার, ঢাকা / গাজীপুর / চট্টগ্রাম ইপিজেড"
                              : "e.g. Savar, Dhaka / Gazipur / Chittagong EPZ"
                          }
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === "bn"
                          ? "প্রকল্পের ব্যবহার বা বিশেষ রিকোয়ারমেন্ট"
                          : "Project Application or Special Notes"}
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={
                          language === "bn"
                            ? "যেমন: ছাদ ইনসুলেশনের কাজে ব্যবহৃত হবে, ফায়ার রিটার্ডেন্ট ক্লাস বি১ গ্রেড দরকার, ইত্যাদি..."
                            : "e.g. Roof insulation, Cold-storage requirement, ASTM E84 Fire retardant grade, etc..."
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition-all resize-y"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#FF5A00] hover:bg-[#FF4500] text-white text-sm sm:text-base font-bold shadow-[0_6px_22px_rgba(255,90,0,0.38)] hover:shadow-[0_8px_28px_rgba(255,90,0,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>
                          {language === "bn" ? "প্রসেসিং হচ্ছে..." : "Submitting Request..."}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          {language === "bn"
                            ? "অফিশিয়াল কোটেশন রিকোয়েস্ট পাঠান"
                            : "Submit Quotation Request"}
                        </span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center mt-2.5">
                    {language === "bn"
                      ? "🔒 আপনার তথ্য সম্পূর্ণ সুরক্ষিত। কোনো স্প্যাম নেই। আমাদের টিম শুধুমাত্র দরপ্রস্তাবের জন্য যোগাযোগ করবে।"
                      : "🔒 100% Confidential. Zero spam. We only contact you regarding this direct quotation."}
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Factory Quick Contact & Assurance Card (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-5">
          {/* Card 1: Factory Direct Guarantee Badge */}
          <div className="rounded-3xl bg-gradient-to-br from-[#182337] via-[#1E293B] to-[#0F172A] text-white p-6 shadow-xl relative overflow-hidden">
            {/* Ambient Background Warm Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A00]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#FF8540] text-xs font-bold mb-4">
                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                <span>
                  {language === "bn" ? "ফ্যাক্টরি ডিরেক্ট নিশ্চয়তা" : "Factory Direct Guarantee"}
                </span>
              </div>

              <h4 className="text-xl font-black text-white tracking-tight">
                {language === "bn"
                  ? "১০০% ভার্জিন ইপিএস ও সঠিক ডেনসিটি"
                  : "100% Virgin EPS & Calibrated Density"}
              </h4>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                {language === "bn"
                  ? "ম্যাক্স থার্মালের নিজস্ব অত্যাধুনিক স্বয়ংক্রিয় মোল্ডিং প্ল্যান্টে উৎপাদিত প্রতিটি পণ্য গুণমান পরীক্ষায় পরীক্ষিত। কোনো প্রকার ভেজাল বা ডেনসিটি ঘাটতি নেই।"
                  : "Manufactured in our computerized automated expanding chambers. Certified density tolerance per ASTM C578 standards."}
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                  <span>
                    {language === "bn" ? "কম্পিউটারাইজড সিএনসি ওয়্যার কাটিং" : "CNC Multi-Wire Precision"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                  <span>
                    {language === "bn" ? "সরাসরি কারখানা পাইকারি মূল্য" : "Direct Factory Wholesale Price"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                  <span>
                    {language === "bn" ? "দ্রুত প্রফর্মা ইনভয়েস ও ভ্যাট চালান" : "Official Proforma Invoice & VAT"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Immediate Factory Contact & Hotlines */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 p-6 shadow-sm space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900">
              {language === "bn" ? "জরুরি হটলাইন ও ফ্যাক্টরি যোগাযোগ" : "Factory Contact & Hotlines"}
            </h4>

            {/* Technical Consultation Phone */}
            <a
              href="tel:+8801913349641"
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 hover:bg-[#FFF5EE] border border-slate-200/80 hover:border-[#FF5A00]/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFEADB] text-[#FF5A00] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">
                  {language === "bn" ? "ইঞ্জিনিয়ারিং ও টেকনিক্যাল হটলাইন" : "Technical & Custom Cutting"}
                </div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#FF5A00] transition-colors font-mono">
                  +88 01913-349641
                </div>
              </div>
            </a>

            {/* Sales Phone */}
            <a
              href="tel:+8801716327329"
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 hover:bg-[#FFF5EE] border border-slate-200/80 hover:border-[#FF5A00]/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">
                  {language === "bn" ? "বাণিজ্যিক ও পাইকারি অর্ডার" : "Commercial & Bulk Sales"}
                </div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#FF5A00] transition-colors font-mono">
                  +88 01716-327329
                </div>
              </div>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/8801913349641?text=Hello%2C%20I%20would%20like%20a%20quotation%20for%20Max%20Thermal%20EPS%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>
                {language === "bn"
                  ? "হোয়াটসঅ্যাপে তাত্ক্ষণিক চ্যাট"
                  : "Instant Chat on WhatsApp"}
              </span>
            </a>

            {/* Plant Location */}
            <div className="pt-2 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 block font-semibold">
                  {language === "bn" ? "কারখানার ঠিকানা:" : "Plant Location:"}
                </strong>
                91/1 Mirpara (Paity Link Road), Demra, Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Card 3: Logistics & Delivery Assurance */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900">
              <Truck className="w-4 h-4 text-[#FF5A00]" />
              <span>
                {language === "bn" ? "সারাদেশে নিজস্ব ডেলিভারি নেটওয়ার্ক" : "Nationwide Delivery Network"}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {language === "bn"
                ? "ঢাকা, সাভার, গাজীপুর, নারায়ণগঞ্জ, চট্টগ্রাম, পাবনাসহ বাংলাদেশের ৬৪টি জেলায় আমাদের নিজস্ব ও চুক্তিবদ্ধ কাভার্ডভ্যানে পণ্য দ্রুত পৌঁছে দেওয়া হয়।"
                : "Fast dispatch coverage across Dhaka, Savar, Gazipur, Narayanganj, Chittagong, Pabna, and all industrial zones nationwide."}
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-semibold pt-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {language === "bn"
                  ? "রেডি স্টক: ২৪ ঘণ্টায় সরবরাহ | কাস্টম সাইজ: ৪৮-৭২ ঘণ্টা"
                  : "Ready Stock: 24h dispatch | Custom Size: 48-72h"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-7xl mx-auto px-4 py-20 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#FF5A00]/30 border-t-[#FF5A00] rounded-full animate-spin" />
        </div>
      }
    >
      <QuoteFormContent />
    </Suspense>
  );
}
