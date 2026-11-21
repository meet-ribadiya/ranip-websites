"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { GalleryPhotoItem } from "@/data/gallery";
import { SITE_IMAGES } from "@/lib/constants";
import ImageLightbox, {
  type LightboxImageItem,
} from "@/components/ui/ImageLightbox";

type AlbumViewerProps = {
  albumTitle: string;
  photos: GalleryPhotoItem[];
};

export default function AlbumViewer({ albumTitle, photos }: AlbumViewerProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedIds, setFailedIds] = useState<Record<string, boolean>>({});

  const total = photos.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const markImageFailed = (id: string) => {
    setFailedIds((prev) => ({ ...prev, [id]: true }));
  };

  const lightboxItems: LightboxImageItem[] = photos.map((photo) => ({
    id: photo.id,
    src: failedIds[photo.id] ? SITE_IMAGES.defaultPageBanner : photo.src,
    alt: photo.alt,
    caption: photo.caption,
  }));

  const photoTiles = photos.map((photo, index) => {
    const resolvedSrc = failedIds[photo.id]
      ? SITE_IMAGES.defaultPageBanner
      : photo.src;
    const isFeaturedTile = index === 0 || index === 7;
    const tileCls = `group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b669] hover:shadow-[0_18px_40px_rgba(16,40,75,0.14)] cursor-pointer text-left ${
      isFeaturedTile ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"
    }`;
    const imgSizes = isFeaturedTile
      ? "(max-width: 640px) 92vw, (max-width: 1024px) 62vw, 46vw"
      : "(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 23vw";
    const handleOpen = () => openLightbox(index);
    const handleError = () => markImageFailed(photo.id);
    const photoNumber = index + 1;

    return (
      <button
        key={photo.id}
        type="button"
        onClick={handleOpen}
        aria-label={`View photo ${photoNumber} of ${total}: ${photo.caption}`}
        className={tileCls}
      >
        <Image
          src={resolvedSrc}
          alt={photo.alt}
          fill
          sizes={imgSizes}
          loading={index < 4 ? "eager" : "lazy"}
          onError={handleError}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-[#08172E]/85 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        <span
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#08172E]/50 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        >
          <Expand size={14} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
          <p className="line-clamp-2 text-xs font-medium leading-5 text-white/95 sm:text-sm">
            {photo.caption}
          </p>
        </div>
      </button>
    );
  });

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {photoTiles}
      </div>

      <ImageLightbox
        title={albumTitle}
        items={lightboxItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}
