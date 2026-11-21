"use client";

import { useEffect, useRef, type TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImageItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  actionHref?: string;
  actionLabel?: string;
};

type ImageLightboxProps = {
  title: string;
  items: LightboxImageItem[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
};

export default function ImageLightbox({
  title,
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: ImageLightboxProps) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchDeltaRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const total = items.length;

  useEffect(() => {
    if (activeIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onChangeIndex((activeIndex - 1 + total) % total);
      }
      if (e.key === "ArrowRight") {
        onChangeIndex((activeIndex + 1) % total);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, total, onClose, onChangeIndex]);

  if (activeIndex === null || total === 0) return null;

  const activeItem = items[activeIndex];
  if (!activeItem) return null;

  const counterText = `${activeIndex + 1} / ${total}`;

  const goPrev = () => onChangeIndex((activeIndex - 1 + total) % total);
  const goNext = () => onChangeIndex((activeIndex + 1) % total);

  const handleStopProp = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    goPrev();
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    goNext();
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    touchDeltaRef.current = { x: 0, y: 0 };
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = e.touches[0];
    if (!start || !touch) return;
    touchDeltaRef.current = {
      x: touch.clientX - start.x,
      y: touch.clientY - start.y,
    };
  };

  const handleTouchEnd = () => {
    const { x, y } = touchDeltaRef.current;
    const isHorizontalSwipe =
      Math.abs(x) > Math.abs(y) * 1.2 && Math.abs(x) > 40;
    if (isHorizontalSwipe) {
      if (x < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartRef.current = null;
    touchDeltaRef.current = { x: 0, y: 0 };
  };

  const actionLinkNode = activeItem.actionHref ? (
    <Link
      href={activeItem.actionHref}
      onClick={onClose}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#E5A23C] px-3.5 py-1.5 text-xs font-bold text-[#10284B] transition hover:bg-[#f5b952]"
    >
      <span>{activeItem.actionLabel ?? "Open Album"}</span>
      <ArrowRight size={13} />
    </Link>
  ) : null;

  const captionNode = activeItem.caption ? (
    <p className="text-center text-sm font-medium text-white/95 sm:text-left">
      {activeItem.caption}
    </p>
  ) : null;

  const thumbButtons = items.map((item, idx) => {
    const isCurrent = idx === activeIndex;
    const thumbCls = `relative h-12 w-16 shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
      isCurrent
        ? "ring-2 ring-[#E5A23C] opacity-100 scale-105"
        : "opacity-45 hover:opacity-85"
    }`;
    const handleJump = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onChangeIndex(idx);
    };
    const label = `Jump to photo ${idx + 1}`;
    return (
      <button
        key={item.id}
        type="button"
        onClick={handleJump}
        aria-label={label}
        className={thumbCls}
      >
        <Image src={item.src} alt="" fill sizes="64px" className="object-cover" />
      </button>
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo preview`}
      className="fixed inset-0 z-[160] flex flex-col bg-[#050C18]/96 backdrop-blur-xl"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slim Top Controls Header */}
      <header
        className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-8 sm:py-4"
        onClick={handleStopProp}
      >
        <div className="min-w-0">
          <p className="truncate font-serif text-sm font-semibold text-white sm:text-base">
            {title}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold tracking-wider text-[#F0B95F]">
          {counterText}
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo preview"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#F0B95F] hover:bg-white/20 hover:text-[#F0B95F]"
        >
          <X size={20} />
        </button>
      </header>

      {/* Unobstructed Full-Viewport Center Stage */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 py-3 sm:px-20 sm:py-6"
        onClick={handleStopProp}
      >
        <button
          type="button"
          onClick={handlePrevClick}
          aria-label="Previous photograph"
          className="absolute left-2 sm:left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B1C35]/85 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-[#F0B95F] hover:text-[#F0B95F]"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="relative h-full w-full max-w-6xl">
          <Image
            key={activeItem.id}
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            sizes="95vw"
            className="object-contain transition-opacity duration-300"
            priority
          />
        </div>

        <button
          type="button"
          onClick={handleNextClick}
          aria-label="Next photograph"
          className="absolute right-2 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B1C35]/85 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-[#F0B95F] hover:text-[#F0B95F]"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Caption, Optional Album Link & Thumbnail Filmstrip */}
      <footer
        className="shrink-0 border-t border-white/10 bg-[#050C18]/90 px-4 py-3 sm:px-8 sm:py-4"
        onClick={handleStopProp}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
          {captionNode}
          {actionLinkNode}
        </div>
        <div className="mx-auto mt-3 flex max-w-4xl items-center gap-2 overflow-x-auto pb-1 sm:justify-center">
          {thumbButtons}
        </div>
      </footer>
    </div>
  );
}
