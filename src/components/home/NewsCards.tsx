"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HOME_FEATURED_NEWS } from "@/lib/constants";

export default function NewsCards() {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const cards = HOME_FEATURED_NEWS.map((item, index) => {
    const isExpanded = expandedTitle === item.title;
    const delayMs = index * 100;
    const toggleLabel = isExpanded ? "Read Less" : "Read More";
    const chevronClass = `transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`;
    const handleToggle = () => {
      setExpandedTitle((prev) => (prev === item.title ? null : item.title));
    };

    return (
      <RevealOnScroll key={item.title} delayMs={delayMs} className="h-full">
        <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(16,40,75,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_20px_40px_rgba(16,40,75,0.09)] sm:p-7">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7E8] px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-[#A96812]">
              <CalendarDays size={13} />
              {item.date}
            </span>

            <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#142C55] transition-colors group-hover:text-[#0F2D6E]">
              {item.title}
            </h3>

            {/* Desktop: full description directly */}
            <p className="mt-3 hidden text-sm leading-7 text-slate-600 md:block">
              {item.description}
            </p>

            {/* Mobile: compact summary + smooth expand/collapse */}
            <div className="md:hidden">
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                {item.summary}
              </p>
              <div className="expand-grid" data-open={isExpanded}>
                <div className="expand-grid-inner">
                  <p className="pt-2.5 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <Link href="/academics#news" className="text-link text-sm">
              Full story <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-1 rounded-full bg-[#F7F9FC] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#142C55] transition hover:bg-[#FFF6E5] hover:text-[#A96812] md:hidden"
            >
              <span>{toggleLabel}</span>
              <ChevronDown size={14} className={chevronClass} />
            </button>
          </div>
        </article>
      </RevealOnScroll>
    );
  });

  return <div className="mt-9 grid gap-5 md:grid-cols-3">{cards}</div>;
}
