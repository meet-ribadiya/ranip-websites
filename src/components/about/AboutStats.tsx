"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Landmark, MapPin, Users } from "lucide-react";
import { ABOUT_STATS } from "@/lib/constants";

const statsConfig = ABOUT_STATS;
type StatIconKey = (typeof ABOUT_STATS)[number]["iconKey"];

function formatStatValue(value: number, useComma: boolean, suffix: string) {
  const formatted = useComma ? value.toLocaleString("en-IN") : String(value);
  return `${formatted}${suffix}`;
}

function renderStatIcon(iconKey: StatIconKey) {
  if (iconKey === "calendar") return <Calendar size={20} />;
  if (iconKey === "landmark") return <Landmark size={20} />;
  if (iconKey === "users") return <Users size={20} />;
  return <MapPin size={20} />;
}

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValues, setDisplayValues] = useState<number[]>(
    statsConfig.map((s) => s.target)
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      return;
    }

    let rafId = 0;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const durationMs = 1350;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Smooth easeOutQuart curve
        const eased = 1 - Math.pow(1 - progress, 4);

        const nextValues = statsConfig.map((stat) =>
          Math.round(stat.target * eased)
        );
        setDisplayValues(nextValues);

        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        }
      };

      rafId = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          startAnimation();
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const cards = statsConfig.map((stat, idx) => {
    const formatted = formatStatValue(
      displayValues[idx] ?? stat.target,
      stat.useComma,
      stat.suffix
    );
    const iconNode = renderStatIcon(stat.iconKey);

    return (
      <div
        key={stat.id}
        className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 text-center shadow-[0_10px_30px_rgba(16,40,75,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_20px_42px_rgba(16,40,75,0.1)] sm:p-6"
      >
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-[#F0B95F] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF6E5] text-[#B87318] transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
          {iconNode}
        </span>
        <p className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#10284B] sm:text-4xl">
          {formatted}
        </p>
        <p className="mt-1.5 text-xs font-bold uppercase tracking-[.15em] text-[#A96812]">
          {stat.label}
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{stat.sub}</p>
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4"
    >
      {cards}
    </div>
  );
}
