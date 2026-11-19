"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type MobileExpandableProps = {
  preview?: ReactNode;
  children: ReactNode;
  labelMore?: string;
  labelLess?: string;
  variant?: "light" | "dark";
  buttonClassName?: string;
};

export default function MobileExpandable({
  preview,
  children,
  labelMore = "Read More",
  labelLess = "Read Less",
  variant = "light",
  buttonClassName = "",
}: MobileExpandableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded((prev) => !prev);
  const labelText = isExpanded ? labelLess : labelMore;
  const chevronCls = `transition-transform duration-300 ${
    isExpanded ? "rotate-180" : ""
  }`;
  const variantBtnCls =
    variant === "dark"
      ? "border border-[#F0B95F]/40 bg-white/[.08] text-[#F0B95F] hover:bg-white/[.14]"
      : "border border-slate-200 bg-[#F7F9FC] text-[#142C55] hover:border-[#E5A23C] hover:bg-[#FFF7E8] hover:text-[#A96812]";
  const combinedBtnCls = `mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.12em] transition-colors ${variantBtnCls} ${buttonClassName}`.trim();

  return (
    <div>
      {preview}

      {/* Desktop (md+): always visible in full */}
      <div className="hidden md:block">{children}</div>

      {/* Mobile (<md): smoothly expandable */}
      <div className="md:hidden">
        <div className="expand-grid" data-open={isExpanded}>
          <div className="expand-grid-inner">{children}</div>
        </div>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isExpanded}
          className={combinedBtnCls}
        >
          <span>{labelText}</span>
          <ChevronDown size={14} className={chevronCls} />
        </button>
      </div>
    </div>
  );
}
