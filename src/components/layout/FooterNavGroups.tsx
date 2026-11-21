"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterGroup = {
  id: string;
  heading: string;
  links: FooterLinkItem[];
};

const footerGroups: FooterGroup[] = [
  {
    id: "about-ssis",
    heading: "About SSIS",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Vision & Mission", href: "/about-us#our-vision" },
      { label: "Director's & Principal's Messages", href: "/about-us#directors-message" },
      { label: "Faculty & Staff", href: "/about-us#faculty-and-staff" },
    ],
  },
  {
    id: "quick-links",
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Academics", href: "/academics" },
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "explore",
    heading: "Explore",
    links: [
      { label: "Academic Programmes", href: "/academics#courses" },
      { label: "JEE & NEET Coaching", href: "/academics#learning-approach" },
      { label: "School Facilities", href: "/academics#facilities" },
      { label: "Parent's & Student's Corner", href: "/academics#parents-corner" },
      { label: "School News", href: "/academics#news" },
    ],
  },
];

export default function FooterNavGroups() {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  const desktopColumns = footerGroups.map((group) => {
    const items = group.links.map((link) => (
      <li key={link.label}>
        <Link
          href={link.href}
          className="group inline-flex items-center gap-1.5 py-0.5 text-sm text-white/70 transition-colors duration-200 hover:text-[#F0B95F]"
        >
          <ChevronRight
            size={13}
            className="shrink-0 text-[#F0B95F]/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#F0B95F]"
          />
          <span>{link.label}</span>
        </Link>
      </li>
    ));

    return (
      <div key={group.id}>
        <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
          {group.heading}
        </h2>
        <ul className="mt-4 space-y-2">{items}</ul>
      </div>
    );
  });

  const mobileAccordions = footerGroups.map((group) => {
    const isOpen = openGroupId === group.id;
    const toggle = () =>
      setOpenGroupId((prev) => (prev === group.id ? null : group.id));
    const chevronCls = `text-[#F0B95F] transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`;

    const items = group.links.map((link) => (
      <li key={link.label}>
        <Link
          href={link.href}
          className="flex min-h-10 items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#F0B95F]"
        >
          <ChevronRight size={13} className="shrink-0 text-[#F0B95F]/60" />
          <span>{link.label}</span>
        </Link>
      </li>
    ));

    return (
      <div
        key={group.id}
        className="border-b border-white/10 last:border-b-0"
      >
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          className="flex min-h-12 w-full items-center justify-between py-2.5 text-left text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]"
        >
          <span>{group.heading}</span>
          <ChevronDown size={16} className={chevronCls} />
        </button>
        <div className="expand-grid" data-open={isOpen}>
          <div className="expand-grid-inner">
            <ul className="pb-3.5 pl-1 space-y-0.5">{items}</ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {/* Desktop & Tablet (>=768px): 3 clearly organized columns */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-8 lg:col-span-3">
        {desktopColumns}
      </div>

      {/* Mobile (<768px): compact accordion navigation */}
      <div className="rounded-2xl border border-white/10 bg-white/[.03] px-4 py-1 md:hidden">
        {mobileAccordions}
      </div>
    </>
  );
}
