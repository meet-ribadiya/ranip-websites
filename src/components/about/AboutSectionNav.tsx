"use client";

import { useEffect, useState } from "react";

type NavSection = {
  id: string;
  label: string;
};

const sections: NavSection[] = [
  { id: "our-story", label: "Our Story" },
  { id: "our-vision", label: "Vision & Mission" },
  { id: "directors-message", label: "Director's Message" },
  { id: "principals-message", label: "Principal's Message" },
  { id: "faculty-and-staff", label: "Faculty & Staff" },
];

export default function AboutSectionNav() {
  const [activeId, setActiveId] = useState<string>("our-story");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visibleEntries[0]) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = sections.map((sec) => {
    const isActive = activeId === sec.id;
    const href = `#${sec.id}`;
    const linkCls = `shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#10284B] text-white shadow-sm"
        : "text-[#142C55]/80 hover:bg-[#FFF7E8] hover:text-[#A96812]"
    }`;
    const handleClick = () => setActiveId(sec.id);
    const ariaCurrent = isActive ? ("location" as const) : undefined;

    return (
      <a
        key={sec.id}
        href={href}
        onClick={handleClick}
        aria-current={ariaCurrent}
        className={linkCls}
      >
        {sec.label}
      </a>
    );
  });

  return (
    <div
      className="hidden md:block sticky top-16 sm:top-20 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-lg shadow-[0_6px_20px_rgba(16,40,75,0.04)]"
      role="navigation"
      aria-label="About page sections"
    >
      <div className="section-container py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 sm:justify-center">
          {navItems}
        </div>
      </div>
    </div>
  );
}
