"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, X } from "lucide-react";
import { VIDEO_GALLERY } from "@/lib/constants";

type VideoItem = (typeof VIDEO_GALLERY)[number];

function extractYouTubeId(url: string, fallbackId: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match?.[1] ?? fallbackId;
}

export default function VideoGallerySection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const closeModal = () => setActiveVideo(null);

  useEffect(() => {
    if (!activeVideo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const videoCards = VIDEO_GALLERY.map((video) => {
    const thumbUrl = video.thumbnail;
    const handleOpen = () => setActiveVideo(video);

    return (
      <button
        key={video.id}
        type="button"
        onClick={handleOpen}
        aria-label={`Play video: ${video.title}`}
        className="group overflow-hidden rounded-3xl border border-white/15 bg-white/[.06] p-3.5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B95F] hover:bg-white/[.1]"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#08162B]">
          <Image
            src={thumbUrl}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 92vw, 31vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#08172E]/80 via-[#08172E]/25 to-transparent transition-opacity duration-300 group-hover:opacity-75"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5A23C] text-[#10284B] shadow-[0_12px_30px_rgba(0,0,0,0.45)] ring-4 ring-white/25 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#f5b952]">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </div>
          <span className="absolute bottom-3 right-3 rounded-full bg-[#08172E]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
            Watch Now
          </span>
        </div>

        <div className="px-1 pt-3.5 pb-1">
          <h3 className="font-serif text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#F0B95F]">
            {video.title}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
            Click to play in preview
          </p>
        </div>
      </button>
    );
  });

  const activeVideoId = activeVideo
    ? extractYouTubeId(activeVideo.url, activeVideo.id)
    : "";
  const embedSrc = activeVideoId
    ? `https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`
    : "";

  const handleStopProp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const videoModal = activeVideo ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeVideo.title}
      className="fixed inset-0 z-[160] flex items-center justify-center bg-[#050C18]/92 p-3 sm:p-6 backdrop-blur-lg"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#0B1C35] shadow-2xl"
        onClick={handleStopProp}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#F0B95F]">
              SSIS Ranip Video Gallery
            </p>
            <h3 className="mt-0.5 truncate font-serif text-lg font-semibold text-white sm:text-xl">
              {activeVideo.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close video player"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#F0B95F] hover:text-[#F0B95F]"
          >
            <X size={20} />
          </button>
        </div>

        {/* 16:9 Privacy-Enhanced YouTube Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedSrc}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full border-0"
          />
        </div>

        {/* Fallback Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 text-xs text-white/70">
          <span>Press Esc or click outside to close</span>
          <a
            href={activeVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#F0B95F] transition hover:text-white"
          >
            <span>Open directly on YouTube</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{videoCards}</div>
      {videoModal}
    </>
  );
}
