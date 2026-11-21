"use client";

import { useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand } from "lucide-react";
import { LIFE_AT_SSIS_SPOTLIGHT } from "@/lib/constants";
import ImageLightbox, {
  type LightboxImageItem,
} from "@/components/ui/ImageLightbox";

const spotlightImages = LIFE_AT_SSIS_SPOTLIGHT;

const lightboxItems: LightboxImageItem[] = spotlightImages.map((item, idx) => ({
  id: `life-ssis-${idx}`,
  src: item.src,
  alt: item.alt,
  caption: `${item.title} — ${item.subtitle}`,
  actionHref: item.albumHref,
  actionLabel: `Open ${item.category} Album`,
}));

export default function LifeAtSsisGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchDeltaRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const total = spotlightImages.length;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

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
      Math.abs(x) > Math.abs(y) * 1.25 && Math.abs(x) > 40;
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

  const desktopPanels = spotlightImages.map((item, index) => {
    const isActive = index === activeIndex;
    const panelCls = `group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-[#10284B] shadow-[0_20px_50px_rgba(16,40,75,0.12)] cursor-pointer transition-[flex-grow] duration-700 ease-out ${
      isActive ? "flex-[3.6]" : "flex-1"
    }`;
    const imgCls = `object-cover transition-all duration-[1000ms] ease-out ${
      isActive
        ? "scale-100 grayscale-0 brightness-100"
        : "scale-110 grayscale-[45%] brightness-[0.65] group-hover:brightness-[0.8]"
    }`;
    const activeCaptionCls = `absolute inset-x-0 bottom-0 p-7 xl:p-9 transition-all duration-500 ${
      isActive
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`;
    const collapsedLabelCls = `absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
      isActive ? "opacity-0 pointer-events-none" : "opacity-100"
    }`;
    const expandBtnCls = isActive
      ? "absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#08172E]/45 text-white backdrop-blur-md transition hover:scale-105 hover:border-[#F0B95F] hover:text-[#F0B95F]"
      : "hidden";
    const handleSelect = () => setActiveIndex(index);
    const handleExpandClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      openLightbox(index);
    };

    return (
      <div
        key={item.src}
        role="button"
        tabIndex={0}
        aria-label={`View ${item.title}`}
        onMouseEnter={handleSelect}
        onFocus={handleSelect}
        onClick={handleSelect}
        className={panelCls}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 92vw"
          className={imgCls}
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-[#08172E]/90 via-[#08172E]/25 to-transparent"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={handleExpandClick}
          aria-label={`Open full preview of ${item.title}`}
          className={expandBtnCls}
        >
          <Expand size={16} />
        </button>

        <div className={activeCaptionCls}>
          <span className="inline-block rounded-full bg-[#E5A23C] px-3.5 py-1 text-xs font-bold uppercase tracking-[.15em] text-[#10284B]">
            {item.category}
          </span>
          <h3 className="mt-3 font-serif text-3xl font-semibold text-white drop-shadow-md">
            {item.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/85">
            {item.subtitle}
          </p>
          <Link
            href={item.albumHref}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F] transition hover:text-white"
          >
            Open {item.category} Album <ArrowRight size={14} />
          </Link>
        </div>

        <div className={collapsedLabelCls}>
          <span className="-rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[0.26em] text-white/85 drop-shadow">
            {item.category}
          </span>
        </div>
      </div>
    );
  });

  const activeItem = spotlightImages[activeIndex];
  const handleMobileLightboxOpen = () => openLightbox(activeIndex);

  const mobileDotButtons = spotlightImages.map((item, index) => {
    const isCurrent = index === activeIndex;
    const dotCls = `h-2 rounded-full transition-all duration-300 ${
      isCurrent ? "w-8 bg-[#E5A23C]" : "w-2 bg-slate-300 hover:bg-slate-400"
    }`;
    const handleDotClick = () => setActiveIndex(index);
    const label = `Show ${item.title}`;
    return (
      <button
        key={item.src}
        type="button"
        onClick={handleDotClick}
        aria-label={label}
        className={dotCls}
      />
    );
  });

  const mobileThumbnails = spotlightImages.map((item, index) => {
    const isCurrent = index === activeIndex;
    const thumbCls = `relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ${
      isCurrent
        ? "ring-2 ring-[#E5A23C] ring-offset-2 ring-offset-[#F5F7FA] opacity-100 scale-[1.02]"
        : "opacity-60 hover:opacity-90"
    }`;
    const handleThumbClick = () => setActiveIndex(index);
    const label = `Select ${item.category} photo`;
    return (
      <button
        key={item.src}
        type="button"
        onClick={handleThumbClick}
        aria-label={label}
        className={thumbCls}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="25vw"
          className="object-cover"
        />
      </button>
    );
  });

  return (
    <div className="mt-9">
      {/* Desktop (>=1024px): 4-Panel Expanding Editorial Accordion */}
      <div className="hidden lg:flex h-[500px] xl:h-[540px] gap-4">
        {desktopPanels}
      </div>

      {/* Mobile & Tablet (<1024px): Swipeable Featured Card + Thumbnail Strip */}
      <div className="lg:hidden">
        <div
          className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] bg-[#10284B] shadow-[0_18px_40px_rgba(16,40,75,0.14)] touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 680px"
            className="object-cover transition-all duration-500"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#08172E]/95 via-[#08172E]/25 to-transparent"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={handleMobileLightboxOpen}
            aria-label="Open full-screen photo preview"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#08172E]/45 text-white backdrop-blur-md"
          >
            <Expand size={16} />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="inline-block rounded-full bg-[#E5A23C] px-3 py-1 text-[11px] font-bold uppercase tracking-[.15em] text-[#10284B]">
              {activeItem.category}
            </span>
            <h3 className="mt-2.5 font-serif text-2xl font-semibold text-white">
              {activeItem.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-white/80">
              {activeItem.subtitle}
            </p>
            <Link
              href={activeItem.albumHref}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[#F0B95F]"
            >
              Open {activeItem.category} Album <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">{mobileDotButtons}</div>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-slate-400">
            Swipe or tap thumbnails
          </p>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2.5 sm:gap-3">
          {mobileThumbnails}
        </div>
      </div>

      {/* Unified Site-Wide Native-Quality Lightbox */}
      <ImageLightbox
        title="Life at SSIS Ranip"
        items={lightboxItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}
