import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";
import {
  GALLERY_ALBUMS_DATA,
  getAlbumBySlug,
  getAllAlbumSlugs,
} from "@/data/gallery";
import AlbumViewer from "@/components/gallery/AlbumViewer";

type AlbumPageProps = {
  params: Promise<{ albumSlug: string }>;
};

export async function generateStaticParams() {
  return getAllAlbumSlugs().map((albumSlug) => ({ albumSlug }));
}

export async function generateMetadata({
  params,
}: AlbumPageProps): Promise<Metadata> {
  const { albumSlug } = await params;
  const album = getAlbumBySlug(albumSlug);
  if (!album) {
    return {
      title: "Album Not Found",
    };
  }
  return {
    title: `${album.title} — Photo Album`,
    description: album.shortDescription,
  };
}

export default async function AlbumDetailPage({ params }: AlbumPageProps) {
  const { albumSlug } = await params;
  const album = getAlbumBySlug(albumSlug);

  if (!album) {
    notFound();
  }

  const photoCountLabel = `${album.images.length} Photographs`;
  const otherAlbums = GALLERY_ALBUMS_DATA.filter(
    (item) => item.slug !== album.slug
  ).slice(0, 3);

  const relatedAlbumCards = otherAlbums.map((item) => {
    const href = `/gallery/${item.slug}`;
    const countText = `${item.images.length} Photos`;
    return (
      <Link
        key={item.id}
        href={href}
        className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0B1C35] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A23C] hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 92vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-106"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#08172E]/90 via-[#08172E]/25 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#F0B95F]">
              {item.category} · {countText}
            </p>
            <h3 className="mt-1 font-serif text-lg font-semibold text-white">
              {item.title}
            </h3>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      {/* Album Hero Header */}
      <section className="relative overflow-hidden bg-[#10284B] pb-12 pt-28 text-white sm:pb-14 sm:pt-32">
        <Image
          src={album.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3B]/95 via-[#10284B]/85 to-[#10284B]/55" />
        <div
          className="animated-dots absolute inset-0 opacity-15"
          aria-hidden="true"
        />

        <div className="section-container relative">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-white backdrop-blur-md transition hover:border-[#F0B95F] hover:text-[#F0B95F]"
          >
            <ArrowLeft size={15} />
            <span>Back to All Albums</span>
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E5A23C] px-3.5 py-1 text-xs font-bold uppercase tracking-[.14em] text-[#10284B]">
              {album.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90">
              <Images size={13} className="text-[#F0B95F]" />
              <span>{photoCountLabel}</span>
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            {album.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            {album.shortDescription}
          </p>
        </div>
      </section>

      {/* Album Photograph Grid + Interactive Lightbox */}
      <section className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <AlbumViewer albumTitle={album.title} photos={album.images} />
        </div>
      </section>

      {/* Explore More Albums */}
      <section className="bg-white py-14 sm:py-16">
        <div className="section-container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Keep Exploring</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
                More Event <span className="text-[#B87318]">Albums</span>
              </h2>
            </div>
            <Link href="/gallery" className="text-link">
              View All Albums <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {relatedAlbumCards}
          </div>
        </div>
      </section>
    </>
  );
}
