"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
  Sparkles,
} from "lucide-react";
import {
  GALLERY_ALBUMS_DATA,
  GALLERY_CATEGORIES,
  type GalleryAlbum,
  type GalleryCategory,
} from "@/data/gallery";

const DESKTOP_PAGE_SIZE = 3;

function renderPremiumAlbumCard(album: GalleryAlbum) {
  const albumHref = `/gallery/${album.slug}`;
  const photoCountLabel = `${album.images.length} Photos`;
  const previewThumbs = album.images.slice(0, 3);
  const extraCount = Math.max(0, album.images.length - 3);
  const extraLabel = `+${extraCount} more`;

  const miniStrip = previewThumbs.map((photo) => (
    <div
      key={photo.id}
      className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/25 bg-[#08162B]"
    >
      <Image
        src={photo.src}
        alt=""
        fill
        sizes="40px"
        className="object-cover"
      />
    </div>
  ));

  return (
    <Link
      key={album.id}
      href={albumHref}
      className="group relative block pt-5 focus:outline-none"
      aria-label={`Explore ${album.title} (${photoCountLabel})`}
    >
      {/* Overlapping fanned background photographs */}
      <div
        className="pointer-events-none absolute left-4 right-10 top-1 h-28 -rotate-3 overflow-hidden rounded-2xl border-2 border-white bg-[#10284B] shadow-md transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-6"
        aria-hidden="true"
      >
        <Image
          src={album.secondaryCovers[0]}
          alt=""
          fill
          sizes="320px"
          className="object-cover opacity-85"
        />
      </div>
      <div
        className="pointer-events-none absolute left-10 right-4 top-2 h-28 rotate-3 overflow-hidden rounded-2xl border-2 border-white bg-[#10284B] shadow-md transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-6"
        aria-hidden="true"
      >
        <Image
          src={album.secondaryCovers[1]}
          alt=""
          fill
          sizes="320px"
          className="object-cover opacity-90"
        />
      </div>

      {/* Primary Album Cover Card */}
      <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_18px_45px_rgba(16,40,75,0.12)] transition-all duration-400 group-hover:-translate-y-1.5 group-hover:border-[#E5A23C] group-hover:shadow-[0_26px_55px_rgba(16,40,75,0.18)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B1C35]">
          <Image
            src={album.coverImage}
            alt={album.title}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#08172E]/85 via-[#08172E]/15 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between gap-2">
            <span className="rounded-full border border-white/20 bg-[#0B1C35]/75 px-3 py-1 text-[11px] font-bold uppercase tracking-[.14em] text-[#F0B95F] backdrop-blur-md">
              {album.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#10284B] shadow-sm">
              <Images size={13} className="text-[#B87318]" />
              <span>{photoCountLabel}</span>
            </span>
          </div>

          <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">{miniStrip}</div>
            <span className="rounded-full border border-white/25 bg-[#0B1C35]/75 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
              {extraLabel}
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#A96812]">
            {album.eventTag}
          </p>
          <h3 className="mt-1.5 font-serif text-xl font-semibold leading-snug text-[#142C55] transition-colors group-hover:text-[#0F2D6E]">
            {album.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
            {album.shortDescription}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.14em] text-[#10284B] transition-colors group-hover:text-[#B87318]">
              <span>Explore Album</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {photoCountLabel}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function AlbumShowcase() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>("All");
  const [desktopPage, setDesktopPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredAlbums: GalleryAlbum[] =
    selectedCategory === "All"
      ? GALLERY_ALBUMS_DATA
      : GALLERY_ALBUMS_DATA.filter((a) => a.category === selectedCategory);

  const totalFiltered = filteredAlbums.length;
  const totalDesktopPages = Math.max(
    1,
    Math.ceil(totalFiltered / DESKTOP_PAGE_SIZE)
  );
  const safeDesktopPage = Math.min(desktopPage, totalDesktopPages - 1);

  const visibleDesktopAlbums = filteredAlbums.slice(
    safeDesktopPage * DESKTOP_PAGE_SIZE,
    safeDesktopPage * DESKTOP_PAGE_SIZE + DESKTOP_PAGE_SIZE
  );

  // Desktop gentle auto-advance across complete 3-card pages
  useEffect(() => {
    if (isPaused || totalDesktopPages <= 1) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setDesktopPage((prev) => (prev + 1) % totalDesktopPages);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused, totalDesktopPages]);

  const handleDesktopPrev = () => {
    setDesktopPage(
      (prev) => (prev - 1 + totalDesktopPages) % totalDesktopPages
    );
  };
  const handleDesktopNext = () => {
    setDesktopPage((prev) => (prev + 1) % totalDesktopPages);
  };
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  const filterButtons = GALLERY_CATEGORIES.map((category) => {
    const isActive = selectedCategory === category;
    const btnCls = `shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#10284B] text-white shadow-sm"
        : "border border-slate-200 bg-white text-[#142C55] hover:border-[#E5A23C] hover:bg-[#FFFBF4] hover:text-[#A96812]"
    }`;
    const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
      setSelectedCategory(category);
      setDesktopPage(0);
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    };
    return (
      <button
        key={category}
        type="button"
        onClick={handleSelect}
        aria-pressed={isActive}
        className={btnCls}
      >
        {category}
      </button>
    );
  });

  const desktopCards = visibleDesktopAlbums.map((album) =>
    renderPremiumAlbumCard(album)
  );

  const tabletCards = filteredAlbums.map((album) =>
    renderPremiumAlbumCard(album)
  );

  // Mobile (<768px): clean vertical stack of all albums (no filters, no horizontal slider)
  const mobileStackCards = GALLERY_ALBUMS_DATA.map((album) =>
    renderPremiumAlbumCard(album)
  );

  const desktopPageDots = Array.from({ length: totalDesktopPages }).map(
    (_, idx) => {
      const isCurrent = idx === safeDesktopPage;
      const dotCls = `h-2.5 rounded-full transition-all duration-300 ${
        isCurrent ? "w-8 bg-[#E5A23C]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
      }`;
      const handleDot = () => setDesktopPage(idx);
      const label = `Show album page ${idx + 1}`;
      return (
        <button
          key={idx}
          type="button"
          onClick={handleDot}
          aria-label={label}
          className={dotCls}
        />
      );
    }
  );

  const desktopControls =
    totalDesktopPages > 1 ? (
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">{desktopPageDots}</div>
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold uppercase tracking-[.14em] text-slate-400">
            Page {safeDesktopPage + 1} of {totalDesktopPages}
          </span>
          <button
            type="button"
            onClick={handleDesktopPrev}
            aria-label="Previous albums page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#10284B] shadow-2xs transition hover:border-[#E5A23C] hover:bg-[#FFFBF4] hover:text-[#A96812]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleDesktopNext}
            aria-label="Next albums page"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10284B] text-[#F0B95F] shadow-sm transition hover:bg-[#1a3c6e]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    ) : null;

  return (
    <div className="w-full min-w-0">
      {/* Category Filter Row — Desktop & Tablet only (hidden on mobile) */}
      <div className="hidden md:flex md:items-center md:justify-between md:gap-4">
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter albums by category"
        >
          {filterButtons}
        </div>
        <div className="hidden shrink-0 items-center gap-1.5 text-xs font-semibold text-slate-500 lg:inline-flex">
          <Sparkles size={14} className="text-[#B87318]" />
          <span>{totalFiltered} Event Albums Available</span>
        </div>
      </div>

      {/* Desktop (>=1024px): Complete 3-Card Paged Carousel */}
      <div
        className="mt-6 hidden lg:block"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
      >
        <div className="grid grid-cols-3 gap-7">{desktopCards}</div>
        {desktopControls}
      </div>

      {/* Tablet (768px - 1023px): Clean 2-Column Grid */}
      <div className="mt-6 hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
        {tabletCards}
      </div>

      {/* Mobile (<768px): Clean Vertical Stack of All Albums (no filter bar, no slider) */}
      <div className="grid grid-cols-1 gap-7 md:hidden">
        {mobileStackCards}
      </div>
    </div>
  );
}
