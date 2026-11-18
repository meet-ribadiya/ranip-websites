import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  Compass,
  MapPin,
  Play,
  Sparkles,
  Trophy,
} from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  EVENTS_IMPORTANCE,
  GALLERY_ALBUMS,
  GALLERY_IMAGES,
  SCHOOL_EVENTS,
  SPORTS_DATA,
  TOURS_DATA,
  VIDEO_GALLERY,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery, Events, Sports Achievements & Tours",
  description:
    "Explore the photo gallery, video gallery, 26 annual school events, sports championships, Hall of Fame stars, and educational tours at SSIS Ranip.",
};

export default function GalleryPage() {
  const photos = GALLERY_IMAGES.map((photo, index) => (
    <figure
      key={photo.src}
      className={`gallery-card ${
        index === 2 || index === 5 ? "lg:translate-y-6" : ""
      }`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
      />
      <figcaption className="gallery-caption">{photo.category}</figcaption>
    </figure>
  ));

  const albumTags = GALLERY_ALBUMS.map((album) => (
    <span
      key={album}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#142C55] shadow-2xs"
    >
      <Camera size={14} className="text-[#B87318]" />
      {album}
    </span>
  ));

  const videoCards = VIDEO_GALLERY.map((video) => (
    <a
      key={video.id}
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-3xl border border-white/15 bg-white/[.06] p-4 transition hover:-translate-y-1 hover:border-[#F0B95F]"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">
        <div className="absolute inset-0 flex items-center justify-center bg-[#10284B]/60 transition group-hover:bg-[#10284B]/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5A23C] text-[#10284B] shadow-lg transition group-hover:scale-110">
            <Play size={22} fill="currentColor" />
          </span>
        </div>
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-white group-hover:text-[#F0B95F]">
        {video.title}
      </h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
        Watch on YouTube ↗
      </p>
    </a>
  ));

  const importanceCards = EVENTS_IMPORTANCE.map((item) => (
    <article key={item.title} className="feature-card">
      <div className="icon-tile">
        <Sparkles size={22} />
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold text-[#142C55]">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        {item.description}
      </p>
    </article>
  ));

  const eventCards = SCHOOL_EVENTS.map((evt) => (
    <article
      key={evt.name}
      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition hover:border-[#e7c48f] hover:shadow-md"
    >
      <div className="flex items-center gap-2 text-[#B87318]">
        <Calendar size={16} />
        <h3 className="font-serif text-lg font-semibold text-[#142C55]">
          {evt.name}
        </h3>
      </div>
      <p className="mt-2.5 text-sm leading-6 text-slate-600">
        {evt.description}
      </p>
    </article>
  ));

  const sportsFacilityBadges = SPORTS_DATA.facilities.map((fac) => (
    <span
      key={fac}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.08] px-4 py-2 text-xs font-semibold text-[#F0B95F]"
    >
      <Trophy size={14} />
      {fac}
    </span>
  ));

  const achievementItems = SPORTS_DATA.achievements.map((ach) => (
    <li
      key={ach}
      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.05] p-4 text-sm leading-6 text-white/90"
    >
      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F0B95F]" />
      <span>{ach}</span>
    </li>
  ));

  const shiningStarCards = SPORTS_DATA.shiningStars.map((star) => (
    <div
      key={star.name}
      className="flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/[.07] p-5"
    >
      <span className="icon-tile icon-tile-gold shrink-0">
        <Award size={20} />
      </span>
      <div>
        <h4 className="font-serif text-lg font-semibold text-white">
          {star.name}
        </h4>
        <p className="mt-0.5 text-sm font-semibold text-[#F0B95F]">
          {star.sport}
        </p>
        <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
          {star.level}
        </p>
      </div>
    </div>
  ));

  const tourPillarCards = TOURS_DATA.pillars.map((pillar) => (
    <div
      key={pillar.title}
      className="rounded-2xl border border-slate-200 bg-[#F7F9FC] p-5"
    >
      <h4 className="font-serif text-lg font-semibold text-[#142C55]">
        {pillar.title}
      </h4>
      <p className="mt-1.5 text-sm leading-6 text-slate-600">{pillar.text}</p>
    </div>
  ));

  const educationalTripCards = TOURS_DATA.educationalTrips.map((trip) => (
    <article key={trip.place} className="feature-card">
      <div className="flex items-center gap-3">
        <span className="icon-tile shrink-0">
          <Compass size={20} />
        </span>
        <h4 className="font-serif text-xl font-semibold text-[#142C55]">
          {trip.place}
        </h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {trip.description}
      </p>
    </article>
  ));

  const picnicTourCards = TOURS_DATA.picnicsAndTours.map((tour) => (
    <article key={tour.place} className="feature-card">
      <div className="flex items-center gap-3">
        <span className="icon-tile shrink-0">
          <MapPin size={20} />
        </span>
        <h4 className="font-serif text-xl font-semibold text-[#142C55]">
          {tour.place}
        </h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {tour.description}
      </p>
    </article>
  ));

  return (
    <>
      <PageIntro
        eyebrow="Life at SSIS Ranip"
        title="Gallery, Events, Sports & Educational Excursions."
        description="Explore our campus moments, 26 cultural and academic celebrations, state & national sports champions, and educational trips across India."
        image="/banner66-scaled.webp"
        breadcrumb="Gallery & Life"
      />

      {/* Quick Sub-navigation */}
      <div className="border-b border-slate-200 bg-white py-4">
        <div className="section-container flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-semibold text-[#142C55]">
          <a href="#photos" className="hover:text-[#B87318]">
            Photo Gallery & Albums
          </a>
          <span className="text-slate-300">•</span>
          <a href="#videos" className="hover:text-[#B87318]">
            Video Gallery
          </a>
          <span className="text-slate-300">•</span>
          <a href="#events" className="hover:text-[#B87318]">
            26 School Events
          </a>
          <span className="text-slate-300">•</span>
          <a href="#sports" className="hover:text-[#B87318]">
            Sports & Hall of Fame
          </a>
          <span className="text-slate-300">•</span>
          <a href="#tours" className="hover:text-[#B87318]">
            Tours & Excursions
          </a>
        </div>
      </div>

      {/* Section 1: Photo Gallery & Albums */}
      <section id="photos" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <SectionHeading
            eyebrow="Moments from Campus"
            title="Photo Gallery & Celebration Albums"
            description="Glimpses of 15th August, Guru Purnima, Janmashtami, Rathyatra, Sports Day, KG activities, and campus life."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {photos}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-center">
            <p className="eyebrow">All School Albums</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142C55]">
              Celebration & Activity Collections
            </h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {albumTags}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Video Gallery */}
      <section id="videos" className="section-space bg-white">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-12">
            <div
              className="animated-dots absolute inset-0 opacity-20"
              aria-hidden="true"
            />
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E9A53B]/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow eyebrow-light">Video Gallery</p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                    Annual Function & Campus Videos
                  </h2>
                  <p className="mt-2 max-w-xl leading-7 text-white/75">
                    Watch student performances, annual functions, and cultural
                    celebrations on our official YouTube channel.
                  </p>
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

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {videoCards}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: School Events (All 26 Celebrations) */}
      <section id="events" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <SectionHeading
            eyebrow="Why Social Events Matter"
            title="Events & Cultural Celebrations at SSIS"
            description="The interaction and conversation elicited by events help students build relationships, understand different perspectives, and engage with India's rich cultural heritage."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {importanceCards}
          </div>

          <div className="mt-14">
            <h3 className="text-center font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
              26 Annual Events Performed by Our School
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eventCards}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sports & Shining Stars */}
      <section
        id="sports"
        className="relative overflow-hidden bg-[#10284B] py-20 text-white sm:py-24"
      >
        <div
          className="animated-dots absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#E9A53B]/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-light">
              Sports & Physical Excellence
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug sm:text-4xl text-[#F0B95F]">
              {SPORTS_DATA.quote}
            </h2>
            <p className="mt-5 leading-8 text-white/80">{SPORTS_DATA.intro}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {sportsFacilityBadges}
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#F0B95F]">
                Major Sports Championships & Medals
              </h3>
              <ul className="mt-5 space-y-3">{achievementItems}</ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#F0B95F]">
                Stars of SSIS — Hall of Fame
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Students who have made SSIS proud at District, State, National,
                and Khel Mahakumbh levels:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {shiningStarCards}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tours and Excursions */}
      <section id="tours" className="section-space bg-white">
        <div className="section-container">
          <SectionHeading
            eyebrow="Tours & Excursions"
            title={TOURS_DATA.quote}
            description="Taking time to live life will only inspire your work. Every experience holds a gift for your growth and awakening."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {tourPillarCards}
          </div>

          <div className="mt-14">
            <p className="eyebrow">Mobile Classrooms</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
              Educational Trips Planned by Our School
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {educationalTripCards}
            </div>
          </div>

          <div className="mt-14">
            <p className="eyebrow">Joyful Bonding & Exploration</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
              Fun Picnics, Adventure Treks & Outstation Tours
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {picnicTourCards}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
