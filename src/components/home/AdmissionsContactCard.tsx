"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const primaryDisplayPhone = "+91 75750 38282";
const primaryTelHref = `tel:${SITE_CONFIG.primaryPhone}`;

const alternateContacts = [
  { label: "7575028282", href: "tel:7575028282", tag: "Mobile" },
  { label: "7575048282", href: "tel:7575048282", tag: "Mobile" },
  { label: "7575058282", href: "tel:7575058282", tag: "Mobile" },
  {
    label: SITE_CONFIG.landline,
    href: `tel:${SITE_CONFIG.landline}`,
    tag: "Landline",
  },
];

export default function AdmissionsContactCard() {
  const [showMoreNumbers, setShowMoreNumbers] = useState(false);

  const toggleNumbers = () => setShowMoreNumbers((prev) => !prev);
  const toggleLabel = showMoreNumbers
    ? "Hide other numbers"
    : "More contact numbers (4)";
  const chevronCls = `transition-transform duration-300 ${
    showMoreNumbers ? "rotate-180" : ""
  }`;

  const alternateLinks = alternateContacts.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#142C55] transition hover:border-[#e4b669] hover:bg-[#FFFBF4] sm:text-sm"
    >
      <span className="flex min-w-0 items-center gap-2 truncate">
        <Phone size={14} className="shrink-0 text-[#B87318]" />
        <span className="truncate">{item.label}</span>
      </span>
      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-slate-400">
        {item.tag}
      </span>
    </a>
  ));

  return (
    <div className="flex h-full min-w-0 flex-col justify-between rounded-[2rem] border border-slate-200/70 bg-[#F4F6F9] p-6 sm:p-9">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E5A23C]/35 bg-[#FFF8EB] px-3.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#E5A23C] glow-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#A96812]">
            Rolling Admissions Now Open
          </span>
        </div>

        <h2 id="visit-heading" className="section-title mt-4">
          Get in touch with us to{" "}
          <span className="text-[#B87318]">discuss it.</span>
        </h2>

        <p className="mt-3.5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Whether you are from any part of Ahmedabad, Gujarat, or elsewhere in
          India, we aim to help your child make the best of the educational
          opportunities at SSIS Ranip.
        </p>

        {/* Highlighted Primary Contact Number */}
        <div className="mt-6">
          <a
            href={primaryTelHref}
            aria-label={`Call Admissions Helpline ${primaryDisplayPhone}`}
            className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-[#E5A23C]/40 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E5A23C] hover:shadow-md sm:p-5"
          >
            <div className="flex min-w-0 items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#10284B] text-[#F0B95F] transition-transform duration-300 group-hover:scale-105">
                <Phone size={19} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#A96812]">
                  Primary Admissions Helpline
                </p>
                <p className="mt-0.5 truncate font-serif text-xl font-bold text-[#142C55] sm:text-2xl">
                  {primaryDisplayPhone}
                </p>
              </div>
            </div>
            <span className="hidden shrink-0 rounded-full bg-[#F5F7FA] px-3 py-1.5 text-xs font-bold text-[#142C55] transition group-hover:bg-[#FFF6E5] group-hover:text-[#A96812] sm:inline-flex">
              Tap to call
            </span>
          </a>

          {/* Compact expandable alternate numbers */}
          <div className="mt-3">
            <button
              type="button"
              onClick={toggleNumbers}
              aria-expanded={showMoreNumbers}
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-bold uppercase tracking-[.13em] text-[#142C55]/80 transition hover:text-[#B87318]"
            >
              <span>{toggleLabel}</span>
              <ChevronDown size={15} className={chevronCls} />
            </button>

            <div className="expand-grid" data-open={showMoreNumbers}>
              <div className="expand-grid-inner">
                <div className="grid grid-cols-1 gap-2 pt-2.5 sm:grid-cols-2">
                  {alternateLinks}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action CTA (Redundant Call Us button removed) */}
      <div className="mt-7 pt-2">
        <a
          href={SITE_CONFIG.admissionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center sm:w-auto"
        >
          Online Admission Inquiry <ArrowRight size={17} />
        </a>
      </div>
    </div>
  );
}
