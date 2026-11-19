"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, HeartHandshake, Sparkles } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { EXPERIENCE_PILLARS } from "@/lib/constants";

type IconKey = (typeof EXPERIENCE_PILLARS)[number]["iconKey"];

function renderIcon(key: IconKey) {
  if (key === "book") return <BookOpen size={23} strokeWidth={1.8} />;
  if (key === "heart") return <HeartHandshake size={23} strokeWidth={1.8} />;
  return <Sparkles size={23} strokeWidth={1.8} />;
}

export default function ExperienceCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const cards = EXPERIENCE_PILLARS.map((pillar, index) => {
    const isExpanded = expandedId === pillar.id;
    const iconNode = renderIcon(pillar.iconKey);
    const delayMs = index * 100;
    const chevronClass = `transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`;
    const toggleLabel = isExpanded ? "Read Less" : "Read More";
    const handleToggle = () => {
      setExpandedId((prev) => (prev === pillar.id ? null : pillar.id));
    };

    return (
      <RevealOnScroll key={pillar.id} delayMs={delayMs} className="h-full">
        <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_8px_28px_rgba(16,40,75,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#e4b669] hover:shadow-[0_22px_45px_rgba(16,40,75,0.1)] sm:p-7">
          {/* Subtle top gold gradient bar on hover */}
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-[#F0B95F] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div>
            <div className="flex items-center justify-between">
              <div className="icon-tile transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                {iconNode}
              </div>
              <span className="font-serif text-2xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-[#E5A23C]">
                {pillar.number}
              </span>
            </div>

            <h3 className="mt-6 font-serif text-xl font-semibold text-[#142C55] sm:text-2xl">
              {pillar.title}
            </h3>

            {/* Concise summary visible on both mobile & desktop */}
            <p className="mt-3 text-sm font-medium leading-6 text-[#142C55]/85 sm:text-base sm:leading-7">
              {pillar.summary}
            </p>

            {/* Full details: always visible on desktop (md:block), smoothly expandable on mobile */}
            <div className="hidden md:block">
              <p className="mt-2.5 text-sm leading-7 text-slate-600 sm:text-[15px]">
                {pillar.details}
              </p>
            </div>

            <div className="md:hidden">
              <div className="expand-grid" data-open={isExpanded}>
                <div className="expand-grid-inner">
                  <p className="pt-2.5 text-sm leading-7 text-slate-600">
                    {pillar.details}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between pt-1">
            <div className="h-[2px] w-10 rounded-full bg-[#E5A23C] transition-all duration-300 group-hover:w-20" />
            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F9FC] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#142C55] transition hover:bg-[#FFF6E5] hover:text-[#A96812] md:hidden"
            >
              <span>{toggleLabel}</span>
              <ChevronDown size={14} className={chevronClass} />
            </button>
          </div>
        </article>
      </RevealOnScroll>
    );
  });

  return <div className="mt-11 grid gap-5 md:grid-cols-3">{cards}</div>;
}
