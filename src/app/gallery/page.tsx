import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Compass,
  Images,
  Sparkles,
  Trophy,
} from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AlbumShowcase from "@/components/gallery/AlbumShowcase";
import VideoGallerySection from "@/components/gallery/VideoGallerySection";
import {
  GALLERY_ALBUMS_DATA,
  getFeaturedAlbum,
} from "@/data/gallery";
import {
  PAGE_INTROS,
  SPORTS_DATA,
  TOURS_DATA,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "School Gallery & Event Albums",
  description:
    "Browse event-based photo albums, video highlights, sports achievements, and campus memories of Shree Swaminarayan International School, Ranip.",
};

const totalPhotosCount = GALLERY_ALBUMS_DATA.reduce(
  (sum, album) => sum + album.images.length,
  0
);
const totalAlbumsCount = GALLERY_ALBUMS_DATA.length;
const featuredAlbum = getFeaturedAlbum();
const featuredHref = `/gallery/${featuredAlbum.slug}`;
const featuredPhotoCount = `${featuredAlbum.images.length} Photographs`;
const totalStatsLabel = `${totalAlbumsCount} Event Albums · ${totalPhotosCount}+ Photographs`;

export default function GalleryPage() {
  const topStars = SPORTS_DATA.shiningStars.slice(0, 4).map((star) => (
    <div
      key={star.name}
      className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-3.5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-[#B87318]">
        <Award size={17} />
      </span>
      <div className="min-w-0">
        <p className="truncate font-serif text-sm font-semibold text-[#142C55]">
          {star.name}
        </p>
        <p className="truncate text-xs text-slate-500">
          {star.sport} · {star.level}
        </p>
      </div>
    </div>
  ));

  const tripTags = TOURS_DATA.educationalTrips.map((trip) => (
    <span
      key={trip.place}
      className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3.5 py-1.5 text-xs font-semibold text-[#142C55]"
    >
      {trip.place}
    </span>
  ));

  return (
    <>
      <PageIntro
        eyebrow={PAGE_INTROS.gallery.eyebrow}
        title="Moments & Memories of"
        titleHighlight="SSIS Ranip."
        description="Explore our event-based photo albums capturing cultural celebrations, sports spirit, exhibitions, and everyday joy across our 2-acre campus."
        image={PAGE_INTROS.gallery.image}
      />

      {/* Section 1: Event Photo Albums (Carousel + Category Filter + Mirror Cards) */}
      <section id="photos" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <RevealOnScroll>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Event Photo Albums</p>
                <h2 className="section-title mt-2">
                  Browse School{" "}
                  <span className="text-[#B87318]">Memories.</span>
                </h2>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5A23C]/35 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#10284B] shadow-2xs">
                <Images size={15} className="text-[#B87318]" />
                <span>{totalStatsLabel}</span>
              </span>
            </div>
          </RevealOnScroll>

          <div className="mt-8">
            <AlbumShowcase />
          </div>
        </div>
      </section>

      {/* Section 2: Featured Event Album Editorial Spotlight */}
      <section id="events" className="section-space bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFFBF2] p-6 shadow-[0_20px_55px_rgba(16,40,75,0.07)] sm:p-10 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
                {/* Overlapping Physical Album Cover Stack */}
                <Link
                  href={featuredHref}
                  className="group relative mx-auto block w-full max-w-[520px] py-3"
                  aria-label={`Open featured album: ${featuredAlbum.title}`}
                >
                  {/* Back Left Photo */}
                  <div
                    className="pointer-events-none absolute -left-2 top-6 hidden h-[82%] w-[78%] -rotate-6 overflow-hidden rounded-3xl border-2 border-white shadow-lg transition-transform duration-500 group-hover:-rotate-8 sm:block"
                    aria-hidden="true"
                  >
                    <Image
                      src={featuredAlbum.secondaryCovers[0]}
                      alt=""
                      fill
                      sizes="380px"
                      className="object-cover opacity-80"
                    />
                  </div>
                  {/* Back Right Photo */}
                  <div
                    className="pointer-events-none absolute -right-2 top-6 hidden h-[82%] w-[78%] rotate-6 overflow-hidden rounded-3xl border-2 border-white shadow-lg transition-transform duration-500 group-hover:rotate-8 sm:block"
                    aria-hidden="true"
                  >
                    <Image
                      src={featuredAlbum.secondaryCovers[1]}
                      alt=""
                      fill
                      sizes="380px"
                      className="object-cover opacity-80"
                    />
                  </div>

                  {/* Primary Cover Photo */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.75rem] border-4 border-white bg-[#10284B] shadow-[0_24px_55px_rgba(16,40,75,0.2)]">
                    <Image
                      src={featuredAlbum.coverImage}
                      alt={featuredAlbum.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 520px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#08172E]/70 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#10284B] shadow">
                      <Images size={14} className="text-[#B87318]" />
                      <span>{featuredPhotoCount}</span>
                    </span>
                  </div>
                </Link>

                {/* Featured Album Details */}
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7E8] px-3.5 py-1 text-xs font-bold uppercase tracking-[.15em] text-[#A96812]">
                    <Sparkles size={13} />
                    Featured Event Album
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#142C55] sm:text-4xl">
                    {featuredAlbum.title}
                  </h2>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[.16em] text-[#B87318]">
                    {featuredAlbum.eventTag}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {featuredAlbum.shortDescription}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href={featuredHref} className="btn-primary">
                      Open Featured Album <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3: Video Gallery */}
      <section id="videos" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1E3B] via-[#10284B] to-[#0D2140] p-6 text-white shadow-[0_24px_60px_rgba(16,40,75,0.2)] sm:p-10 lg:p-12">
              <div
                className="animated-dots absolute inset-0 opacity-20"
                aria-hidden="true"
              />
              <div
                className="ambient-orb-gold pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E9A53B] blur-3xl"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="eyebrow eyebrow-light">Video Gallery</p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                      Annual Function &{" "}
                      <span className="text-[#F0B95F]">Campus Videos</span>
                    </h2>
                  </div>
                  <a
                    href="https://www.youtube.com/c/ssisranip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-fit"
                  >
                    Visit Our YouTube Channel <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <VideoGallerySection />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 4: Compact Sports & Excursions Highlights */}
      <section
        id="campus-highlights"
        className="section-space bg-white"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Beyond the Classroom"
              title="Sports Stars &"
              titleHighlight="Educational Excursions"
              description="Celebrating Khel Mahakumbh champions and hands-on learning journeys across Gujarat and India."
            />
          </RevealOnScroll>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Sports Spotlight Card */}
            <RevealOnScroll className="h-full">
              <div
                id="sports"
                className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_32px_rgba(16,40,75,0.05)] sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="icon-tile">
                      <Trophy size={21} />
                    </span>
                    <div>
                      <p className="eyebrow">Hall of Fame</p>
                      <h3 className="font-serif text-2xl font-semibold text-[#142C55]">
                        Shining Stars in Sports
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    12 medals at the Goa Skating Festival (selected for
                    Malaysia), District Karate medals, and Taluka Inter-School
                    champions in Volleyball, Kho-Kho, Kabaddi & Tug of War.
                  </p>
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {topStars}
                  </div>
                </div>
                <Link
                  href="/gallery/sports-day"
                  className="text-link mt-6"
                >
                  Open Sports Day Album <ArrowRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>

            {/* Educational Trips Spotlight Card */}
            <RevealOnScroll delayMs={100} className="h-full">
              <div
                id="tours"
                className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_32px_rgba(16,40,75,0.05)] sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="icon-tile">
                      <Compass size={21} />
                    </span>
                    <div>
                      <p className="eyebrow">Tours & Excursions</p>
                      <h3 className="font-serif text-2xl font-semibold text-[#142C55]">
                        Educational Trips & Picnics
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    “I hear and I forget, I see and I remember, I do and I
                    understand.” Students explore space science, print media,
                    heritage stepwells, nature parks, Polo Forest, Goa, Jodhpur
                    & Jaisalmer.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">{tripTags}</div>
                </div>
                <Link
                  href="/gallery/academic-exhibitions"
                  className="text-link mt-6"
                >
                  Open Exhibitions & Activities Album <ArrowRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
