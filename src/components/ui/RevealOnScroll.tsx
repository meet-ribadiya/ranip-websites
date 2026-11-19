"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  variant?: "fade-up" | "image";
  delayMs?: number;
  className?: string;
};

export default function RevealOnScroll({
  children,
  variant = "fade-up",
  delayMs = 0,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    if (typeof IntersectionObserver === "undefined") {
      const rafId = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const baseClass =
    variant === "image" ? "scroll-reveal-image" : "scroll-reveal";
  const visibleClass =
    variant === "image"
      ? "scroll-reveal-image-visible"
      : "scroll-reveal-visible";
  const combinedClass = `${baseClass} ${isVisible ? visibleClass : ""} ${className}`.trim();
  const delayStyle =
    delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;

  return (
    <div ref={ref} className={combinedClass} style={delayStyle}>
      {children}
    </div>
  );
}
